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

    default:
      return state;
  }
};

export default payeeApp;