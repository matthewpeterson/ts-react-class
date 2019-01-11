import * as React from 'react';
import { createStore } from 'redux';

import Navbar from './Navbar';
import payeeApp from './payees/payee-reducers';
import PayeesContainerRedux from './payees/PayeesContainerRedux';

import './css/local.css';

const store = createStore(
  payeeApp,
  // tslint:disable-next-line
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()
);

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Navbar/>
        <PayeesContainerRedux store={store}/>
      </section>
    );
  }
}