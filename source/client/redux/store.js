import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/redux/features/auth/authSlice";
import productSlice from "./features/product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
  },
});
