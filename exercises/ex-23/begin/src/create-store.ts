import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import payeeApp from './payees/payee-reducers';
import { fetchPayees } from './payees/payee-actions';

// tslint:disable-next-line
const composeEnhancers = window[ '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' ] || compose;

export const store = createStore(
  payeeApp,
  composeEnhancers(
    applyMiddleware( thunkMiddleware )
  )
);

store.dispatch( fetchPayees() );
