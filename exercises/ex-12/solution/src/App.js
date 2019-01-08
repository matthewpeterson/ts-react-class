import * as React from 'react';

import './css/local.css';

import PayeesContainer from './payees/PayeesContainer';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <PayeesContainer/>
      </section>
    );
  }
}