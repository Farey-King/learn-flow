import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StudentLayout from '../student/StudentLayout';
import StudentHome from '../student/pages/StudentHome';
import MessagesPage from '../student/pages/MessagesPage';

function ComingSoon({ title }) {
    return (
        <div className="flex flex-col items-center justify-center h-64 text-gray-400 gap-2">
            <p className="text-lg font-medium">{title}</p>
            <p className="text-sm">Coming soon</p>
        </div>
    );
}

export default function DashboardRoutes() {
    return (
        <Routes>
            <Route element={<StudentLayout />}>
                <Route index element={<StudentHome />} />
                <Route path="messages" element={<MessagesPage />} />
                <Route path="courses" element={<ComingSoon title="My Courses" />} />
                <Route path="schedule" element={<ComingSoon title="My Schedule" />} />
                <Route path="status" element={<ComingSoon title="My Status" />} />
                <Route path="reviews" element={<ComingSoon title="Reviews" />} />
                <Route path="account" element={<ComingSoon title="My Account" />} />
            </Route>
        </Routes>
    );
}
