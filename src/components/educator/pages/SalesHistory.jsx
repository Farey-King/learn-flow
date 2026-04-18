import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

const originalCourses = [
    { id: 1, title: 'Data Analytics',          date: 'Jan 31, 2024', price: '60,000',  enrolled: '5 Students', income: '300,000' },
    { id: 2, title: 'Introduction to Excel',   date: 'Jan 31, 2024', price: '60,000',  enrolled: '5 Students', income: '300,000' },
    { id: 3, title: 'UI/UX Design Essentials', date: 'Jan 31, 2024', price: '100,000', enrolled: '2 Students', income: '200,000' },
    { id: 4, title: 'Python Essentials',        date: 'Jan 31, 2024', price: '60,000',  enrolled: '5 Students', income: '300,000' },
    { id: 5, title: 'Data Analytics',          date: 'Jan 31, 2024', price: '60,000',  enrolled: '5 Students', income: '300,000' },
];

const liveSessions = [
    { id: 1, title: 'Live: UI/UX Bootcamp',   date: 'Feb 5, 2024',  price: '80,000',  enrolled: '8 Students', income: '640,000' },
    { id: 2, title: 'Live: Data Science Q&A', date: 'Feb 12, 2024', price: '50,000',  enrolled: '12 Students', income: '600,000' },
];

export default function SalesHistory() {
    const navigate = useNavigate();
    const [tab, setTab] = useState('original');

    const rows = tab === 'original' ? originalCourses : liveSessions;

    return (
        <div className="space-y-5">
            <button
                onClick={() => navigate('/educator/dashboard')}
                className="text-sm text-gray-500 hover:text-gray-700"
            >
                &lt; Back
            </button>

            <h2 className="text-xl font-bold text-gray-900">Sales History</h2>

            {/* Tabs */}
            <div className="flex gap-6 border-b border-gray-200">
                <TabBtn active={tab === 'original'} onClick={() => setTab('original')}>
                    Original Course
                </TabBtn>
                <TabBtn active={tab === 'live'} onClick={() => setTab('live')}>
                    Live Session
                </TabBtn>
            </div>

            {/* Table */}
            <div className="bg-white border rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-100">
                            <th className="text-left px-5 py-3 font-semibold text-gray-700 w-1/2">Course</th>
                            <th className="text-right px-5 py-3 font-semibold text-gray-700">Date</th>
                            <th className="text-right px-5 py-3 font-semibold text-gray-700">Price</th>
                            <th className="text-right px-5 py-3 font-semibold text-gray-700">Enrolled</th>
                            <th className="text-right px-5 py-3 font-semibold text-gray-700">Total Income</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={row.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                                <td className="px-5 py-3">
                                    <div className="flex items-center gap-2">
                                        <FileText size={14} className="text-gray-400 flex-shrink-0" />
                                        <span className="text-[#69315E] font-medium hover:underline cursor-pointer">
                                            {row.title}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-5 py-3 text-right text-gray-600">{row.date}</td>
                                <td className="px-5 py-3 text-right text-gray-600">{row.price}</td>
                                <td className="px-5 py-3 text-right text-gray-600">{row.enrolled}</td>
                                <td className="px-5 py-3 text-right text-[#69315E] font-medium">{row.income}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function TabBtn({ active, onClick, children }) {
    return (
        <button
            onClick={onClick}
            className={`pb-2.5 text-sm font-medium border-b-2 transition-colors ${
                active
                    ? 'border-[#69315E] text-[#69315E]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
        >
            {children}
        </button>
    );
}
