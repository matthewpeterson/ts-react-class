import PayeeSearch from './PayeeSearch';
import React, { Component } from 'react';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { searchPayees } from './payees-actions';

interface PayeeSearchReduxProps{
    handleSearchPayee: (searchText: string) => void;
}

class PayeeSearchRedux extends Component<PayeeSearchReduxProps> {

    render() {
    return (
      <div>
        <PayeeSearch searchPayees={this.props.handleSearchPayee} hideSearchButton />
      </div>
    )
  }
}

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {

    return {
        handleSearchPayee: (searchText: string) => dispatch(searchPayees(searchText))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PayeeSearchRedux);