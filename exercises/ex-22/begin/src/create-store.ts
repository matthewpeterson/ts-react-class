import { createStore } from 'redux';
import payeeApp from './payees/payee-reducers';

export const store = createStore(
  payeeApp,
  // tslint:disable-next-line
  window[ '__REDUX_DEVTOOLS_EXTENSION__' ] && window[ '__REDUX_DEVTOOLS_EXTENSION__' ]()
);


