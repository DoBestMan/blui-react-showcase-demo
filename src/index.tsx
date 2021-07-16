import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import './index.css';
import { MainRouter } from './router';
import { store } from './redux/store';
import { RTLThemeProvider } from './components/RTLProvider';
import '@pxblue/react-themes/open-sans';

// eslint-disable-arrow-body-style

ReactDOM.render(
    <Provider store={store}>
        <RTLThemeProvider>
            <CssBaseline />
            <MainRouter />
        </RTLThemeProvider>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
