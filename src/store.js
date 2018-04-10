import thunk from 'redux-thunk';
import {createLogger as logger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import {composeWithDevTools} from 'remote-redux-devtools';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

// let composeEnhancers = composeWithDevTools({
//     realtime: true,
//     name: 'Redux',
//     host: '127.0.0.1',
//     port: 2709, // the port your remotedev server is running at
// });

/* eslint-enable */

const enhancer = composeEnhancers(applyMiddleware(promise(), thunk, logger()));
const configureStore = preloadedState =>  createStore(rootReducer, preloadedState, enhancer);

export default configureStore;