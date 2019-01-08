import * as React from 'react';

interface NavbarProps {
  selectView: ( key: string ) => void;
}

function Navbar( props: NavbarProps ) {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <a className="navbar-brand">Banking</a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a onClick={ () => props.selectView( 'Payees' ) }>Payees</a></li>
          <li><a onClick={ () => props.selectView( 'Demos' ) }>Demos</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
