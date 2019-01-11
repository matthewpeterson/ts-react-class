import * as React from 'react';

import Payee from '../data/Payee';
import PayeeBrowser from './PayeeBrowser';
import PayeeList from './PayeeList';

export interface PayeesContainerProps {
  view: Views;
}

export enum Views {
  List, Detail
}

class PayeesContainer extends React.Component<PayeesContainerProps> {
  render() {

    // Delete this, and uncomment the section below it
    const view = <h3>Placeholder</h3>;

    /* Uncomment this
    let view = <PayeeList/>;
    if ( this.props.view === Views.Detail ) {
      view = <PayeeBrowser/>;
    }
    */

    return (
      <section>
        { view }
      </section>
    );
  }
}

export default PayeesContainer;
