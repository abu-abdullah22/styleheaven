import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const existing = state.cartProducts.find(
        (c) => c.unique_id === action.payload.unique_id
      );
      if (!existing) {
        state.cartProducts.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.unique_id !== action.payload
      );
    },
  },
});

export default cartSlice.reducer;
export const { addtoCart, removeFromCart } = cartSlice.actions;
