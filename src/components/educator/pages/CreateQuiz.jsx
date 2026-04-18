import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import logo from '../../../assets/logo.png';
import illustrationQuiz from '../../../assets/illustration (1).svg';

export default function CreateQuiz() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [form, setForm] = useState({
        title: '',
        questionType: 'Multiple Choice Question (4 Options)',
        numQuestions: '10',
        duration: '0 hours',
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleContinue = () => {
        if (!form.title.trim()) return;
        navigate(`/educator/dashboard/courses/${id}/quiz/questions`, {
            state: { quizSettings: form },
        });
    };

    const inputCls =
        'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#69315E] transition bg-white';
    const selectCls =
        'w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#69315E] bg-white transition appearance-none pr-8';

    return (
        <div className="min-h-screen flex overflow-hidden">
            {/* ── LEFT PANEL ── */}
            <div className="flex-1 bg-white flex flex-col px-10 py-6 overflow-y-auto">
                <img src={logo} alt="LearnFlow" className="h-7 mb-8 w-fit" />

                <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center">
                    <button
                        onClick={() => navigate(`/educator/dashboard/courses/${id}`)}
                        className="flex items-center gap-1 text-gray-700 mb-8 hover:text-gray-900"
                    >
                        <ChevronLeft size={20} />
                        <span className="font-bold text-2xl text-gray-900">Create a Quiz.</span>
                    </button>

                    <div className="space-y-6">
                        {/* Quiz Title */}
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1.5">
                                Quiz Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                placeholder="Enter your quiz title"
                                className={inputCls}
                            />
                        </div>

                        {/* Question Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1.5">
                                Question Type <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    name="questionType"
                                    value={form.questionType}
                                    onChange={handleChange}
                                    className={selectCls}
                                >
                                    <option>Multiple Choice Question (4 Options)</option>
                                    <option>True / False</option>
                                    <option>Short Answer</option>
                                </select>
                                <ChevronLeft size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 -rotate-90 text-gray-400" />
                            </div>
                        </div>

                        {/* Number of Questions */}
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1.5">
                                Number of Questions <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    name="numQuestions"
                                    value={form.numQuestions}
                                    onChange={handleChange}
                                    className={selectCls}
                                >
                                    {[5, 10, 15, 20, 25, 30].map((n) => (
                                        <option key={n} value={String(n)}>{n}</option>
                                    ))}
                                </select>
                                <ChevronLeft size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 -rotate-90 text-gray-400" />
                            </div>
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="block text-sm font-medium text-gray-800 mb-1.5">
                                Duration <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <select
                                    name="duration"
                                    value={form.duration}
                                    onChange={handleChange}
                                    className={selectCls}
                                >
                                    {[0, 1, 2, 3, 4, 5].map((h) => (
                                        <option key={h} value={`${h} hours`}>{h} hours</option>
                                    ))}
                                </select>
                                <ChevronLeft size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 -rotate-90 text-gray-400" />
                            </div>
                        </div>

                        <button
                            onClick={handleContinue}
                            className="w-full bg-[#69315E] text-white py-3 rounded-lg font-medium hover:bg-[#551a4d] transition"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="flex-1 bg-white hidden md:flex items-center justify-center p-10">
                <img
                    src={illustrationQuiz}
                    alt="Quiz illustration"
                    className="w-full max-w-md object-contain"
                />
            </div>
        </div>
    );
}
