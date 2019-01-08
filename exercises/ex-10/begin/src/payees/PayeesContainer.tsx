import * as React from 'react';

import {payeesDAO} from '../data/class-data';
import PayeeDetail from './PayeeDetail';
import BrowserButtons from '../BrowserButtons';
import Payee from '../data/Payee';

export interface PayeeContainerState {
  payee: Payee;
}

class PayeesContainer extends React.Component<any, PayeeContainerState> {
  payeeList: Payee[];

  constructor( props: any ) {
    super( props );

    this.payeeList = payeesDAO.list();

    this.state = {
      payee: this.payeeList[ 0 ]
    };
  }

  handleNextPrev = ( direction: string ) => {
    const pos = this.payeeList.indexOf( this.state.payee );
    let next = 0;

    if ( direction === 'next' ) {
      next = Math.min( pos + 1, this.payeeList.length - 1 );
    } else {
      next = Math.max( pos - 1, 0 );
    }

    this.setState( {
      payee: this.payeeList[ next ]
    } );
  };

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h3>PayeeDetail goes here</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <h3>BrowserButtons goes here</h3>
          </div>
        </div>
      </section>
    );
  }
}

export default PayeesContainer;
