import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: {},
    numberOfItemsInCart: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: { value: initialState },
    reducers: {
        addToCart: (state, action) => {

        }
    }
})

export default cartSlice.reducer