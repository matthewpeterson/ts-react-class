import Payee from '../data/Payee';

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