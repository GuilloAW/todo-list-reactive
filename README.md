# Todo List Reactive
The state: content dates in the right moment
UI: user interface based on the data, it changes when the data changed

## Steps
- In the HTML file I add the element it active the reactivity logic, in this case is the send form
- Let us create four expressions functions, Setstate work on updating the state the way reactive, template()  contains the data from the state and how is showing in the UI and getState gives us a copy immutable of the state
- The next step is to create the state, which is an object in this we are adding initial data for work later
- next... let us create an event when the form submit, we save the data save and update the state
- When updated the state whit setState(), it is rendering  the template, it calls to template() which returns us the data whit the interface shape
- then we add an action in th moment load web to begin render the main data
