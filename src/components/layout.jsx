import React from 'react';
import { Link } from 'gatsby';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
  }

  body {
    min-height: 100%;
    ${'' /* border: 20px solid ${props => props.theme.accent}; */}
    padding: 10vw;
    background: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 600px) {
        padding:1rem;
    }
  }

  a{
    color: ${props => props.theme.action};
  }

  /* apply a natural box layout model to all elements, but allowing components to change */
  html {
      box-sizing: border-box;
  }

  *, *:before, *:after {
      box-sizing: inherit;
  }
`;

const theme = {
    background: '#172B4D',
    foreground: 'white',
    accent: '#172B4D',
    action: '#FFAB00',
};

const Layout = ({ location, title, children }) => {
    // eslint-disable-next-line no-undef
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
        header = (
            <h1
                css={`
                    font-family: 'Lora', serif;
                    font-weight: bold;
                    margin-top: 0;
                    margin-bottom: 2rem;
                    font-size: 5rem;
                    color: ${props => props.theme.action};
                `}
            >
                <Link
                    css="
                        box-shadow: none;
                        text-decoration: none;
                        color: inherit;
                    "
                    to="/"
                >
                    {title}
                </Link>
            </h1>
        );
    } else {
        header = (
            <h3
                css="
                    font-family: 'Lora', serif;
                    margin-top: 0;
                "
            >
                <Link
                    css="
                        box-shadow: none;
                        text-decoration: none;
                        color: inherit;
                    "
                    to="/"
                >
                    {title}
                </Link>
            </h3>
        );
    }
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Normalize />
                <div
                    css="
                        margin-left: auto;
                        margin-right: auto;
                    "
                >
                    <header>{header}</header>
                    <main>{children}</main>
                    <footer>
                        © {new Date().getFullYear()}, Built in Amsterdam 🚲
                    </footer>
                </div>
            </>
        </ThemeProvider>
    );
};

export default Layout;
