// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRoutes from './components/Routes/AllRoutes';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<AllRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
