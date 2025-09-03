import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'

export default function DashboardRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  )
}
