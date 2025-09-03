// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRoutes from './components/Routes/AllRoutes';
import Dashboard from './components/pages/Dashboard';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AllRoutes />} />
             <Route path='/dashboard/*' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
