import { authReducer } from "./authSlice/loginSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
