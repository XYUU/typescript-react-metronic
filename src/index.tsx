import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { Router } from '@reach/router';
import App from './demo/default/App';
import { Login } from './snippets/pages/Login';
import { Lottery } from './snippets/pages/Lottery';

const root = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App default />
            <Login path="login" />
            <Lottery path="lottery" />
        </Router>
    </Provider>
    , root);
