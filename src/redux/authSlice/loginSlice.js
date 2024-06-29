import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import { logoutUserOperation, signInOperation, signUpOperation } from "./authOperations";

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => ({...state, 
      email: payload.email,
      // accessToken: payload.token
    }),
    logoutUser: () => (initialState)
  },
  extraReducers: builder => {
    builder
      .addCase(signUpOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.user.email = payload.email;
      })
      .addCase(signInOperation.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = payload.accessToken;
        state.auth.email = payload.auth.email;
      })
      .addCase(logoutUserOperation.fulfilled, ({state}) => {
        state.auth.email = null;
        state.accessToken = null;
        state.error = null;
        state.isLoading = false;
      }).addMatcher(
        action => action.type.endsWith("/pending"),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith("/rejected"),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload.message;
        }
      );
  }
});

export const authReducer = authSlice.reducer;
export const { loginUser, logoutUser } = authSlice.actions;
