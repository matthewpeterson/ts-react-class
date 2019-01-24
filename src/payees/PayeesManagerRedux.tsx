import React, { Component } from 'react';
import PayeeSearch from './PayeeSearch';
import PayeesListRedux from './PayeesListRedux';
import PayeeSearchRedux from './PayeeSearchRedux';
import {Route} from 'react-router-dom';
import PayeeDetailRedux from './PayeeDetailRedux';

export default class PayeesManagerRedux extends Component {
  render() {
    return (
      <div>
        <h2>Payee Manager</h2>
        <Route path='/payees/' exact render={()=>(
            <React.Fragment>
                <PayeeSearchRedux />
                <PayeesListRedux />
            </React.Fragment>
        )} />

        <Route path="/payees/:id/detail" render={(props) => (

            <React.Fragment>
                <PayeeDetailRedux payeeId={props.match.params.id}/>
                <button onClick={() => props.history.goBack()} className="btn btn-danger">Back</button>
                <button onClick={() => props.history.push("/payees")} className="btn btn-info">Go to List</button>
            </React.Fragment>

            
        )}/>

      </div>
    )
  }
}
