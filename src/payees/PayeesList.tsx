import React, { Component } from 'react'
import Payee from '../data/Payee'
import { Link } from 'react-router-dom'

interface PayeesListProps{
    payees: Payee[];
    sortPayees?: (sortfield: string, ascending: boolean) => void;
    selectPayee?: (payee:Payee) => void;
}

interface PayeesListState{
    ascendingSort: boolean;
    sortColumnName: string;
}

export default class PayeesList extends Component<PayeesListProps,PayeesListState> {

    constructor(props: PayeesListProps) {
        super(props)
        
        this.state = {
            sortColumnName: '',
            ascendingSort: true
        }
      }
    
    getSortIcon = (columnName: string)=>{

        if ( columnName === this.state.sortColumnName){

            if ( this.state.ascendingSort){
                return '^';
            }
            else {
                return 'v';
            }
        }

        return null;
    }

    handleHeaderClick = (event:React.MouseEvent<HTMLElement>)=>{

        event.stopPropagation();

        let target = event.target as HTMLTableHeaderCellElement;
        let columnName  = target.dataset.name;
        console.log(`Clicked ${target.dataset.name}`)

        if ( columnName && this.props.sortPayees ){

            let ascendingSort = true;
            if ( columnName === this.state.sortColumnName ){
                ascendingSort = ! this.state.ascendingSort;
            }

            this.setState({
                sortColumnName: columnName,
                ascendingSort
            },()=>{
                if ( this.props.sortPayees && columnName){
                    this.props.sortPayees(columnName,ascendingSort); 
                }
            })
            
        }
    }


  render() {
    return (
        <table className="table table-striped">
            <thead>
                <tr onClick={this.handleHeaderClick}>
                    <th data-name="payeeName">Payee Name {this.getSortIcon('payeeName')}</th>
                    <th data-name="city">City {this.getSortIcon('city')}</th>
                    <th data-name="state">State {this.getSortIcon('state')}</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.payees.map(payee=>(
                        <tr key={payee.id}>                            
                                <td><Link to={`/payees/4/detail`} >{ payee.payeeName } as</Link></td>
                                <td>{ payee.city }</td>
                                <td>{ payee.state }</td>
                            </tr>
                    ))
                }
   
            </tbody>
        </table>
    )
  }
}
