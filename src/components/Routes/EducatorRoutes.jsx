import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EducatorSignupForm from '../auth/EducatorSignupForm';
import EducatorLoginForm from '../auth/EducatorLoginForm';
import EducatorLayout from '../educator/EducatorLayout';
import EducatorHome from '../educator/pages/EducatorHome';
import MyCourses from '../educator/pages/MyCourses';
import CourseTypeSelection from '../educator/pages/CourseTypeSelection';
import CreateCourse from '../educator/pages/CreateCourse';
import CreateLiveLesson from '../educator/pages/CreateLiveLesson';
import CourseManage from '../educator/pages/CourseManage';
import CourseModules from '../educator/pages/CourseModules';
import CreateQuiz from '../educator/pages/CreateQuiz';
import CreateQuizQuestion from '../educator/pages/CreateQuizQuestion';
import QuizSuccess from '../educator/pages/QuizSuccess';
import EducatorProfile from '../educator/pages/EducatorProfile';
import Students from '../educator/pages/Students';
import InstructorMessages from '../educator/pages/InstructorMessages';
import EducatorSettings from '../educator/pages/EducatorSettings';
import Tools from '../educator/pages/Tools';
import SalesHistory from '../educator/pages/SalesHistory';

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

            {/* Create course flow — all standalone (no sidebar layout) */}
            <Route path='/dashboard/courses/create' element={<CourseTypeSelection />} />
            <Route path='/dashboard/courses/create/video' element={<CreateCourse />} />
            <Route path='/dashboard/courses/create/live' element={<CreateLiveLesson />} />

            {/* Quiz creation flow — standalone (no sidebar layout) */}
            <Route path='/dashboard/courses/:id/quiz/create' element={<CreateQuiz />} />
            <Route path='/dashboard/courses/:id/quiz/questions' element={<CreateQuizQuestion />} />
            <Route path='/dashboard/courses/:id/quiz/success' element={<QuizSuccess />} />

            {/* Dashboard pages with shared sidebar layout */}
            <Route path='/dashboard' element={<EducatorLayout />}>
                <Route index element={<EducatorHome />} />
                <Route path='courses' element={<MyCourses />} />
                <Route path='courses/:id' element={<CourseManage />} />
                <Route path='courses/:id/modules' element={<CourseModules />} />
                <Route path='profile' element={<EducatorProfile />} />
                <Route path='students' element={<Students />} />
                <Route path='chats' element={<InstructorMessages />} />
                <Route path='settings' element={<EducatorSettings />} />
                <Route path='staff-room' element={<ComingSoon title="Staff Room" />} />
                <Route path='tools' element={<Tools />} />
                <Route path='sales' element={<SalesHistory />} />
            </Route>
        </Routes>
    );
}
