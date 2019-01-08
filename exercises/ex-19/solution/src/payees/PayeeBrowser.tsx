import * as React from 'react';
import _ from 'lodash';
import PayeeDetail from './PayeeDetail';
import BrowserButtons from '../BrowserButtons';
import Payee from '../data/Payee';
import { PayeeBrowserProps } from './payees-types';

const PayeeBrowser: React.FC<PayeeBrowserProps> = ( { onNextPrev, onBack = _.noop, payee }: PayeeBrowserProps ) => {
  function handleNextPrev( direction: string ) {
    onNextPrev && onNextPrev( payee, direction );
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

export default PayeeBrowser;
