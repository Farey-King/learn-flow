import { useState } from 'react';
import { User2, CheckCircle, ArrowLeft } from 'lucide-react';
import illustrator from '../../assets/img1.png';
import logo from '../../assets/logo.png';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (selectedRole === 'teacher') {
            navigate('/educator/sign-up');
        } else {
            navigate('/sign-up');
        }
    };

    return (
        <div className="min-h-screen grid md:grid-cols-2 text-[#000000]">
            {/* Left side — form */}
            <div className="flex flex-col bg-white px-[8%] py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <img src={logo} alt="LearnFlow" className="w-[55px] cursor-pointer" onClick={() => navigate('/')} />
                    </div>
                    <p className="text-sm text-gray-600">
                        Have an account?{' '}
                        <span className="text-blue-600 cursor-pointer font-medium" onClick={() => navigate('/login')}>Sign in!</span>
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1 max-w-[420px] w-full mx-auto text-center">
                    <h2 className="text-[2rem] font-bold mb-1">Get Started With LearnFlow</h2>
                    <p className="text-gray-500 text-sm mb-10">Getting started is easy</p>

                    <div className="flex justify-center items-center gap-10 mb-10">
                        {/* Student */}
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setSelectedRole('student')}
                                className={`relative p-6 shadow-[#69315E]/70 shadow-xl rounded-xl bg-[#69315E] border-2 transition-all duration-200
                                ${selectedRole === 'student' ? 'opacity-100 shadow-sm' : 'border-[#69315E] opacity-[.7]'}`}
                            >
                                {selectedRole === 'student' && (
                                    <CheckCircle size={24} className="absolute top-2 right-2 text-white bg-[#69315E] rounded-full" />
                                )}
                                <User2 color="white" size={80} />
                            </button>
                            <span className="font-medium text-[#69315E]">Student</span>
                        </div>

                        {/* Teacher */}
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setSelectedRole('teacher')}
                                className={`relative p-6 shadow-[#69315E]/70 shadow-xl rounded-xl bg-[#69315E] border-2 transition-all duration-200
                                ${selectedRole === 'teacher' ? 'opacity-100 shadow-sm' : 'border-[#69315E] opacity-[.7]'}`}
                            >
                                {selectedRole === 'teacher' && (
                                    <CheckCircle size={24} className="absolute top-2 right-2 text-white bg-[#69315E] rounded-full" />
                                )}
                                <User2 color="white" size={80} />
                            </button>
                            <span className="font-medium text-[#69315E]">Teacher</span>
                        </div>
                    </div>

                    <Button
                        label="Create Account"
                        buttonVariant={selectedRole ? 'primary' : 'white'}
                        disabled={!selectedRole}
                        onClick={handleNavigate}
                    />
                </div>
            </div>

            {/* Right side — illustration */}
            <div className="hidden md:flex items-center justify-center bg-gray-50 px-[8%] py-12">
                <img src={illustrator} alt="Get started" className="w-full max-w-[85%] object-contain" />
            </div>
        </div>
    );
}
