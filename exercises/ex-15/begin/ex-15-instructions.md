# Exercise 15 Instructions
## Objectives
1) We want to take a Payee and swap it from active to inactive or vice-versa  
2) First, we will write an action which will define this interaction  

For simplicity's sake, in this series of exercises (exercises 15, 16, and 17),
we will write all of our code in one file, `PayeeDetailRedux`. Later on (the next
chapter, actually), we will work with Redux and the entire Payees application.

For now, we only have one thing to do:

### Add an action to `PayeeDetailRedux`
Write an action (techinically, an action generator, though the type is `ActionCreator` ) 
which returns an action appropriate for toggling the active property on a Payee. 
The action type should be **TOGGLE_PAYEE_ACTIVE**

The action creator should use the appropriate type signatures. That is, the 
function should be of type `ActionCreator<(what goes here?)>`, and it should return 
an `AnyAction`.

That's it for now. Move on to the next exercise.