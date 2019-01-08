import * as React from 'react';

import './css/local.css';

import PayeesContainer from './payees/PayeesContainer';
import Navbar from './Navbar';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Navbar/>
        <PayeesContainer/>
      </section>
    );
  }
}