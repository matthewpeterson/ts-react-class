import * as React from 'react';
import PayeeRow from './PayeeRow';
import Payee from '../data/Payee';

interface PayeeListProps {
  payees: Payee[];
  onPayeeSelect: (payee: Payee) => void
}

const PayeeList: React.SFC<PayeeListProps> = ( { payees, onPayeeSelect }: PayeeListProps ) => (
  <table className="table table-hover">
    <thead>
    <tr>
      <th>Payee</th>
      <th>City</th>
      <th>State</th>
    </tr>
    </thead>
    <tbody>
    {
      payees.map( payee => {
        return (<PayeeRow payee={payee}
                          key={payee.id}
                          onPayeeSelect={onPayeeSelect}/>);
      } )
    }
    </tbody>
  </table>
);

export default PayeeList;