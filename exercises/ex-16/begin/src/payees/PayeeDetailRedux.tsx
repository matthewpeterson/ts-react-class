import * as React from 'react';

import { payeesDAO } from '../data/class-data';
import Payee from '../data/Payee';
import { ActionCreator, AnyAction } from 'redux';

// Add action here
const toggleActive: ActionCreator<AnyAction> = (): AnyAction => {
  return {
    type: 'TOGGLE_PAYEE_ACTIVE'
  };
};

// Add reducer here

interface PayeeDetailReduxState {
  payee: Payee;
}

class PayeeDetailRedux extends React.Component<any, PayeeDetailReduxState> {
  constructor( props: any ) {
    super( props );
    const result = payeesDAO.get( 23 );
    if ( !result ) {
      throw new Error( 'Could not get payee #23' );
    }

    this.state = {
      payee: result
    };
  }

  toggleActive = () => {
    const copyOfPayee: Payee = { ...this.state.payee } as Payee;
    copyOfPayee.active = !copyOfPayee.active;
    this.setState( { payee: copyOfPayee } );
  };

  render() {
    let classes = 'panel ';
    if ( this.state.payee.category ) {

      switch ( this.state.payee.category.categoryName ) {
        case 'Salary':
        case 'Other Income':
        case 'Interest':
          classes += 'panel-success';
          break;
        case 'Clothing':
        case 'Housing':
        case 'Food':
          classes += 'panel-danger';
          break;
        default:
          classes += 'panel-info';
          break;
      }

    }

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div className={ classes }>
            <div className="panel-heading">{ this.state.payee.payeeName }</div>
            <ul className="list-group">
              <li className="list-group-item">{ this.state.payee.payeeName }</li>
              <li className="list-group-item">{ this.state.payee.address }</li>
              <li className="list-group-item">{ this.state.payee.city }, { this.state.payee.state } { this.state.payee.zip }</li>
              <li className="list-group-item">Category: { this.state.payee.category && this.state.payee.category.categoryName }</li>
              <li className="list-group-item">
                Status: <span className={ this.state.payee.active ? 'payee-active' : 'payee-inactive' }>
              { this.state.payee.active ? 'Active' : 'Inactive' }
            </span> &nbsp;
                <button onClick={ this.toggleActive }
                        className="btn btn-default">
                  Toggle
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
}

export default PayeeDetailRedux;