import React, { useState } from 'react';
import { Edit2, Linkedin, Twitter, Facebook } from 'lucide-react';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import avatar from '../../../assets/avater1.png';

const mockCourses = [
    { id: 1, title: 'Early Design and its Principle (Part 2)', image: img1, rating: 4.5, reviews: 24, students: '2.3m', level: 'Intermediate', progress: 100 },
    { id: 2, title: 'Early Design and its Principle (Part 1)', image: img2, rating: 4.7, reviews: 24, students: '2.3m', level: 'Beginner', progress: 100 },
    { id: 3, title: 'Introduction to Figma', image: img3, rating: 4.5, reviews: 24, students: '2.3m', level: 'Intermediate', progress: 100 },
];

export default function EducatorProfile() {
    const [showFullBio, setShowFullBio] = useState(false);

    const bio = `Lorem ipsum dolor sit amet consectetur. Mauris facilisis aliquam fringilla malesuada commodo nulla adipiscing vel. Et locus eget pretium tristique porta suspendicisse id. Viverra porta accumsan, sed condimentum donec, sed condimentum pretium cham et oc. Tellus morbi pellentesque ullamcorper et. Blandit at velit libero et arcu sed tincidunt. Sint nec canusale.neque condimentum, blands etiam elementum hendrerit ut. Ipsum pulvinar et, ipsum altem in sed eros. Maecenas facilisis aliquam. Mauris facilisis aliquam fringilla malesuada commodo nulla adipiscing vel. Et locus eget pretium tristique porta suspendicisse id. Viverra porta accumsan, sed condimentum donec, sed condimentum pretium.`;

    return (
        <div className="space-y-6 max-w-3xl">
            {/* Profile Card */}
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                {/* Banner */}
                <div className="relative h-36 bg-[#69315E]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white font-bold text-lg tracking-[0.3em] opacity-50">DECODE ANALYTICS</p>
                    </div>
                    <button className="absolute top-3 right-3 bg-white/20 p-1.5 rounded-full hover:bg-white/30 transition">
                        <Edit2 size={14} className="text-white" />
                    </button>
                </div>

                <div className="px-6 pb-6">
                    {/* Avatar */}
                    <div className="-mt-12 mb-3">
                        <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-md">
                            <img src={avatar} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Name & Info Row */}
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-xs text-gray-500 mb-0.5">Instructor</p>
                            <h2 className="text-xl font-bold text-gray-900">Gabrielle Torrez</h2>
                            <p className="text-sm text-gray-500 mt-0.5">Senior lecturer at Lagos state university</p>
                            <div className="flex gap-3 mt-2">
                                <Linkedin size={16} className="text-gray-500 cursor-pointer hover:text-blue-700 transition" />
                                <Twitter size={16} className="text-gray-500 cursor-pointer hover:text-sky-500 transition" />
                                <Facebook size={16} className="text-gray-500 cursor-pointer hover:text-blue-600 transition" />
                            </div>
                        </div>
                        <button className="flex items-center gap-1.5 border border-gray-300 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-50 transition mt-2">
                            <Edit2 size={13} /> Edit profile
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-1 mt-5 bg-gray-50 rounded-xl p-4 border">
                        <StatItem label="Total Students" value="1,002,004" />
                        <StatItem label="Total Courses" value="40,200" />
                        <StatItem label="Total Reviews" value="20,000" />
                    </div>

                    {/* About Me */}
                    <div className="mt-5">
                        <h3 className="font-semibold text-sm mb-2">About me</h3>
                        <p className={`text-xs text-gray-600 leading-relaxed ${showFullBio ? '' : 'line-clamp-4'}`}>
                            {bio}
                        </p>
                        <button
                            onClick={() => setShowFullBio(!showFullBio)}
                            className="text-xs text-[#69315E] mt-1 font-medium hover:underline"
                        >
                            {showFullBio ? 'less' : 'more'}
                        </button>
                    </div>
                </div>
            </div>

            {/* My Courses */}
            <div className="bg-white rounded-xl border shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">My Courses (8)</h3>
                    <button className="text-[#69315E] text-sm font-medium hover:underline">see all →</button>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {mockCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatItem({ label, value }) {
    return (
        <div className="text-center">
            <p className="text-xs text-gray-500">{label}</p>
            <p className="font-bold text-sm mt-0.5">{value}</p>
        </div>
    );
}

function CourseCard({ course }) {
    return (
        <div className="rounded-lg border overflow-hidden hover:shadow-md transition cursor-pointer">
            <div className="h-20 overflow-hidden bg-gray-100">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-2">
                <div className="w-full bg-gray-200 rounded-full h-1 mb-1.5">
                    <div className="bg-[#69315E] h-1 rounded-full" style={{ width: `${course.progress}%` }} />
                </div>
                <p className="text-xs font-medium line-clamp-2 text-gray-800">{course.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">100% Complete</p>
                <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-xs">⭐ {course.rating}</span>
                    <span className="text-xs text-gray-400">({course.reviews})</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-500">
                    <span>{course.students}</span>
                    <span>·</span>
                    <span>{course.level}</span>
                </div>
            </div>
        </div>
    );
}
