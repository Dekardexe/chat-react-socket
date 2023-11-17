import React from 'react';
import { useEffect, useState } from 'react';
import socket from '../socket/socket';
import UserList from './UserList';
import { BsPaperclip, BsSend } from 'react-icons/bs';
import '../stylesCSS/MediaQueries.css';
import '../stylesCSS/ChatPage.css';
import useMessageList from '../hooks/useMessageList';

import MessageList from './MessageList';
import { getCurrentDate } from '../utils/getCurrentDate';


const ChatPage = () => {

   const [input, setInput] = useState();
   const allMessages = useMessageList();



   function submitInputs() {
      const fileInput = document.getElementById('fileInput').files;

      if ((input) && (input.match(/\S/)) || (fileInput.length)) {
         if (fileInput.length) {
            const reader = new FileReader();
            reader.readAsDataURL(fileInput[0]);

            new Promise((res, rej) => {
               reader.onload = () => {
                  res(reader.result);
               };
               reader.onerror = () => {
                  rej(new Error);
               }
            }).then(
               (image) => {
                  socket.emit('sendMessage', input, getCurrentDate(), image)
               }
            ).catch(error => console.log(error))

         }
         else {
            socket.emit('sendMessage', input, getCurrentDate())
         }

         document.getElementById('fileInput').value = "";
         setInput("");
      }
   }

   useEffect(() => {
      const el = document.querySelector('.list');
      if ((el.scrollHeight - el.scrollTop) < window.innerHeight * 2) {
         el.scrollBy(0, el.scrollHeight);
      }
   }, [allMessages])

   const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
         submitInputs();
      }
   };

   function chooseFileTrigger() {
      document.getElementById("fileInput").click();
   }

   return (
      <div className='chat'>
         <UserList></UserList>

         <MessageList messages={allMessages} />

         <div className='bottomField'>
            <div className='inputField'>
               <div className='gridInputContainer'>

                  <div
                     className="uploadClip"
                     onClick={() => { chooseFileTrigger(); }} >
                     <BsPaperclip size={32} />
                  </div>

                  <input type="file"
                     id="fileInput"
                     style={{ display: "none" }} />

                  <input
                     className='inputMessage'
                     placeholder='Напишите сообщение...'
                     maxLength="2000"
                     value={input}
                     onChange={(event) => { setInput(event.target.value); }}
                     onKeyUp={handleKeyPress} />

                  <div
                     className='submitButton'
                     onClick={() => { submitInputs() }}>
                     <BsSend size={30} ></BsSend>
                  </div>

               </div>
            </div>
         </div>


      </div>
   )
}

export default ChatPage;