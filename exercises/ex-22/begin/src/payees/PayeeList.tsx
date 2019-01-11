import * as React from 'react';
import PayeeRow from './PayeeRow';
import Payee from '../data/Payee';
import { setPayee, switchView } from './payee-actions';
import { connect } from 'react-redux';
import { ComponentClass } from 'react';
import { Dispatch } from 'redux';

interface PayeeListProps {
  payees: Payee[];
  onPayeeSelect: (payee: Payee) => void;
}

const PayeeList: React.StatelessComponent<PayeeListProps> = ( { payees, onPayeeSelect }: PayeeListProps ) => (
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

const mapStateToProps = ( state: any ) => {
  return {
    payees: state.payees,
  };
};

const mapDispatchToProps = ( dispatch: Dispatch ) => {
  return {
    onPayeeSelect: ( payee: Payee ) => {
      dispatch( setPayee( payee ) );
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( PayeeList );
