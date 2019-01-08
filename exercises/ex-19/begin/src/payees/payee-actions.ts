import { ActionCreator, AnyAction } from 'redux';
import Payee from '../data/Payee';

export const toggleActive: ActionCreator<AnyAction> = (): AnyAction => {
  return {
    type: 'TOGGLE_PAYEE_ACTIVE'
  };
};

