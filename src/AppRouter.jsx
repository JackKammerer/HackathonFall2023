// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UpdateProfile from './pages/UpdateProfile';
import LoginPage from './pages/LoginPage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} /> {/* Set LoginPage as the initial route */}
      <Route path="/homepage" element={<HomePage />} />
      <Route path="/updateprofile" element={<UpdateProfile />} />
    </Routes>

  );
}

export default AppRouter;

