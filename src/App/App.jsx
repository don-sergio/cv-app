import React from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CvApp from '../CvApp/CvApp.jsx';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#6b737e',
            main: '#404852',
            dark: '#19212a',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#a9dd7c',
            main: '#78ab4e',
            dark: '#497b21',
            contrastText: '#000000',
        }
    }
});

const App = (props) => {
    return (
        <MuiThemeProvider theme={theme}>
            <CvApp />
        </MuiThemeProvider>
    )
}

export default App;