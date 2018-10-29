import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { Router } from '@reach/router';
import App from './containers/default';
import { Login } from './containers/login';
import './scss/demo/default/style.scss';
import { Lottery } from './containers/lottery/Lottery';

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
