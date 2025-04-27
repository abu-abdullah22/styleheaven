import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: JSON.parse(localStorage.getItem('cartProducts')) || [],
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
        localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
      }
    },
   
  },
});

export default cartSlice.reducer;
export const { addtoCart} = cartSlice.actions;
