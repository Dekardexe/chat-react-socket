import React, { useState, useEffect, useRef } from 'react'
import '../stylesCSS/UserList.css'
import '../stylesCSS/MediaQueries.css'
import loader from '../assets/preloader/22.gif'

const User = (props) => {

   const [isLoading, setIsLoading] = useState(true);
   const imgRef = useRef();

   useEffect(() => {
      const img = imgRef.current;
      const handleImageLoad = () => {
         setIsLoading(false)
      };

      if (img) {
         img.addEventListener('load', handleImageLoad);
      }

      return () => {
         if (img) {
            img.removeEventListener('load', handleImageLoad);
         }
      };
   }, [imgRef]);

   return (
      <div>
         <div className='userInList'>
         <img className='loadingImg' ref={imgRef} src={props.url} style={{display: 'none',}}/>
         {(isLoading) ? <img src={loader} /> : <img className='loadingImg'  src={props.url} />} 
        
            <div className='userNameInList'>
               <p >{props.name}</p>
            </div>
         </div>
         <div>
            
         </div>
      </div>
   )
}

export default User