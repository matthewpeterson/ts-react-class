import * as React from 'react';
import Payee from '../data/Payee';
import { payeesDAO } from '../data/class-data';

export interface PayeeDetailProps {
  payee: Payee;
}

const PayeeDetail: React.SFC<PayeeDetailProps> = ( { payee }: PayeeDetailProps ) => {
  let classes = 'panel ';
  if ( payee.category ) {

    switch ( payee.category.categoryName ) {
      case 'Salary':
      case 'Other Income':
      case 'Interest':
        classes += 'panel-success';
        break;
      case 'Clothing':
      case 'Housing':
      case 'Food':
        classes += 'panel-danger';
        break;
      default:
        classes += 'panel-info';
        break;
    }
  }

  return (
    <section>
      <div className={classes}>
        <div className="panel-heading">{ payee.payeeName }</div>
        <ul className="list-group">
          <li className="list-group-item">{ payee.payeeName }</li>
          <li className="list-group-item">{ payee.address }</li>
          <li className="list-group-item">{ payee.city }, { payee.state } { payee.zip }</li>
          <li className="list-group-item">Category: { payee.category && payee.category.categoryName }</li>
        </ul>
      </div>
    </section>
  );
};

export default PayeeDetail;