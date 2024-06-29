import { createAsyncThunk } from "@reduxjs/toolkit";
import { setHeadersToken, getUserInfoApi, signUpApi, signInApi, logoutApi } from "./authApi";


export const signUpOperation = createAsyncThunk("auth/signUp", async (userData, { rejectWithValue }) => {
  try {
    const data = await signUpApi(userData);
    return data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const signInOperation = createAsyncThunk("auth/signIn", async (userData, { rejectWithValue }) => {
  try {
    const data = await signInApi(userData);
    return data;
  } catch (error) {
    // return rejectWithValue(error.response.data);
  }
});

export const getUserInfoOperation = createAsyncThunk(
  "user/info",
  async (_, { rejectWithValue, getState }) => {
    try {
      setHeadersToken(getState().auth.accessToken);
      const data = await getUserInfoApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUserOperation = createAsyncThunk("auth/logout", () => {
  logoutApi();
  return;
});
