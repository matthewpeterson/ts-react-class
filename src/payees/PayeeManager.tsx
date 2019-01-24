import React, { Component } from 'react'
import PayeeSearch from './PayeeSearch';
import {payeesDAO} from '../data/class-data'
import { payees } from '../data/class-data-mapped';
import Payee from '../data/Payee'
import PayeesList from './PayeesList';
import _ from 'lodash';

interface PayeesManagerState {
  filteredPayees: Payee[];
}

export default class PayeeManager extends Component<any,PayeesManagerState> {

  payees: Payee[]

  constructor(props: any) {
    super(props)
  
    this.payees = payeesDAO.list();

    this.state = {
       filteredPayees: [...payees]
    }
  }

  handleSortPayees = (sortProperty: string, ascending = true) => {

    let filteredPayees = _.orderBy(this.state.filteredPayees,sortProperty,ascending ? "asc" : "desc");
    this.setState({filteredPayees});
  }
  
  handleSearchPayees = (searchText: string) => {
    console.log(`Searching for ${searchText}`)

    const filteredPayees = this.payees.filter( (payee:Payee) => {
      return payee.payeeName.toUpperCase().indexOf(searchText.toUpperCase()) > -1 ;
    });

    this.setState({filteredPayees});

    console.log("filtered payees: ", filteredPayees)
  }

  render() {
    return (
      <div>
        <h2>Payee Manager</h2>
        <PayeeSearch searchPayees={this.handleSearchPayees} hideSearchButton/>
        <PayeesList payees={this.state.filteredPayees} sortPayees={this.handleSortPayees} />
      </div>
    )
  }
}