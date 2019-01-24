import { payeeActions } from "./payees-actions";
import { AnyAction } from "redux";
import Payee from "../data/Payee";
import { payeesDAO } from "../data/class-data";

const initialState: ReduxPayeesState = {
    sortField: '',
    sortDirection: 'asc',
    payees: payeesDAO.list(),
    searchText: ''
};

export interface ReduxPayeesState {
    sortField: string;
    sortDirection: 'asc' | 'desc';
    payees: Payee[];
    searchText: string;
}

export const payeesReducer = (state = initialState, {type,payload}:AnyAction) => {
    switch(type){

        case payeeActions.SORT_PAYEES:
            let sortDirection = 'asc'
            if ( state.sortField === payload.sortField && 
                state.sortDirection === 'asc') {
                    sortDirection = 'desc';
                }

            return {...state, ...payload, sortDirection};

        case payeeActions.SEARCH_PAYEES:

            return {...state, ...payload};

        default:
            return state;

    }
};