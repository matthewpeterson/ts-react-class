import {Component} from 'react';
import PayeeDetail from './PayeeDetail';
import { ReduxPayeesState } from './payees-reducer';
import { connect } from 'react-redux';
import Payee from '../data/Payee';

interface PayeeDetailReduxProps{
    payeeId: string;
}



const mapStateToProps = (state:ReduxPayeesState, ownProps: PayeeDetailReduxProps) =>{

    let payee = state.payees.find(x=>x.id===ownProps.payeeId);

    if ( ! payee ){
        payee = {} as Payee;
    }

    return {payee};
}

export default connect(mapStateToProps,null)(PayeeDetail);
