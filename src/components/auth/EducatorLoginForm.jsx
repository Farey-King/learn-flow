import React from 'react';
import illustrator from '../../assets/Illustration2.png';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import Input from '../ui/Input';

export default function EducatorLoginForm() {
    const navigate = useNavigate();

    return (
        <div className="overflow-x-hidden">
            <div className='mt-19 grid md:grid-cols-2 gap-x-6 gap-y-20 text-[#000000]'>
                {/* Left side */}
                <div className='flex h-full flex-col gap-6 px-[8%] bg-gray-900 justify-center'>
                    <img src={illustrator} alt="Educator Login" className='w-full max-w-[70%] m-auto' />
                    <div className='rounded-xl shadow-lg text-white py-4 px-10 flex gap-6 flex-col text-[.8rem] font-[500] bg-gradient-to-b from-[#8B4513] to-black'>
                        <div>
                            <button className='bg-black py-2 px-8 rounded-lg block font-[400]'>Empower Your Students</button>
                        </div>
                        <p className='leading-[2]'>Share your expertise, inspire learners, and make an impact through quality education on LearnFlow.</p>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex flex-col px-[8%] py-[3%] justify-center md:px-20 text-center">
                    <h2 className='text-[1.6rem] font-[600] mb-2'>Welcome Back, Educator</h2>
                    <p className='text-[#7E7E7E] text-[.8rem] mb-8'>Login into your Educator Account</p>

                    {/* Social Auth Buttons */}
                    <div className="flex gap-4 justify-center mb-4">
                        <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-md shadow-sm w-full bg-white">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-5 h-5" />
                            <span className="text-sm">Google</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 border px-4 py-2 rounded-md shadow-sm w-full bg-white">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook" className="w-5 h-5" />
                            <span className="text-sm">Facebook</span>
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-2 mb-6">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="text-sm text-gray-500">Or continue with</span>
                        <hr className="flex-grow border-t border-gray-300" />
                    </div>

                    {/* Input Fields */}
                    <div className='flex flex-col gap-4 px-10 text-left'>
                        <Input placeholder='Enter Email' />
                        <Input placeholder='Password' type='password' />
                    </div>

                    <div className="mt-6 px-10">
                        <Button label='Sign In' onClick={() => navigate('/educator/dashboard')} />
                    </div>

                    <p className="text-[.8rem] mt-4 text-gray-600">
                        Don't have an account?{' '}
                        <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/educator/sign-up')}>Sign Up!</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
