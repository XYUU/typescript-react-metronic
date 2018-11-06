import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './admin/default/App';

const root = document.getElementById('root');
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App default path="app" />
    </Provider>
    , root);
