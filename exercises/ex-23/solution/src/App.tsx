import * as React from 'react';
import Navbar from './Navbar';

import './css/local.css';
import { Provider } from 'react-redux';
import PayeesContainer from './payees/PayeesContainer';
import { ConnectedRouter } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, history } from './create-store';
import { Route } from 'react-router';
import HomeContainer from './HomeContainer';
import CategoriesContainer from './CategoriesContainer';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
        {/*<BrowserRouter>*/}
          <section>
            <Navbar/>
            <section>
              <Route path="/" exact component={ HomeContainer }/>
              <Route path="/categories" component={ CategoriesContainer }/>
              <Route path="/payees" component={ PayeesContainer }/>
            </section>
          </section>
        {/*</BrowserRouter>*/}
        </ConnectedRouter>
      </Provider>
    );
  }
}