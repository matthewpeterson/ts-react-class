import * as React from 'react';

import {payeesDAO} from '../data/class-data';
import PayeeDetail from './PayeeDetail';
import BrowserButtons from '../BrowserButtons';
import Payee from '../data/Payee';

export interface PayeesContainerState {
  payee: Payee;
  view: Views;
  payeeList: Payee[];
}

enum Views {
  List, Detail
}

class PayeesContainer extends React.Component<any, PayeesContainerState> {
  payeeList: Payee[];

  constructor( props: any ) {
    super( props );

    this.state = {
      view     : Views.List,
      payee    : payeesDAO.list()[0],
      payeeList: payeesDAO.list()
    };
  }

  handleNextPrev = ( direction: string ) => {
    const pos = this.state.payeeList.indexOf( this.state.payee );
    let next = 0;

    if ( direction === 'next' ) {
      next = Math.min( pos + 1, this.state.payeeList.length - 1 );
    } else {
      next = Math.max( pos - 1, 0 );
    }

    const nextPayee = this.state.payeeList[ next ];

    this.setState( {
      payee: nextPayee
    } );
  };

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <PayeeDetail payee={this.state.payee}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <BrowserButtons onNextPrev={this.handleNextPrev}/>
          </div>
        </div>
      </section>
    );
  }
}

export default PayeesContainer;
