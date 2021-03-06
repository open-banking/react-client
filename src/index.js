import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});

ReactDOM.render(
(   
    <HashRouter>
        <MuiThemeProvider theme={theme}>
            <CookiesProvider>
                <App/>
            </CookiesProvider>    
        </MuiThemeProvider>
    </HashRouter>
),
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
