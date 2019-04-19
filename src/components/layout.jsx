import React, { useState } from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ThemeSwitcher from './ThemeSwitcher';

const GlobalStyle = createGlobalStyle`
  html {
      height: 100%;
  }

  body {
    min-height: 100%;
    border: 20px solid ${props => props.theme.action};
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
    font-family: 'Open Sans', sans-serif;
  }

  a {
    color: ${props => props.theme.action};
    text-decoration:none;
    transition: border-width 0.1s ease-in-out;
    &:hover {
        border-bottom: 3px solid ${props => props.theme.action};
    }
  }

  /* apply a natural box layout model to all elements, but allowing components to change */
  html {
      box-sizing: border-box;
  }

  h1, h2, h3 {
    font-family: 'Lora', serif;
  }

  *, *:before, *:after {
      box-sizing: inherit;
  }
`;

const initialTheme = {
    background: '#E5E5E5',
    foreground: '#263238',
    accent: '#172B4D',
    action: '#263238',
};

const Layout = ({ children }) => {
    let isThemeSwitcherEnabled = false;
    // eslint-disable-next-line no-undef
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line no-undef
        const params = new URLSearchParams(window.location.search);
        isThemeSwitcherEnabled = params.get('bacon') === '1';
    }

    const [theme, setTheme] = useState(initialTheme);

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
                    {isThemeSwitcherEnabled ? (
                        <ThemeSwitcher
                            currentTheme={theme}
                            onSwitched={setTheme}
                        />
                    ) : null}
                </div>
            </>
        </ThemeProvider>
    );
};

export default Layout;
