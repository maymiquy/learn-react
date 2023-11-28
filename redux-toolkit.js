import toolkit from "@reduxjs/toolkit"

const { configureStore, createAction, createReducer } = toolkit;

// Action
const addToCart = createAction("ADD_TO_CART");     // define action
const sessionLogin = createAction("SESSION_LOGIN");


// Reducer
const cartReducer = createReducer([], (builder) => {        // create reducer cart
    builder.addCase(addToCart, (state, action) => {     // add action case with call back function
        state.push(action.payload);                     // multiple reducer 
    })
})

const loginReducer = createReducer({ status: false }, (builder) => {     // create reducer login)
    builder.addCase(sessionLogin, (state) => {
        state.status = true;
    })
});

// Store
const store = configureStore({
    reducer: {                   // multiple select reducer for store
        cart: cartReducer,      // reducer cart
        login: loginReducer     // reducer login
    }
})
console.log('CURRENT STORE : ', store.getState())



// Subscribe
store.subscribe(() => {
    console.log('STORE CHANGE : ', store.getState())
})



// Dispatch
const actionAddToCart = addToCart({ id: 1, qty: 10 });     // make action for state change
store.dispatch(actionAddToCart);
// store.dispatch(addToCart({ id: 1, qty: 10 }));  another way if have one action

const actionAddToCart2 = addToCart({ id: 2, qty: 20 });     // make action for state change
store.dispatch(actionAddToCart2);

const actionSessionLogin = sessionLogin();
store.dispatch(actionSessionLogin);