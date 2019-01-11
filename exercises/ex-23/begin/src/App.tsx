import * as React from 'react';
import Navbar from './Navbar';

import './css/local.css';
import { Provider } from 'react-redux';
import PayeesContainer from './payees/PayeesContainer';
import { store } from './create-store';

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