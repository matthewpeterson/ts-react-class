import * as React from 'react';
import Payee from '../data/Payee';

export interface PayeeDetailProps {
  payee: Payee;
}

const PayeeDetail: React.SFC<PayeeDetailProps> = ( { payee }: PayeeDetailProps ) => {
  const handlePrevious = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    // e.target will not work
    console.log( 'You clicked on the %s button.', e.currentTarget.name );
  };

  const handleNext = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    console.log( 'You clicked on the %s button.', e.currentTarget.name );
  };

  return (
    <section>
      <div className="panel panel-primary">
        <div className="panel-heading">{ payee.payeeName }</div>
        <ul className="list-group">
          <li className="list-group-item">{ payee.payeeName }</li>
          <li className="list-group-item">{ payee.address }</li>
          <li className="list-group-item">{ payee.city }, { payee.state } { payee.zip }</li>
          <li className="list-group-item">Category: { payee.category && payee.category.categoryName }</li>
        </ul>
      </div>
      <div className="text-center">
        <div className="btn-group">
          <button onClick={ handlePrevious }
                  name="previous"
                  className="btn btn-default">
            &laquo; Prev
          </button>
          <button onClick={ handleNext }
                  name="next"
                  className="btn btn-default">
            Next &raquo;
          </button>
        </div>
      </div>

    </section>
  );
};

export default PayeeDetail;