import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';

import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware()
const store = composeWithDevTools(
    applyMiddleware(sagaMiddleware),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;