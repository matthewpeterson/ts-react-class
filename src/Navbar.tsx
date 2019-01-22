import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
        <div className="collapse navbar-collapse">

            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink></li>
                <li className="nav-item"><NavLink to="/payee" className="nav-link" activeClassName="active">Payee</NavLink></li>
                <li className="nav-item"><NavLink to="/tx" className="nav-link" activeClassName="active">Transaction</NavLink></li>
            </ul>
        </div>

    </nav>
  )
}
