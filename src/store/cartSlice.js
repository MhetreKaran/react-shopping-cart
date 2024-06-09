import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart-slice',
    initialState:{
        cart:[],
    },
    reducers:{
        addToCart:((state,{payload})=>{
            let {cart}=state;
            state.cart = [...cart,payload];
        }),
        removeToCart:((state,{payload})=>{
            let {cart}=state;
            state.cart = cart.filter(item=> item.id!==payload.id);
        }),
        removeFromCart:((state,{payload})=>{
            let {cart}=state;
            state.cart = cart.filter(item=> item.id!==payload);
        })
    }
})
export const {addToCart,removeToCart,removeFromCart} = cartSlice.actions
export default cartSlice.reducer;