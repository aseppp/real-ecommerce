import service from "@/utils/service";
import endpoint from "@/utils/url";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async (initialState, { rejectWithValue }) => {
    try {
      const response = await service.post(
        `${endpoint.BASE_URL}/signUp`,
        initialState
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSignIn = createAsyncThunk(
  "auth/signIn",
  async (initialState, { rejectWithValue }) => {
    try {
      const response = await service.post(
        `${endpoint.BASE_URL}/signIn`,
        initialState
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
