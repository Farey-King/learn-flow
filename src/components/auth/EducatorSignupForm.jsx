import React, { useState } from 'react';
import illustrator from '../../assets/illustration.svg';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function EducatorSignupForm() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: '', email: '', expertise: '', password: '', confirmPassword: ''
    });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    return (
        <div className='px-4 py-[3%] mt-20 grid md:grid-cols-2 gap-x-6 text-[#000000]'>
            {/* Left side */}
            <div className='flex items-center justify-center'>
                <img src={illustrator} alt="Educator" className='w-full max-w-[100%]' />
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-center px-4 md:px-20 text-center">
                <h2 className='text-[1.6rem] font-[600] mb-2'>Join as an Educator</h2>
                <p className='text-[#7E7E7E] text-[.8rem] mb-8'>Share your knowledge with the world</p>

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
                <div className='flex flex-col gap-4 text-left'>
                    <Input placeholder='Full Name' name='fullName' value={form.fullName} onChange={handleChange} />
                    <Input placeholder='Email Address' name='email' value={form.email} onChange={handleChange} />
                    <Input placeholder='Area of Expertise (e.g. UI/UX Design)' name='expertise' value={form.expertise} onChange={handleChange} />
                    <Input placeholder='Password' type='password' name='password' value={form.password} onChange={handleChange} />
                    <Input placeholder='Confirm Password' type='password' name='confirmPassword' value={form.confirmPassword} onChange={handleChange} />
                </div>

                <div className="mt-6">
                    <Button label='Create Educator Account' onClick={() => navigate('/educator/dashboard')} />
                </div>

                <p className="text-sm mt-4 text-gray-600">
                    Already have an account?{' '}
                    <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/educator/sign-in')}>Sign In</span>
                </p>
            </div>
        </div>
    );
}
