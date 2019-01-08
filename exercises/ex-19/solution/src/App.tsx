import * as React from 'react';
import { Provider } from 'react-redux';

import './css/local.css';

import Navbar from './Navbar';
import DemoManager from './demos/DemoManager';
import { createStore } from 'redux';
import payeeApp from './payees/payee-reducers';
import PayeesContainerRedux from './payees/PayeesContainerRedux';

// const store = createStore( payeeApp );

enum Views {
  Demos, Payees
}

export default class App extends React.Component<{}, { view: Views }> {
  constructor( props: any ) {
    super( props );

    this.state = {
      view: Views.Payees
    };
  }

  handleSelectView = ( view: string ) => {
    let nextView = Views.Payees;
    if ( view === 'Demos' ) {
      nextView = Views.Demos;
    }

    this.setState( {
      view: nextView
    } );
  };

  render() {
    return (
      <section>
        <Navbar selectView={ this.handleSelectView }/>
        {
          this.state.view === Views.Payees ?
            <PayeesContainerRedux/> :
            <DemoManager/>

        }
      </section>
    );
  }
}