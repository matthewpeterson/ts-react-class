import * as React from 'react';
import Payee from '../data/Payee';

interface PayeeRowProps {
  payee: Payee;
  onPayeeSelect: (payee: Payee) => void;
}

const PayeeRow: React.SFC<PayeeRowProps> = ( { payee, onPayeeSelect }: PayeeRowProps ) => (
  <tr onClick={() => onPayeeSelect( payee )}
      className="clickable">
    <td>{payee.payeeName}</td>
    <td>{payee.city}</td>
    <td>{payee.state}</td>
  </tr>
);

export default PayeeRow;
