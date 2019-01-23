import { payeeActions } from "./payees-actions";
import { AnyAction } from "redux";
import Payee from "../data/Payee";
import { payeesDAO } from "../data/class-data";

const initialState: ReduxPayeeState = {
    sortField: '',
    sortDirection: 'asc',
    payees: payeesDAO.list()
};

interface ReduxPayeeState {
    sortField: string;
    sortDirection: 'asc' | 'desc';
    payees: Payee[]
}

const payeesReducer = (state = initialState, {type,payload}:AnyAction) => {
    switch(type){

        case payeeActions.SORT_PAYEES:
            let sortDirection = 'asc'
            if ( state.sortField === payload.sortField && 
                state.sortDirection === 'asc') {
                    sortDirection = 'desc';
                }

            return {...state, ...payload, sortDirection};

        default:
            return state;

    }
};