import React from 'react';
import illustrator from '../../assets/img1.png';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function SignupForm() {
    return (
        <div className='px-4 px-[8%] py-[3%] mt-20 grid md:grid-cols-2 gap-x-6 gap-y-20 text-[#000000]'>
            {/* Left side */}
            <div className='flex items-center justify-center'>
                <img src={illustrator} alt="Our core learning Values" className='w-full max-w-[100%]' />
            </div>

            {/* Right side */}
            <div className="flex flex-col justify-center px-4 md:px-20 text-center">
                <h2 className='text-[1.6rem] font-[600] mb-2'>Get Started With LearnFlow</h2>
                <p className='text-[#7E7E7E] text-[.8rem] mb-8'>Getting started is easy</p>

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
                    <Input placeholder='Full Name' />
                    <Input placeholder='Enter Email' />
                    <Input placeholder='Password' type='password' />
                    <Input placeholder='Confirm Password' type='password' />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <Button label='Create Account' />
                </div>

                {/* Sign In Link */}
                <p className="text-sm mt-4 text-gray-600">
                    Have an account? <span className='text-blue-600 cursor-pointer'>Sign In</span>
                </p>
            </div>
        </div>
    );
}
