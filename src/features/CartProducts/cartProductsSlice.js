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
   
  },
});

export default cartSlice.reducer;
export const { addtoCart} = cartSlice.actions;
