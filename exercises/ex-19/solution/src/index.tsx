import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import payeeApp from './payees/payee-reducers';

const store = createStore( payeeApp );



ReactDOM.render(
  <Provider store={ store }>

    <App/>
  </Provider>,
  document.getElementById( 'root' )
);