import React, { useState } from 'react';
import { User2, CheckCircle } from 'lucide-react';
import illustrator from '../../assets/Illustration2.png';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate('');

    const handleNavigate = () => {
        navigate('/sign-in');
    }

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    return (
        <div className="overflow-x-hidden">
            <div className='mt-19 grid md:grid-cols-2 gap-x-6 gap-y-20 text-[#000000]'>
                {/* left side */}
                <div className='flex h-full flex-col gap-6 px-[8%] bg-gray-900 justify-center'>
                    <img src={illustrator} alt="Our core learning Values" className='w-full max-w-[70%] m-auto' />

                   <div className='rounded-xl shadow-lg text-white py-4 px-10 flex gap-6 flex-col text-[.8rem] font-[500] bg-gradient-to-r from-[#8B4513] to-black'>
                        <div>
                            <button className='bg-black py-2 px-8 rounded-lg block font-[400]'>An Avenue to Learn</button>
                        </div>

                        <p className='leading-[2]'>Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
                    </div>
                </div>

                {/* right side */}
                <div className="flex flex-col px-[8%] py-[3%] justify-center px-4 md:px-20 text-center">
                    <h2 className='text-[1.6rem] font-[600] mb-2'>Welcome Back</h2>
                    <p className='text-[#7E7E7E] text-[.8rem] mb-8'>Login into your Account</p>

                    {/* Role Selection */}
                    <div className="flex justify-center items-center gap-10 mb-8">
                        {/* Student */}
                        <div className='flex flex-col gap-2 relative'>
                            <button
                                onClick={() => handleRoleSelect('student')}
                                className={`relative flex-1 p-6 shadow-[#69315E]/70 shadow-xl rounded-xl bg-[#69315E] border-2 transition-all duration-200 
                                ${selectedRole === 'student' ? 'shadow-sm opacity-[1]' : 'border-[#69315E] opacity-[.8]'}`}
                            >
                                {selectedRole === 'student' && (
                                    <CheckCircle
                                        size={24}
                                        className="absolute top-2 right-2 text-white bg-[#69315E] rounded-full"
                                    />
                                )}
                                <div className="flex flex-col items-center">
                                    <User2 color='white' size={100} />
                                </div>
                            </button>
                            <span className="font-medium text-[var(--primary-color)] text-center">Student</span>
                        </div>

                        {/* Teacher */}
                        <div className='flex flex-col gap-2 relative'>
                            <button
                                onClick={() => handleRoleSelect('teacher')}
                                className={`relative flex-1 p-6 shadow-[#69315E]/70 shadow-xl rounded-xl bg-[#69315E] border-2 transition-all duration-200 
                                ${selectedRole === 'teacher' ? 'shadow-sm opacity-[1]' : 'border-[#69315E] opacity-[.8]'}`}
                            >
                                {selectedRole === 'teacher' && (
                                    <CheckCircle
                                        size={24}
                                        className="absolute top-2 right-2 text-white bg-[#69315E] rounded-full"
                                    />
                                )}
                                <div className="flex flex-col items-center">
                                    <User2 color='white' size={100} />
                                </div>
                            </button>
                            <span className="font-medium text-[#69315E] text-center">Turtor</span>
                        </div>
                    </div>

                    {/* Create Account Button */}
                    <Button
                        label='Create Account'
                        buttonVariant={selectedRole ? 'primary' : 'white'}
                        disabled={!selectedRole}
                        onClick={handleNavigate}

                    />

                    {/* Sign In Link */}
                    <p className="text-[.8rem] mt-4 text-gray-600">
                        Don't have an account? <span className='text-blue-600'>Sign-up! </span> 
                    </p>
                </div>
            </div>
        </div>
    );
}
