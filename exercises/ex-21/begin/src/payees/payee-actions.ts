import Payee from '../data/Payee';
import { Views } from './PayeesContainer';

export const toggleActive = () => {
  return {
    type: 'TOGGLE_PAYEE_ACTIVE'
  };
};

export const getNextPrev = ( payee: Payee, direction: string ) => {
  return {
    type: 'GET_NEXT_PREV_PAYEE',
    payee,
    direction
  };
};

export const switchView = ( view: Views ) => {
  return {
    type: 'SWITCH_VIEW',
    view
  };
};

export const setPayee = ( payee: Payee ) => {
  return {
    type: 'SET_PAYEE',
    payee,
  };
};
