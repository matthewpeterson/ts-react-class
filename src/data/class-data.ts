import _ from 'lodash';
import { data, payees } from './class-data-mapped';
import Payee from './Payee';
import HasId from './HasId';

interface PayeesDao {
  get: ( id: string | number ) => Payee;
  size: () => number;
  list: ( criteria?: object ) => Payee[];
}

const payeesDAO = {
  get: ( id: string | number ): Payee | undefined => {
    return payees.find( item => item.id === ( id + '' ) );
  },

  size: () => payees.length,

  list: ( criteria?: object ): Payee[] => {
    return _.filter( payees, criteria );
  }

};

export { payeesDAO };
