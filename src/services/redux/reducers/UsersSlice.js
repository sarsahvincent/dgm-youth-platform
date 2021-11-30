import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId :"",
  currentUser: localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : [],

};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getCurrentUser(state, action) {
     state.currentUser = action.payload;
     localStorage.setItem("currentUser", JSON.stringify(state.currentUser));
    },
    getCurrentUserId(state, action){
      state.userId =action.payload;
    }
  },
});

export const { getCurrentUser, getCurrentUserId } = usersSlice.actions;
export default usersSlice.reducer;
