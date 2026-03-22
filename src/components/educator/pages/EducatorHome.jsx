import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

const salesData = [
    { day: 'Mon', Purchases: 15000, Views: 14000 },
    { day: 'Tue', Purchases: 8000, Views: 8000 },
    { day: 'Wed', Purchases: 20000, Views: 11000 },
    { day: 'Thu', Purchases: 12000, Views: 18000 },
    { day: 'Fri', Purchases: 6000, Views: 8000 },
    { day: 'Sat', Purchases: 9000, Views: 14000 },
    { day: 'Sun', Purchases: 1000, Views: 2000 },
];

const bestSellingData = [
    { day: 'Mon', Purchases: 11000, Views: 17000 },
    { day: 'Tue', Purchases: 9000, Views: 13000 },
    { day: 'Wed', Purchases: 18000, Views: 14000 },
    { day: 'Thu', Purchases: 7000, Views: 10000 },
    { day: 'Fri', Purchases: 5000, Views: 9000 },
    { day: 'Sat', Purchases: 6000, Views: 14000 },
    { day: 'Sun', Purchases: 1000, Views: 2000 },
];

const stats = [
    { label: 'Total Students', value: '1,024' },
    { label: 'Daily Course Visit', value: '1,002' },
    { label: 'Courses Created', value: '15' },
    { label: 'Reviews', value: '1,024' },
];

const formatYAxis = (value) => `${value / 1000}K`;

export default function EducatorHome() {
    const [salesCourse, setSalesCourse] = useState('Mental Growth Hack');
    const [bestCourse, setBestCourse] = useState('Essentials of UI/UX Design');
    const [salesPeriod, setSalesPeriod] = useState('This Week');
    const [bestPeriod, setBestPeriod] = useState('This Week');

    return (
        <div className="space-y-6">
            {/* Welcome */}
            <h2 className="text-2xl font-bold text-gray-900">Welcome back, Gabriella</h2>

            {/* Stat Cards */}
            <div className="grid grid-cols-4 gap-4">
                {stats.map(({ label, value }) => (
                    <div key={label} className="bg-white rounded-xl border border-gray-200 p-5">
                        <p className="text-sm text-gray-500 mb-2">{label}</p>
                        <p className="text-2xl font-bold text-gray-900">{value}</p>
                    </div>
                ))}
            </div>

            {/* Sales Analytics Chart */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Sales Analytics</h3>
                        <p className="text-sm text-gray-400">Sales analysis for courses</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#69315E] inline-block" />
                                Purchases
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" />
                                Views
                            </span>
                        </div>
                        <select
                            value={salesPeriod}
                            onChange={(e) => setSalesPeriod(e.target.value)}
                            className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 outline-none bg-white"
                        >
                            <option>This Week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>
                    </div>
                </div>

                {/* Course filter */}
                <div className="mb-4">
                    <select
                        value={salesCourse}
                        onChange={(e) => setSalesCourse(e.target.value)}
                        className="text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white w-52"
                    >
                        <option>Mental Growth Hack</option>
                        <option>UI/UX Design Essentials</option>
                        <option>Data Analysis Fundamentals</option>
                    </select>
                </div>

                <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={salesData} barSize={28} barGap={4}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <YAxis tickFormatter={formatYAxis} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <Bar dataKey="Purchases" stackId="a" fill="#69315E" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="Views" stackId="a" fill="#d1d5db" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Best Selling Course Chart */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Best Selling Course</h3>
                        <p className="text-sm text-gray-400">See analysis for your best selling course</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#69315E] inline-block" />
                                Purchases
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" />
                                Views
                            </span>
                        </div>
                        <select
                            value={bestPeriod}
                            onChange={(e) => setBestPeriod(e.target.value)}
                            className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 outline-none bg-white"
                        >
                            <option>This Week</option>
                            <option>This Month</option>
                            <option>This Year</option>
                        </select>
                    </div>
                </div>

                {/* Course filter */}
                <div className="mb-4">
                    <select
                        value={bestCourse}
                        onChange={(e) => setBestCourse(e.target.value)}
                        className="text-xs border border-gray-200 rounded-lg px-3 py-2 outline-none bg-white w-52"
                    >
                        <option>Essentials of UI/UX Design</option>
                        <option>Mental Growth Hack</option>
                        <option>Data Analysis Fundamentals</option>
                    </select>
                </div>

                <ResponsiveContainer width="100%" height={220}>
                    <BarChart data={bestSellingData} barSize={28} barGap={4}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <YAxis tickFormatter={formatYAxis} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                        <Bar dataKey="Purchases" stackId="a" fill="#69315E" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="Views" stackId="a" fill="#d1d5db" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
