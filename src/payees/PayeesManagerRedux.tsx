import React, { Component } from 'react';
import PayeeSearch from './PayeeSearch';
import PayeesListRedux from './PayeesListRedux';
import PayeeSearchRedux from './PayeeSearchRedux';

export default class PayeesManagerRedux extends Component {
  render() {
    return (
      <div>
        <h2>Payee Manager</h2>
        <PayeeSearchRedux />
        <PayeesListRedux />
      </div>
    )
  }
}
