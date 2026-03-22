import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2, Plus, BookOpen } from 'lucide-react';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';

const initialCourses = [
    {
        id: 1,
        title: 'UI/UX Design Essentials',
        description: 'A comprehensive introduction to UI/UX design techniques, tools, and methodologies.',
        modules: 5,
        students: 1240,
        status: 'Published',
        image: img1,
    },
    {
        id: 2,
        title: 'Data Analysis Fundamentals',
        description: 'Learn data analysis techniques and methodologies through hands-on exercises.',
        modules: 3,
        students: 980,
        status: 'Draft',
        image: null,
    },
    {
        id: 3,
        title: 'Figma for Beginners',
        description: 'Master Figma from scratch with practical design exercises and real-world projects.',
        modules: 8,
        students: 2100,
        status: 'Published',
        image: img2,
    },
];

export default function MyCourses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState(initialCourses);

    const handleDelete = (id) => setCourses(courses.filter(c => c.id !== id));

    return (
        <div className="space-y-4">
            {/* Header Actions */}
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">{courses.length} courses</p>
                <button
                    onClick={() => navigate('/educator/dashboard/courses/create')}
                    className="flex items-center gap-2 bg-[#69315E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#551a4d] transition"
                >
                    <Plus size={16} /> Create New Course
                </button>
            </div>

            {/* Course List */}
            <div className="grid gap-4">
                {courses.map(course => (
                    <div key={course.id} className="bg-white rounded-xl border shadow-sm p-4 flex gap-4 items-center">
                        {/* Thumbnail */}
                        <div className="w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                            {course.image ? (
                                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No Image</div>
                            )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-800 truncate">{course.title}</h3>
                            <p className="text-xs text-gray-500 mt-1 line-clamp-2">{course.description}</p>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-xs text-gray-500">{course.modules} modules</span>
                                <span className="text-xs text-gray-400">·</span>
                                <span className="text-xs text-gray-500">{course.students.toLocaleString()} students</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                    course.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                }`}>
                                    {course.status}
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4 flex-shrink-0">
                            <button
                                onClick={() => navigate(`/educator/dashboard/courses/${course.id}`)}
                                className="flex items-center gap-1 text-[#69315E] text-xs font-medium hover:underline"
                            >
                                <Edit2 size={13} /> Manage
                            </button>
                            <button
                                onClick={() => handleDelete(course.id)}
                                className="flex items-center gap-1 text-red-500 text-xs font-medium hover:underline"
                            >
                                <Trash2 size={13} /> Remove
                            </button>
                        </div>
                    </div>
                ))}

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
        </div>
    );
}
