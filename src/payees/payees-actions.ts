export const payeeActions = {
    SORT_PAYEES: 'SORT_PAYEES'
};

export const sortPayees = (sortField: string) => {{
    type: payeeActions.SORT_PAYEES,
    payload: {sortField}
});