import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import payeeApp, { payeeReducers } from './payees/payee-reducers';
import { fetchPayees } from './payees/payee-actions';

import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

export const history = createHistory();
const rMiddleware = routerMiddleware( history );

// tslint:disable-next-line
const composeEnhancers = window[ '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' ] || compose;

/*
 combineReducers( {
 ...payeeApp,
 router: routerReducer
 } ),
 */

export const store = createStore( combineReducers( {
                                                     ...payeeReducers,
                                                     router: routerReducer
                                                   } ),
                                  composeEnhancers(
                                    applyMiddleware( thunkMiddleware,
                                                     rMiddleware )
                                  )
);

store.dispatch( fetchPayees() );
