import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import '../stylesCSS/MessageList.css';
import '../stylesCSS/MediaQueries.css';
import ModalImage from './ModalImage';


const Message = (props) => {
   
   const thisUser = useSelector((state) => state.userStore.thisUser);
   const isMe = ((thisUser.name === props.message.name) && (thisUser.avatar === props.message.avatar)) ?
                "myMessage" : "message";
   const hasPicture = (props.message.image) ? "textWithImage" : "";

   const [modal, setModal] = useState(false);

   function closeModal() {
      setModal(!modal);
   }
   
   useEffect(() => {
      props.loaded();
   }, []);

   return (
      <div className={isMe}>
         <div className="gridContainer">

            <div className='messageAvatar'>
               <img src={props.message.avatar}></img>
            </div>

            <div className='messageName'>
               <p>{props.message.name}</p>
               <p className='messageTime'>{props.message.date}</p>
            </div>

            <p className={"messageText" + " " + hasPicture} >{props.message.text}</p>

            <div className="messagePicture" onClick={() => { setModal(!modal); }}>
               {(props.message.image) && <img src={props.message.image} />}
            </div>

         </div>

         {(modal) && <ModalImage img={props.message.image} close={closeModal} />}
      </div>

   )
}

export default Message