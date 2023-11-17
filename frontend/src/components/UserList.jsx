import React, { useEffect, useState } from 'react';
import { getUserAvatar, randomNameGenerator } from '../utils/NameAvatarGenerator';

import { useDispatch } from 'react-redux';
import { registerUser } from '../reduxStore/userSlice';

import '../stylesCSS/UserList.css';
import '../stylesCSS/MediaQueries.css';
import User from './User';
import useUserList from '../hooks/useUserList';


const UserList = () => {

   const dispatch = useDispatch();
   const users = useUserList();
   const [totalUsers, setTotalUsers] = useState();

   useEffect(() => {
      setTotalUsers(users.length);
   }, [users])

   useEffect(() => {
      const userName = randomNameGenerator();
      new Promise(function (res, _rej) {
         res(getUserAvatar());
      }).then(
         (userAvatar) => {
            dispatch(registerUser({ name: userName, avatar: userAvatar }));
            setTotalUsers(totalUsers + 1);
         }
      ).catch((error) => {
         console.log(error)
      });
   }, [])




   return (
      <div>
         <div className='userList'>

            <h1 className='userCounter'>Всего пользователей: {totalUsers}</h1>

            <div className='userGridContainer'>
               {users.map((item, index) =>
                  <User name={item.name} url={item.avatar} key={index} />
               )}
            </div>

         </div>
      </div>
   )
}

export default UserList;