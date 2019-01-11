import { AnyAction, combineReducers, Reducer } from 'redux';
import Payee from '../data/Payee';
import { Views } from './PayeesContainer';

export interface PayeeReducerState {
  payees: Payee[];
  payee: Payee;
  view: Views;
}

const payees: Reducer<Payee[], AnyAction> = ( state = [], action ) => {
  switch ( action.type ) {
    case 'FETCH_PAYEES_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};

const payee: Reducer<Payee, AnyAction> = ( state: Payee = null, action: AnyAction ): Payee => {
  switch ( action.type ) {
    case 'FETCH_PAYEES_SUCCESS':
      return state === null ? action.payload[ 0 ] : state;
    case 'TOGGLE_PAYEE_ACTIVE':
      const nextState: Payee = { ...state } as Payee;
      nextState.active = !nextState.active;
      return nextState;

    case 'GET_NEXT_PREV_PAYEE':
      const payeeList = payees( undefined, action );
      const pos = payeeList.indexOf( action.payee );
      let next;

      if ( action.direction === 'next' ) {
        next = Math.min( pos + 1, payeeList.length - 1 );
      } else {
        next = Math.max( pos - 1, 0 );
      }

      return payeeList[ next ];

    case 'SET_PAYEE':
      return { ...action.payee } as Payee;

    default:
      return state;
  }
};

const view: Reducer<Views, AnyAction> = ( state: Views = Views.List, action: AnyAction ) => {
  switch ( action.type ) {
    case 'SWITCH_VIEW':
      return action.view;
    case 'SET_PAYEE':
      return Views.Detail;
    default:
      return state;
  }
};

const payeeApp = combineReducers({payees, payee, view});

export default payeeApp;