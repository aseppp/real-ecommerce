import { createSlice } from "@reduxjs/toolkit";
import { createCart, addToCart } from "../actions/cart";

const initialState = {
  loading: null,
  status: null,
  isAdd: null,
  message: null,
  data: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCart.fulfilled, (state, action) => {
        state.loading = false;
        state.isAdd = true;
      })
      .addCase(createCart.rejected, (state, action) => {
        state.loading = false;
        state.status = action;
        state.isAdd = false;
        state.message = action.payload.message;
      });

    builder
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.status = action;
        state.message = action.payload.message;
      });

    // builder
    //   .addCase(detailProduct.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(detailProduct.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.data = action.payload;
    //   })
    //   .addCase(detailProduct.rejected, (state, action) => {
    //     state.loading = false;
    //     state.status = action;
    //     state.message = action.payload.message;
    //   });
  },
});

export default cartSlice.reducer;
