import React, { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    MessageCircle,
    BookOpenCheck,
    ShieldCheck,
    Star,
    User,
    LogOut,
    Plus,
    Timer,
    Menu,
    X
} from 'lucide-react';
import logo from '../../assets/logo.png';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');

    // Check if screen is mobile size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsOpen(false); // Close mobile menu when switching to desktop
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMobile && isOpen && !event.target.closest('aside') && !event.target.closest('[data-mobile-toggle]')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile, isOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobile && isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobile, isOpen]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (itemKey) => {
        setActiveItem(itemKey);
        if (isMobile) setIsOpen(false);
    };

    return (
        <>
            {/* Mobile Menu Button */}
            {isMobile && (
                <button
                    data-mobile-toggle
                    onClick={toggleSidebar}
                    className="fixed top-4 left-4 z-50 lg:hidden bg-white border border-gray-200 rounded-lg p-2 shadow-md hover:bg-gray-50"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            )}

            {/* Overlay for mobile */}
            {isMobile && isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                w-64 bg-white text-gray-800 border-r h-screen flex flex-col z-50
                ${isMobile 
                    ? `fixed transition-transform duration-300 ease-in-out ${
                        isOpen ? 'translate-x-0' : '-translate-x-full'
                      }`
                    : 'fixed'
                }
            `}>
                {/* Top: Logo & Profile */}
                <div className="px-6 py-4 border-b">
                    <div className="w-[70px] mb-2">
                        {/* Using placeholder div since we don't have the actual logo */}
                        <div className="w-full h-5 mb-6 mt-2 rounded flex items-center justify-center">
                            <img src={logo} alt="Learn flow logo" />
                        </div>
                    </div>
                    <div className="mt-2">
                        <h3 className="font-semibold text-sm">Esa Kris</h3>
                        <p className="text-xs text-gray-500">UI Designer</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-4 py-6 space-y-1 text-sm overflow-y-auto">
                    {/* Dashboard */}
                    <NavItem 
                        to="/dashboard" 
                        label="Dashboard" 
                        icon={<LayoutDashboard size={20} />}
                        onClick={() => handleNavClick('dashboard')}
                        isActive={activeItem === 'dashboard'}
                    />

                    {/* My Schedule */}
                    <NavItem 
                        to="/schedule" 
                        label="My Schedule" 
                        icon={<Timer size={18} />}
                        onClick={() => handleNavClick('schedule')}
                        isActive={activeItem === 'schedule'}
                    />

                    {/* Chat */}
                    <NavItem
                        to="/chat"
                        label="Chat"
                        icon={<MessageCircle size={18} />}
                        badge={<span className="text-xs bg-red-500 text-white rounded-full px-2">4</span>}
                        onClick={() => handleNavClick('chat')}
                        isActive={activeItem === 'chat'}
                    />

                    {/* My Course */}
                    <NavItem 
                        to="/course" 
                        label="My Course" 
                        icon={<BookOpenCheck size={18} />}
                        onClick={() => handleNavClick('course')}
                        isActive={activeItem === 'course'}
                    />

                    {/* My Status with Pro badge */}
                    <NavItem
                        to="/status"
                        label="My Status"
                        icon={<ShieldCheck size={18} />}
                        badge={<span className="text-xs bg-green-100 text-green-600 rounded-full px-2">Pro</span>}
                        onClick={() => handleNavClick('status')}
                        isActive={activeItem === 'status'}
                    />

                    {/* Reviews with Pro badge */}
                    <NavItem
                        to="/reviews"
                        label="Reviews"
                        icon={<Star size={18} />}
                        badge={<span className="text-xs bg-green-100 text-green-600 rounded-full px-2">Pro</span>}
                        onClick={() => handleNavClick('reviews')}
                        isActive={activeItem === 'reviews'}
                    />

                    {/* My Account */}
                    <NavItem 
                        to="/account" 
                        label="My Account" 
                        icon={<User size={18} />}
                        onClick={() => handleNavClick('account')}
                        isActive={activeItem === 'account'}
                    />
                </nav>

                {/* Upload Button */}
                <div className="px-4 mb-3">
                    <button 
                        className="w-full flex flex-col items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-xl text-sm font-medium shadow hover:bg-gray-900 transition"
                        onClick={() => isMobile && setIsOpen(false)}
                    >
                        <div className='w-5 h-5 rounded-xl bg-white flex items-center justify-center'>
                            <Plus size={18} color='black'/>
                        </div>
                        New Upload
                    </button>
                </div>

                {/* Logout */}
                <div className="p-4 border-t">
                    <button
                        className="flex items-center gap-3 text-red-600 hover:text-red-800 text-sm w-full"
                        onClick={() => {
                            handleNavClick('logout');
                            // Add your logout logic here
                        }}
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>
            </aside>
        </>
    );
};

// Reusable NavItem component
const NavItem = ({ to, label, icon, badge, onClick, isActive = false }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors duration-200 ${
            isActive 
                ? 'text-blue-600 font-medium bg-blue-50' 
                : 'text-gray-600 hover:bg-gray-50'
        }`}
    >
        <div className="flex items-center gap-3">
            <span className="text-gray-400">{icon}</span>
            <span>{label}</span>
        </div>
        {badge && <div>{badge}</div>}
    </button>
);

export default Sidebar;