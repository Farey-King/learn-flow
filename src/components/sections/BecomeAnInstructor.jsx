import React from 'react'
import illustration from "../../assets/img5.png"
import Button from '../ui/Button'

export default function BecomeAnInstructor() {
  return (
    <div className='grid md:grid-cols-2 gap-8 px-[8%] py-16'>
      <div className='flex flex-col px-10 gap-3 text-[.9rem] text-[var(--secondary-color)]'>
        <p className='font-[600]'>Teach on LearnFlow </p>
        <h3 className='text-2xl md:text-[2rem] text-[var(--primary-color)] font-bold mt-2 mb-4'>BECOME AN INSTRUCTOR</h3>
        <p>To become an instructor on LearnFlow, sign up on the platform, create a profile highlighting your expertise, and propose courses. Benefit from a wide learner base, advanced teaching tools, and revenue sharing opportunities. Share your knowledge, earn income, and contribute to learners' growth in a dynamic online community.</p>

       <div className='w-[270px]'>
         <Button label='Start Teaching Today →' className='my-6'/>
       </div>
      </div>
      <div className='px-20 flex items-center justify-center'>
        <img src={illustration} alt="Intructor" className='w-[70%]'/>
      </div>
    </div>
  )
}
