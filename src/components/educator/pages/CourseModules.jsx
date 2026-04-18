import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Edit2, Trash2, Plus, ChevronLeft } from 'lucide-react';
import courseContainer from '../../../assets/Container (1).svg';

const initialModules = [
    { id: 1, title: 'Auto Layouts and Components in Figma' },
    { id: 2, title: 'Advanced Typography in Figma' },
    { id: 3, title: 'Building Design Systems' },
    { id: 4, title: 'Prototyping and User Testing' },
    { id: 5, title: 'Handoff to Developers' },
];

export default function CourseModules() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modules, setModules] = useState(initialModules);
    const [coverImage, setCoverImage] = useState(courseContainer);
    const [enrollmentEnabled, setEnrollmentEnabled] = useState(false);

    const isComplete = !!coverImage;

    const handleCoverImage = (e) => {
        const file = e.target.files[0];
        if (file) setCoverImage(URL.createObjectURL(file));
    };

    const handleRemove = (moduleId) => setModules(modules.filter(m => m.id !== moduleId));

    return (
        <div>
            {/* Back */}
            <button
                onClick={() => navigate(`/educator/dashboard/courses/${id}`)}
                className="flex items-center gap-1 text-gray-600 text-sm mb-4 hover:text-gray-800"
            >
                <ChevronLeft size={16} /> Back to Course
            </button>

            <div className="bg-white rounded-xl border shadow-sm overflow-hidden max-w-2xl">
                {/* Cover Image */}
                <div className="h-52 bg-gray-100 overflow-hidden">
                    {coverImage ? (
                        <img src={coverImage} alt="Course Cover" className="w-full h-full object-cover" />
                    ) : (
                        <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition">
                            <span className="text-sm text-gray-400 border border-dashed border-gray-300 px-5 py-1.5 rounded mb-2">Browse</span>
                            <span className="text-xs text-gray-400">Upload cover image for your course</span>
                            <input type="file" accept="image/*" className="hidden" onChange={handleCoverImage} />
                        </label>
                    )}
                </div>

                <div className="p-6 space-y-5">
                    <h2 className="text-xl font-bold">UI/UX Design Essentials</h2>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-1">About Course</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            This course provides a comprehensive introduction to data analysis techniques, tools, and
                            methodologies. Through a combination of theoretical concepts and hands-on practical exercises,
                            participants will develop a solid foundation in data analysis and gain the skills necessary
                            to extract valuable insights from various datasets.
                        </p>
                    </div>

                    {/* Modules List */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-3">Course Modules</h3>
                        <div className="space-y-1">
                            {modules.map(mod => (
                                <div key={mod.id} className="flex items-center justify-between py-2.5 border-b last:border-0">
                                    <span className="font-medium text-sm text-gray-800">{mod.title}</span>
                                    <div className="flex items-center gap-3 flex-shrink-0">
                                        <button className="flex items-center gap-1 text-[#69315E] text-xs font-medium hover:underline">
                                            <Edit2 size={12} /> Change
                                        </button>
                                        <button
                                            onClick={() => handleRemove(mod.id)}
                                            className="flex items-center gap-1 text-red-500 text-xs font-medium hover:underline"
                                        >
                                            <Trash2 size={12} /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add More */}
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={() => navigate('/educator/dashboard/courses/create')}
                                className="flex items-center gap-2 bg-[#69315E] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#551a4d] transition"
                            >
                                <Plus size={15} /> Add More
                            </button>
                        </div>
                    </div>

                    {/* Enable Enrollment (only shows when cover image is missing) */}
                    {!isComplete && (
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
                    )}

                    {/* Complete Button */}
                    <button
                        onClick={() => navigate('/educator/dashboard/courses')}
                        className="w-full bg-[#69315E] text-white py-3 rounded-xl font-medium hover:bg-[#551a4d] transition"
                    >
                        Complete my course
                    </button>
                </div>
            </div>
        </div>
    );
}
