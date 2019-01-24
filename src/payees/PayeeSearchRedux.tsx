import PayeeSearch from './PayeeSearch';
import React, { Component } from 'react';
import { AnyAction, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { searchPayees } from './payees-actions';
import {ReduxPayeesState} from './payees-reducer';

interface PayeeSearchReduxProps{
    handleSearchPayee: (searchText: string) => void;
    searchText: string;
}

class PayeeSearchRedux extends Component<PayeeSearchReduxProps> {

    render() {
    return (
      <div>
        <PayeeSearch searchPayees={this.props.handleSearchPayee} searchText={this.props.searchText} hideSearchButton />
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxPayeesState) => {

    return {
        searchText: state.searchText
    };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {

    return {
        handleSearchPayee: (searchText: string) => dispatch(searchPayees(searchText))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PayeeSearchRedux);