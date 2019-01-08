import { AnyAction, Reducer } from 'redux';
import { payeesDAO } from '../data/class-data';
import Payee from '../data/Payee';
import { PayeesStoreState } from './payees-types';

const results = payeesDAO.get( 23 );
if ( !results ) {
  throw new Error( 'Could not retrieve payee #23' );
}

const payeeApp: Reducer<PayeesStoreState, AnyAction> = ( state: PayeesStoreState = { payees: payeesDAO.list(), payee: results },
                                                         action: AnyAction ): PayeesStoreState => {
  switch ( action.type ) {
    case 'TOGGLE_PAYEE_ACTIVE':
      const nextState: PayeesStoreState = { ...state };
      nextState.payee.active = !nextState.payee.active;
      return { ...state };
    case 'GET_NEXT_PREV_PAYEE':
      const payeeList = state.payees;
      const pos = payeeList.indexOf( action.payee );
      let next;

      if ( action.direction === 'next' ) {
        next = Math.min( pos + 1, payeeList.length - 1 );
      } else {
        next = Math.max( pos - 1, 0 );
      }

      return { ...state, payee: payeeList[ next ] };

    default:
      return state;
  }
};

export default payeeApp;