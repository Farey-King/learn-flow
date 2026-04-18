import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import rect1 from '../../../assets/Rectangle 370 (1).svg';
import rect2 from '../../../assets/Rectangle 370 (2).svg';

const mockCourses = {
    1: {
        title: 'UI/UX Design Essentials',
        description: 'This course provides a comprehensive introduction to data analysis techniques, tools, and methodologies. Through a combination of theoretical concepts and hands-on practical exercises, participants will develop a solid foundation in data analysis and gain the skills necessary to extract valuable insights from various datasets.',
        image: rect1,
        enrollmentEnabled: true,
    },
    2: {
        title: 'Data Analysis Fundamentals',
        description: 'Learn data analysis techniques, tools, and methodologies. Through a combination of theoretical concepts and hands-on practical exercises, participants will develop a solid foundation in data analysis.',
        image: rect2,
        enrollmentEnabled: false,
    },
};

export default function CourseManage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const course = mockCourses[id] || mockCourses[1];
    const [enrollmentEnabled, setEnrollmentEnabled] = useState(course.enrollmentEnabled);

    return (
        <div>
            {/* Back */}
            <button
                onClick={() => navigate('/educator/dashboard/courses')}
                className="flex items-center gap-1 text-gray-600 text-sm mb-4 hover:text-gray-800"
            >
                <ChevronLeft size={16} /> Back
            </button>

            {/* Course Card */}
            <div className="bg-white rounded-xl border shadow-sm overflow-hidden max-w-2xl">
                {/* Cover Image */}
                <div className="h-52 bg-gray-100 overflow-hidden">
                    {course.image ? (
                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                            No cover image
                        </div>
                    )}
                </div>

                <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-[#69315E]">{course.title}</h2>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-1">About Course</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{course.description}</p>
                    </div>

                    {/* Enrollment Toggle */}
                    <div className="flex items-center justify-between py-3 border-t">
                        <span className="text-sm font-medium text-gray-700">Enable Enrollment for this Course</span>
                        <button
                            onClick={() => setEnrollmentEnabled(!enrollmentEnabled)}
                            className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                                enrollmentEnabled ? 'bg-[#69315E]' : 'bg-gray-300'
                            }`}
                        >
                            <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                                enrollmentEnabled ? 'translate-x-6' : 'translate-x-0'
                            }`} />
                        </button>
                    </div>

                    {/* Go to modules */}
                    <button
                        onClick={() => navigate(`/educator/dashboard/courses/${id}/modules`)}
                        className="w-full bg-[#69315E] text-white py-3 rounded-lg font-medium hover:bg-[#551a4d] transition"
                    >
                        Go to edit course module
                    </button>
                </div>
            </div>
        </div>
    );
}
