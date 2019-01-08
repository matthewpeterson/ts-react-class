import * as React from 'react';
import Payee from '../data/Payee';
import { payeesDAO } from '../data/class-data';

export interface PayeeDetailProps {
  payee: Payee;
}

const PayeeDetail: React.SFC<PayeeDetailProps> = ( { payee }: PayeeDetailProps ) => {
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
          {/* Dummy handler function. You will replace it in the exercise */}
          <button onClick={ () => (1) }
                  name="previous"
                  className="btn btn-default">
            &laquo; Prev
          </button>
          <button onClick={ () => (1) }
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