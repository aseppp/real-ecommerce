import service from "@/utils/service";
import endpoint from "@/utils/url";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createCart = createAsyncThunk(
  "cart/createCart",
  async (initialState, { rejectWithValue }) => {
    try {
      const response = await service.post(
        `${endpoint.BASE_URL}/cart`,
        initialState
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (initialState, { rejectWithValue }) => {
    try {
      const response = await service.post(
        `${endpoint.BASE_URL}/addToCart`,
        initialState
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
