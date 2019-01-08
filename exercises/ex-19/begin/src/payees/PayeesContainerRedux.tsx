import { connect } from 'react-redux';
import PayeeBrowser from './PayeeBrowser';
import { AnyAction, Dispatch, Store } from 'redux';
import { PayeesStoreState } from './payees-types';

const mapStateToProps = ( state: PayeesStoreState ) => {
};

const mapDispatchToProps = ( ( dispatch: Dispatch<AnyAction> ) => {
} );

export default connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );


