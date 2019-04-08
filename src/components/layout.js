import React from "react";
import { Link } from "gatsby";
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
  }

  body {
      min-height: 100%;
      border: 20px solid black;
      padding: 10vw;
  }

  /* apply a natural box layout model to all elements, but allowing components to change */
  html {
      box-sizing: border-box;
  }

  *, *:before, *:after {
      box-sizing: inherit;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            fontFamily: `'Lora',-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif`,
            fontWeight: 'bold',
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `'Lora',-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif`,
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <>
        <GlobalStyle />
        <Normalize />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built in Amsterdam 🚲
          </footer>
        </div>
      </>
    );
  }
}

export default Layout;
