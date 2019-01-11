import * as React from 'react';
import PayeeRow from './PayeeRow';
import Payee from '../data/Payee';
import { setPayee } from './payee-actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface PayeeListProps {
  payees: Payee[];
  onPayeeSelect: (payee: Payee) => void;
  history: any
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
    payees: state.payees.items,
  };
};

const mapDispatchToProps = ( dispatch: Dispatch, ownProps: any ) => {
  return {
    onPayeeSelect: ( payee: Payee ) => {
      dispatch( setPayee( payee ) );
      console.log( 'Going to: ', `${ownProps.match.url}/detail/${payee.id}` );
      console.log( 'History: ', ownProps.history );
      ownProps.history.push(`${ownProps.match.url}/detail/${payee.id}`);
    }
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( PayeeList );
