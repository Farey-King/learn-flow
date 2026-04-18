import { useState } from 'react';
import { User2, CheckCircle, ArrowLeft } from 'lucide-react';
import illustrator from '../../assets/Illustration2.png';
import logo from '../../assets/logo.png';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate();

    const handleNavigate = () => {
        if (selectedRole === 'teacher') {
            navigate('/educator/sign-in');
        } else {
            navigate('/sign-in');
        }
    };

    return (
        <div className="min-h-screen grid md:grid-cols-2 text-[#000000]">
            {/* Left side — form */}
            <div className="flex flex-col bg-gray-50 px-[8%] py-8">
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
                        Don't have an account?{' '}
                        <span className="text-blue-600 cursor-pointer font-medium" onClick={() => navigate('/signup')}>Sign up!</span>
                    </p>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1 max-w-[420px] w-full mx-auto text-center">
                    <h2 className="text-[2rem] font-bold mb-1">Welcome Back</h2>
                    <p className="text-gray-500 text-sm mb-10">Login into your account</p>

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
                        label="Continue"
                        buttonVariant={selectedRole ? 'primary' : 'white'}
                        disabled={!selectedRole}
                        onClick={handleNavigate}
                    />
                </div>
            </div>

            {/* Right side — dark illustration */}
            <div className="hidden md:flex flex-col gap-6 px-[8%] bg-gray-900 justify-center py-12">
                <img src={illustrator} alt="Welcome back" className="w-full max-w-[70%] m-auto" />
                <div className="rounded-xl shadow-lg text-white py-4 px-10 flex gap-6 flex-col text-[.8rem] font-[500] bg-gradient-to-r from-[#8B4513] to-black">
                    <button className="bg-black py-2 px-8 rounded-lg self-start font-[400]">An Avenue To Learn</button>
                    <p className="leading-[2]">Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
                </div>
            </div>
        </div>
    );
}
