import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: 'userStore',
   initialState: {
      users: [],
      thisUser: "",
   },
   reducers: {
      registerUser: (state, action) => {
         state.thisUser = action.payload;
      },
      addUser: (state, action) => {
         state.users.push(action.payload);
      },
      clearUsers: (state) => {
         state.users = [];
      },
      takeUserList: (state, action) => {
         state.users = action.payload;
      },
   },
})

export const { addUser, clearUsers, takeUserList, registerUser } = userSlice.actions;

export default userSlice.reducer;

