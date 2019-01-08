import * as React from 'react';
import PayeeRow from './PayeeRow';
import Payee from '../data/Payee';

interface PayeeListProps {
  payees: Payee[];
  onPayeeSelect: (payee: Payee) => void;
  onListSort: (sortField: string) => void;
}

const PayeeList: React.SFC<PayeeListProps> = ( { payees, onPayeeSelect, onListSort }: PayeeListProps ) => (
  <table className="table table-hover">
    <thead>
    <tr>
      <th className="clickable" onClick={() => onListSort( 'payeeName' )}>Payee</th>
      <th className="clickable" onClick={() => onListSort( 'city' )}>City</th>
      <th className="clickable" onClick={() => onListSort( 'state' )}>State</th>
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