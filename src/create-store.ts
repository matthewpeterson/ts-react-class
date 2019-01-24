import {createStore} from 'redux';
import {payeesReducer} from './payees/payees-reducer';

const store = createStore(
    payeesReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;