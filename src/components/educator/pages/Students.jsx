import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, BookCopy } from 'lucide-react';

const originalCourses = [
    { id: 1, name: 'Data Analytics', date: 'Jan 31, 2024', price: 60000, enrolled: 5, income: 300000 },
    { id: 2, name: 'Introduction to Excel', date: 'Jan 31, 2024', price: 60000, enrolled: 5, income: 300000 },
    { id: 3, name: 'UI/UX Design Essentials', date: 'Jan 31, 2024', price: 100000, enrolled: 2, income: 200000 },
    { id: 4, name: 'Python Essentials', date: 'Jan 31, 2024', price: 60000, enrolled: 5, income: 300000 },
    { id: 5, name: 'Data Analytics', date: 'Jan 31, 2024', price: 60000, enrolled: 5, income: 300000 },
    { id: 6, name: 'Introduction to Figma', date: 'Feb 14, 2024', price: 80000, enrolled: 3, income: 240000 },
];

const liveSessions = [
    { id: 1, name: 'Live UX Workshop', date: 'Feb 5, 2024', price: 45000, enrolled: 10, income: 450000 },
    { id: 2, name: 'Excel Masterclass Live', date: 'Feb 12, 2024', price: 50000, enrolled: 8, income: 400000 },
    { id: 3, name: 'Data Science Bootcamp', date: 'Feb 20, 2024', price: 75000, enrolled: 6, income: 450000 },
];

function formatNumber(n) {
    return n.toLocaleString();
}

export default function Students() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('original');

    const rows = activeTab === 'original' ? originalCourses : liveSessions;

    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                {/* Back */}
                <button
                    onClick={() => navigate('/educator/dashboard')}
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-3 transition-colors"
                >
                    <ChevronLeft size={16} />
                    Back
                </button>

                <h1 className="text-2xl font-bold text-gray-900 mb-6">Sales History</h1>

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                    <div className="flex gap-8">
                        <button
                            onClick={() => setActiveTab('original')}
                            className={`pb-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
                                activeTab === 'original'
                                    ? 'border-[#69315E] text-[#69315E]'
                                    : 'border-transparent text-gray-400 hover:text-gray-700'
                            }`}
                        >
                            Original Course
                        </button>
                        <button
                            onClick={() => setActiveTab('live')}
                            className={`pb-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
                                activeTab === 'live'
                                    ? 'border-[#69315E] text-[#69315E]'
                                    : 'border-transparent text-gray-400 hover:text-gray-700'
                            }`}
                        >
                            Live Session
                        </button>
                    </div>
                </div>

                {/* Table */}
                <table className="w-full">
                    <thead>
                        <tr className="text-sm font-semibold text-gray-900">
                            <th className="text-left pb-4 w-2/5"></th>
                            <th className="text-center pb-4">Date</th>
                            <th className="text-center pb-4">Price</th>
                            <th className="text-center pb-4">Enrolled</th>
                            <th className="text-center pb-4">Total Income</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {rows.map((row) => (
                            <tr key={row.id} className="text-sm">
                                {/* Course name */}
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <BookCopy size={20} className="text-[#69315E] flex-shrink-0" />
                                        <span className="text-[#69315E] font-medium cursor-pointer hover:underline">
                                            {row.name}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-5 text-center text-gray-600">{row.date}</td>
                                <td className="py-5 text-center text-green-600 font-medium">
                                    {formatNumber(row.price)}
                                </td>
                                <td className="py-5 text-center text-gray-600">
                                    {row.enrolled} Students
                                </td>
                                <td className="py-5 text-center text-green-600 font-medium">
                                    {formatNumber(row.income)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
