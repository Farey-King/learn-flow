import { useState } from 'react';
import logo from '../../assets/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Bell } from 'lucide-react';

const Navbar = ({ loggedIn = false }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="h-[72px]">
            <nav className="flex justify-between bg-white shadow-md items-center h-[72px] px-[5%] w-full fixed top-0 left-0 z-[9999] gap-4">
                {/* Logo */}
                <NavLink to="/" className="flex-shrink-0">
                    <img src={logo} alt="LearnFlow" className="w-[60px]" />
                </NavLink>

                {/* Center — nav links + search (desktop) */}
                <div className="hidden md:flex items-center gap-6 flex-1">
                    <ul className="flex items-center gap-6 text-sm font-medium text-gray-700">
                        <li>
                            <NavLink
                                to={loggedIn ? '/dashboard' : '/'}
                                end
                                className={({ isActive }) => `hover:text-[#69315E] transition ${isActive ? 'text-[#69315E] font-semibold' : ''}`}
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pricing" className={({ isActive }) => `hover:text-[#69315E] transition ${isActive ? 'text-[#69315E] font-semibold' : ''}`}>
                                Pricing
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/courses" className={({ isActive }) => `hover:text-[#69315E] transition ${isActive ? 'text-[#69315E] font-semibold' : ''}`}>
                                Courses
                            </NavLink>
                        </li>
                    </ul>

                    {/* Search bar */}
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5 bg-white shadow-sm flex-1 max-w-[280px]">
                        <Search size={15} className="text-gray-400 flex-shrink-0" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none text-sm text-gray-600 w-full bg-transparent placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Right — auth or avatar (desktop) */}
                <div className="hidden md:flex items-center gap-3 flex-shrink-0">
                    {loggedIn ? (
                        <>
                            <button className="relative p-1">
                                <Bell size={20} className="text-gray-500" />
                                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                            </button>
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="w-9 h-9 rounded-full bg-[#69315E] flex items-center justify-center text-white text-sm font-semibold hover:bg-[#541f4a] transition"
                            >
                                E
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className="text-sm text-[#69315E] border border-[#69315E] rounded px-5 py-1.5 hover:bg-[#69315E] hover:text-white transition"
                            >
                                Sign In
                            </NavLink>
                            <NavLink
                                to="/signup"
                                className="text-sm bg-[#69315E] text-white rounded px-5 py-1.5 hover:bg-[#541f4a] transition"
                            >
                                Sign Up
                            </NavLink>
                        </>
                    )}
                </div>

                {/* Hamburger (mobile) */}
                <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden fixed top-[56px] left-0 w-full bg-white shadow-lg z-[9998] px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
                    <NavLink to={loggedIn ? '/dashboard' : '/'} onClick={() => setMenuOpen(false)} className="hover:text-[#69315E]">Dashboard</NavLink>
                    <NavLink to="/pricing" onClick={() => setMenuOpen(false)} className="hover:text-[#69315E]">Pricing</NavLink>
                    <NavLink to="/courses" onClick={() => setMenuOpen(false)} className="hover:text-[#69315E]">Courses</NavLink>
                    <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1.5">
                        <Search size={15} className="text-gray-400" />
                        <input type="text" placeholder="Search..." className="outline-none text-sm w-full" />
                    </div>
                    {loggedIn ? (
                        <button
                            onClick={() => { navigate('/dashboard'); setMenuOpen(false); }}
                            className="flex items-center gap-2 text-[#69315E] font-semibold"
                        >
                            <div className="w-8 h-8 rounded-full bg-[#69315E] flex items-center justify-center text-white text-sm">E</div>
                            My Dashboard
                        </button>
                    ) : (
                        <div className="flex gap-3 pt-2">
                            <NavLink to="/login" onClick={() => setMenuOpen(false)} className="flex-1 text-center text-[#69315E] border border-[#69315E] rounded px-4 py-1.5">Sign In</NavLink>
                            <NavLink to="/signup" onClick={() => setMenuOpen(false)} className="flex-1 text-center bg-[#69315E] text-white rounded px-4 py-1.5">Sign Up</NavLink>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Navbar;
