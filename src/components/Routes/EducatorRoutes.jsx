import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EducatorSignupForm from '../auth/EducatorSignupForm';
import EducatorLoginForm from '../auth/EducatorLoginForm';
import EducatorLayout from '../educator/EducatorLayout';
import EducatorHome from '../educator/pages/EducatorHome';
import MyCourses from '../educator/pages/MyCourses';
import CreateCourse from '../educator/pages/CreateCourse';
import CourseManage from '../educator/pages/CourseManage';
import CourseModules from '../educator/pages/CourseModules';
import EducatorProfile from '../educator/pages/EducatorProfile';

// Simple placeholder for pages not yet designed
function ComingSoon({ title }) {
    return (
        <div className="flex items-center justify-center h-64 text-gray-400">
            <p className="text-lg">{title} — coming soon</p>
        </div>
    );
}

export default function EducatorRoutes() {
    return (
        <Routes>
            {/* Auth pages (no layout) */}
            <Route path='/sign-up' element={<EducatorSignupForm />} />
            <Route path='/sign-in' element={<EducatorLoginForm />} />

            {/* Create course has its own full-page layout */}
            <Route path='/dashboard/courses/create' element={<CreateCourse />} />

            {/* Dashboard pages with shared sidebar layout */}
            <Route path='/dashboard' element={<EducatorLayout />}>
                <Route index element={<EducatorHome />} />
                <Route path='courses' element={<MyCourses />} />
                <Route path='courses/:id' element={<CourseManage />} />
                <Route path='courses/:id/modules' element={<CourseModules />} />
                <Route path='profile' element={<EducatorProfile />} />
                <Route path='students' element={<ComingSoon title="Students" />} />
                <Route path='chats' element={<ComingSoon title="Chats" />} />
                <Route path='settings' element={<ComingSoon title="Settings" />} />
                <Route path='staff-room' element={<ComingSoon title="Staff Room" />} />
            </Route>
        </Routes>
    );
}
