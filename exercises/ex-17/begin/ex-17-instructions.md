# Exercise 17 Instructions
## Objectives
1) Create a store  
2) Initialize the state of the component with the state of the store  
3) Subscribe to the store with a listener which updates component state    
4) Add a button which dispatches an action to the store  

### Create a store
Create a store via Redux's `createStore` method. 

### Initialize state
In the `constructor`, initialize the state of the component with the state of the store

### Subscribe to changes in state
Add a subscriber to store changes in the `constructor`. When changes are received,
call `setState` to update the state with the changes.

### Dispatch an action to the store
Change `toggleActive` to simply dispatch an event to the store, using the 
`toggleActive` action creator.

### Testing
Load the application in the browser. You should be able to toggle the active 
property of a Payee.  

## Alternative solutions
You can see the files below by running `npx gulp show-solution --src ex-17`

### Logging
In `App.tsx`, replace  
`import PayeeDetailRedux from './payees/PayeeDetailRedux';`  
with 
`import PayeeDetailRedux from './payees/PayeeDetailReduxWithLogger';`  
to see the Redux Logger at work

### Devtools
In `App.tsx`, replace  
`import PayeeDetailRedux from './payees/PayeeDetailRedux';`  
with 
`import PayeeDetailRedux from './payees/PayeeDetailReduxWithDevtools';`  
to see the Redux Devtools at work
