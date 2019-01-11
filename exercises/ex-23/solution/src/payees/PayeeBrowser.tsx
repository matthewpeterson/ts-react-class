import * as React from 'react';
import PayeeDetail from './PayeeDetail';
import BrowserButtons from '../BrowserButtons';
import Payee from '../data/Payee';
import { getNextPrev } from './payee-actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface PayeeBrowserProps {
  onNextPrev: ( payee: Payee, direction: string ) => void;
  onBack: () => void;
  payee: Payee;
}

const PayeeBrowser: React.StatelessComponent<PayeeBrowserProps> = ( { onNextPrev, onBack, payee }: PayeeBrowserProps ) => {
  function handleNextPrev( direction: string ) {
    onNextPrev( payee, direction );
  }
  return (
    <section>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <PayeeDetail payee={ payee }/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3 text-center">
          <BrowserButtons onNextPrev={ handleNextPrev }
                          onBack={ onBack }/>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = ( state: any ) => {
  return {
    payee: state.payees.selected,
    payees: state.payees.items
  };
};

const mapDispatchToProps = ( dispatch: Dispatch, ownProps: any ) => {
  return {
    onBack: () => {
      console.log('OnBack is currently disabled')
    },
    onNextPrev: ( payee: Payee, direction: string ) => {
      console.log( 'Match: ', ownProps.match );
      dispatch( getNextPrev( payee, direction, ownProps.history, ownProps.match ) );
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );


