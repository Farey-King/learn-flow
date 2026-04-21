import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, Star, TrendingUp, Play, ChevronRight, Award, Calendar } from 'lucide-react';

const ENROLLED_COURSES = [
    { id: 1, title: 'Early Design and its Principle', instructor: 'Gabrielle Torres', progress: 35, duration: '2h 32m', level: 'Intermediate', color: 'from-[#0d2244] to-[#1a3560]' },
    { id: 2, title: 'UX/UI Design Fundamentals', instructor: 'Sandra Dioup', progress: 68, duration: '3h 10m', level: 'Beginner', color: 'from-[#1a0d2e] to-[#3b1635]' },
    { id: 3, title: 'Advanced Figma Techniques', instructor: 'Kacy Kuzre', progress: 12, duration: '4h 05m', level: 'Advanced', color: 'from-[#0f2030] to-[#1e4060]' },
];

const UPCOMING = [
    { id: 1, title: 'Live Q&A — UX Research Methods', instructor: 'Gabrielle Torres', date: 'Today', time: '5:00 PM', type: 'Live' },
    { id: 2, title: 'Quiz: Design Principles', instructor: 'Sandra Dioup', date: 'Tomorrow', time: '10:00 AM', type: 'Quiz' },
    { id: 3, title: 'Workshop: Figma Prototyping', instructor: 'Kacy Kuzre', date: 'Thu, Apr 24', time: '3:00 PM', type: 'Workshop' },
];

const STATS = [
    { label: 'Courses Enrolled', value: '3', icon: BookOpen, color: 'bg-purple-50 text-[#69315E]' },
    { label: 'Hours Learned', value: '14.5', icon: Clock, color: 'bg-blue-50 text-blue-600' },
    { label: 'Avg. Rating Given', value: '4.8', icon: Star, color: 'bg-yellow-50 text-yellow-600' },
    { label: 'Streak (days)', value: '7', icon: TrendingUp, color: 'bg-green-50 text-green-600' },
];

export default function StudentHome() {
    const navigate = useNavigate();

    return (
        <div className="p-6 space-y-8">
            {/* Welcome Banner */}
            <div
                className="relative rounded-2xl overflow-hidden px-8 py-8"
                style={{ background: 'linear-gradient(135deg, #3b1635 0%, #69315E 60%, #8b4c7a 100%)' }}
            >
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)',
                    }}
                />
                <div className="relative">
                    <p className="text-white/70 text-sm font-medium mb-1">Welcome back,</p>
                    <h1 className="text-2xl font-bold text-white mb-2">Esa Kris 👋</h1>
                    <p className="text-white/70 text-sm max-w-md">
                        You're on a 7-day learning streak! Keep it up and unlock your next achievement.
                    </p>
                    <button
                        onClick={() => navigate('/courses')}
                        className="mt-5 px-5 py-2 bg-white text-[#69315E] rounded-lg text-sm font-semibold hover:bg-white/90 transition"
                    >
                        Browse New Courses
                    </button>
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2">
                    <Award size={64} className="text-white/20" />
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {STATS.map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                            <Icon size={18} />
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                    </div>
                ))}
            </div>

            {/* Continue Learning */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-bold text-gray-900">Continue Learning</h2>
                    <button
                        onClick={() => navigate('/dashboard/courses')}
                        className="text-sm text-[#69315E] font-medium flex items-center gap-1 hover:underline"
                    >
                        View all <ChevronRight size={14} />
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {ENROLLED_COURSES.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
                            onClick={() => navigate(`/courses/${course.id}`)}
                        >
                            {/* Thumbnail */}
                            <div className={`relative h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                                <div className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(100,149,237,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(100,149,237,0.4) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px',
                                    }}
                                />
                                <button className="relative w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center hover:bg-white/30 transition">
                                    <Play size={16} className="text-white ml-0.5" fill="white" />
                                </button>
                            </div>

                            <div className="p-4">
                                <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1">{course.title}</h3>
                                <p className="text-xs text-gray-500 mb-3">by {course.instructor}</p>

                                {/* Progress bar */}
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-[#69315E] rounded-full transition-all"
                                            style={{ width: `${course.progress}%` }}
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-[#69315E] flex-shrink-0">{course.progress}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Upcoming Schedule */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-bold text-gray-900">Upcoming Schedule</h2>
                    <button className="text-sm text-[#69315E] font-medium flex items-center gap-1 hover:underline">
                        View all <ChevronRight size={14} />
                    </button>
                </div>
                <div className="space-y-3">
                    {UPCOMING.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-xl border border-gray-100 shadow-sm px-5 py-4 flex items-center gap-4 hover:shadow-md transition cursor-pointer"
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                event.type === 'Live' ? 'bg-red-50 text-red-500' :
                                event.type === 'Quiz' ? 'bg-yellow-50 text-yellow-600' :
                                'bg-blue-50 text-blue-500'
                            }`}>
                                {event.type === 'Live' ? <Play size={16} /> : event.type === 'Quiz' ? <Star size={16} /> : <Calendar size={16} />}
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-semibold text-gray-900">{event.title}</p>
                                <p className="text-xs text-gray-500">{event.instructor}</p>
                            </div>
                            <div className="text-right flex-shrink-0">
                                <p className="text-xs font-semibold text-gray-800">{event.date}</p>
                                <p className="text-xs text-gray-500">{event.time}</p>
                            </div>
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                                event.type === 'Live' ? 'bg-red-50 text-red-500' :
                                event.type === 'Quiz' ? 'bg-yellow-50 text-yellow-600' :
                                'bg-blue-50 text-blue-500'
                            }`}>
                                {event.type}
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
