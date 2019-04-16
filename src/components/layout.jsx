import React from 'react';
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
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
    font-family: 'Open Sans', sans-serif;

    @media (max-width: 600px) {
        padding:1rem;
    }
  }

  a{
    color: ${props => props.theme.action};
    text-decoration:none;
    &:hover {
        border-bottom: 3px solid ${props => props.theme.action};
    }
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

const Layout = ({ children }) => {
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
                    {children}
                    <footer>
                        © {new Date().getFullYear()}, Built in Amsterdam 🚲
                    </footer>
                </div>
            </>
        </ThemeProvider>
    );
};

export default Layout;
