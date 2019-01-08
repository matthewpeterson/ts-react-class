import * as React from 'react';

import './css/local.css';

import PayeeDetailRedux from './payees/PayeeDetailRedux';
// import PayeeDetailRedux from './payees/PayeeDetailReduxWithLogger';
// import PayeeDetailRedux from './payees/PayeeDetailReduxWithDevtools';
import Navbar from './Navbar';
import DemoManager from './demos/DemoManager';

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
            <PayeeDetailRedux/> :
            <DemoManager/>

        }
      </section>
    );
  }
}