import {connect} from 'react-redux';
import PayeeBrowser from './PayeeBrowser';
import { Dispatch, Store } from 'redux';
import { getNextPrev } from './payee-actions';
import { ComponentClass } from 'react';
import Payee from '../data/Payee';

const mapStateToProps = ( ( state: Payee ) => {
  return {
    payee: state.payee
  }
});

const mapDispatchToProps = (( dispatch: Dispatch ) => {
  return {
    onNextPrev: ( payee: Payee, direction: string ) => {
      dispatch( getNextPrev( payee, direction ) );
    }
  };
});

interface PayeesContainerReduxProps {
  payee?: Payee;
  onNextPrev?: (payee: Payee, direction: string) => void;
  store?: Store
}

const PayeesContainerRedux: ComponentClass<PayeesContainerReduxProps> = connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );

export default PayeesContainerRedux;


