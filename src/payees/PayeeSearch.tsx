import React, { Component } from 'react'
import { string } from 'prop-types';

interface PayeeSearchState {
  searchText: string;
  [key: string]: any;
}

interface PayeeSearchProps {
  searchPayees: (searchText: string) => void;
  hideSearchButton?: boolean;
  searchText?: string;
}

export default class PayeeSearch extends Component<PayeeSearchProps,PayeeSearchState> {

  constructor(props:PayeeSearchProps){
    super(props);

    this.state = {
      searchText : props.searchText || ''
    }
  }

  handleClickMethod = () => {
    this.props.searchPayees(this.state.searchText);
  }

  handleUpdateForm = (event:React.ChangeEvent<HTMLInputElement>) => {    

    this.setState({
      [event.target.name]: event.target.value
    },()=>{
      console.log('state updated');

      if ( this.props.hideSearchButton){
        this.handleClickMethod();
      }
    })
  } 

  render() {
    return (
      <div>

        <div className="form-group">
          <label>Payee Name: </label>
          <input value={this.state.searchText} onChange={this.handleUpdateForm} type="text" name="searchText" id="search-payee-name" className="form-control"/>
        </div>


        <button hidden={this.props.hideSearchButton} className="btn btn-primary" type="button" onClick={ this.handleClickMethod } >Search</button>         
        
      </div>
    )
  }
}
