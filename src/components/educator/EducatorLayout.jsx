import React from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    GraduationCap,
    PlusSquare,
    MessageCircle,
    BookOpen,
    Settings,
    Users,
    LogOut,
    Search,
    UserCircle,
} from 'lucide-react';
import logo from '../../assets/logo.png';

const NAV_ITEMS = [
    { label: 'Home', icon: LayoutDashboard, to: '/educator/dashboard', end: true },
    { label: 'Profile', icon: UserCircle, to: '/educator/dashboard/profile' },
    { label: 'Students', icon: GraduationCap, to: '/educator/dashboard/students' },
    { label: 'Create Course', icon: PlusSquare, to: '/educator/dashboard/courses/create' },
    { label: 'Chats', icon: MessageCircle, to: '/educator/dashboard/chats' },
    { label: 'Courses Page', icon: BookOpen, to: '/educator/dashboard/courses' },
    { label: 'Settings', icon: Settings, to: '/educator/dashboard/settings' },
    { label: 'Staff Room', icon: Users, to: '/educator/dashboard/staff-room', badge: 4 },
    { label: 'Tools', icon: Settings, to: '/educator/dashboard/tools' },
    { label: 'Sales History', icon: LayoutDashboard, to: '/educator/dashboard/sales' },
];

const PAGE_TITLES = {
    '/educator/dashboard': 'Statistic',
    '/educator/dashboard/students': 'Students',
    '/educator/dashboard/courses': 'Courses Page',
    '/educator/dashboard/courses/create': 'Create Course',
    '/educator/dashboard/chats': 'Messages',
    '/educator/dashboard/settings': 'Settings',
    '/educator/dashboard/staff-room': 'Staff Room',
    '/educator/dashboard/profile': 'Profile',
    '/educator/dashboard/tools': 'Tools',
    '/educator/dashboard/sales': 'Sales History',
};

export default function EducatorLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    const getTitle = () => {
        const exact = PAGE_TITLES[location.pathname];
        if (exact) return exact;
        if (location.pathname.includes('/modules')) return 'Courses Page';
        if (location.pathname.includes('/courses/')) return 'Courses Page';
        return 'Statistic';
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar */}
            <aside className="w-52 flex-shrink-0 bg-[#3b1635] flex flex-col h-full">
                {/* Logo */}
                <div className="px-5 py-5">
                    <img src={logo} alt="LearnFlow" className="h-8 brightness-0 invert" />
                </div>

                {/* Nav Items */}
                <nav className="flex-1 px-3 space-y-1 mt-2">
                    {NAV_ITEMS.map(({ label, icon: Icon, to, end, badge }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                `flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                                    isActive
                                        ? 'bg-white/15 text-white'
                                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                                }`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <Icon size={18} />
                                <span>{label}</span>
                            </div>
                            {badge && (
                                <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                                    {badge}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* Sign Out */}
                <div className="px-3 pb-6">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-amber-400 hover:bg-white/10 w-full transition"
                    >
                        <LogOut size={18} />
                        <span>Sign Out</span>
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <header className="bg-white border-b h-16 flex items-center justify-between px-8 flex-shrink-0">
                    <h1 className="text-xl font-bold text-gray-900">{getTitle()}</h1>
                    <img src={logo} alt="LearnFlow" className="h-8" />
                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
                        <Search size={15} className="text-gray-400" />
                        <input
                            placeholder={location.pathname.includes('/courses') ? 'Search Courses...' : 'Search...'}
                            className="text-sm outline-none text-gray-600 w-40 bg-transparent"
                        />
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
