import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
   name: 'messageStore',
   initialState: {
      messages: [],
   },
   reducers: {
      addMessage: (state, action) => {
         state.messages.push(action.payload);
      },
      clear: (state) => {
         state.messages = [];
      },
      takeMessageList: (state, action) => {
         state.messages = action.payload;
      },
   },
})

export const { addMessage, clear, takeMessageList } = messageSlice.actions;

export default messageSlice.reducer;