import * as React from 'react';

import PayeeBrowser from './PayeeBrowser';
import PayeeList from './PayeeList';
import { connect } from 'react-redux';
import { PayeeReducerState } from './payee-reducers';
import { Route } from 'react-router';

export default class PayeesContainer extends React.Component {
  render() {
    return (
      <section>
        <Route exact path="/payees/" component={PayeeList}/>
        <Route path="/payees/detail/:payeeId" component={PayeeBrowser}/>
      </section>
    );
  }
}
