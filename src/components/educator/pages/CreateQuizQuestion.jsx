import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { ChevronLeft, Clock } from 'lucide-react';

export default function CreateQuizQuestion() {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const quizSettings = location.state?.quizSettings || {};

    const totalQuestions = parseInt(quizSettings.numQuestions || '10', 10);

    const [currentQ, setCurrentQ] = useState(1);
    const [questions, setQuestions] = useState(
        Array.from({ length: totalQuestions }, () => ({
            text: '',
            answers: ['', '', '', ''],
            type: 'Multiple choice',
        }))
    );

    const q = questions[currentQ - 1];

    const updateQuestion = (field, value) => {
        setQuestions(prev => {
            const updated = [...prev];
            updated[currentQ - 1] = { ...updated[currentQ - 1], [field]: value };
            return updated;
        });
    };

    const updateAnswer = (index, value) => {
        const newAnswers = [...q.answers];
        newAnswers[index] = value;
        updateQuestion('answers', newAnswers);
    };

    const handleProceed = () => {
        navigate(`/educator/dashboard/courses/${id}/quiz/success`);
    };

    const inputCls = "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#69315E] transition";
    const textareaCls = "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#69315E] resize-none transition min-h-[100px]";

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Top bar */}
            <div className="bg-[#1a1a2e] text-gray-300 text-xs px-6 py-2">
                Create quiz question
            </div>

            <div className="flex-1 px-10 py-8 max-w-2xl mx-auto w-full">
                {/* Back + Title */}
                <button
                    onClick={() => navigate(`/educator/dashboard/courses/${id}/quiz/create`)}
                    className="flex items-center gap-1 text-gray-700 mb-8 hover:text-gray-900"
                >
                    <ChevronLeft size={18} />
                    <span className="font-bold text-2xl text-gray-900">Create a Question.</span>
                </button>

                {/* Question number tabs */}
                <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-1">
                    {Array.from({ length: totalQuestions }, (_, i) => i + 1).map(n => (
                        <button
                            key={n}
                            onClick={() => setCurrentQ(n)}
                            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 transition
                                ${n === currentQ
                                    ? 'bg-[#69315E] text-white'
                                    : 'text-gray-500 hover:text-gray-800'
                                }`}
                        >
                            {n}
                        </button>
                    ))}
                </div>

                {/* Timer + Type row */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-600">
                        <Clock size={15} />
                        <span>20 mins</span>
                    </div>
                    <div className="relative">
                        <select
                            value={q.type}
                            onChange={(e) => updateQuestion('type', e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm text-gray-700 outline-none focus:border-[#69315E] bg-white appearance-none pr-7"
                        >
                            <option>Multiple choice</option>
                            <option>True / False</option>
                            <option>Short answer</option>
                        </select>
                        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▾</span>
                    </div>
                </div>

                {/* Question */}
                <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">Question</label>
                    <textarea
                        value={q.text}
                        onChange={(e) => updateQuestion('text', e.target.value)}
                        placeholder="Enter your question"
                        className={textareaCls}
                    />
                </div>

                {/* Answers */}
                <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">Answer</label>
                    <div className="space-y-3">
                        {q.answers.map((ans, i) => (
                            <input
                                key={i}
                                value={ans}
                                onChange={(e) => updateAnswer(i, e.target.value)}
                                placeholder={`Add choice answer ${i + 1}`}
                                className={inputCls}
                            />
                        ))}
                    </div>
                </div>

                {/* Proceed button */}
                <button
                    onClick={handleProceed}
                    className="w-full bg-[#69315E] text-white py-3.5 rounded-xl font-medium hover:bg-[#551a4d] transition mb-4"
                >
                    Proceed to create quiz
                </button>

                <p
                    onClick={() => navigate(-1)}
                    className="text-center text-sm text-gray-500 cursor-pointer hover:underline"
                >
                    Go back to Previous page
                </p>
            </div>
        </div>
    );
}
