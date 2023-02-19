import service from "@/utils/service";
import endpoint from "@/utils/url";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: null,
  data: null,
  status: null,
  message: null,
  isLogin: "",
};

export const authSignUp = createAsyncThunk(
  "auth/signUp",
  async (initialState, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${endpoint.BASE_URL}/signUp`,
        initialState
      );
      // const response = await axios.post(
      //   "http://localhost:5000/api/signUp",
      //   initialState
      // );

      return response.data;
    } catch (error) {
      console.log(endpoint.BASE_URL);
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSignIn = createAsyncThunk(
  "auth/signIn",
  async (initialState, { rejectWithValue }) => {
    try {
      // const response = await axios.post(
      //   "https://motionless-neckerchief-eel.cyclic.app/api/signIn",
      //   initialState
      // );
      const response = await axios.post(
        `${endpoint.BASE_URL}/signIn`,
        initialState
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(authSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.isLogin = "true";
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.loading = false;
        state.status = action;
        state.isLogin = "false";
        state.message = action.payload.message;
      })

      .addCase(authSignUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.loading = false;
        state.status = action;
        state.isLogin = "false";
        state.message = action.payload;
      });
  },
});

export default authSlice.reducer;
