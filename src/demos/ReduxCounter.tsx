import React, { Component } from 'react';
import { AnyAction, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Actions
const addOne = () => {
  return {
    type: 'INCREMENT'
  };
};

const subtractOne = () => {
  return {
    type: 'DECREMENT'
  };
};

// Reducer
const reducer = ( state = 0, action: AnyAction ) => {
  // console.log( 'Called reducer' );
  switch ( action.type ) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

// Creating the store
const store = createStore( reducer );

// Comment out the above, and uncomment this line if you want to see the
// Redux dev tools in action
/*
const store = createStore( reducer,
  composeWithDevTools()
);
*/

// Components
interface CounterProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

interface ReduxCounterState {
  value: number;
}

const Counter = ( { value, onIncrement, onDecrement }: CounterProps ) => {
  console.log( 'Counter.render() called with value: ', value );
  return (
    <div>
      <h3>{ value }</h3>
      <button onClick={ onIncrement }>Add one</button>
      <button onClick={ onDecrement }>Subtract one</button>
    </div>
  );
};

class ReduxCounter extends Component<any, ReduxCounterState> {
  constructor( props: any ) {
    super( props );

    // Working with the store
    this.state = {
      value: store.getState()
    };

    store.subscribe( () => this.setState( {
      value: store.getState()
    } ) );
  }

  render() {
    console.log( 'ReduxCounter.render() called, state is ', store.getState() );
    return (
      <div>
        <h3>Redux Counter</h3>
        {/* Dispatching actions */ }
        <Counter value={ this.state.value }
                 onIncrement={ () => store.dispatch( addOne() ) }
                 onDecrement={ () => store.dispatch( subtractOne() ) }/>
      </div>
    );
  }
}

export default ReduxCounter;