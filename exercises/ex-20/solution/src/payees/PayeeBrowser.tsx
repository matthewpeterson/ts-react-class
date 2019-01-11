import * as React from 'react';
import PayeeDetail from './PayeeDetail';
import BrowserButtons from '../BrowserButtons';
import Payee from '../data/Payee';
import { getNextPrev, switchView } from './payee-actions';
import { Views } from './PayeesContainer';
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
    payee: state.payee,
    payees: state.payees
  };
};

const mapDispatchToProps = ( dispatch: Dispatch ) => {
  return {
    onBack: () => {
      dispatch( switchView( Views.List ) );
    },
    onNextPrev: ( payee: Payee, direction: string ) => {
      dispatch( getNextPrev( payee, direction ) );
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( PayeeBrowser );


