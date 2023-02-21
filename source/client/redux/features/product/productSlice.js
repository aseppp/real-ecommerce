import { createSlice } from "@reduxjs/toolkit";
import { createProduct, detailProduct, products } from "../actions/products";

const initialState = {
  loading: null,
  status: null,
  isAdd: null,
  message: null,
  data: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.isAdd = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.status = action;
        state.isAdd = false;
        state.message = action.payload.message;
      });

    builder
      .addCase(products.pending, (state) => {
        state.loading = true;
      })
      .addCase(products.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(products.rejected, (state, action) => {
        state.loading = false;
        state.status = action;
        state.message = action.payload.message;
      });

    builder
      .addCase(detailProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(detailProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(detailProduct.rejected, (state, action) => {
        state.loading = false;
        state.status = action;
        state.message = action.payload.message;
      });
  },
});

export default productSlice.reducer;
