import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './css/local.css';

import {payeesDAO} from './data/class-data';
import Payee from './data/Payee';
import PayeeManager from './payees/PayeeManager';
import Transactionmanager from './tx/TransactionManager';
import Navbar from './Navbar';
import Home from './Home';

export default class App extends React.Component {
  payee: Payee;

  constructor(props: any) {
    super(props);

    const result = payeesDAO.get( 23 );
    if (result) {
      this.payee = result;
    } else {
      throw new Error( 'Payee #23 not found' );
    }
  }

  render() {
    return (
      <Router>
        <section>

          <div className="row">
            <div className="col">
              <Navbar/>
            </div>
          </div>

          <div className="row">
            <div className="col">
            <Route exact path="/" component={Home}/>
            <Route path="/payee" component={PayeeManager} />
            <Route path="/tx" component={Transactionmanager}/>            </div>
          </div>
        </section>
      </Router>
    );
  }
}