import { addMessage, takeMessageList } from '../reduxStore/messageSlice'
import { takeUserList } from '../reduxStore/userSlice'
import socket from '../socket/socket'

export const reduxToSocket = (store) => {

   socket.on('messageListFromServer', (messages) => {
      store.dispatch(takeMessageList(messages));
   });;

   socket.on('sendMessageFromServer', (message) => {
      store.dispatch(addMessage(message));
   });

   socket.on('userListFromServer', (users) => {
      store.dispatch(takeUserList(users))
   })

   return (next) => (action) => {
      const result = next(action);

      if (action.type === "userStore/registerUser") {
         socket.emit('enter', action.payload);
         return;
      }
      
      return result;
   }
}
