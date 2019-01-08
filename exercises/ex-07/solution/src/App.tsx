import * as React from 'react';

import './css/local.css';

import { payeesDAO } from './data/class-data';
import PayeeDetail from './payees/PayeeDetail';
import Payee from './data/Payee';

export default class App extends React.Component {
  payee: Payee;

  constructor( props: any ) {
    super( props );

    const result = payeesDAO.get( 23 );
    if (result) {
      this.payee = result;
    } else {
      throw new Error( 'Payee #23 not found' );
    }
  }

  render() {
    return (
      <section>
        <PayeeDetail payee={ this.payee }/>
      </section>
    );
  }
}