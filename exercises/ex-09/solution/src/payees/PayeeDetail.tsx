import * as React from 'react';
import Payee from '../data/Payee';
import { payeesDAO } from '../data/class-data';

export interface PayeeDetailProps {
  payee: Payee;
}

class PayeeDetail extends React.Component<PayeeDetailProps, PayeeDetailProps> {

  payeeList: Payee[];

  constructor( props: PayeeDetailProps ) {
    super( props );
    this.payeeList = payeesDAO.list();

    this.state = {
      payee: props.payee
    };

  }

  handlePrevious = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    console.log( 'You clicked on the %s button.', e.currentTarget.name );
    const pos       = this.payeeList.indexOf( this.state.payee ),
          prevPos   = Math.max( pos - 1, 0 ),
          prevPayee = this.payeeList[ prevPos ];

    this.setState( {
                     payee: prevPayee
                   } );
  };

  handleNext = ( e: React.MouseEvent<HTMLButtonElement> ) => {
    console.log( 'You clicked on the %s button.', e.currentTarget.name );

    const pos       = this.payeeList.indexOf( this.state.payee ),
          nextPos   = Math.min( pos + 1, this.payeeList.length - 1 ),
          nextPayee = this.payeeList[ nextPos ];

    this.setState( {
                     payee: nextPayee
                   } );

  };

  render() {

    const payee = this.state.payee;

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
            <button onClick={ this.handlePrevious }
                    name="previous"
                    className="btn btn-default">
              &laquo; Prev
            </button>
            <button onClick={ this.handleNext }
                    name="next"
                    className="btn btn-default">
              Next &raquo;
            </button>
          </div>
        </div>

      </section>
    );
  }
}

export default PayeeDetail;