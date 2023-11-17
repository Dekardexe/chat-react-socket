import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import socket from '../socket/socket';
import '../stylesCSS/JoinPage.css';

const JoinPage = () => {

   useEffect(() => {
      socket.emit('leave');
   }, [])

   return (
      <div className='firstPage'>
         <Link to={`/chat`}>
            <button className='joinButton'>
               Принять участие в обсуждении!
            </button>
         </Link>
      </div>
   )
}

export default JoinPage;