import {createStore,applyMiddleware} from 'redux';
import {payeesReducer} from './payees/payees-reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { fetchPayees } from './payees/payees-actions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(
    payeesReducer,
    composeWithDevTools(applyMiddleware(thunk)));

//@ts-ignore
store.dispatch(fetchPayees());

export default store;