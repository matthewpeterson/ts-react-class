const redux = require('redux');

const initialState = {
    name: 'Matt'
};

const changeName = {
    type: 'CHANGE_NAME',
    name: 'Bill'
};

const reducer = (state, action) => {

    switch( action.type ) {
        case 'CHANGE_NAME':
            return {...state, name: action.name};

        case 'REVERSE_NAME':
            return {...state, name: state.name.split('').reverse().join('') }
        default:
            return state;
    }
}

const reverseAction = {
    type: 'REVERSE_NAME'
}

const store = redux.createStore(reducer, initialState);
store.subscribe(()=>{
    console.log('store state:', store.getState());

});


store.dispatch(changeName);
store.dispatch(reverseAction);

