import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/UsersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
