import { createReducer } from "@reduxjs/toolkit";

export const cartreducer = createReducer(
    {
        cartItems: [],
        subTotal: 0,
        shipping: 0,
        tax: 0,
        total: 0,
    },
    {
        addToCart: (state, action) => {
            const item = action.payload;
            const doesExist = state.cartItems.find((i) => i.id === item.id);

            if (doesExist) {
                state.cartItems.forEach((i) => {
                    if (i.id === item.id) i.quantity += 1;
                });
            } else {
                state.cartItems.push(item);
            }
        },
        decrementfromCart: (state, action) => {
            state.cartItems.forEach((i) => {
                if (i.id === action.payload) {
                    if (i.quantity > 1) i.quantity -= 1;
                }
            });
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (i) => i.id !== action.payload
            );
        },
        calculatePrice: (state) => {
            let sum = 0;
            state.cartItems.forEach(i=>sum+=(i.price*i.quantity));
            state.subTotal = sum;
            state.shipping = state.subtotal === 0 ? 0 : state.subTotal > 1000 ? 0 : 500;
            state.tax = +(state.subTotal*0.18).toFixed();
            state.total = state.subTotal + state.tax + state.shipping;
        }
    }
);
