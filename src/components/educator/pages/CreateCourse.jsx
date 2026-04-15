import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle, X } from 'lucide-react';
import logo from '../../../assets/logo.png';

// Right panel: step tracker
function StepTracker({ currentStep, modules }) {
    return (
        <div className="flex flex-col gap-6 pt-10 px-8">
            {/* STEP 1 */}
            <div className="flex gap-4">
                <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        currentStep > 1
                            ? 'bg-[#69315E] border-[#69315E]'
                            : currentStep === 1
                            ? 'border-white bg-transparent'
                            : 'border-gray-500 bg-transparent'
                    }`}>
                        {currentStep > 1 ? (
                            <CheckCircle size={16} className="text-white" />
                        ) : (
                            <div className={`w-3 h-3 rounded-full ${currentStep === 1 ? 'bg-white' : 'bg-gray-500'}`} />
                        )}
                    </div>
                    <div className="w-px flex-1 bg-gray-500 mt-1 min-h-[40px]" />
                </div>
                <div className="pt-0.5">
                    <p className={`text-sm font-semibold ${currentStep === 1 ? 'text-white' : 'text-gray-400'}`}>
                        STEP 1
                    </p>
                    <p className="text-xs text-gray-400 leading-tight mt-0.5">Create your course details</p>
                </div>
            </div>

            {/* STEP 2 */}
            <div className="flex gap-10">
                <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        currentStep === 2 ? 'border-white bg-transparent' : 'border-gray-500 bg-transparent'
                    }`}>
                        <div className={`w-3 h-3 rounded-full ${currentStep === 2 ? 'bg-white' : 'bg-gray-500'}`} />
                    </div>
                    {modules.length > 0 && <div className="w-px flex-1 bg-gray-500 mt-1 min-h-[40px]" />}
                </div>
                <div className="pt-0.5">
                    <p className={`text-sm font-semibold ${currentStep === 2 ? 'text-white' : 'text-gray-400'}`}>
                        STEP 2
                    </p>
                    <p className="text-xs text-gray-400 leading-tight mt-0.5">Create your course module details</p>
                </div>
            </div>

            {/* Uploaded modules */}
            {modules.map((mod, i) => (
                <div key={i} className="flex gap-10">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full border-2 border-[#69315E] bg-[#69315E] flex items-center justify-center flex-shrink-0">
                            <CheckCircle size={14} className="text-white" />
                        </div>
                    </div>
                    <div className="pt-0.5">
                        <p className="text-xs font-semibold text-white">Module {i + 1}</p>
                        <p className="text-xs text-gray-400 leading-tight mt-0.5">{mod.topic || 'Untitled module'}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function FormField({ label, children }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
            {children}
        </div>
    );
}

export default function CreateCourse() {
    const navigate = useNavigate();
    const [step, setStep] = useState('1a'); // '1a' | '1b' | '2'
    const [coverImage, setCoverImage] = useState(null);
    const [videoFile, setVideoFile] = useState(null);
    const [modules, setModules] = useState([]);
    const [courseData, setCourseData] = useState({
        title: '', description: '', category: '', skillLevel: '', price: '',
        requirement: '', tools: '', whatToLearn: '', skills: '',
    });
    const [moduleData, setModuleData] = useState({ topic: '', description: '', video: null });

    const handleCourseChange = (e) => setCourseData({ ...courseData, [e.target.name]: e.target.value });
    const handleModuleChange = (e) => setModuleData({ ...moduleData, [e.target.name]: e.target.value });

    const handleCoverImage = (e) => {
        const file = e.target.files[0];
        if (file) setCoverImage(file);
    };

    const handleVideoFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideoFile(file);
            setModuleData({ ...moduleData, video: file });
        }
    };

    const handleUploadModule = () => {
        setModules([...modules, { ...moduleData }]);
        setModuleData({ topic: '', description: '', video: null });
        setVideoFile(null);
    };

    const handleBack = () => {
        if (step === '1b') setStep('1a');
        else if (step === '2') setStep('1b');
        else navigate('/educator/dashboard/courses');
    };

    const currentStepNum = step === '2' ? 2 : 1;

    const inputCls = "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#69315E] transition";
    const selectCls = "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#69315E] bg-white transition";
    const textareaCls = "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#69315E] resize-none transition";

    return (
        <div className="min-h-screen flex overflow-hidden">
            {/* Left: Form area */}
            <div className="flex-1 bg-white flex flex-col px-10 py-6 overflow-y-auto">
                {/* Logo */}
                <img src={logo} alt="LearnFlow" className="h-7 mb-6 w-fit" />

                <div className="w-full max-w-lg mx-auto">
                    {/* Back / Title */}
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-1 text-gray-600 text-sm mb-6 hover:text-gray-900"
                    >
                        <ChevronLeft size={18} />
                        <span className="font-medium">Create your Video Course here</span>
                    </button>

                    {/* STEP 1a — Basic Info */}
                    {step === '1a' && (
                        <div className="space-y-10">
                            <FormField label="Title *">
                                <input
                                    name="title" value={courseData.title} onChange={handleCourseChange}
                                    placeholder="Enter your course title"
                                    className={inputCls}
                                />
                            </FormField>

                            <FormField label="Description *">
                                <textarea
                                    name="description" value={courseData.description} onChange={handleCourseChange}
                                    placeholder="Enter your course description"
                                    rows={4} className={textareaCls}
                                />
                            </FormField>

                            <FormField label="Category *">
                                <select name="category" value={courseData.category} onChange={handleCourseChange} className={selectCls}>
                                    <option value="">Select the category</option>
                                    <option>UI/UX Design</option>
                                    <option>Data Science</option>
                                    <option>Web Development</option>
                                    <option>Mobile Development</option>
                                    <option>Business & Marketing</option>
                                </select>
                            </FormField>

                            <div className="grid grid-cols-2 gap-4">
                                <FormField label="Skill Level *">
                                    <select name="skillLevel" value={courseData.skillLevel} onChange={handleCourseChange} className={selectCls}>
                                        <option value="">Select skill level</option>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                    </select>
                                </FormField>
                                <FormField label="Price *">
                                    <input
                                        name="price" value={courseData.price} onChange={handleCourseChange}
                                        placeholder="Enter price" className={inputCls}
                                    />
                                </FormField>
                            </div>

                            <FormField label="Upload Cover Image *">
                                <label className="w-full border-2 border-dashed border-gray-300 rounded-lg h-28 flex items-center justify-center cursor-pointer hover:border-[#69315E] transition">
                                    {coverImage ? (
                                        <span className="text-sm text-[#69315E] font-medium">{coverImage.name}</span>
                                    ) : (
                                        <span className="text-sm text-gray-400 border border-gray-300 px-4 py-1.5 rounded">Browse</span>
                                    )}
                                    <input type="file" accept="image/*" className="hidden" onChange={handleCoverImage} />
                                </label>
                            </FormField>

                            <button
                                onClick={() => setStep('1b')}
                                className="w-full bg-[#69315E] text-white py-3 rounded-lg font-medium hover:bg-[#551a4d] transition"
                            >
                                Continue
                            </button>

                            <p
                                onClick={() => navigate('/')}
                                className="text-center text-sm text-gray-500 cursor-pointer hover:underline"
                            >
                                Go back to Homepage
                            </p>
                        </div>
                    )}

                    {/* STEP 1b — Other Details */}
                    {step === '1b' && (
                        <div className="space-y-10">
                            <FormField label="Course Requirement *">
                                <input
                                    name="requirement" value={courseData.requirement} onChange={handleCourseChange}
                                    placeholder="Enter the course requirement" className={inputCls}
                                />
                            </FormField>

                            <FormField label="Tools Needed *">
                                <input
                                    name="tools" value={courseData.tools} onChange={handleCourseChange}
                                    placeholder="Enter the tools needed for this course" className={inputCls}
                                />
                            </FormField>

                            <FormField label="What to Learn *">
                                <textarea
                                    name="whatToLearn" value={courseData.whatToLearn} onChange={handleCourseChange}
                                    placeholder="Write a short description of what students will learn"
                                    rows={3} className={textareaCls}
                                />
                            </FormField>

                            <FormField label="Skills to Gain *">
                                <textarea
                                    name="skills" value={courseData.skills} onChange={handleCourseChange}
                                    rows={3} className={textareaCls}
                                />
                            </FormField>

                            <button
                                onClick={() => setStep('2')}
                                className="w-full bg-[#69315E] text-white py-3 rounded-lg font-medium hover:bg-[#551a4d] transition"
                            >
                                Proceed to create course
                            </button>

                            <p
                                onClick={() => navigate('/')}
                                className="text-center text-sm text-gray-500 cursor-pointer hover:underline"
                            >
                                Go back to Homepage
                            </p>
                        </div>
                    )}

                    {/* STEP 2 — Module Upload */}
                    {step === '2' && (
                        <div className="space-y-10">
                            <FormField label="Topic *">
                                <input
                                    name="topic" value={moduleData.topic} onChange={handleModuleChange}
                                    placeholder="Enter your course title" className={inputCls}
                                />
                            </FormField>

                            <FormField label="Description *">
                                <textarea
                                    name="description" value={moduleData.description} onChange={handleModuleChange}
                                    placeholder="Enter your course description"
                                    rows={4} className={textareaCls}
                                />
                            </FormField>

                            <FormField label="Upload Video *">
                                <label className="w-full border-2 border-dashed border-gray-300 rounded-lg h-20 flex items-center justify-center cursor-pointer hover:border-[#69315E] transition">
                                    {videoFile ? (
                                        <div className="flex items-center gap-2 bg-gray-100 rounded px-3 py-1">
                                            <span className="text-sm text-gray-700 truncate max-w-[200px]">{videoFile.name}</span>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setVideoFile(null);
                                                    setModuleData({ ...moduleData, video: null });
                                                }}
                                                className="text-gray-500 hover:text-red-500 flex-shrink-0"
                                            >
                                                <X size={14} />
                                            </button>
                                        </div>
                                    ) : (
                                        <span className="text-sm text-gray-400 border border-gray-300 px-4 py-1.5 rounded">Browse</span>
                                    )}
                                    <input type="file" accept="video/*" className="hidden" onChange={handleVideoFile} />
                                </label>
                            </FormField>

                            <button
                                onClick={handleUploadModule}
                                className="w-full bg-[#69315E] text-white py-3 rounded-lg font-medium hover:bg-[#551a4d] transition"
                            >
                                Upload Module
                            </button>

                            {modules.length > 0 && (
                                <button
                                    onClick={() => navigate('/educator/dashboard/courses/1/modules')}
                                    className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition"
                                >
                                    Finish & View Course ({modules.length} module{modules.length > 1 ? 's' : ''})
                                </button>
                            )}

                            <p
                                onClick={() => navigate('/')}
                                className="text-center text-sm text-gray-500 cursor-pointer hover:underline"
                            >
                                Go back to Homepage
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Right: Dark panel with step tracker */}
            <div className="w-72 bg-[#2d2d3a] flex-shrink-0 hidden md:block">
                <StepTracker currentStep={currentStepNum} modules={modules} />
            </div>
        </div>
    );
}
