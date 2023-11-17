import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EnteringPage from './JoinPage.jsx';
import ChatPage from './ChatPage.jsx';

const AppRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<EnteringPage/>} />
    <Route path="/chat" element={<ChatPage/>} />
   </Routes>
  )
}

export default AppRoutes;