import Payee from '../data/Payee';
import { Action, Dispatch } from 'redux';

export const toggleActive = () => {
  return {
    type: 'TOGGLE_PAYEE_ACTIVE'
  };
};

export const getNextPrev = ( payee: Payee, direction: string, history: any, match: any ) => {
  return {
    type: 'GET_NEXT_PREV_PAYEE',
    payee,
    direction,
    history,
    match
  };
};

export const setPayee = ( payee: Payee ) => {
  return {
    type: 'SET_PAYEE',
    payee,
  };
};

export const fetchPayeesStart = () => {
  return {
    type: 'FETCH_PAYEES_START',
    isLoading: true
  };
};

export const fetchPayeesSuccess = ( payload: Payee[] ) => {
  return {
    type: 'FETCH_PAYEES_SUCCESS',
    isLoading: false,
    payload
  };
};

export const fetchPayeesFailure = ( error: Error ) => {
  return {
    type: 'FETCH_PAYEES_FAILURE',
    isLoading: false,
    error,
    message: 'Could not load data'
  };
};

export const fetchPayees: any = () => {
  return ( dispatch: Dispatch<Action> ) => {
    dispatch( fetchPayeesStart() );
    return fetch( 'http://localhost:8001/payees?_expand=category' )
      .then( ( response: Response ) => {
        if ( response.ok ) {
          return response.json();
        } else {
          return Promise.reject( response );
        }
      } )
      .then( ( results: Payee[] ) => {
        dispatch( fetchPayeesSuccess( results ) );
      } )
      .catch( ( error: Error ) => dispatch( fetchPayeesFailure( error ) ) );
  };
};