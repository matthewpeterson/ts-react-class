import { AnyAction, Dispatch } from "redux";
import store from "../create-store";
import Payee from "../data/Payee";

export const payeeActions = {
    SORT_PAYEES: 'SORT_PAYEES',
    SEARCH_PAYEES: 'SEARCH_PAYEES',
    REQUEST_PAYEES: 'REQUEST_PAYEES',
    REQUEST_PAYEES_SUCCESS: 'REQUEST_PAYEES_SUCCESS',
    REQUEST_PAYEES_ERROR: 'REQUEST_PAYEES_ERROR'
};

export const sortPayees = (sortField: string) => {
    return {
    type: payeeActions.SORT_PAYEES,
    payload: {sortField}
}}

export const searchPayees = (searchText: string ) => {
    return {
        type: payeeActions.SEARCH_PAYEES,
        payload: {searchText}
    }
}

export const requestPayees = () =>{
    return {
        type: payeeActions.REQUEST_PAYEES,
        payload:{
            isLoading: true,
            errorMessage: ''
        }
    }
}

export const requestPayeesSuccess = (payees: Payee[]) => {
    return {
        type:payeeActions.REQUEST_PAYEES_SUCCESS,
        payload: {
            payees,
            isLoading: false
        }
    }
}

export const requestPayeesError = (error: string) => {
    return {
        type:payeeActions.REQUEST_PAYEES_ERROR,
        payload: {
            errorMessage: error
        }
    }
}

export const fetchPayees = () => {

    return function(dispatch: Dispatch){

        dispatch(requestPayees());


        fetch('http://localhost:8000/payees')
            .then(response=>{

                if ( response.ok ){

                    return response.json();
                }
                else {
                    console.error('response with bad status code: ', response.status);
                    return Promise.reject('fetching problems');
                }
            })
            .then(payees=>{
                dispatch(requestPayeesSuccess(payees));
            })
            .catch(error=>requestPayeesError(error));
    }
}