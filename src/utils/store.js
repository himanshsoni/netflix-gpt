import { configureStore } from "@reduxjs/toolkit";
import user from "../utils/userSlice";
const store = configureStore({
  reducer: { user },
});

export default store;
