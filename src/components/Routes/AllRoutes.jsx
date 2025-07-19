// src/components/Routes/AllRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../auth/SignUp';
import SignupForm from '../auth/SignupForm';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path='/sign-up' element={<SignupForm />} />
    </Routes>
  );
}
