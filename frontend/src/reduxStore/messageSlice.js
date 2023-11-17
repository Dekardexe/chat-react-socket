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

// import { createAction, createReducer } from "@reduxjs/toolkit";

// const initialState = {
//    messages: [],
// }

// export const addMessage = createAction('ADD_MESSAGE');
// export const takeMessageList = createAction('TAKE_MESSAGE_LIST');

// export default createReducer(initialState, {
//    [addMessage]: function (state, action) {
//       state.messages.push(action.payload);
//    },
//    [takeMessageList]: (state, action) => {
//       state.messages = action.payload;
//    },
// })