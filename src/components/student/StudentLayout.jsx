import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    MessageCircle,
    BookOpenCheck,
    ShieldCheck,
    Star,
    User,
    LogOut,
    Timer,
    Search,
    Bell,
    Plus,
} from 'lucide-react';
import logo from '../../assets/logo.png';

const NAV_ITEMS = [
    { label: 'Dashboard', icon: LayoutDashboard, to: '/dashboard', end: true },
    { label: 'My Schedule', icon: Timer, to: '/dashboard/schedule' },
    { label: 'Messages', icon: MessageCircle, to: '/dashboard/messages', badge: 4 },
    { label: 'My Courses', icon: BookOpenCheck, to: '/dashboard/courses' },
    { label: 'My Status', icon: ShieldCheck, to: '/dashboard/status', badge: 'Pro', badgeStyle: 'bg-green-100 text-green-600' },
    { label: 'Reviews', icon: Star, to: '/dashboard/reviews', badge: 'Pro', badgeStyle: 'bg-green-100 text-green-600' },
    { label: 'My Account', icon: User, to: '/dashboard/account' },
];

export default function StudentLayout() {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 bg-white border-r flex flex-col h-full shadow-sm">
                {/* Logo + Profile */}
                <div className="px-6 py-5 border-b">
                    <img src={logo} alt="LearnFlow" className="w-[70px] mb-5" />
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#69315E] flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                            E
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm text-gray-800">Esa Kris</h3>
                            <p className="text-xs text-gray-500">UI Designer</p>
                        </div>
                    </div>
                </div>

                {/* Nav Items */}
                <nav className="flex-1 px-4 py-4 space-y-0.5 overflow-y-auto">
                    {NAV_ITEMS.map(({ label, icon: Icon, to, end, badge, badgeStyle }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                                    isActive
                                        ? 'text-[#69315E] font-medium bg-purple-50'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                                }`
                            }
                        >
                            <div className="flex items-center gap-3">
                                <Icon size={18} className="text-gray-400" />
                                <span>{label}</span>
                            </div>
                            {badge && (
                                <span className={`text-xs rounded-full px-2 py-0.5 font-medium ${badgeStyle || 'bg-red-500 text-white'}`}>
                                    {badge}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </nav>

                {/* New Upload Button */}
                <div className="px-4 mb-3">
                    <button className="w-full flex flex-col items-center justify-center gap-1.5 px-4 py-3 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-900 transition">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
                            <Plus size={14} color="black" />
                        </div>
                        New Upload
                    </button>
                </div>

                {/* Logout */}
                <div className="p-4 border-t">
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 text-red-500 hover:text-red-700 text-sm w-full transition"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Navbar */}
                <header className="bg-white border-b h-16 flex items-center justify-between px-8 flex-shrink-0">
                    <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
                        <Search size={15} className="text-gray-400" />
                        <input
                            placeholder="Search..."
                            className="text-sm outline-none text-gray-600 w-48 bg-transparent placeholder-gray-400"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="relative p-1">
                            <Bell size={20} className="text-gray-500" />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <div className="w-9 h-9 rounded-full bg-[#69315E] flex items-center justify-center text-white text-sm font-semibold cursor-pointer">
                            E
                        </div>
                    </div>
                </header>

                {/* Page content */}
                <main className="flex-1 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
