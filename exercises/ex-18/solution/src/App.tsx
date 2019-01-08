import * as React from 'react';

import './css/local.css';

import PayeeDetailRedux from './payees/PayeeDetailRedux';

// Swap this in to see the state changes logged with the redux logger
// import PayeeDetailRedux from './payees/PayeeDetailReduxWithLogger';

// Swap this in to see the state changes in the Redux devtools
// import PayeeDetailRedux from './payees/PayeeDetailReduxWithDevtools';

import Navbar from './Navbar';

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Navbar/>
        <PayeeDetailRedux/>
      </section>
    );
  }
}