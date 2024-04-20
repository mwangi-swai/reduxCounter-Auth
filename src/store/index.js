import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authSlice from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authSlice.reducer },
});

export default store;
