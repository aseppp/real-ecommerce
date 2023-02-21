import service from "@/utils/service";
import endpoint from "@/utils/url";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProduct = createAsyncThunk(
  "product/create",
  async (initialState, { rejectWithValue }) => {
    try {
      const response = await service.postMultipart(
        `${endpoint.BASE_URL}/createProduct`,
        initialState
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const products = createAsyncThunk(
  "products/getProducts",
  async (initialState, { rejectWithValue }) => {
    try {
      const response = await service.get(
        `${endpoint.BASE_URL}/products`,
        initialState
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const detailProduct = createAsyncThunk(
  "products/getProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await service.get(
        `${endpoint.BASE_URL}/product/${productId}`
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
