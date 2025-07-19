import React from 'react'
import courseImg1 from '../../assets/img2.png';
import courseImg2 from '../../assets/img3.png';
import courseImg3 from '../../assets/img4.png';
import courseImg4 from '../../assets/img6.png';
import chartIcon from '../../assets/chart-bar.png';
import avater from '../../assets/avater1.png';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';


export default function ExploreCourses() {
    return (
        <div className='px-[8%] py-[3%] mb-10'>
            <div className='text-center'>
                <h2 className='text-[1.6rem] font-[700] mb-2'>EXPLORE COURSES</h2>
                <p className='text-[.9rem] font-[500] text-[var(--primary-color)] mb-3'>Empower Your Journey: Invest in Knowledge Today!</p>
                <p className='text-[.9rem] pl-12 mb-4 leading-[1.5]'> we promise to embark you on a transformative career journey in tech with our comprehensive courses. Acquire cutting-edge skills, open doors to innovation, and shape a thriving future in the tech industry.</p>
            </div>

            <div className='grid grid-cols md:grid-cols-3 gap-6 pt-20 justify-center'>
                <div className="p-4 border border-[#B1B4CA] rounded-lg w-80 shadow-sm">
                    {/* Image */}
                    <img src={courseImg1} alt="Course one" className="rounded-md mb-4 w-full" />

                    {/* Title */}
                    <h2 className="font-semibold text-lg text-[#1E1E1E] mb-1">Data Analytics</h2>

                    {/* Instructor */}
                    <div className='flex gap-2 py-3'>
                        <div className='w-5 h-5'>    <img src={avater} alt="avater" />
                        </div>
                        <p className="text-[.7rem] text-[#555] mb-2">by Dee Roney</p>

                    </div>
                    {/* Stars & Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847 1.417 8.263L12 18.896l-7.417 4.962L6 15.595 0 9.748l8.332-1.59z" />
                            </svg>
                        ))}
                        <span className="text-sm text-[#555] ml-1">4.50 (24)</span>
                    </div>

                    {/* Duration, Level */}
                    <div className="flex items-center justify-between text-sm text-[#555] mb-2">
                        <div className="flex items-center gap-1">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                                />
                            </svg>
                            <span>2h 32m</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className='w-4 h-4'><img src={chartIcon} alt="chart" /></div>
                            <span>Beginner</span>
                        </div>
                    </div>

                    {/* View Course & Price */}
                    <div className="flex justify-between items-center text-[.7rem] font-[700]">
                        <NavLink to='' className="">VIEW COURSE <strong>&gt;</strong></NavLink>
                        <span className="text-[var(--primary-color)]">Free</span>
                    </div>
                </div>


                <div className="p-4 border border-[#B1B4CA] rounded-lg w-80 shadow-sm">
                    {/* Image */}
                    <img src={courseImg2} alt="Course one" className="rounded-md mb-4 w-full" />

                    {/* Title */}
                    <h2 className="font-semibold text-lg text-[#1E1E1E] mb-1">Cyber Security</h2>

                    {/* Instructor */}
                    <div className='flex gap-2 py-3'>
                        <div className='w-5 h-5'>    <img src={avater} alt="avater" />
                        </div>
                        <p className="text-[.7rem] text-[#555] mb-2">by Dee Roney</p>

                    </div>
                    {/* Stars & Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847 1.417 8.263L12 18.896l-7.417 4.962L6 15.595 0 9.748l8.332-1.59z" />
                            </svg>
                        ))}
                        <span className="text-sm text-[#555] ml-1">4.50 (24)</span>
                    </div>

                    {/* Duration, Level */}
                    <div className="flex items-center justify-between text-sm text-[#555] mb-2">
                        <div className="flex items-center gap-1">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                                />
                            </svg>
                            <span>2h 32m</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className='w-4 h-4'><img src={chartIcon} alt="chart" /></div>
                            <span>Beginner</span>
                        </div>
                    </div>

                    {/* View Course & Price */}
                    <div className="flex justify-between items-center text-[.7rem] font-[700]">
                        <NavLink to='' className="">VIEW COURSE <strong>&gt;</strong></NavLink>
                        <span className="text-[var(--primary-color)]">Free</span>
                    </div>
                </div>

                <div className="p-4 border border-[#B1B4CA] rounded-lg w-80 shadow-sm">
                    {/* Image */}
                    <img src={courseImg3} alt="Course one" className="rounded-md mb-4 w-full" />

                    {/* Title */}
                    <h2 className="font-semibold text-lg text-[#1E1E1E] mb-1">UI/UX Design</h2>

                    {/* Instructor */}
                    <div className='flex gap-2 py-3'>
                        <div className='w-5 h-5'>    <img src={avater} alt="avater" />
                        </div>
                        <p className="text-[.7rem] text-[#555] mb-2">by Dee Roney</p>

                    </div>
                    {/* Stars & Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847 1.417 8.263L12 18.896l-7.417 4.962L6 15.595 0 9.748l8.332-1.59z" />
                            </svg>
                        ))}
                        <span className="text-sm text-[#555] ml-1">4.50 (24)</span>
                    </div>

                    {/* Duration, Level */}
                    <div className="flex items-center justify-between text-sm text-[#555] mb-2">
                        <div className="flex items-center gap-1">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                                />
                            </svg>
                            <span>2h 32m</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className='w-4 h-4'><img src={chartIcon} alt="chart" /></div>
                            <span>Beginner</span>
                        </div>
                    </div>

                    {/* View Course & Price */}
                    <div className="flex justify-between items-center text-[.7rem] font-[700]">
                        <NavLink to='' className="">VIEW COURSE <strong>&gt;</strong></NavLink>
                        <span className="text-[var(--primary-color)]">Free</span>
                    </div>
                </div>

                <div className="p-4 border border-[#B1B4CA] rounded-lg w-80 shadow-sm">
                    {/* Image */}
                    <img src={courseImg4} alt="Course one" className="rounded-md mb-4 w-full" />

                    {/* Title */}
                    <h2 className="font-semibold text-lg text-[#1E1E1E] mb-1">Product Design</h2>

                    {/* Instructor */}
                    <div className='flex gap-2 py-3'>
                        <div className='w-5 h-5'>    <img src={avater} alt="avater" />
                        </div>
                        <p className="text-[.7rem] text-[#555] mb-2">by Dee Roney</p>

                    </div>
                    {/* Stars & Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847 1.417 8.263L12 18.896l-7.417 4.962L6 15.595 0 9.748l8.332-1.59z" />
                            </svg>
                        ))}
                        <span className="text-sm text-[#555] ml-1">4.50 (24)</span>
                    </div>

                    {/* Duration, Level */}
                    <div className="flex items-center justify-between text-sm text-[#555] mb-2">
                        <div className="flex items-center gap-1">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                                />
                            </svg>
                            <span>2h 32m</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className='w-4 h-4'><img src={chartIcon} alt="chart" /></div>
                            <span>Beginner</span>
                        </div>
                    </div>

                    {/* View Course & Price */}
                    <div className="flex justify-between items-center text-[.7rem] font-[700]">
                        <NavLink to='' className="border border-1 border-[var(--primary-color)] p-1 px-3 rounded">15,000</NavLink>
                        <span className="font-[600]">45,000 NGN</span>
                    </div>
                </div>


                <div className="p-4 border border-[#B1B4CA] rounded-lg w-80 shadow-sm">
                    {/* Image */}
                    <img src={courseImg4} alt="Course one" className="rounded-md mb-4 w-full" />

                    {/* Title */}
                    <h2 className="font-semibold text-lg text-[#1E1E1E] mb-1">Python Programming</h2>

                    {/* Instructor */}
                    <div className='flex gap-2 py-3'>
                        <div className='w-5 h-5'>    <img src={avater} alt="avater" />
                        </div>
                        <p className="text-[.7rem] text-[#555] mb-2">by Dee Roney</p>

                    </div>
                    {/* Stars & Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847 1.417 8.263L12 18.896l-7.417 4.962L6 15.595 0 9.748l8.332-1.59z" />
                            </svg>
                        ))}
                        <span className="text-sm text-[#555] ml-1">4.50 (24)</span>
                    </div>

                    {/* Duration, Level */}
                    <div className="flex items-center justify-between text-sm text-[#555] mb-2">
                        <div className="flex items-center gap-1">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                                />
                            </svg>
                            <span>2h 32m</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className='w-4 h-4'><img src={chartIcon} alt="chart" /></div>
                            <span>Beginner</span>
                        </div>
                    </div>

                    {/* View Course & Price */}
                    <div className="flex justify-between items-center text-[.7rem] font-[700]">
                        <NavLink to='' className="border border-1 border-[var(--primary-color)] p-1 px-3 rounded">15,000</NavLink>
                        <span className="font-[600]">45,000 NGN</span>
                    </div>
                </div>


                <div className="p-4 border border-[#B1B4CA] rounded-lg w-80 shadow-sm">
                    {/* Image */}
                    <img src={courseImg4} alt="Course one" className="rounded-md mb-4 w-full" />

                    {/* Title */}
                    <h2 className="font-semibold text-lg text-[#1E1E1E] mb-1">JavaScript</h2>

                    {/* Instructor */}
                    <div className='flex gap-2 py-3'>
                        <div className='w-5 h-5'>    <img src={avater} alt="avater" />
                        </div>
                        <p className="text-[.7rem] text-[#555] mb-2">by Dee Roney</p>

                    </div>
                    {/* Stars & Rating */}
                    <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-yellow-400"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .587l3.668 7.571L24 9.748l-6 5.847 1.417 8.263L12 18.896l-7.417 4.962L6 15.595 0 9.748l8.332-1.59z" />
                            </svg>
                        ))}
                        <span className="text-sm text-[#555] ml-1">4.50 (24)</span>
                    </div>

                    {/* Duration, Level */}
                    <div className="flex items-center justify-between text-sm text-[#555] mb-2">
                        <div className="flex items-center gap-1">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                                />
                            </svg>
                            <span>2h 32m</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className='w-4 h-4'><img src={chartIcon} alt="chart" /></div>
                            <span>Beginner</span>
                        </div>
                    </div>

                    {/* View Course & Price */}
                    <div className="flex justify-between items-center text-[.7rem] font-[700]">
                        <NavLink to='' className="border border-1 border-[var(--primary-color)] p-1 px-3 rounded">15,000</NavLink>
                        <span className="font-[600]">45,000 NGN</span>
                    </div>
                </div>
            </div>
            <div className="w-fit m-auto mt-10">
                <Button label="View More Courses" buttonVariant="white" />
            </div>

        </div>
    )
}
