import Payee from '../data/Payee';
import { AnyAction, Store } from 'redux';

export interface PayeeBrowserProps {
  onNextPrev?: ( payee: Payee, direction: string ) => void;
  onBack?: () => void;
  payee: Payee;
}

export type PayeesStore = Store<PayeesStoreState, AnyAction>;

export type PayeesBrowserContainer = PayeeBrowserProps & PayeesStore;

export interface PayeesContainerState {
  payee: Payee;

  [ key: string ]: any
}

export interface PayeesContainerReduxProps {
  payee: Payee;
  onNextPrev?: ( payee: Payee, direction: string ) => void;
  store?: Store
}

export interface PayeesStoreState {
  payee: Payee;
  payees: Payee[]
}






