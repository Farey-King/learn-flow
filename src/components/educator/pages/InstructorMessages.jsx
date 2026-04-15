import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Edit3, Star, Mic, Plus, MoreVertical, ChevronLeft, ChevronDown } from 'lucide-react';
import illustration from '../../../assets/Illustration2.png';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';
import img5 from '../../../assets/img5.png';
import img6 from '../../../assets/img6.png';
import avatar from '../../../assets/avater1.png';

const PURPLE = '#69315E';

const THREAD_MSGS = [
    { from: 'student',    text: 'After which we were able to create our complete website, ensuring that each page is user-friendly.', time: '6:11 am' },
    { from: 'student',    text: 'After which we were able to create our complete website, ensuring that each page is user-friendly.', time: '6:11 am' },
    { from: 'student',    text: 'After which we were able to create our complete website, ensuring that each page is user-friendly.', time: '6:11 am' },
    { from: 'instructor', text: 'Okay! Something will be done about it very soon. Just be patient.',                                  time: '6:11 am' },
    { from: 'student',    text: 'After which we were able to create our complete website, ensuring that each page is user-friendly.', time: '6:11 am' },
    { from: 'instructor', text: 'Okay! Something will be done about it very soon. Just be patient.',                                  time: '6:11 am' },
    { from: 'instructor', text: 'Okay! Something will be done about it very soon. Just be patient.',                                  time: '6:11 am' },
    { from: 'instructor', text: 'Okay! Something will be done about it very soon. Just be patient.',                                  time: '6:11 am' },
    { from: 'student',    text: 'After which we were able to create our complete website, ensuring that each page is user-friendly.', time: '6:11 am' },
    { from: 'student',    text: 'After which we were able to create our complete website, ensuring that each page is user-friendly.', time: '6:11 am' },
    { from: 'instructor', text: 'Okay! Something will be done about it very soon. Just be patient.',                                  time: '6:11 am' },
];

const CONVERSATIONS = [
    { id: 1, name: 'Sandra Olooja',    time: '22:15 pm', preview: 'Okay! Something will be done about it very soon.',                   starred: true,  unread: false, img: img1,   messages: THREAD_MSGS },
    { id: 2, name: 'Miss Parrot',      time: '22:15 pm', preview: 'After which we were able to create our complete website...',          starred: false, unread: true,  img: img2,   messages: [] },
    { id: 3, name: 'Victoria Olayode', time: '22:15 pm', preview: 'After which we were able to create our complete website...',          starred: false, unread: true,  img: img3,   messages: [] },
    { id: 4, name: 'Mac Kingsley',     time: '22:15 pm', preview: 'After which we were able to create our complete website...',          starred: false, unread: false, img: img4,   messages: [] },
    { id: 5, name: 'Nancy Notisime',   time: '22:15 pm', preview: 'After which we were able to create our complete website...',          starred: false, unread: false, img: img5,   messages: [] },
    { id: 6, name: 'Black Caramel',    time: '22:15 pm', preview: 'After which we were able to create our complete website...',          starred: false, unread: false, img: avatar, messages: [] },
    { id: 7, name: 'Titilayo Roseline',time: '22:15 pm', preview: 'After which we were able to create our complete website...',          starred: false, unread: false, img: img6,   messages: [] },
];

const FILTERS = ['All', 'Unread', 'Read'];

export default function InstructorMessages() {
    const navigate = useNavigate();
    const [selectedId, setSelectedId]     = useState(null);
    const [filter, setFilter]             = useState('All');
    const [searchQuery, setSearchQuery]   = useState('');
    const [messageInput, setMessageInput] = useState('');

    const unreadCount = CONVERSATIONS.filter(c => c.unread).length;

    const filtered = CONVERSATIONS.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter =
            filter === 'All'    ? true :
            filter === 'Unread' ? c.unread :
            filter === 'Read'   ? !c.unread : true;
        return matchesSearch && matchesFilter;
    });

    const selected = CONVERSATIONS.find(c => c.id === selectedId) ?? null;

    return (
        <div className="w-full">
            {/* Back */}
            <button
                onClick={() => navigate('/educator/dashboard')}
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 mb-3 transition-colors"
            >
                <ChevronLeft size={16} />
            </button>

            {/* Card */}
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden" style={{ height: 'calc(100vh - 130px)' }}>

                {/* Unread banner */}
                <div className="px-6 py-4">
                    <p className="text-base font-medium text-gray-800">
                        You have {unreadCount} unread messages
                    </p>
                </div>
                <hr className="border-gray-200" />

                {/* Two-panel layout */}
                <div className="flex" style={{ height: 'calc(100% - 61px)' }}>

                    {/* ── Left: conversation list ── */}
                    <div className="w-[340px] flex-shrink-0 border-r border-gray-200 flex flex-col">

                        {/* Toolbar */}
                        <div className="flex items-center gap-2 px-3 py-3">
                            {/* Search input */}
                            <div className="flex-1 flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                <input
                                    value={searchQuery}
                                    onChange={e => setSearchQuery(e.target.value)}
                                    placeholder="search messages..."
                                    className="flex-1 text-xs px-3 py-2 outline-none text-gray-600 placeholder:text-gray-400"
                                />
                                <button className="px-2.5 py-2" style={{ backgroundColor: PURPLE }}>
                                    <Search size={14} className="text-white" />
                                </button>
                            </div>

                            {/* Filter dropdown */}
                            <div className="relative">
                                <select
                                    value={filter}
                                    onChange={e => setFilter(e.target.value)}
                                    className="appearance-none border border-gray-200 rounded-lg pl-3 pr-7 py-2 text-xs text-gray-600 outline-none cursor-pointer bg-white"
                                >
                                    {FILTERS.map(f => <option key={f}>{f}</option>)}
                                </select>
                                <ChevronDown size={12} className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>

                            {/* Compose button */}
                            <button className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: PURPLE }}>
                                <Edit3 size={14} className="text-white" />
                            </button>
                        </div>

                        {/* List */}
                        <div className="flex-1 overflow-y-auto">
                            {filtered.length === 0 ? (
                                <p className="text-sm text-gray-400 text-center mt-12">You have no messages</p>
                            ) : (
                                filtered.map(conv => (
                                    <div
                                        key={conv.id}
                                        onClick={() => setSelectedId(conv.id)}
                                        className={`flex items-start gap-3 px-4 py-3 cursor-pointer border-b border-gray-100 transition-colors ${
                                            selectedId === conv.id ? 'bg-[#f5eef4]' : 'hover:bg-gray-50'
                                        }`}
                                    >
                                        {/* Avatar */}
                                        <img
                                            src={conv.img}
                                            alt={conv.name}
                                            className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                                        />

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="text-sm font-medium truncate" style={{ color: PURPLE }}>{conv.name}</span>
                                                <span className="text-xs text-gray-400 flex-shrink-0">{conv.time}</span>
                                            </div>
                                            <p className={`text-xs mt-0.5 truncate ${conv.unread ? 'font-semibold text-gray-900' : 'text-gray-400'}`}>
                                                {conv.preview}
                                            </p>
                                        </div>

                                        {/* Indicator */}
                                        <div className="flex-shrink-0 pt-1">
                                            {conv.starred && (
                                                <Star size={14} style={{ color: PURPLE, fill: PURPLE }} />
                                            )}
                                            {conv.unread && !conv.starred && (
                                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: PURPLE }} />
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* ── Right: empty state or thread ── */}
                    {!selected ? (
                        <div className="flex-1 flex flex-col items-center justify-center gap-4 bg-gray-50">
                            <img src={illustration} alt="No thread selected" className="w-48 opacity-80" />
                            <p className="text-sm font-medium" style={{ color: PURPLE }}>
                                Select a message thread to read it here.
                            </p>
                        </div>
                    ) : (
                        <div className="flex-1 flex flex-col bg-gray-50">

                            {/* Thread header */}
                            <div className="flex items-center gap-3 px-5 py-3 bg-white border-b border-gray-200">
                                <img
                                    src={selected.img}
                                    alt={selected.name}
                                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                                />
                                <span className="flex-1 text-sm font-semibold text-gray-800">{selected.name}</span>
                                <Search size={17} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                                <MoreVertical size={17} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
                                {selected.messages.length === 0 ? (
                                    <p className="text-sm text-gray-400 text-center mt-10">No messages yet.</p>
                                ) : (
                                    <>
                                        {/* TODAY label */}
                                        <div className="flex justify-center mb-3">
                                            <span className="text-xs text-gray-500 bg-gray-200 px-3 py-0.5 rounded-full">TODAY</span>
                                        </div>

                                        {selected.messages.map((msg, i) => (
                                            <div
                                                key={i}
                                                className={`flex ${msg.from === 'instructor' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div
                                                    className="max-w-[58%] rounded-2xl px-3 py-2"
                                                    style={{
                                                        backgroundColor: msg.from === 'instructor' ? '#e8e0f0' : '#ffffff',
                                                        border: msg.from === 'student' ? '1px solid #e5e7eb' : 'none',
                                                    }}
                                                >
                                                    <p className="text-xs text-gray-700 leading-relaxed">{msg.text}</p>
                                                    <p className="text-[10px] text-gray-400 text-right mt-1">{msg.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>

                            {/* Input bar */}
                            <div className="bg-white border-t border-gray-200 px-4 py-3 flex items-center gap-3">
                                <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                                    <Plus size={20} />
                                </button>
                                <input
                                    value={messageInput}
                                    onChange={e => setMessageInput(e.target.value)}
                                    placeholder="Type a message"
                                    className="flex-1 text-sm outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
                                />
                                <button className="flex-shrink-0" style={{ color: PURPLE }}>
                                    <Mic size={20} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
