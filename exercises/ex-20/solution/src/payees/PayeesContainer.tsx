import * as React from 'react';

import Payee from '../data/Payee';
import PayeeBrowser from './PayeeBrowser';
import PayeeList from './PayeeList';
import { connect } from 'react-redux';
import { PayeeReducerState } from './payee-reducers';

export interface PayeesContainerProps {
  view: Views;
}

export enum Views {
  List, Detail
}

class PayeesContainer extends React.Component<PayeesContainerProps, {}> {
  render() {

    let view = <PayeeList/>;
    if ( this.props.view === Views.Detail ) {
      view = <PayeeBrowser/>;
    }

    return (
      <section>
        { view }
      </section>
    );
  }
}

const mapStateToProps = ( state: PayeeReducerState ): {view: Views} => {
  return {
    view: state.view
  };
};

export default connect( mapStateToProps )( PayeesContainer );

