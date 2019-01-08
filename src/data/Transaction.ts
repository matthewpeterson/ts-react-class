import TxTypes from './TxTypes';
import Payee from './Payee';
import Category from './Category';
import Person from './Person';
import Account from './Account'
import HasId from './HasId';

export default interface Transaction extends HasId {
  id: string;
  payeeId: string;
  personId: string;
  categoryId: string;
  accountId: string;
  txType: TxTypes | string;
  txDate: string;
  amount: number;
  payee?: Payee;
  category?: Category;
  person?: Person;
  account?: Account;
  txTypeName?: string;
}
