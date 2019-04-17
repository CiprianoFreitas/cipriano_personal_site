import React from 'react';

const ThemeSwitcher = ({ currentTheme, onSwitched }) => {
    const theme = Object.assign({}, currentTheme);
    return (
        <div>
            <br />
            <input
                type="text"
                placeholder="background"
                onChange={evt => {
                    theme.background = evt.target.value;
                    if (onSwitched) onSwitched(theme);
                }}
            />
            <br />
            <input
                type="text"
                placeholder="foreground"
                onChange={evt => {
                    theme.foreground = evt.target.value;
                    if (onSwitched) onSwitched(theme);
                }}
            />
            <br />
            <input
                type="text"
                placeholder="accent"
                onChange={evt => {
                    theme.accent = evt.target.value;
                    if (onSwitched) onSwitched(theme);
                }}
            />
            <br />
            <input
                type="text"
                placeholder="action"
                onChange={evt => {
                    theme.action = evt.target.value;
                    if (onSwitched) onSwitched(theme);
                }}
            />
            <br />
        </div>
    );
};

export default ThemeSwitcher;
