import * as React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand">Banking</a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/categories">Categories</NavLink></li>
          <li><NavLink activeClassName="active" to="/payees">Payees</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
