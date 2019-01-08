# Exercise 19 Instructions
## Objectives
1) Create action(s) and reducer(s) for `PayeesContainerRedux`   
2) Create a store to manage `PayeeDetail`'s state    
3) Connect the store to `PayeeDetail` using `connect`   

### Changes
There is a new file, **src/payees/payees-types.tsx**. This file contains information on 
types that will be critical to our application. Take a moment to review it now.  

Open **payees/payee-reducers.tsx**. Note that the signature for `payeeApp` has changed,
using types from **payees-types.tsx**. Also, the initial state for the store has been 
provided.  

### Create action(s) and reducer(s) to interact with the store

What's the next logical bit of state we have to worry about? Next or previous Payee!

Open **payees/payee-actions.tsx**  

Create an action creator, `getNextPrev` which takes the appropriate arguments and returns an action
with a type of **GET_NEXT_PREV_PAYEE** and appropriate properties

Open **payees/payee-reducers.ts**   

Add an action case to the `payeeApp` reducer for **GET_NEXT_PREV_PAYEE**. The code for this case will calculate
the appropriate payee to return. If the payee position would be greater or less than the number of payees, 
block the list at the last or first payee, as appropriate

Remember that you have access to the full state, so you can look at, for instance
`state.payees`. 

### Connect the store to PayeeContainerRedux using `connect`
Open `payees/PayeeContainerRedux.tsx`.  

We will be wrapping around `PayeeBrowser`, which wants `payee` as a prop and `onNextPrev`
as a handler. 

Update `mapDispatchToProps` to a dispatcher function which dispatches the current payee
and the direction to `getNextPrev` from your actions.

Update `mapStateToProps` to retrieve the `payee` from the store's state. 

### Create a store to manage PayeeDetail's state
Open `index.tsx`.  
Import `createStore` from redux.  
Import `payeeApp` from **payee-reducers.ts**.  
Import `Provider` from `react-redux`.  
Create a store with `payeeApp` as its reducer.  
Wrap `App` in `Provider`. Do not forget to assign the `store` to `Provider`.  

Open `App.tsx`.   
Add `PayeesContainerRedux` to the `render()` method, below `NavBar`.  

### Test out your code!
