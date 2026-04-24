import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import SignUp from '../auth/SignUp';
import SignupForm from '../auth/SignupForm';
import Login from '../auth/Login';
import LoginForm from '../auth/LoginForm';
import Navbar from '../layout/Navbar';
import CoursesPage from '../student/pages/CoursesPage';
import CourseDetailPage from '../student/pages/CourseDetailPage';

function PublicLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

function LoggedInLayout() {
    return (
        <>
            <Navbar loggedIn />
            <Outlet />
        </>
    );
}

export default function AllRoutes() {
    return (
        <Routes>
            {/* Auth pages — no navbar, full screen */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/sign-up" element={<SignupForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-in" element={<LoginForm />} />

            {/* Public pages — with navbar */}
            <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
            </Route>

            {/* Student-facing pages — logged in navbar */}
            <Route element={<LoggedInLayout />}>
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/courses/:id" element={<CourseDetailPage />} />
            </Route>
        </Routes>
    );
}
