import React, { useState } from "react";
import logo from '../../assets/logo.png';
import { NavLink } from "react-router-dom";
import { Menu, X } from 'lucide-react'; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = () => {
        if (menuOpen) {
            toggleMenu();
        }
    };

    return (
        <header className="bg-white overflow-x-hidden mb-8">
            <nav className="flex justify-between bg-white shadow-md items-center py-1 px-[10%] w-full fixed top-0 left-0 z-[9999]">
                <div className="cursor-pointer hover:scale-[1.1] duration-300 ease-in-out">
                    <NavLink to="/">
                        <div className="w-[60px]">
                            <img src={logo} alt="gvl logo" />
                        </div>
                    </NavLink>
                </div>

                <div className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? "top-[80%] min-h-[30vh] text-[var(--primary)] backdrop-blur- bg-gray-100 gz-10 py-2" : "top-[-900%]"} md:w-auto w-full flex items-center`}>
                    <div className="pl-12 flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 w-full justify-between">
                        <ul className="flex md:flex-row flex-col md:pr-16 md:items-center gap-4">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `group relative inline-block py-2 md:px-2 px-5 ${
                                            isActive ? 'text-[#0d438d]' : 'hover:text-[#0d438d]'
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {({ isActive }) => (
                                        <>
                                            Home
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/dashboard"
                                    className={({ isActive }) =>
                                        `group relative inline-block py-2 md:px-2 px-5 ${
                                            isActive ? 'text-[#0d438d]' : 'hover:text-[#0d438d]'
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {({ isActive }) => (
                                        <>
                                            Dashboard
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/pricing"
                                    className={({ isActive }) =>
                                        `group relative inline-block py-2 md:px-2 px-5 ${
                                            isActive ? 'text-[#0d438d]' : 'hover:text-[#0d438d]'
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {({ isActive }) => (
                                        <>
                                            Pricing
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/course"
                                    className={({ isActive }) =>
                                        `group relative inline-block py-2 md:px-2 px-5 ${
                                            isActive ? 'text-[#0d438d]' : 'hover:text-[#0d438d]'
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    {({ isActive }) => (
                                        <>
                                            Course
                                            <span className={`absolute bottom-0 left-0 h-[3px] bg-[var(--primary-color)] rounded-full transition-all duration-300 ${
                                                isActive ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                        </>
                                    )}
                                </NavLink>
                            </li>

                            <li>
                                <input type="text" placeholder="Search" className="border border-2 ring-1 ring-[var(--primary-color)] outline-none rounded-sm border-[var(--primary-color )]"/>
                            </li>

                            <li className="">
                                <NavLink
                                    to="/signin"
                                    className={({ isActive }) =>
                                        `group relative text-[var(--primary-color)] border border-[var(--primary-color)] rounded inline-block py-1 md:px-6 px-5 hover:shadow-lg hover:shadow-gray-400 ${
                                            isActive ? 'text-purple-700' : ''
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    Sign In
                                    <span className="absolute bottom-0 left-0 w-0 rounded-full transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                    to="/signup"
                                    className={({ isActive }) =>
                                        `group relative bg-[var(--primary-color)] text-white rounded inline-block py-1 md:px-6 px-5 hover:shadow-lg hover:shadow-gray-400 ${
                                            isActive ? 'text-green-600' : ''
                                        }`
                                    }
                                    onClick={handleLinkClick}
                                >
                                    Sign Up
                                    <span className="absolute bottom-0 left-0 w-0 rounded-full transition-all duration-300 group-hover:w-full"></span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-6 md:hidden">
                    {menuOpen ? (
                        <X className="text-3xl cursor-pointer text-gray-800" onClick={toggleMenu} />
                    ) : (
                        <Menu className="text-3xl cursor-pointer text-gray-800" onClick={toggleMenu} />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
