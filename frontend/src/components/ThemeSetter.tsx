import React, { ReactElement } from "react";
import { CssBaseline, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";

import { grey } from '@mui/material/colors';

// CSS Resets
import '../styles/resets.css';

// Import fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const DARK_THEME = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: grey[50],
            secondary: grey[100],
        },
    },
});

const LIGHT_THEME = createTheme({
    palette: {
        mode: 'light',
        text: {
            primary: grey[900],
            secondary: grey[800],
        },
    },
});

interface Props {
    children: ReactElement;
}
const ThemeSetter = ({ children }: Props): JSX.Element => {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    return (
        <ThemeProvider theme={prefersDarkMode ? DARK_THEME : LIGHT_THEME}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};

export default ThemeSetter;
