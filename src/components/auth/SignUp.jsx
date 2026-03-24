import React, { useState } from 'react';
import { User2, CheckCircle } from 'lucide-react';
import illustrator from '../../assets/img1.png';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const [selectedRole, setSelectedRole] = useState('');
    const navigate = useNavigate('');

    const handleNavigate = () => {
        if (selectedRole === 'teacher') {
            navigate('/educator/sign-up');
        } else {
            navigate('/sign-up');
        }
    }

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    return (
        <div className="overflow-x-hidden">
            <div className='px-4 px-[8%] py-[3%] mt-20 grid md:grid-cols-2 gap-x-6 gap-y-20 text-[#000000]'>
                {/* left side */}
                <div className='flex items-center justify-center'>
                    <img src={illustrator} alt="Our core learning Values" className='w-full max-w-[100%]' />
                </div>

                {/* right side */}
                <div className="flex flex-col justify-center px-4 md:px-20 text-center">
                    <h2 className='text-[1.6rem] font-[600] mb-2'>Get Started With LearnFlow</h2>
                    <p className='text-[#7E7E7E] text-[.8rem] mb-8'>Getting started is easy</p>

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
                        Have an account? <span className='text-blue-600'>Sign-in! </span> 
                    </p>
                </div>
            </div>
        </div>
    );
}
