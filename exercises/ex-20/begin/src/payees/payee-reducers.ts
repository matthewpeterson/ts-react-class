import { AnyAction, combineReducers, Reducer } from 'redux';
import {payeesDAO} from '../data/class-data';
import Payee from '../data/Payee';

const payees: Reducer<Payee[], AnyAction> = ( state = payeesDAO.list(), action ) => {
  switch ( action.type ) {
    case 'GET_NEXT_PREV_PAYEE':
      return state;
    default:
      return state;
  }
};

const payee: Reducer<Payee, AnyAction> = ( state: Payee = payeesDAO.get( 23 ), action: AnyAction ): Payee => {
  switch ( action.type ) {
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

    default:
      return state;
  }
};

const payeeApp = combineReducers({payees, payee});

export default payeeApp;