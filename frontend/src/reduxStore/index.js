import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';
import userReducer from './userSlice';
import appReducer from './appSlice';
import { reduxToSocket } from '../middleware/redux-socket';

export default configureStore({
   reducer: {
      messageStore: messageReducer,
      userStore: userReducer,
      appState: appReducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxToSocket),
});