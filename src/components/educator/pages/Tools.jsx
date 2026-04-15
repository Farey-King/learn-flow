import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coins, Users, TrendingUp, HelpCircle } from 'lucide-react';

const TOOLS = [
    {
        icon: Coins,
        title: 'Sales and Performance',
        description: 'Get insights into how your courses are performing in the sales market to keep track of their progress.',
        to: '/educator/dashboard/sales',
    },
    {
        icon: Users,
        title: 'Instructors Community',
        description: 'Connect with skilled instructors, ask questions, explore discussions, and more.',
        to: '#',
    },
    {
        icon: TrendingUp,
        title: 'Marketplace Insights',
        description: 'Check if your course topic is in demand using our marketplace.',
        to: '#',
    },
    {
        icon: HelpCircle,
        title: 'Help and Support',
        description: 'You are welcome to take a look at our help center or reach out to our support team if you need any assistance.',
        to: '#',
    },
];

export default function Tools() {
    const navigate = useNavigate();

    return (
        <div className="space-y-5">
            <button
                onClick={() => navigate('/educator/dashboard')}
                className="text-sm text-gray-500 hover:text-gray-700"
            >
                &lt; Back
            </button>

            <div className="grid grid-cols-2 gap-4 max-w-2xl">
                {TOOLS.map(({ icon: Icon, title, description, to }) => (
                    <button
                        key={title}
                        onClick={() => to !== '#' && navigate(to)}
                        className="bg-white border rounded-xl p-8 flex flex-col items-center text-center hover:shadow-md transition cursor-pointer"
                    >
                        <Icon size={44} strokeWidth={1.5} className="text-gray-700 mb-4" />
                        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
                    </button>
                ))}
            </div>
        </div>
    );
}
