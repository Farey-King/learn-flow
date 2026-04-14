import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import logo from '../../../assets/logo.png';

const DARK   = '#f0f0f0';
const PURPLE = '#4a1040';
const BLUE   = '#8395a8';
const YELLOW = '#c4b35e';

const CELLS = [
    { bg: YELLOW, shape: 'dome',       fill: PURPLE },
    { bg: DARK,   shape: 'circle',     fill: PURPLE },
    { bg: DARK,   shape: 'circle',     fill: PURPLE },
    { bg: YELLOW, shape: 'dome',       fill: PURPLE },

    { bg: PURPLE, shape: 'bowl',       fill: BLUE   },
    { bg: BLUE,   shape: null                        },
    { bg: BLUE,   shape: null                        },
    { bg: PURPLE, shape: 'bowl',       fill: BLUE   },

    { bg: BLUE,   shape: 'side-right', fill: YELLOW },
    { bg: YELLOW, shape: 'side-right', fill: BLUE   },
    { bg: YELLOW, shape: 'side-left',  fill: BLUE   },
    { bg: BLUE,   shape: 'side-left',  fill: YELLOW },

    { bg: YELLOW, shape: null                        },
    { bg: DARK,   shape: 'circle',     fill: PURPLE },
    { bg: DARK,   shape: 'circle',     fill: PURPLE },
    { bg: YELLOW, shape: null                        },

    { bg: PURPLE, shape: 'dome',       fill: BLUE   },
    { bg: BLUE,   shape: null                        },
    { bg: BLUE,   shape: null                        },
    { bg: PURPLE, shape: 'dome',       fill: BLUE   },
];

function GeoCell({ bg, shape, fill }) {
    return (
        <div style={{ backgroundColor: bg, position: 'relative', overflow: 'hidden' }}>
            {shape === 'circle' && (
                <div style={{ position: 'absolute', inset: '10%', borderRadius: '50%', backgroundColor: fill }} />
            )}
            {shape === 'dome' && (
                <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    height: '80%', borderRadius: '40% 40% 0 0', backgroundColor: fill,
                }} />
            )}
            {shape === 'bowl' && (
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '80%', borderRadius: '0 0 50% 50%', backgroundColor: fill,
                }} />
            )}
            {shape === 'side-right' && (
                <div style={{
                    position: 'absolute', top: 0, bottom: 0, right: 0,
                    width: '70%', borderRadius: '9999px 0 0 9999px', backgroundColor: fill,
                }} />
            )}
            {shape === 'side-left' && (
                <div style={{
                    position: 'absolute', top: 0, bottom: 0, left: 0,
                    width: '70%', borderRadius: '0 9999px 9999px 0', backgroundColor: fill,
                }} />
            )}
        </div>
    );
}

function GeometricPanel() {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(5, 20vh)',  /* explicit row height — no parent dependency */
            width: '100%',
            gap: 0,
        }}>
            {CELLS.map((c, i) => <GeoCell key={i} {...c} />)}
        </div>
    );
}

/* ── Form helpers ── */
const inputCls    = 'w-full border border-white rounded-xl px-4 py-3 text-sm outline-none focus:border-[#69315E] focus:ring-1 focus:ring-[#69315E] transition placeholder:text-gray-400';
const textareaCls = 'w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#69315E] focus:ring-1 focus:ring-[#69315E] resize-none transition placeholder:text-gray-400';
const selectCls   = 'w-full border border-gray-300 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#69315E] focus:ring-1 focus:ring-[#69315E] transition appearance-none bg-white pr-10 text-gray-700 cursor-pointer';

function FormField({ label, required, children }) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-800 mb-1.5">
                {label}{required && <span style={{ color: '#e53e3e', marginLeft: 2 }}>*</span>}
            </label>
            {children}
        </div>
    );
}

function SelectField({ label, required, value, onChange, options }) {
    return (
        <FormField label={label} required={required}>
            <div className="relative">
                <select value={value} onChange={onChange} className={selectCls}>
                    {options.map((o) => <option key={o}>{o}</option>)}
                </select>
                <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </FormField>
    );
}

export default function CreateLiveLesson() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: '', description: '',
        startDate: 'Jan 28, 2024', startTime: '7:29 PM',
        duration: '0 hours', timezone: 'WAT',
        pricing: 'free',
    });

    const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>

            {/* ── Left: Form ── */}
            <div style={{ width: '50%', height: '100vh', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', padding: '60px 150px', overflowY: 'auto', boxSizing: 'border-box' }}>
                <img src={logo} alt="LearnFlow" style={{ height: 40, marginBottom: 40, width: 'fit-content' }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 32 }}>
                    <button
                        onClick={() => navigate('/educator/dashboard/courses/create')}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', color: '#374151', marginTop: 2 }}
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <h1 style={{ fontSize: 30, fontWeight: 700, color: '#111', lineHeight: 1.25, margin: 0 }}>
                        Create your Live Lesson here.
                    </h1>
                </div>

                <div className="space-y-10">
                    <FormField label="Title" required>
                        <input value={form.title} onChange={set('title')} placeholder="Enter your course title" className={inputCls} />
                    </FormField>

                    <FormField label="Description" required>
                        <textarea value={form.description} onChange={set('description')} placeholder="Enter your course description" rows={4} className={textareaCls} />
                    </FormField>

                    <div className="grid grid-cols-2 gap-4">
                        <SelectField label="Start Date" required value={form.startDate} onChange={set('startDate')}
                            options={['Jan 28, 2024','Feb 5, 2024','Feb 12, 2024','Feb 20, 2024']} />
                        <SelectField label="Start Time" required value={form.startTime} onChange={set('startTime')}
                            options={['7:29 PM','8:00 PM','9:00 AM','10:00 AM']} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <SelectField label="Duration" required value={form.duration} onChange={set('duration')}
                            options={['0 hours','1 hour','2 hours','3 hours']} />
                        <SelectField label="Time zone" required value={form.timezone} onChange={set('timezone')}
                            options={['WAT','GMT','EST','PST','CET']} />
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-800 mb-2">Pricing</p>
                        <div className="flex items-center gap-8">
                            {['free', 'paid'].map((opt) => (
                                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                    <input type="radio" name="pricing" value={opt}
                                        checked={form.pricing === opt} onChange={set('pricing')}
                                        className="accent-[#69315E] w-5 h-5" />
                                    <span className="text-sm text-gray-700 capitalize">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/educator/dashboard')}
                        className="w-full bg-[#69315E] text-white py-4 rounded-xl font-semibold text-base hover:bg-[#551a4d] transition"
                    >
                        Proceed to create lesson
                    </button>

                    <p onClick={() => navigate('/')} className="text-center text-sm text-gray-500 cursor-pointer hover:underline">
                        Go back to Homepage
                    </p>
                </div>
            </div>

            {/* ── Right: Geometric panel ── */}
            <div style={{ width: '50%', minHeight: '100vh', backgroundColor: DARK, flexShrink: 0, overflow: 'hidden' }}>
                <GeometricPanel />
            </div>
        </div>
    );
}
