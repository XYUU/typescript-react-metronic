import { Store, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga-ie8'
import sagas from '../sagas'
import { logger } from '../middleware';
import rootReducer from '../reducers';
import { RootState } from '../models/RootState';

export function configureStore(initialState?: RootState): Store<RootState> {
    const sagaMiddleware = createSagaMiddleware()
    let middleware = applyMiddleware(sagaMiddleware, logger);
    if (process.env.NODE_ENV !== 'production') {
        middleware = composeWithDevTools(middleware);
    }
    const store = createStore(rootReducer, initialState, middleware);
    // @types/webpack-env
    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers');
            store.replaceReducer(nextReducer);
        });
    }
    // then run the saga
    sagaMiddleware.run(sagas);
    return store;
}
