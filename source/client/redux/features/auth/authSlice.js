import { setToken } from "@/utils";
import service from "@/utils/service";
import endpoint from "@/utils/url";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: null,
  data: null,
  status: null,
  message: null,
  isLogin: "",
  isAdd: null,
};

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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAdd = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authSignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.isLogin = "true";
        setToken(state.data.user.token);
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
        state.isAdd = true;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.loading = false;
        state.status = action;
        state.isLogin = "false";
        state.message = action.payload;
      });
  },
});
export const { login } = authSlice.actions;

export default authSlice.reducer;
