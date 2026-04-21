import bgImage from '../../assets/bg1.png'
import Button from '../ui/Button'
import illustrator from '../../assets/img1.png'
import { Database, PanelsTopLeft, Users } from 'lucide-react'
import ExploreCourses from './ExploreCourses'
import Feedback from './Feedback'
import BecomeAnInstructor from './BecomeAnInstructor'
import Footer from '../layout/Footer'

const stats = [
    { value: '12K+', label: 'Total Enrolled' },
    { value: '60+',  label: 'Courses' },
    { value: '120+', label: 'Instructors' },
    { value: '12+',  label: 'Partnership' },
];

const values = [
    {
        icon: <PanelsTopLeft size={20} className="text-white" />,
        bg: 'bg-orange-400',
        title: 'Structured Learning Content',
        desc: 'Explore structured learning content on LearnFlow\'s platform. Access organized courses, quizzes, and resources. Enjoy enhanced understanding, progress tracking, and flexible learning at your pace for meaningful knowledge acquisition.',
    },
    {
        icon: <Database size={20} className="text-white" />,
        bg: 'bg-yellow-500',
        title: 'Skills and Value Oriented',
        desc: 'LearnFlow offers skills and value-oriented courses. Acquire practical expertise, align with industry demands, and enhance employability. Gain tangible skills for real-world success in a dynamic learning environment.',
    },
    {
        icon: <Users size={20} className="text-white" />,
        bg: 'bg-blue-500',
        title: 'Professional And Quality Instructors',
        desc: 'Learn from professional instructors on LearnFlow. Benefit from their expertise, industry insights, and quality teaching. Gain practical skills and knowledge for personal and professional growth.',
    },
];

export default function Hero() {
    return (
        <div>
            {/* Hero banner */}
            <div
                className="w-full min-h-[80vh] bg-cover bg-center flex flex-col gap-6 items-center justify-center text-white px-[8%] py-16"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <h1 className="text-white text-center text-[2.5rem] md:text-[3rem] font-[700] md:px-24 leading-tight">
                    Unlock Your Potential, Expand Your Horizons, and Excel in Tech
                </h1>
                <p className="text-[.9rem] text-center font-[400] md:px-32 leading-relaxed opacity-90">
                    Learn Flow is a learning management system that gives you all the tools required in your tech journey.
                    It is comprised of the most resourceful materials one would ever think of. Have the best experience from us.
                </p>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <Button label="Start for free →" />
                    <Button buttonVariant="secondary" label="Partner with us" />
                </div>
            </div>

            {/* Stats bar */}
            <div className="mx-[8%] -mt-10 relative z-10">
                <div className="bg-[#F5F5F5] rounded-xl shadow-lg p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map(({ value, label }) => (
                        <div key={label} className="flex flex-col items-center justify-center py-4 bg-white rounded-lg shadow-sm gap-1">
                            <p className="text-[1.8rem] font-[700] text-[#69315E]">{value}</p>
                            <p className="text-[.8rem] font-[500] text-gray-600">{label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Learning Values */}
            <div className="px-[8%] py-[6%] grid md:grid-cols-2 gap-12 items-center">
                <div className="flex items-center justify-center">
                    <img src={illustrator} alt="Our core learning values" className="w-full max-w-[90%]" />
                </div>

                <div>
                    <h2 className="text-[1.6rem] font-[700] mb-8">OUR CORE LEARNING VALUES</h2>
                    <div className="flex flex-col gap-6">
                        {values.map(({ icon, bg, title, desc }) => (
                            <div key={title} className="flex gap-4">
                                <div className={`flex-shrink-0 w-9 h-9 ${bg} rounded-md flex items-center justify-center mt-1`}>
                                    {icon}
                                </div>
                                <div>
                                    <h3 className="font-[700] text-[1rem] mb-1">{title}</h3>
                                    <p className="text-[.85rem] text-gray-600 leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ExploreCourses />
            <Feedback />
            <BecomeAnInstructor />
            <Footer />
        </div>
    );
}
