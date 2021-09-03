import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(ReduxThunk, loggerMiddleware)
)(createStore);

const reducer = combineReducers({});

// Function to pass in initial state via initialization of Redux's store
const configureStore = (initialState) =>
  createStoreWithMiddleware(reducer, initialState);

export default configureStore;
