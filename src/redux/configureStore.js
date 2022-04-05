import {combineReducers , createStore , applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import staffReducer from '../reducers/index'
import { watcherSaga } from '../sagas/rootSaga'; 

const reducer = combineReducers({
  staffUpdate : staffReducer  
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer ,{} , applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga)


export default store;