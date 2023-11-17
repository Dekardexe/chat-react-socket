import React, { useEffect, useState, useRef } from 'react';
import Message from './Message';

import '../stylesCSS/MessageList.css';
import '../stylesCSS/MediaQueries.css';
import loader from '../assets/preloader/11.gif';

const MessageList = (props) => {

   const loaderRef = useRef();
   const [showLoader, setShowLoader] = useState(true);
   const [isInitialMount, setIsInitialMount] = useState(true);
   
   useEffect(()=> {
      if(isInitialMount){
         setIsInitialMount(false);
      }else{
         if(props.messages.length === 0){
            setShowLoader(false);
         }
      }
   },[props.messages])


   function loaderClose() {
      loaderRef.current.style = "display: none;";
   }

   return (
      <div className='list'>
         {props.messages.map((item, index) =>
            <Message message={item} key={index} loaded={loaderClose} />
         )}
         <div ref={loaderRef} className="messageListLoader" >
            {(showLoader) && <img src={loader} />}
         </div>
      </div>
   )
}

export default MessageList