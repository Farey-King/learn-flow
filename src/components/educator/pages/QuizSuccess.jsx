import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function ThumbsUpIllustration() {
    return (
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-48 h-48">
            {/* Purple blob background */}
            <ellipse cx="100" cy="105" rx="75" ry="80" fill="#c9b8e8" opacity="0.55" />
            <ellipse cx="80" cy="85" rx="55" ry="65" fill="#c9b8e8" opacity="0.35" />

            {/* Thumb body */}
            <path
                d="M68 120 C68 112 72 104 80 100 L95 68 C97 62 102 58 108 60 C114 62 116 68 114 74 L107 94 L138 94 C144 94 148 98 148 104 C148 106 147 108 146 110 C149 110 151 113 151 116 C151 119 149 122 146 123 C148 124 149 127 149 130 C149 133 147 136 144 137 C145 139 145 141 144 143 C142 146 139 147 136 147 L100 147 C88 147 78 141 74 132 L68 120Z"
                fill="white"
                stroke="#111"
                strokeWidth="3"
                strokeLinejoin="round"
            />
            {/* Sleeve / cuff */}
            <rect x="56" y="118" width="24" height="36" rx="8" fill="#6B2D5E" stroke="#111" strokeWidth="2.5" />
            {/* Knuckle lines on thumb */}
            <path d="M107 94 L106 108" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M120 95 L119 112" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M133 96 L132 113" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export default function QuizSuccess() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Top bar */}
            <div className="bg-[#1a1a2e] text-gray-300 text-xs px-6 py-2">
                Quiz creation Successful
            </div>

            {/* Centered content */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
                <ThumbsUpIllustration />

                <h1 className="text-3xl font-bold text-[#69315E] mt-6 mb-4">Quiz Created!</h1>

                <p className="text-gray-500 text-center max-w-xs leading-relaxed mb-10">
                    You have successfully added a quiz to your lesson. Press continue to go to your dashboard.
                </p>

                <button
                    onClick={() => navigate(`/educator/dashboard`)}
                    className="w-full max-w-sm bg-[#69315E] text-white py-3.5 rounded-xl font-medium hover:bg-[#551a4d] transition"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}
