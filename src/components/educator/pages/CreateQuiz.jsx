import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import logo from '../../../assets/logo.png';

function QuizIllustration() {
    return (
        <svg
            viewBox="0 0 460 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-w-md max-h-[420px]"
        >
            {/* ── Background blob ── */}
            <ellipse cx="280" cy="250" rx="170" ry="200" fill="#DDD5EB" opacity="0.55" />
            <ellipse cx="230" cy="210" rx="130" ry="160" fill="#DDD5EB" opacity="0.3" />

            {/* ── Document card (back) ── */}
            <rect x="255" y="50" width="155" height="195" rx="12" fill="white" stroke="#E0E0E0" strokeWidth="2" />
            <rect x="272" y="76" width="90" height="10" rx="5" fill="#E5E5E5" />
            <rect x="272" y="96" width="72" height="7" rx="3.5" fill="#EFEFEF" />
            <rect x="272" y="111" width="80" height="7" rx="3.5" fill="#EFEFEF" />
            <rect x="272" y="126" width="65" height="7" rx="3.5" fill="#EFEFEF" />
            {/* image placeholder on back doc */}
            <rect x="272" y="148" width="60" height="48" rx="6" fill="#F0EDF5" stroke="#DDD" strokeWidth="1.5" />
            <circle cx="288" cy="165" r="7" fill="#C4BAD6" />
            <path d="M272 193 L290 175 L305 188 L318 178 L332 196" stroke="#C4BAD6" strokeWidth="2" fill="none" />

            {/* ── Document card (front) ── */}
            <rect x="218" y="75" width="155" height="195" rx="12" fill="white" stroke="#E0E0E0" strokeWidth="2" />
            <rect x="235" y="100" width="90" height="10" rx="5" fill="#E5E5E5" />
            <rect x="235" y="120" width="72" height="7" rx="3.5" fill="#EFEFEF" />
            <rect x="235" y="135" width="80" height="7" rx="3.5" fill="#EFEFEF" />
            <rect x="235" y="150" width="65" height="7" rx="3.5" fill="#EFEFEF" />
            {/* "T" text icon on front doc */}
            <rect x="235" y="170" width="42" height="42" rx="7" fill="#F5F2FA" stroke="#DDD" strokeWidth="1.5" />
            <text x="247" y="200" fontSize="22" fontWeight="bold" fill="#8B6AA7" fontFamily="serif">T</text>
            {/* more lines */}
            <rect x="288" y="178" width="50" height="7" rx="3.5" fill="#EFEFEF" />
            <rect x="288" y="193" width="38" height="7" rx="3.5" fill="#EFEFEF" />
            <rect x="235" y="222" width="95" height="7" rx="3.5" fill="#EFEFEF" />
            <rect x="235" y="237" width="78" height="7" rx="3.5" fill="#EFEFEF" />

            {/* ── Person: body (blue shirt) ── */}
            <path
                d="M108 310 C108 280 120 262 148 255 L175 248 L225 248 L252 255 C280 262 292 280 292 310 L292 420 L108 420 Z"
                fill="#5B8ED6"
            />
            {/* shirt collar V */}
            <path d="M175 248 L200 278 L225 248" stroke="#4A7AC4" strokeWidth="3" fill="none" />
            {/* shirt crease lines */}
            <path d="M165 260 L155 360" stroke="#4A7AC4" strokeWidth="1.5" opacity="0.5" />
            <path d="M235 260 L245 360" stroke="#4A7AC4" strokeWidth="1.5" opacity="0.5" />

            {/* ── Right arm holding pen ── */}
            <path
                d="M252 270 Q285 290 310 305 Q330 315 345 310"
                stroke="#5B8ED6" strokeWidth="28" strokeLinecap="round" fill="none"
            />
            {/* hand */}
            <ellipse cx="345" cy="308" rx="18" ry="14" fill="#C68642" />
            {/* pen in hand */}
            <rect x="352" y="286" width="8" height="38" rx="3" transform="rotate(20 352 286)" fill="#333" />
            <polygon points="362,318 368,318 365,328" transform="rotate(20 365 320)" fill="#222" />
            {/* pen tip gleam */}
            <rect x="354" y="288" width="3" height="10" rx="1.5" transform="rotate(20 354 288)" fill="#666" />

            {/* ── Left arm resting ── */}
            <path
                d="M148 270 Q118 295 108 320"
                stroke="#5B8ED6" strokeWidth="26" strokeLinecap="round" fill="none"
            />
            <ellipse cx="108" cy="322" rx="16" ry="13" fill="#C68642" />

            {/* ── Neck ── */}
            <rect x="185" y="228" width="30" height="30" rx="8" fill="#C68642" />

            {/* ── Head ── */}
            <ellipse cx="200" cy="190" rx="52" ry="56" fill="#C68642" />

            {/* ── Hair ── */}
            <path
                d="M150 180 C148 140 160 118 200 115 C240 118 252 140 250 180 C245 155 235 145 200 142 C165 145 155 155 150 180 Z"
                fill="#2C1810"
            />
            {/* hair sides */}
            <ellipse cx="151" cy="185" rx="9" ry="16" fill="#2C1810" />
            <ellipse cx="249" cy="185" rx="9" ry="16" fill="#2C1810" />

            {/* ── Eyes ── */}
            <ellipse cx="183" cy="193" rx="7" ry="8" fill="white" />
            <ellipse cx="217" cy="193" rx="7" ry="8" fill="white" />
            <circle cx="185" cy="194" r="4" fill="#1a1a1a" />
            <circle cx="219" cy="194" r="4" fill="#1a1a1a" />
            <circle cx="186" cy="192" r="1.5" fill="white" />
            <circle cx="220" cy="192" r="1.5" fill="white" />

            {/* ── Eyebrows ── */}
            <path d="M175 183 Q183 179 191 182" stroke="#2C1810" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M209 182 Q217 179 225 183" stroke="#2C1810" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* ── Nose ── */}
            <path d="M197 200 Q194 214 197 218 Q200 220 203 218 Q206 214 203 200" stroke="#b5722a" strokeWidth="1.5" fill="none" />

            {/* ── Mouth / smile ── */}
            <path d="M188 228 Q200 238 212 228" stroke="#b5722a" strokeWidth="2" strokeLinecap="round" fill="none" />

            {/* ── Ear ── */}
            <ellipse cx="149" cy="196" rx="9" ry="12" fill="#C68642" />
            <ellipse cx="251" cy="196" rx="9" ry="12" fill="#C68642" />

            {/* ── Desk surface ── */}
            <rect x="60" y="390" width="360" height="18" rx="6" fill="#D4B896" />
            <rect x="60" y="405" width="360" height="8" rx="3" fill="#C4A882" />

            {/* ── Paper on desk ── */}
            <rect x="290" y="340" width="115" height="52" rx="7" fill="white" stroke="#E0E0E0" strokeWidth="1.5" />
            <rect x="302" y="353" width="75" height="6" rx="3" fill="#EFEFEF" />
            <rect x="302" y="366" width="58" height="6" rx="3" fill="#EFEFEF" />
            <rect x="302" y="379" width="65" height="5" rx="2.5" fill="#EFEFEF" />
        </svg>
    );
}

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
                {/* Logo */}
                <img src={logo} alt="LearnFlow" className="h-7 mb-8 w-fit" />

                <div className="w-full max-w-md mx-auto flex-1 flex flex-col justify-center">
                    {/* Back / Title */}
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
                                <ChevronLeft
                                    size={16}
                                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 -rotate-90 text-gray-400"
                                />
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
                                <ChevronLeft
                                    size={16}
                                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 -rotate-90 text-gray-400"
                                />
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
                                <ChevronLeft
                                    size={16}
                                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 -rotate-90 text-gray-400"
                                />
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
                <QuizIllustration />
            </div>
        </div>
    );
}
