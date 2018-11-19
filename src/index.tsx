import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './admin/default/App';
import Login from './snippets/pages/Login';

const root = document.getElementById('root'),
    store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , root);