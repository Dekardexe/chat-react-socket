import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
   name: 'userStore',
   initialState: {
      modalPicture: false,
   },
   reducers: {
      showModalPicture: (state) => {
         state.modalPicture = !state.modalPicture;
      },
   },
})

export const { showModalPicture } = appSlice.actions;

export default appSlice.reducer;

