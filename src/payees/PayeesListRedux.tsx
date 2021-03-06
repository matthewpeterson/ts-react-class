import React from 'react'
import Payee from '../data/Payee';
import {ReduxPayeesState} from './payees-reducer';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { sortPayees } from './payees-actions';
import _ from 'lodash';
import {Link} from 'react-router-dom';

interface PayeesListReduxProps{
    payees: Payee[];
    sortDirection: 'asc' | 'desc';
    sortField: string;
    sortPayees: (sortfield: string) => void;
    selectPayee?: (payee:Payee) => void;
}

function PayeesListRedux(props:PayeesListReduxProps) {

  const getSortIcon = (field: string) => {
      if ( field === props.sortField){

        return props.sortDirection === 'asc' ? '^' : 'v';

      };

      return '';
  };

  return (
    <table className="table table-striped">
    <thead>
        <tr>
            <th  onClick={()=>props.sortPayees('payeeName')} >Payee Name {getSortIcon('payeeName')}</th>
            <th  onClick={()=>props.sortPayees('address.city')}>City {getSortIcon('address.city')}</th>
            <th  onClick={()=>props.sortPayees('address.state')}>State {getSortIcon('address.state')}</th>
        </tr>
    </thead>
    <tbody>
        {
            props.payees.map(payee=>(
                <tr key={payee.id}>                            
                    <td> <Link to={`/payees/${payee.id}/detail`}> { payee.payeeName } </Link></td>
                    <td>{ payee.address ? payee.address.city: payee.city }</td>
                    <td>{ payee.address ? payee.address.state: payee.state }</td>
                </tr>
            ))
        }

    </tbody>
</table>
  )
}

const getSortedFilteredPayees = (state: ReduxPayeesState) => {

    const filteredPayees = state.payees.filter( (payee:Payee) => {
        return payee.payeeName.toUpperCase().indexOf(state.searchText.toUpperCase()) > -1 ;
      });
  
    return _.orderBy(filteredPayees,state.sortField,state.sortDirection);
};

const mapStateToProps = (state: ReduxPayeesState) => ({
    payees: getSortedFilteredPayees(state),
    sortField: state.sortField,
    sortDirection: state.sortDirection,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({

    sortPayees: (field:string)=>dispatch(sortPayees(field))
})

export default connect(mapStateToProps,mapDispatchToProps)(PayeesListRedux);