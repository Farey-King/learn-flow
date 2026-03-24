import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRoutes from './components/Routes/AllRoutes';
import Dashboard from './components/pages/Dashboard';
import EducatorRoutes from './components/Routes/EducatorRoutes';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AllRoutes />} />
          <Route path='/dashboard/*' element={<Dashboard />} />
          <Route path='/educator/*' element={<EducatorRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
