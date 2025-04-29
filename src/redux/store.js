import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "./snackbarSlice.js";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});

export default store;
