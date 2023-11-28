import toolkit from "@reduxjs/toolkit"

const { configureStore, createSlice } = toolkit;

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        }
    }
})

const loginSlice = createSlice({
    name: "login",
    initialState: false,
    reducers: {
        sessionLogin(state) {
            state = true
            return state
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        login: loginSlice.reducer
    },
})
console.log('CURRENT STORE : ', store.getState())

store.subscribe(() => {
    console.log('STORE CHANGE : ', store.getState())
})

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
store.dispatch(loginSlice.actions.sessionLogin()); 