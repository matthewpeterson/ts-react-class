import { AnyAction, combineReducers, Reducer } from 'redux';
import Payee from '../data/Payee';

export interface PayeeReducerState {
  items: Payee[];
  selected: Payee;
}

const payees: Reducer<PayeeReducerState, AnyAction> = ( state = {
  items: [],
  selected: null
}, action ) => {
  let updatedSelected: Payee = null;
  let selectedPayee: Payee = null;
  switch ( action.type ) {
    case 'FETCH_PAYEES_SUCCESS':
      if ( state.selected ) {
        updatedSelected = action.payload.find(
          (searchPayee: Payee) => searchPayee.id === state.selected.id );
      }
      return {
        ...state,
        items: action.payload,
        selected: updatedSelected ? updatedSelected : state.selected
      };
    case 'TOGGLE_PAYEE_ACTIVE':
      selectedPayee = { ...state.selected } as Payee;
      selectedPayee.active = !selectedPayee.active;
      return { ...state, selected: selectedPayee };
    case 'GET_NEXT_PREV_PAYEE':
      selectedPayee = state.items.find( searchPayee => searchPayee.id === action.payee.id );
      const pos = state.items.indexOf( selectedPayee );
      let next;

      if ( action.direction === 'next' ) {
        next = Math.min( pos + 1, state.items.length - 1 );
      } else {
        next = Math.max( pos - 1, 0 );
      }

      return {...state, selected: state.items[ next ] };

    case 'SET_PAYEE':
      return { ...state, selected: {...action.payee} };
    default:
      return state;
  }
};

const payee: Reducer<Payee, AnyAction> = ( state: Payee = null, action: AnyAction ): Payee => {
  switch ( action.type ) {
    default:
      return state;
  }
};

const payeeApp = combineReducers( { payees, payee } );
export const payeeReducers = { payees, payee };

export default payeeApp;