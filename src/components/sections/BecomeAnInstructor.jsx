import illustration from '../../assets/Illustration 2.svg'
import Button from '../ui/Button'

export default function BecomeAnInstructor() {
    return (
        <div className="grid md:grid-cols-2 gap-8 px-[8%] py-16 items-center">
            <div className="flex flex-col gap-4 text-[.9rem] text-[var(--secondary-color)]">
                <p className="font-[600] text-[var(--primary-color)]">Teach on LearnFlow</p>
                <h3 className="text-2xl md:text-[2rem] text-[var(--primary-color)] font-bold">BECOME AN INSTRUCTOR</h3>
                <p className="text-gray-600 leading-relaxed">
                    To become an instructor on LearnFlow, sign up on the platform, create a profile highlighting your expertise,
                    and propose courses. Benefit from a wide learner base, advanced teaching tools, and revenue sharing opportunities.
                    Share your knowledge, earn income, and contribute to learners' growth in a dynamic online community.
                </p>
                <div className="w-[220px] mt-2">
                    <Button label="Start Teaching Today →" />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <img src={illustration} alt="Become an instructor" className="w-[75%]" />
            </div>
        </div>
    );
}
