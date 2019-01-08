import * as React from 'react';

import { payeesDAO } from '../data/class-data';
import Payee from '../data/Payee';
import PayeeBrowser from './PayeeBrowser';
import PayeeList from './PayeeList';

export interface PayeesContainerState {
  payee?: Payee;
  view: Views;
  payeeList: Payee[];
}

enum Views {
  List, Detail
}

class PayeesContainer extends React.Component<any, PayeesContainerState> {
  constructor( props: any ) {
    super( props );

    this.state = {
      view: Views.List,
      payeeList: payeesDAO.list()
    };
  }

  handleNextPrev = ( payee: Payee, direction: string ) => {
    if ( !this.state.payee ) return false;

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

  handlePayeeSelect = ( payee: Payee ) => {
    this.setState( {
      view: Views.Detail,
      payee
    } );
  };

  backToList = () => {
    this.setState( { view: Views.List } );
  };

  render() {

    let view = ( <PayeeList payees={ this.state.payeeList }
                            onPayeeSelect={ this.handlePayeeSelect }/> );
    if ( this.state.view === Views.Detail ) {
      if ( this.state.payee ) {
        view = (
          <PayeeBrowser payee={ this.state.payee }
                        onNextPrev={ this.handleNextPrev }
                        onBack={ this.backToList }/>
        );
      } else {
        view = <div><h3>Could not find payee to display!</h3></div>;
      }

    }

    return (
      <section>
        { view }
      </section>
    );
  }
}

export default PayeesContainer;
