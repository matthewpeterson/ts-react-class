import { connect } from 'react-redux';
import PayeeBrowser from './PayeeBrowser';
import { AnyAction, Dispatch, Store } from 'redux';
import Payee from '../data/Payee';
import { getNextPrev } from './payee-actions';
import { PayeesStoreState } from './payees-types';

const mapStateToProps = ( state: PayeesStoreState ) => {
  return {
    payee: state.payee
  };
};

const mapDispatchToProps = ( ( dispatch: Dispatch<AnyAction> ) => {
  return {
    onNextPrev: ( payee: Payee, direction: string ) => {
      dispatch( getNextPrev( payee, direction ) );
    }
  };
} );

// const PayeesContainerRedux: ComponentClass<PayeesContainerReduxProps> = connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );

// connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );

// const PayeesContainerRedux = connect<PayeesContainerReduxProps>( mapStateToProps, mapDispatchToProps )( PayeeBrowser );

export default connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );


