import React, { useState, useRef } from 'react';
import { Edit2, Linkedin, Twitter, Facebook, BookOpen, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';
import img5 from '../../../assets/img5.png';
import img6 from '../../../assets/img6.png';
import avatar from '../../../assets/Profile pic.svg';

const mockCourses = [
    { id: 1, title: 'Early Design and its Principle (Part 2)', image: img1, rating: 4, reviews: 124, level: 'Intermediate', duration: null,     badge: 'Bestseller', progress: 100, modules: 12, completedModules: 12 },
    { id: 2, title: 'Early Design and its Principle (Part 1)', image: img2, rating: 4, reviews: 124, level: 'Beginner',     duration: '2h 32m', badge: 'Free',       progress: 100, modules: 8,  completedModules: 8  },
    { id: 3, title: 'Introduction to Figma',                   image: img3, rating: 4, reviews: 124, level: 'Intermediate', duration: '1h 45m', badge: null,          progress: 100, modules: 10, completedModules: 10 },
    { id: 4, title: 'Advanced UI Design Patterns',             image: img4, rating: 0, reviews: 0,   level: 'Advanced',     duration: null,     badge: null,          progress: 55,  modules: 14, completedModules: 8  },
    { id: 5, title: 'Design Systems from Scratch',             image: img5, rating: 0, reviews: 0,   level: 'Intermediate', duration: null,     badge: null,          progress: 30,  modules: 10, completedModules: 3  },
    { id: 6, title: 'Color Theory for Digital Products',       image: img6, rating: 0, reviews: 0,   level: 'Beginner',     duration: null,     badge: null,          progress: 0,   modules: 6,  completedModules: 0  },
];

export default function EducatorProfile() {
    const navigate = useNavigate();
    const [showFullBio, setShowFullBio]     = useState(false);
    const [bannerImg, setBannerImg]         = useState(null);
    const [avatarImg, setAvatarImg]         = useState(avatar);

    const bannerInputRef = useRef(null);
    const avatarInputRef = useRef(null);

    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        if (file) setBannerImg(URL.createObjectURL(file));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) setAvatarImg(URL.createObjectURL(file));
    };

    const bio = `Lorem ipsum dolor sit amet consectetur. Mauris facilisis aliquam fringilla malesuada commodo nulla adipiscing vel. Et lacus eget pretium tristique porta suspendisse id. Viverra lectus egestas donec sed condimentum proin etiam at est. Tellus morbi pellentesque ullamcorper ac eu nisl habitant. Nunc velit libero sed iaculis sed tincidunt. Sit nec convallis neque consequat. Blandit etiam elementum hendrerit ut. Ipsum suscipit ipsum enim sed in eros tristique proin. Ultrices maecenas faucibus viverra commodo molestie elit. Lorem ipsum dolor sit amet consectetur. Mauris facilisis aliquam fringilla malesuada commodo nulla adipiscing vel.`;

    const completed  = mockCourses.filter(c => c.progress === 100);
    const incomplete = mockCourses.filter(c => c.progress < 100);

    return (
        <div className="w-full space-y-6 padding-20 box-border">

            {/* ── Banner + Avatar card ── */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-visible">

                {/* Hidden file inputs */}
                <input ref={bannerInputRef} type="file" accept="image/*" className="hidden" onChange={handleBannerChange} />
                <input ref={avatarInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />

                {/* Banner */}
                <div
                    className="relative h-64 rounded-t-2xl overflow-hidden bg-[#69315E] cursor-pointer"
                    style={bannerImg ? { backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                    onClick={() => bannerInputRef.current.click()}
                >
                    {!bannerImg && (
                        <p className="absolute inset-0 flex items-center justify-center text-white font-extrabold text-3xl tracking-[0.4em] opacity-25 select-none pointer-events-none">
                            DECODE ANALYTICS
                        </p>
                    )}

                    {/* Banner edit hint */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition bg-black/20">
                        <div className="flex items-center gap-2 bg-white/90 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">
                            <Camera size={15} /> Change banner
                        </div>
                    </div>

                    {/* Edit icon button */}
                    <button
                        onClick={(e) => { e.stopPropagation(); bannerInputRef.current.click(); }}
                        className="absolute top-4 right-4 bg-white/20 p-2.5 rounded-full hover:bg-white/40 transition"
                    >
                        <Edit2 size={15} className="text-white" />
                    </button>

                    {/* Avatar — overlaps banner bottom */}
                    <div className="absolute -bottom-16 left-10">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-xl">
                                <img src={avatarImg} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); avatarInputRef.current.click(); }}
                                className="absolute inset-0 rounded-full flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition"
                            >
                                <Camera size={18} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Profile info */}
                <div className="pt-20 pb-8 px-10">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-400 mb-0.5">Instructor</p>
                            <h2 className="text-3xl font-bold text-gray-900">Gabrielle Torrez</h2>
                            <p className="text-base text-gray-500 mt-1">Senior lecturer at Lagos state university</p>
                            <div className="flex gap-4 mt-3">
                                <Linkedin size={20} className="text-gray-500 cursor-pointer hover:text-blue-700 transition" />
                                <Twitter  size={20} className="text-gray-500 cursor-pointer hover:text-sky-500  transition" />
                                <Facebook size={20} className="text-gray-500 cursor-pointer hover:text-blue-600 transition" />
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/educator/dashboard/settings')}
                            className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition mt-2"
                        >
                            <Edit2 size={14} /> Edit profile
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Stats ── */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="grid grid-cols-3 divide-x divide-gray-200">
                    <StatItem label="Total Students" value="1,002,004" />
                    <StatItem label="Total Courses"  value="40,200"    />
                    <StatItem label="Total Reviews"  value="20,000"    />
                </div>
            </div>

            {/* ── About me ── */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <h3 className="font-bold text-base mb-3">About me</h3>
                <p className={`text-sm text-gray-600 leading-relaxed ${showFullBio ? '' : 'line-clamp-4'}`}>{bio}</p>
                <button onClick={() => setShowFullBio(!showFullBio)} className="text-sm text-[#69315E] mt-2 font-medium hover:underline">
                    {showFullBio ? 'less' : 'more'}
                </button>
            </div>

            {/* ── Completed Courses ── */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Completed Courses ({completed.length})</h3>
                    <button className="text-[#69315E] text-sm font-medium hover:underline">see all ›</button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {completed.map(course => (
                        <CourseCard key={course.id} course={course} avatarImg={avatarImg} />
                    ))}
                </div>
            </div>

            {/* ── Incomplete / Draft Courses ── */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="font-bold text-lg">Incomplete Courses ({incomplete.length})</h3>
                        <p className="text-sm text-gray-500 mt-0.5">Finish setting up these courses to publish them</p>
                    </div>
                    <button
                        onClick={() => navigate('/educator/dashboard/courses')}
                        className="text-[#69315E] text-sm font-medium hover:underline"
                    >
                        Manage all ›
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {incomplete.map(course => (
                        <CourseCard key={course.id} course={course} avatarImg={avatarImg} incomplete />
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatItem({ label, value }) {
    return (
        <div className="flex flex-col items-center py-7">
            <p className="text-sm font-semibold text-gray-700 mb-1">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
    );
}

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map(i => (
                <svg key={i} className={`w-3.5 h-3.5 ${i <= rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function CourseCard({ course, avatarImg, incomplete }) {
    const navigate = useNavigate();
    const progressColor = course.progress === 100 ? 'bg-[#69315E]' : course.progress >= 50 ? 'bg-amber-400' : 'bg-red-400';
    const progressLabel = course.progress === 100 ? '100% Complete' : `${course.progress}% Complete`;

    return (
        <div className="rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition flex flex-col">
            {/* Thumbnail */}
            <div className="relative h-40 overflow-hidden bg-gray-100 flex-shrink-0">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                {course.badge && (
                    <span className={`absolute top-2 left-2 text-xs font-semibold px-2 py-0.5 rounded-full ${course.badge === 'Free' ? 'bg-teal-500 text-white' : 'bg-yellow-400 text-gray-900'}`}>
                        {course.badge}
                    </span>
                )}
                {incomplete && (
                    <span className="absolute top-2 right-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                        {course.progress === 0 ? 'Draft' : 'In Progress'}
                    </span>
                )}
            </div>

            <div className="p-4 flex flex-col gap-2 flex-1">
                {/* Progress bar */}
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-semibold ${course.progress === 100 ? 'text-[#69315E]' : course.progress >= 50 ? 'text-amber-500' : 'text-red-500'}`}>
                            {progressLabel}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className={`${progressColor} h-1.5 rounded-full transition-all`} style={{ width: `${course.progress}%` }} />
                    </div>
                </div>

                {/* Title */}
                <p className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug">{course.title}</p>

                {/* Modules */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <BookOpen size={13} className="text-gray-400" />
                    <span>{course.completedModules}/{course.modules} modules</span>
                    <span>·</span>
                    <span>{course.level}</span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-1.5">
                    <img src={avatarImg} alt="" className="w-5 h-5 rounded-full object-cover" />
                    <span className="text-xs text-gray-500">by Gabrielle Torrez</span>
                </div>

                {/* Rating (only for completed) */}
                {!incomplete && course.reviews > 0 && (
                    <div className="flex items-center gap-1">
                        <StarRating rating={course.rating} />
                        <span className="text-xs text-gray-500">{course.rating}/5 ({course.reviews} ratings)</span>
                    </div>
                )}

                {/* Duration */}
                {course.duration && (
                    <p className="text-xs text-gray-400">{course.duration}</p>
                )}

                {/* Edit button for incomplete */}
                {incomplete && (
                    <button
                        onClick={() => navigate('/educator/dashboard/courses')}
                        className="mt-auto w-full flex items-center justify-center gap-1.5 border border-[#69315E] text-[#69315E] text-xs font-semibold py-2 rounded-lg hover:bg-[#69315E] hover:text-white transition"
                    >
                        <Edit2 size={12} /> Complete course details
                    </button>
                )}
            </div>
        </div>
    );
}
