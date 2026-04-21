import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Clock, BarChart2, ChevronDown } from 'lucide-react';

const CATEGORIES = ['All', 'Design', 'Business', 'Development', 'Marketing', 'Data Science'];

const BADGE_STYLES = {
    Bestseller: 'bg-yellow-400 text-yellow-900',
    New: 'bg-green-400 text-green-900',
    Popular: 'bg-blue-400 text-blue-900',
};

const MOCK_COURSES = [
    { id: 1, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 324, duration: '2h 32m', level: 'Intermediate', badge: 'Bestseller', isFree: false },
    { id: 2, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 324, duration: '2h 12m', level: 'Intermediate', badge: 'New', isFree: false },
    { id: 3, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 124, duration: '2h 32m', level: 'Intermediate', badge: 'Popular', isFree: false },
    { id: 4, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 324, duration: '2h 32m', level: 'Intermediate', badge: 'Bestseller', isFree: false },
    { id: 5, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 214, duration: '2h 12m', level: 'Intermediate', badge: 'New', isFree: false },
    { id: 6, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 324, duration: '2h 32m', level: 'Intermediate', badge: 'Popular', isFree: false },
    { id: 7, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 324, duration: '2h 32m', level: 'Intermediate', badge: 'Bestseller', isFree: false },
    { id: 8, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 324, duration: '2h 32m', level: 'Intermediate', badge: 'New', isFree: false },
    { id: 9, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 124, duration: '2h 32m', level: 'Intermediate', badge: 'Popular', isFree: false },
];

const FREE_COURSES = [
    { id: 10, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 324, duration: '2h 32m', level: 'Intermediate', badge: 'Bestseller', isFree: true },
    { id: 11, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 214, duration: '2h 12m', level: 'Intermediate', badge: 'New', isFree: true },
    { id: 12, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 124, duration: '2h 32m', level: 'Intermediate', badge: 'Popular', isFree: true },
    { id: 13, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 324, duration: '2h 32m', level: 'Intermediate', badge: 'Bestseller', isFree: true },
    { id: 14, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 324, duration: '2h 12m', level: 'Intermediate', badge: 'New', isFree: true },
    { id: 15, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', rating: 4, reviewCount: 124, duration: '2h 32m', level: 'Intermediate', badge: 'Popular', isFree: true },
];

function CourseCard({ course, onEnroll }) {
    return (
        <div
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onEnroll(course.id)}
        >
            {/* Course image placeholder */}
            <div className="relative h-40 bg-gradient-to-br from-[#0a1628] via-[#0d2244] to-[#1a3560] flex items-center justify-center overflow-hidden">
                {/* Tech grid overlay */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(100,149,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(100,149,237,0.3) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                    }}
                />
                <div className="relative text-center px-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-1">
                        <span className="text-white text-lg">▶</span>
                    </div>
                </div>
                {course.badge && (
                    <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded ${BADGE_STYLES[course.badge]}`}>
                        {course.badge}
                    </span>
                )}
            </div>

            <div className="p-3">
                <h3 className="font-semibold text-sm text-gray-900 leading-snug mb-2">{course.title}</h3>

                {/* Instructor */}
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-[#69315E] flex items-center justify-center text-white text-xs flex-shrink-0">
                        {course.instructor[0]}
                    </div>
                    <span className="text-xs text-gray-500">by {course.instructor}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                            key={s}
                            size={12}
                            className={s <= course.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-200'}
                        />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">{course.rating}/5</span>
                    <span className="text-xs text-gray-400">({course.reviewCount.toLocaleString()} verified ratings)</span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                        <BarChart2 size={11} />
                        {course.level}
                    </span>
                </div>

                <button
                    className="w-full py-1.5 rounded-lg text-sm font-medium bg-[#69315E] text-white hover:bg-[#541f4a] transition"
                    onClick={(e) => { e.stopPropagation(); onEnroll(course.id); }}
                >
                    Enroll
                </button>
            </div>
        </div>
    );
}

export default function CoursesPage() {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [showMore, setShowMore] = useState(false);
    const [showMoreFree, setShowMoreFree] = useState(false);

    const visibleCourses = showMore ? MOCK_COURSES : MOCK_COURSES.slice(0, 6);
    const visibleFree = showMoreFree ? FREE_COURSES : FREE_COURSES.slice(0, 6);

    const handleEnroll = (id) => navigate(`/courses/${id}`);

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div
                className="relative py-16 px-[5%] overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #312e81 70%, #4f46e5 100%)',
                }}
            >
                {/* Decorative circles */}
                <div className="absolute top-[-60px] right-[-60px] w-72 h-72 rounded-full border border-white/10 opacity-30" />
                <div className="absolute top-[-30px] right-[-30px] w-48 h-48 rounded-full border border-white/10 opacity-20" />
                <div className="absolute bottom-[-40px] left-[10%] w-40 h-40 rounded-full bg-purple-600/20 blur-2xl" />

                <div className="relative max-w-2xl">
                    <h1 className="text-4xl font-bold text-white mb-2">Courses</h1>
                    <p className="text-white/70 text-base mb-8">Empower Your Digital Journey with Us</p>

                    {/* Search row */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
                            <span className="text-white/70 text-xs">All</span>
                            <ChevronDown size={14} className="text-white/60" />
                        </div>
                        <div className="flex-1 flex items-center gap-2 bg-white/10 border border-white/20 rounded-lg px-4 py-2.5">
                            <input
                                type="text"
                                placeholder="Search all categories..."
                                className="flex-1 bg-transparent text-white placeholder-white/50 text-sm outline-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search size={16} className="text-white/60 flex-shrink-0" />
                        </div>
                    </div>

                    {/* Filter pills */}
                    <div className="flex items-center gap-3">
                        {['Free', 'Paid', 'All levels'].map((pill) => (
                            <button
                                key={pill}
                                onClick={() => setActiveFilter(pill === activeFilter ? 'All' : pill)}
                                className={`px-5 py-1.5 rounded-full text-sm font-medium border transition ${
                                    activeFilter === pill
                                        ? 'bg-white text-[#312e81] border-white'
                                        : 'border-white/40 text-white/80 hover:border-white/70 hover:text-white'
                                }`}
                            >
                                {pill}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Trending Courses */}
            <section className="px-[5%] py-12">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Find trending courses</h2>
                    <p className="text-gray-500 text-sm mt-1">Break into tech with any of the courses we have specially created for you</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleCourses.map((course) => (
                        <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
                    ))}
                </div>

                {!showMore && MOCK_COURSES.length > 6 && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setShowMore(true)}
                            className="text-sm text-gray-600 hover:text-[#69315E] font-medium flex items-center gap-1 mx-auto transition"
                        >
                            View more courses <ChevronDown size={16} />
                        </button>
                    </div>
                )}
            </section>

            {/* Free Courses Section */}
            <section
                className="px-[5%] py-12"
                style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)' }}
            >
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">Try Free Courses</h2>
                    <p className="text-white/60 text-sm mt-1">Break into tech with any of the courses we have specially created for you</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visibleFree.map((course) => (
                        <CourseCard key={course.id} course={course} onEnroll={handleEnroll} />
                    ))}
                </div>

                {!showMoreFree && FREE_COURSES.length > 6 && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setShowMoreFree(true)}
                            className="text-sm text-white/70 hover:text-white font-medium flex items-center gap-1 mx-auto transition"
                        >
                            View all courses <ChevronDown size={16} />
                        </button>
                    </div>
                )}
            </section>

            {/* Footer */}
            <footer className="bg-[#1a0d2e] text-white/60 py-10 px-[5%]">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div>
                        <p className="text-xs">&copy; {new Date().getFullYear()} LearnFlow. All rights reserved.</p>
                    </div>
                    <div className="flex gap-8 text-xs">
                        {['Privacy Policy', 'Terms of Service', 'Help Center'].map((link) => (
                            <button key={link} className="hover:text-white transition">{link}</button>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
}
