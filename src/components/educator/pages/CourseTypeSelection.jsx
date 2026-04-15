import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Monitor } from 'lucide-react';
import logo from '../../../assets/logo.png';

const TYPES = [
    {
        id: 'video',
        icon: BookOpen,
        label: 'Video Course',
        desc: 'Create rich learning experiences using video lectures, quizzes and exercises.',
    },
    {
        id: 'live',
        icon: Monitor,
        label: 'Live Lesson',
        desc: 'Create an online meeting and live classes with up to 100 participants.',
    },
];

export default function CourseTypeSelection() {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('video');

    const handleProceed = () => {
        if (selected === 'video') navigate('/educator/dashboard/courses/create/video');
        else navigate('/educator/dashboard/courses/create/live');
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Navbar */}
            <header className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <img
                        src="https://i.pravatar.cc/40?img=12"
                        alt="avatar"
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>
                <img src={logo} alt="LearnFlow" className="h-8" />
                <button
                    onClick={() => navigate('/educator/dashboard')}
                    className="border border-gray-800 text-gray-800 text-sm font-medium px-5 py-1.5 rounded hover:bg-gray-100 transition"
                >
                    Exit
                </button>
            </header>

            {/* Content */}
            <div className="flex-1 flex items-start justify-center px-8 pt-8 pb-12">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm w-full max-w-3xl px-10 py-10">
                    <h1 className="text-3xl font-bold text-center text-gray-900 leading-tight mb-10">
                        Welcome,<br />
                        What type of course are you creating?
                    </h1>

                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-5 mb-10">
                        {TYPES.map(({ id, icon: Icon, label, desc }) => (
                            <button
                                key={id}
                                onClick={() => setSelected(id)}
                                className={`rounded-2xl border flex flex-col items-center text-center px-6 py-10 transition cursor-pointer ${
                                    selected === id
                                        ? 'border-gray-800'
                                        : 'border-gray-200 hover:border-gray-400'
                                }`}
                            >
                                <div className="mb-4 mt-6">
                                    <Icon
                                        size={40}
                                        strokeWidth={1.5}
                                        className={selected === id ? 'text-[#1e1b4b]' : 'text-gray-700'}
                                    />
                                </div>
                                <p className={`font-bold text-lg mb-2 ${selected === id ? 'text-[#1e1b4b]' : 'text-gray-800'}`}>
                                    {label}
                                </p>
                                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                                <div className="mt-10" />
                            </button>
                        ))}
                    </div>

                    {/* Proceed */}
                    <div className="flex justify-end">
                        <button
                            onClick={handleProceed}
                            className="bg-[#69315E] text-white px-14 py-3 rounded-lg font-medium hover:bg-[#551a4d] transition"
                        >
                            Proceed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
