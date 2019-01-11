import * as React from 'react';
import { createStore } from 'redux';

import Navbar from './Navbar';
import payeeApp from './payees/payee-reducers';

import './css/local.css';
import { Provider } from 'react-redux';
import PayeesContainer from './payees/PayeesContainer';

const store = createStore(
  payeeApp,
  // tslint:disable-next-line
  window[ '__REDUX_DEVTOOLS_EXTENSION__' ] && window[ '__REDUX_DEVTOOLS_EXTENSION__' ]()
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <section>
          <Navbar/>
          <PayeesContainer/>
        </section>
      </Provider>
    );
  }
}