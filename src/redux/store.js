import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import recordsReducer from './reducers/recordsReducer';
import userReducer from './reducers/userReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    records: recordsReducer,
    user: userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
