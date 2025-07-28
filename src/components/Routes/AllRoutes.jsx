// src/components/Routes/AllRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../auth/SignUp';
import SignupForm from '../auth/SignupForm';
import Login from '../auth/Login';
import LoginForm from '../auth/LoginForm';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/sign-up' element={<SignupForm />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-in' element={<LoginForm />} />
    </Routes>
  );
}
