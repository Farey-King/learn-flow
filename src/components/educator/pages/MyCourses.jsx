import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2, Plus, BookOpen, Send } from 'lucide-react';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';

const initialCourses = [
    {
        id: 1,
        title: 'UI/UX Design Essentials',
        level: 'Beginner',
        progress: 45,
        status: 'ongoing',
        image: null,
    },
    {
        id: 2,
        title: 'Data Analytics',
        level: 'Beginner',
        progress: 100,
        status: 'completed',
        image: img1,
    },
    {
        id: 3,
        title: 'Introduction to Excel',
        level: 'Beginner',
        progress: 100,
        status: 'completed',
        image: img2,
    },
];

export default function MyCourses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState(initialCourses);

    const handleDelete = (id) => setCourses(courses.filter(c => c.id !== id));

    const ongoing   = courses.filter(c => c.status === 'ongoing');
    const completed = courses.filter(c => c.status === 'completed');

    return (
        <div className="space-y-5">
            {/* Top row: back + new course */}
            <div className="flex items-center justify-between">
                <button
                    onClick={() => navigate('/educator/dashboard')}
                    className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                >
                    &lt; Back
                </button>
                <button
                    onClick={() => navigate('/educator/dashboard/courses/create')}
                    className="flex items-center gap-2 bg-[#69315E] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#551a4d] transition"
                >
                    <Plus size={15} /> New Course
                </button>
            </div>

            {/* Stats row */}
            <div className="flex gap-4">
                <StatCard label="Courses Created" value={courses.length} />
                <StatCard label="Daily Course Visit" value="1,002" />
            </div>

            {/* Ongoing */}
            {ongoing.length > 0 && (
                <section>
                    <h2 className="font-semibold text-gray-800 mb-3">Ongoing</h2>
                    <div className="space-y-3">
                        {ongoing.map(course => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                showPublish
                                onManage={() => navigate(`/educator/dashboard/courses/${course.id}`)}
                                onRemove={() => handleDelete(course.id)}
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* Completed */}
            {completed.length > 0 && (
                <section>
                    <h2 className="font-semibold text-gray-800 mb-3">Completed</h2>
                    <div className="space-y-3">
                        {completed.map(course => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                showPublish={false}
                                onManage={() => navigate(`/educator/dashboard/courses/${course.id}`)}
                                onRemove={() => handleDelete(course.id)}
                            />
                        ))}
                    </div>
                </section>
            )}

            {/* Empty state */}
            {courses.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                    <BookOpen size={40} className="mx-auto mb-4 opacity-40" />
                    <p className="text-sm">No courses yet. Create your first course!</p>
                    <button
                        onClick={() => navigate('/educator/dashboard/courses/create')}
                        className="mt-4 bg-[#69315E] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#551a4d] transition"
                    >
                        Create Course
                    </button>
                </div>
            )}
        </div>
    );
}

function StatCard({ label, value }) {
    return (
        <div className="bg-white border rounded-xl px-5 py-4 flex-1">
            <p className="text-xs text-gray-500 mb-1">{label}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    );
}

function CourseCard({ course, showPublish, onManage, onRemove }) {
    return (
        <div className="bg-white border rounded-xl p-4">
            <div className="flex items-start gap-3">
                {/* Thumbnail */}
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                    {course.image ? (
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                        <BookOpen size={22} className="text-gray-300" />
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                        <p className="font-semibold text-sm text-gray-800 truncate pr-2">{course.title}</p>
                        <span className="text-xs text-gray-500 flex-shrink-0 flex items-center gap-1">
                            <BookOpen size={11} /> {course.level}
                        </span>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div
                            className="bg-[#69315E] h-1.5 rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 mt-3 pt-2 border-t border-gray-50">
                <button
                    onClick={onManage}
                    className="flex items-center gap-1 text-gray-500 text-xs font-medium hover:text-[#69315E] transition"
                >
                    <Edit2 size={12} /> Manage/Edit
                </button>
                {showPublish && (
                    <button className="flex items-center gap-1 text-gray-500 text-xs font-medium hover:text-[#69315E] transition">
                        <Send size={12} /> Publish
                    </button>
                )}
                <button
                    onClick={onRemove}
                    className="flex items-center gap-1 text-red-500 text-xs font-medium hover:text-red-600 transition"
                >
                    <Trash2 size={12} /> Remove
                </button>
            </div>
        </div>
    );
}
