import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Play, ChevronDown, ChevronRight, ChevronLeft,
    Star, Users, Globe, BookOpen, Award,
    Check, Lock, PlayCircle, FileText
} from 'lucide-react';

const COURSE_DATA = {
    id: 1,
    title: 'Introduction to UX/A: A complete guide',
    instructor: 'Gabrielle Torres',
    instructorTitle: 'Senior UX Designer',
    rating: 4.5,
    reviewCount: 1243,
    students: 18420,
    duration: '2h 32m',
    level: 'Intermediate',
    language: 'English',
    quizzes: 12,
    totalLessons: 24,
    description: `This comprehensive course takes you through the fundamental principles of UX/UI design, from user research and wireframing to prototyping and usability testing. Whether you're a beginner or looking to sharpen your skills, this course covers everything you need to create intuitive, user-centered digital experiences.

You'll learn industry-standard tools like Figma and Adobe XD, explore design thinking methodologies, and work through real-world projects that you can add to your portfolio. By the end, you'll have the confidence and skills to design engaging digital products from scratch.`,
    modules: [
        {
            id: 1,
            title: 'Introduction to UX Design',
            duration: '45m',
            lessons: [
                { id: 1, title: 'What is UX Design?', duration: '8:32', type: 'video', completed: true },
                { id: 2, title: 'History of UX', duration: '6:14', type: 'video', completed: true },
                { id: 3, title: 'UX vs UI: Key Differences', duration: '10:05', type: 'video', completed: false },
                { id: 4, title: 'Quiz: Foundations', duration: '5 questions', type: 'quiz', completed: false },
            ],
        },
        {
            id: 2,
            title: 'User Research Methods',
            duration: '1h 12m',
            lessons: [
                { id: 5, title: 'Understanding Your Users', duration: '12:40', type: 'video', completed: false },
                { id: 6, title: 'Conducting User Interviews', duration: '15:20', type: 'video', completed: false },
                { id: 7, title: 'Creating User Personas', duration: '9:55', type: 'video', completed: false },
                { id: 8, title: 'Affinity Mapping', duration: '11:30', type: 'video', completed: false },
            ],
        },
        {
            id: 3,
            title: 'Information Architecture',
            duration: '55m',
            lessons: [
                { id: 9, title: 'Organizing Content', duration: '8:45', type: 'video', completed: false, locked: true },
                { id: 10, title: 'Card Sorting Techniques', duration: '10:12', type: 'video', completed: false, locked: true },
                { id: 11, title: 'Site Maps & User Flows', duration: '14:20', type: 'video', completed: false, locked: true },
            ],
        },
        {
            id: 4,
            title: 'Wireframing & Prototyping',
            duration: '1h 05m',
            lessons: [
                { id: 12, title: 'Low-Fidelity Wireframes', duration: '11:00', type: 'video', completed: false, locked: true },
                { id: 13, title: 'High-Fidelity Mockups', duration: '16:45', type: 'video', completed: false, locked: true },
                { id: 14, title: 'Interactive Prototypes in Figma', duration: '18:30', type: 'video', completed: false, locked: true },
            ],
        },
    ],
};

const SIMILAR_COURSES = [
    { id: 2, title: 'Product Design', badge: 'New', color: 'from-orange-900 to-orange-700' },
    { id: 3, title: 'Cybersecurity', badge: 'Popular', color: 'from-red-900 to-red-700' },
    { id: 4, title: 'Backend Development', badge: 'Bestseller', color: 'from-blue-900 to-blue-700' },
    { id: 5, title: 'UI Prototyping', badge: 'New', color: 'from-green-900 to-green-700' },
];

const TABS = ['Overview', 'Resources', 'Reviews'];

export default function CourseDetailPage() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Overview');
    const [expandedModule, setExpandedModule] = useState(1);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [currentLesson, setCurrentLesson] = useState(COURSE_DATA.modules[0].lessons[0]);

    const progress = 8; // percent

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main content area */}
            <div className="flex h-[calc(100vh-0px)]">
                {/* Left: Video + course info */}
                <div className={`flex-1 overflow-y-auto transition-all ${sidebarOpen ? 'mr-80' : ''}`}>
                    {/* Video Player */}
                    <div
                        className="relative bg-[#0a1628] flex items-center justify-center"
                        style={{ minHeight: '360px', maxHeight: '420px' }}
                    >
                        {/* Tech grid overlay */}
                        <div className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(100,149,237,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(100,149,237,0.4) 1px, transparent 1px)',
                                backgroundSize: '24px 24px',
                            }}
                        />
                        {/* Video title overlay */}
                        <div className="absolute top-4 left-6 right-6 flex items-center justify-between">
                            <button onClick={() => navigate('/courses')} className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition">
                                <ChevronLeft size={16} /> Back
                            </button>
                            <span className="text-white/60 text-xs">Your Progress</span>
                        </div>

                        {/* Play button */}
                        <button className="relative z-10 w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center hover:bg-white/30 transition backdrop-blur-sm">
                            <Play size={28} className="text-white ml-1" fill="white" />
                        </button>

                        {/* UX UI Design label */}
                        <div className="absolute bottom-8 left-6 text-white">
                            <p className="text-3xl font-black tracking-tight leading-none opacity-90">UX UI</p>
                            <p className="text-3xl font-black tracking-tight leading-none opacity-90">DESIGN</p>
                        </div>

                        {/* Progress bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
                            <div className="h-full bg-red-500 transition-all" style={{ width: `${progress}%` }} />
                        </div>
                    </div>

                    {/* Course header below video */}
                    <div className="px-6 py-5 bg-white border-b">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                                <h1 className="text-lg font-bold text-gray-900 leading-snug mb-1">{COURSE_DATA.title}</h1>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1">
                                        <Users size={13} /> {COURSE_DATA.students.toLocaleString()} students
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Globe size={13} /> {COURSE_DATA.language}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <BookOpen size={13} /> {COURSE_DATA.quizzes} quizzes
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full flex-shrink-0">
                                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                <span className="text-sm font-semibold text-gray-800">{COURSE_DATA.rating}</span>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="bg-white border-b px-6">
                        <div className="flex gap-0">
                            {TABS.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-5 py-3.5 text-sm font-medium border-b-2 transition ${
                                        activeTab === tab
                                            ? 'border-[#69315E] text-[#69315E]'
                                            : 'border-transparent text-gray-500 hover:text-gray-700'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab content */}
                    <div className="p-6">
                        {activeTab === 'Overview' && <OverviewTab course={COURSE_DATA} similarCourses={SIMILAR_COURSES} />}
                        {activeTab === 'Resources' && <ResourcesTab />}
                        {activeTab === 'Reviews' && <ReviewsTab course={COURSE_DATA} />}
                    </div>
                </div>

                {/* Right: Course content sidebar */}
                {sidebarOpen && (
                    <div className="fixed right-0 top-0 bottom-0 w-80 bg-white border-l flex flex-col shadow-lg z-10 overflow-hidden">
                        <div className="px-4 py-4 border-b flex items-center justify-between flex-shrink-0">
                            <h3 className="font-semibold text-sm text-gray-900">Course content</h3>
                            <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <ChevronRight size={18} />
                            </button>
                        </div>

                        {/* Progress */}
                        <div className="px-4 py-3 border-b bg-gray-50 flex-shrink-0">
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5">
                                <span>{progress}% complete</span>
                                <span>2 / {COURSE_DATA.totalLessons} lessons</span>
                            </div>
                            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-[#69315E] rounded-full" style={{ width: `${progress}%` }} />
                            </div>
                        </div>

                        {/* Module list */}
                        <div className="flex-1 overflow-y-auto">
                            {COURSE_DATA.modules.map((mod) => (
                                <div key={mod.id} className="border-b">
                                    <button
                                        onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
                                        className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                                    >
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{mod.title}</p>
                                            <p className="text-xs text-gray-500 mt-0.5">{mod.lessons.length} lessons · {mod.duration}</p>
                                        </div>
                                        {expandedModule === mod.id ? (
                                            <ChevronDown size={16} className="text-gray-400 flex-shrink-0" />
                                        ) : (
                                            <ChevronRight size={16} className="text-gray-400 flex-shrink-0" />
                                        )}
                                    </button>

                                    {expandedModule === mod.id && (
                                        <div className="bg-gray-50">
                                            {mod.lessons.map((lesson) => (
                                                <button
                                                    key={lesson.id}
                                                    onClick={() => !lesson.locked && setCurrentLesson(lesson)}
                                                    className={`w-full px-4 py-2.5 flex items-center gap-3 text-left transition ${
                                                        lesson.locked
                                                            ? 'opacity-50 cursor-not-allowed'
                                                            : currentLesson?.id === lesson.id
                                                            ? 'bg-purple-50 text-[#69315E]'
                                                            : 'hover:bg-gray-100'
                                                    }`}
                                                >
                                                    <div className="flex-shrink-0">
                                                        {lesson.locked ? (
                                                            <Lock size={14} className="text-gray-400" />
                                                        ) : lesson.completed ? (
                                                            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                                                                <Check size={10} className="text-white" />
                                                            </div>
                                                        ) : lesson.type === 'quiz' ? (
                                                            <FileText size={14} className="text-gray-500" />
                                                        ) : (
                                                            <PlayCircle size={14} className="text-gray-500" />
                                                        )}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-xs font-medium text-gray-800 truncate">{lesson.title}</p>
                                                    </div>
                                                    <span className="text-xs text-gray-400 flex-shrink-0">{lesson.duration}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Toggle sidebar button when closed */}
                {!sidebarOpen && (
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="fixed right-4 top-1/2 -translate-y-1/2 z-20 bg-white border shadow-md rounded-full p-2 hover:bg-gray-50 transition"
                    >
                        <ChevronLeft size={18} className="text-gray-600" />
                    </button>
                )}
            </div>
        </div>
    );
}

function OverviewTab({ course, similarCourses }) {
    const [descExpanded, setDescExpanded] = useState(false);

    return (
        <div className="max-w-2xl space-y-8">
            {/* About this course */}
            <section>
                <h2 className="text-base font-bold text-gray-900 mb-4">About this course</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                    {[
                        { icon: Users, label: 'Students enrolled', value: course.students.toLocaleString() },
                        { icon: Globe, label: 'Language', value: course.language },
                        { icon: BookOpen, label: 'Quizzes', value: course.quizzes },
                        { icon: Award, label: 'Certificate', value: 'Included' },
                    ].map(({ icon: Icon, label, value }) => (
                        <div key={label} className="bg-gray-50 rounded-xl p-3 text-center">
                            <Icon size={18} className="text-[#69315E] mx-auto mb-1" />
                            <p className="text-xs text-gray-500">{label}</p>
                            <p className="text-sm font-semibold text-gray-800">{value}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Description */}
            <section>
                <h2 className="text-base font-bold text-gray-900 mb-3">Description</h2>
                <div className={`text-sm text-gray-600 leading-relaxed ${!descExpanded ? 'line-clamp-4' : ''}`}>
                    {course.description}
                </div>
                <button
                    onClick={() => setDescExpanded(!descExpanded)}
                    className="text-sm text-[#69315E] font-medium mt-2 hover:underline"
                >
                    {descExpanded ? 'Show less' : 'Read more'}
                </button>
            </section>

            {/* Course content */}
            <section>
                <h2 className="text-base font-bold text-gray-900 mb-4">Course content</h2>
                <div className="space-y-2">
                    {course.modules.map((mod) => (
                        <div key={mod.id} className="border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-800">{mod.title}</p>
                                <p className="text-xs text-gray-500 mt-0.5">{mod.lessons.length} lessons · {mod.duration}</p>
                            </div>
                            <ChevronRight size={16} className="text-gray-400" />
                        </div>
                    ))}
                </div>
            </section>

            {/* You might also like */}
            <section>
                <h2 className="text-base font-bold text-gray-900 mb-4">You might also like</h2>
                <div className="grid grid-cols-2 gap-4">
                    {similarCourses.map((c) => (
                        <div
                            key={c.id}
                            className={`rounded-xl bg-gradient-to-br ${c.color} p-4 cursor-pointer hover:opacity-90 transition relative overflow-hidden`}
                            style={{ minHeight: '100px' }}
                        >
                            {c.badge && (
                                <span className="absolute top-2 right-2 text-xs bg-yellow-400 text-yellow-900 font-semibold px-2 py-0.5 rounded">
                                    {c.badge}
                                </span>
                            )}
                            <p className="text-white font-semibold text-sm mt-6">{c.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

function ResourcesTab() {
    const resources = [
        { name: 'Course Slides — Module 1.pdf', size: '2.4 MB', type: 'PDF' },
        { name: 'UX Research Template.xlsx', size: '1.1 MB', type: 'Excel' },
        { name: 'Figma Starter File.fig', size: '5.6 MB', type: 'Figma' },
        { name: 'Reading List.pdf', size: '320 KB', type: 'PDF' },
    ];
    return (
        <div className="max-w-lg space-y-3">
            <h2 className="text-base font-bold text-gray-900 mb-4">Course Resources</h2>
            {resources.map((r) => (
                <div key={r.name} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                            <FileText size={16} className="text-[#69315E]" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-800">{r.name}</p>
                            <p className="text-xs text-gray-500">{r.size}</p>
                        </div>
                    </div>
                    <span className="text-xs font-medium text-[#69315E] border border-[#69315E] px-2 py-0.5 rounded">
                        Download
                    </span>
                </div>
            ))}
        </div>
    );
}

function ReviewsTab({ course }) {
    const reviews = [
        { id: 1, name: 'Alex M.', rating: 5, date: '2 weeks ago', text: 'Excellent course! The content is well-structured and easy to follow. Highly recommend.' },
        { id: 2, name: 'Sarah K.', rating: 4, date: '1 month ago', text: 'Very helpful for beginners. The Figma exercises were especially useful.' },
        { id: 3, name: 'James O.', rating: 5, date: '1 month ago', text: 'Best UX course I\'ve taken. The instructor explains concepts clearly with real-world examples.' },
    ];
    return (
        <div className="max-w-lg">
            <div className="flex items-center gap-4 mb-6">
                <div className="text-center">
                    <p className="text-5xl font-black text-gray-900">{course.rating}</p>
                    <div className="flex gap-0.5 mt-1 justify-center">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={14} className={s <= Math.round(course.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-200'} />
                        ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Course rating</p>
                </div>
                <div className="flex-1 space-y-1.5">
                    {[5, 4, 3, 2, 1].map((n) => (
                        <div key={n} className="flex items-center gap-2">
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${n === 5 ? 65 : n === 4 ? 25 : n === 3 ? 7 : n === 2 ? 2 : 1}%` }} />
                            </div>
                            <span className="text-xs text-gray-500 w-3">{n}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="space-y-4">
                {reviews.map((r) => (
                    <div key={r.id} className="border-b border-gray-100 pb-4">
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-[#69315E] flex items-center justify-center text-white text-xs font-semibold">
                                    {r.name[0]}
                                </div>
                                <span className="text-sm font-medium text-gray-800">{r.name}</span>
                            </div>
                            <span className="text-xs text-gray-400">{r.date}</span>
                        </div>
                        <div className="flex gap-0.5 mb-1.5">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} size={12} className={s <= r.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-200'} />
                            ))}
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
