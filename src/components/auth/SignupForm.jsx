import illustrator from '../../assets/img1.png';
import logo from '../../assets/logo.png';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen grid md:grid-cols-2 text-[#000000]">
            {/* Left side — form */}
            <div className="flex flex-col bg-white px-[8%] py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => navigate(-1)}
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

                {/* Form content */}
                <div className="flex flex-col justify-center flex-1 max-w-[420px] w-full mx-auto">
                    <h2 className="text-[2rem] font-bold mb-1">Get Started With LearnFlow</h2>
                    <p className="text-gray-500 text-sm mb-8">Getting started is easy</p>

                    {/* Social Auth Buttons */}
                    <div className="flex gap-4 mb-4">
                        <button className="flex items-center justify-center gap-2 border px-4 py-2.5 rounded-md shadow-sm w-full bg-white">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />
                            <span className="text-sm">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 border px-4 py-2.5 rounded-md shadow-sm w-full bg-white">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-5 h-5" />
                            <span className="text-sm">Facebook</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-2 mb-6">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="text-sm text-gray-400">Or continue with</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Inputs */}
                    <div className="flex flex-col gap-4">
                        <Input placeholder="Full Name" />
                        <Input placeholder="Enter Email" />
                        <Input placeholder="Password" type="password" />
                        <Input placeholder="Confirm Password" type="password" />
                    </div>

                    <div className="mt-6">
                        <Button label="Create Account" onClick={() => navigate('/dashboard')} />
                    </div>
                </div>
            </div>

            {/* Right side — illustration */}
            <div className="hidden md:flex items-center justify-center bg-gray-50 px-[8%] py-12">
                <img src={illustrator} alt="Get started" className="w-full max-w-[85%] object-contain" />
            </div>
        </div>
    );
}
