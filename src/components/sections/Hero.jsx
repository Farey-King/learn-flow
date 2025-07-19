import React from 'react'
import bgImage from '../../assets/bg1.png'
import Button from '../ui/Button'
import illustrator from '../../assets/img1.png'
import { Database, PanelsTopLeft, Users } from 'lucide-react'
import ExploreCourses from './ExploreCourses'
import Feedback from './Feedback'
import BecomeAnInstructor from './BecomeAnInstructor'
import Footer from '../layout/Footer'

export default function Hero() {
    return (
        <div>
            <div
                className="w-full h-[81vh] bg-cover bg-center flex flex-col gap-6 items-center justify-center text-white px-[8%] py-[3%]"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="text-white text-center md:pt-2 pt-20  text-[2.5rem] font-[700] md:px-20">Unlock Your Potential, Expand Your Horizons, and Excel in Tech</h1>
                <p className='text-[.8rem] text-center font-[500] md:px-20'>Learn Flow is a learning management system that gives you all the tools required in your tech journey. It is comprised of the most resourceful materials one
                    would ever think of. Have the  best experience from us.</p>

                <div className='flex flex-col md:flex-row gap-4 items-center justify-center w-[250px] md:w-[400px] mb-20'>
                    <Button label='Start for free' />
                    <Button buttonVariant='secondary' label='Partner with Us' />
                </div>
            </div>

            <div className='relative mx-[8%] py-[7%] flex flex-col items-center justify-center'>
                <div className='md:absolute md:-top-[50px] w-full bg-[#F5F5F5] rounded shadow-md p-6 text-[var(--primary-color)] grid md:grid-cols-4 grid-cols-2 gap-y-10 gap-x-20'>
                    <div className='flex bg-white py-2 flex-col gap-3 items-center justify-center rounded-lg shadow-lg'>
                        <p className='text-[1rem] font-[600]'>12k+</p>
                        <p className='text-[.9rem]'>Total Enrolled</p>
                    </div>
                    <div className='flex bg-white py-2 flex-col gap-3 items-center justify-center rounded-lg shadow-lg'>
                        <p className='text-[1rem] font-[600]'>60+</p>
                        <p className='text-[.9rem]'>Courses</p>
                    </div>
                    <div className='flex bg-white py-2 flex-col gap-3 items-center justify-center rounded-lg shadow-lg'>
                        <p className='text-[1rem] font-[600]'>52+</p>
                        <p className='text-[.9rem]'>Instructors</p>
                    </div>
                    <div className='flex bg-white py-2 flex-col gap-3 items-center justify-center rounded-lg shadow-lg'>
                        <p className='text-[1rem] font-[600]'>120+</p>
                        <p className='text-[.9rem]'>Partnership</p>
                    </div>
                </div>
            </div>

            {/* our core learning Values */}
            <div className='px-[8%] pb-[3%] grid md:grid-cols-2 gap-x-6 gap-y-20 text-[#000000]'>
                <div className='px-20 flex items-center justify-center object-fit '>
                    <img src={illustrator} alt="Our core learning Values" className='w-[100%]' />
                </div>

                <div>
                    <h2 className='text-[1.6rem] font-[700] mb-4'>OUR CORE LEARNING VALUES</h2>

                    <div>
                        <div className='flex gap-6'>
                            <PanelsTopLeft className='pt-2'/>
                            <h3 className='font-[700] text-[1.2rem] pb-2'>Structure Learning Content</h3>
                        </div>
                        <p className='text-[.9rem] pl-12 mb-4'>Explore structured learning content LearnFlow's platform. Access organized courses, quizzes, and resources. Enjoy enhanced understanding, progress tracking, and flexible learning at your pace for meaningful knowledge acquisition.</p>
                    </div>

                    <div>
                        <div className='flex gap-6'>
                            <Database className='pt-2'/>
                            <h3 className='font-[700] text-[1.2rem] pb-2'>Skills and Value Orientedv</h3>
                        </div>
                        <p className='text-[.9rem] pl-12 mb-4'>LearnFlow offers skills and value-oriented courses. Acquire practical expertise, align with industry demands, and enhance employability. Gain tangible skills for real-world success in a dynamic learning environment.</p>
                    </div>

                    <div>
                        <div className='flex gap-6'>
                            <Users className='pt-2'/>
                            <h3 className='font-[700] text-[1.2rem] pb-2'>Professional And Quality Instructors</h3>
                        </div>
                        <p className='text-[.9rem] pl-12 mb-4'>Learn from professional instructors on LearnFlow. Benefit from their expertise, industry insights, and quality teaching. Gain practical skills and knowledge for personal and professional growth.</p>
                    </div>
                </div>
            </div>
            <ExploreCourses />
            <Feedback />
            <BecomeAnInstructor />
            <Footer />
        </div>
    )
}
