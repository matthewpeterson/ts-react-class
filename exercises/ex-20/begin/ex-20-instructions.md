# Exercise 20 Instructions
## Objectives
1) Universal access to the Redux store  
2) Add actions and reducers for switching between views  
3) Manage switching from the list view to the detail view  
4) Keeping track of the selected payee

### Universal access to the Redux store

In **App.tsx**, import `Provider` from `react-redux`.  
Wrap the top-level `<section>` in `<Provider>`.  
Pass the `store` to `<Provider>`. 

### Add actions and reducers for switching between views

Open **payee-actions.ts**.  
Add an action creator called `switchView()`.  
It should take an argument of type `Views` (from **PayeesContainer.tsx**).  
It should return an action where the `type` property is **SWITCH_VIEW** and 
the `view` property is the `view` parameter.

Open **payee-reducers.ts**.  
Add a **new** reducer called `view()`.  
The state for view is a `Views` and the default is `Views.List`.  
Handle the case of an `action.type` of **SWITCH_VIEW** by changing the state
to the new view type.  
Don't forget to add `view()` to the `combineReducers()` call at the bottom.  

### Manage switching from the list view to the detail view

Look at **PayeesContainer.tsx**, it has been radically simplified.  
What was `state` is now `props`.  
It sets the `PayeeList` view as the default view.  
Use the `connect()` method to connect it to the store.  
There are no events to handle, so you will not need a `mapDispatchToProps` object.  
You will need a `mapStateToProps` to pick up the appropriate view to display.  
Return the newly-connected component as `PayeesContainer`.  
In **App.tsx**, replace `PayeesContainerRedux` with `PayeesContainer`.  
Your app will not work from here until the end of the exercise.

Open **PayeeList.tsx**.  
Re-familiarize yourself with its properties.  
Use the `connect()` method to connect it to the store.  
In `mapStateToProps`, pass in the payees list from `state.payees`.
In `mapDispatchToProps`, you can assign a dummy function for `onListSort()` which
we will implement in a later exercise.  
What should happen with `onPayeeSelect`, though?  
Look at the next section....

### Keep track of the selected payee
Obviously, the view should change, so you will want to dispatch a **SWITCH_VIEW**
action. The payload should be `Views.Detail`.  
But we will also need to set the selected payee in the Redux store.  
In **payee-actions.ts**, write an action creator called `setPayee()`.  
The `action.type` should be **SET_PAYEE** and the payload should be the new payee.  
Then open **payee-reducers.ts**.  
Handle the **SET_PAYEE** action type in the `payee()` reducer.  

Open **PayeeBrowser.ts**.  
Use the `connect()` method to connect it to the store.  
In `mapStateToProps`, pass in `state.payee`.
In `mapDispatchToProps`, you can see that `onNextPrev` is already managed. Handle
`onBack` by dispatching a `switchView()` action with a payload of `Views.List`.

## Testing

Go to your browser. The following should happen:  

- The app should load with the list view first.
- Clicking on an item in the list view should swap to the detail view for that item.
- You should be able to browse items from the detail view.
- The 'Back' button in the detail view should take you back to the list view.
- Sorting should **NOT** work yet.

