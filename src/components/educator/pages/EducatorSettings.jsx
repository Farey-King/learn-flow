import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TABS = ['Account settings', 'Notification settings', 'Payment settings'];

const inputCls = 'w-full border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#69315E] focus:ring-1 focus:ring-[#69315E] transition text-gray-700 placeholder:text-gray-400';
const btnPurple = 'bg-[#69315E] text-white text-sm font-medium rounded-lg px-6 py-3 hover:bg-[#551a4d] transition';

/* ─── Account Settings Tab ─── */
function AccountSettings() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: 'Gabrielle Torrez',
        email: 'Gabrielletorrez@gmail.com',
        language: 'English (British)',
        country: 'Nigeria',
        currentPassword: '',
        newPassword: '',
        retypePassword: '',
    });

    const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

    return (
        <div className="space-y-10">
            {/* Profile info */}
            <div className="space-y-5">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Full Name</label>
                        <input value={form.fullName} onChange={set('fullName')} className={inputCls} />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Email Address</label>
                        <input value={form.email} onChange={set('email')} className={inputCls} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Language</label>
                        <input value={form.language} onChange={set('language')} className={inputCls} />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Country</label>
                        <input value={form.country} onChange={set('country')} className={inputCls} />
                    </div>
                </div>
                <button className={btnPurple} onClick={() => navigate('/educator/dashboard/profile')}>Save</button>
            </div>

            {/* Password */}
            <div className="space-y-5">
                <h2 className="text-base font-bold text-gray-900">Password</h2>
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Current password</label>
                        <input type="password" value={form.currentPassword} onChange={set('currentPassword')} className={inputCls} />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">New password</label>
                        <input type="password" value={form.newPassword} onChange={set('newPassword')} className={inputCls} />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Retype password</label>
                        <input type="password" value={form.retypePassword} onChange={set('retypePassword')} className={inputCls} />
                    </div>
                </div>
                <button className={btnPurple}>Change password</button>
            </div>

            {/* Two-Factor Authentication */}
            <div className="space-y-3">
                <h2 className="text-base font-bold text-gray-900">Two-Factor Authentication</h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">
                    Two-Factor Authentication adds an additional layer of security to your Decode account.
                    Each time you log in to your account, you will be asked to enter a unique code that is
                    only available on your mobile phone. This extra protection ensures that you are the only
                    one who will have access to your Decode account and courses.
                </p>
                <button className={btnPurple}>Enable Two-Factor Authentication?</button>
            </div>
        </div>
    );
}

/* ─── Notification Settings Tab ─── */
const NOTIFICATIONS = [
    { id: 'resources',  label: 'Helpful resources and important updates related to being an Instructor on LearnFlow', bold: false, description: '' },
    { id: 'enrolled',   label: 'Notifications when students enrolled for my published courses',                         bold: false, description: '' },
    { id: 'optout',     label: 'Notifications when students opt out of my published courses',                           bold: false, description: '' },
    { id: 'nopromo',    label: "Don't send me promotional emails",                                                       bold: true,  description: 'Note that when this box is checked, you will still receive important emails such as, purchase receipts.' },
];

function NotificationSettings() {
    const [checked, setChecked] = useState({ nopromo: true });

    const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));

    return (
        <div className="space-y-8">
            <h2 className="text-base font-bold text-gray-900">I want to recieve</h2>
            <div className="space-y-6">
                {NOTIFICATIONS.map(({ id, label, bold, description }) => (
                    <label key={id} className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={!!checked[id]}
                            onChange={() => toggle(id)}
                            className="mt-0.5 w-5 h-5 rounded border-gray-300 accent-[#69315E] flex-shrink-0 cursor-pointer"
                        />
                        <div>
                            <span className={`text-sm ${bold ? 'font-bold text-gray-900' : 'text-gray-700'}`}>{label}</span>
                            {description && (
                                <p className="text-sm text-gray-600 mt-1">{description}</p>
                            )}
                        </div>
                    </label>
                ))}
            </div>
            <button className={btnPurple}>Save</button>
        </div>
    );
}

/* ─── Payment Settings Tab ─── */
function PaymentSettings() {
    const [createPin, setCreatePin]  = useState({ newPin: '', confirmPin: '' });
    const [changePin, setChangePin]  = useState({ currentPin: '', newPin: '', retypePin: '' });

    const setCreate = (key) => (e) => setCreatePin({ ...createPin, [key]: e.target.value });
    const setChange = (key) => (e) => setChangePin({ ...changePin, [key]: e.target.value });

    return (
        <div className="space-y-10">
            {/* Create PIN */}
            <div className="space-y-5">
                <h2 className="text-base font-bold text-gray-900">Create your transaction Pin</h2>
                <div className="flex items-end gap-6">
                    <div className="w-64">
                        <label className="block text-sm text-gray-700 mb-1.5">New pin</label>
                        <input
                            type="password"
                            maxLength={4}
                            value={createPin.newPin}
                            onChange={setCreate('newPin')}
                            placeholder="e.g. 1234"
                            className={inputCls}
                        />
                    </div>
                    <div className="w-64">
                        <label className="block text-sm text-gray-700 mb-1.5">Confirm pin</label>
                        <input
                            type="password"
                            maxLength={4}
                            value={createPin.confirmPin}
                            onChange={setCreate('confirmPin')}
                            placeholder="e.g. 1234"
                            className={inputCls}
                        />
                    </div>
                    <button className={btnPurple} style={{ paddingLeft: 32, paddingRight: 32 }}>
                        Create my Pin
                    </button>
                </div>
            </div>

            {/* Change PIN */}
            <div className="space-y-5">
                <h2 className="text-base font-bold text-gray-900">Change Your transaction Pin</h2>
                <div className="grid grid-cols-3 gap-6">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Current pin</label>
                        <input
                            type="password"
                            maxLength={4}
                            value={changePin.currentPin}
                            onChange={setChange('currentPin')}
                            className={inputCls}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">New pin</label>
                        <input
                            type="password"
                            maxLength={4}
                            value={changePin.newPin}
                            onChange={setChange('newPin')}
                            className={inputCls}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Retype pin</label>
                        <input
                            type="password"
                            maxLength={4}
                            value={changePin.retypePin}
                            onChange={setChange('retypePin')}
                            className={inputCls}
                        />
                    </div>
                </div>
                <button className={btnPurple}>Change Pin</button>
            </div>
        </div>
    );
}

/* ─── Main Settings Page ─── */
export default function EducatorSettings() {
    const [activeTab, setActiveTab] = useState('Account settings');

    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl border border-gray-200 p-8" style={{ minHeight: 'calc(100vh - 110px)' }}>

                {/* Spacer before tabs */}
                <div className="mb-6" />

                {/* Tabs */}
                <div className="border-b border-gray-200 mb-8">
                    <div className="flex gap-8">
                        {TABS.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 text-sm transition-colors border-b-2 -mb-px ${
                                    activeTab === tab
                                        ? 'border-gray-900 text-gray-900 font-semibold'
                                        : 'border-transparent text-gray-500 hover:text-gray-800'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab content */}
                {activeTab === 'Account settings'      && <AccountSettings />}
                {activeTab === 'Notification settings' && <NotificationSettings />}
                {activeTab === 'Payment settings'      && <PaymentSettings />}
            </div>
        </div>
    );
}
