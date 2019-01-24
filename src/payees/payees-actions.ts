export const payeeActions = {
    SORT_PAYEES: 'SORT_PAYEES',
    SEARCH_PAYEES: 'SEARCH_PAYEES'
};

export const sortPayees = (sortField: string) => {
    return {
    type: payeeActions.SORT_PAYEES,
    payload: {sortField}
}}

export const searchPayees = (searchText: string ) => {
    return {
        type: payeeActions.SEARCH_PAYEES,
        payload: {searchText}
    }
}