import React, { useState } from 'react';
import { LucideUserSquare2, User, User2, UserPlus, Users2Icon, UserSquare, UsersRound } from 'lucide-react';
import illustrator from '../../assets/img1.png'
import Button from '../ui/Button';

export default function SignUp() {
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    return (
        <div>
            {/* our core learning Values */}
            <div className='px-[8%] py-[3%] mt-20 grid md:grid-cols-2 gap-x-6 gap-y-20 text-[#000000]'>
                {/* left side */}
                <div className='px-20 flex items-center justify-center object-fit '>
                    <img src={illustrator} alt="Our core learning Values" className='w-[100%]' />
                </div>

                {/* right side */}
                <div className="flex flex-col justify-center px-20">
                    <h2 className='text-[1.6rem] font-[700] mb-2'>Get Started With LearnFlow</h2>
                    <p className='text-gray-600 mb-8'>Getting started is easy</p>

                    {/* Role Selection */}
                    <div className="flex gap-20 mb-8">
                        <div className='flex flex-col gap-2'>
                            <button
                                onClick={() => handleRoleSelect('student')}
                                className={`flex-1 p-6 shadow-lg rounded-xl bg-[#69315E] border-2 transition-all duration-200 border-[#69315E] ${selectedRole === 'student'
                                    ? 'shadow-lg'
                                    : 'border-[#69315E] hover:border-purple-800'
                                    }`}
                            >
                                <div className="flex flex-col items-center">

                                    <User2 color='white' size={100} />
                                </div>
                            </button>
                            <span className="font-medium text-gray-700">Student</span>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <button
                                onClick={() => handleRoleSelect('student')}
                                className={`flex-1 p-6 shadow-lg rounded-xl bg-[#69315E] border-2 transition-all duration-200 border-[#69315E] ${selectedRole === 'student'
                                    ? 'shadow-lg'
                                    : 'border-[#69315E] hover:border-purple-800'
                                    }`}
                            >
                                <div className="flex flex-col items-center">

                                    <User2 color='white' size={100} />
                                </div>
                            </button>
                            <span className="font-medium text-gray-700">Teachers</span>
                        </div>
                    </div>

                    {/* Create Account Button */}
                    <Button label='Create Account'
                        buttonVariant={`${selectedRole
                            ? 'primary'
                            : 'white'
                            }`}
                        disabled={!selectedRole}
                    />

                    {/* Sign In Link */}
                    <p className="text-center mt-4 text-gray-600">
                        Have an account?{' '}
                        {/* <Button label='Create Account' buttonVariant='white'/> */}
                    </p>
                </div>
            </div>
        </div>
    );
}