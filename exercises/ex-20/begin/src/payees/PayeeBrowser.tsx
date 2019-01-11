import * as React from 'react';
import PayeeDetail from './PayeeDetail';
import BrowserButtons from '../BrowserButtons';
import Payee from '../data/Payee';

interface PayeeBrowserProps {
  onNextPrev: (payee: Payee, direction: string) => void;
  onBack: () => void;
  payee: Payee;
}

const PayeeBrowser: React.SFC<PayeeBrowserProps> = ( { onNextPrev, onBack, payee }: PayeeBrowserProps ) => {
  function handleNextPrev( direction: string ) {
    onNextPrev( payee, direction );
  }

  return (
    <section>
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <PayeeDetail payee={payee}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-offset-3 text-center">
          <BrowserButtons onNextPrev={handleNextPrev}
                          onBack={onBack}/>
        </div>
      </div>
    </section>
  );
};

export default PayeeBrowser;
