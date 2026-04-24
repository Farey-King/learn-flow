import React, { useState } from 'react';
import { Search, Send, Phone, Video, MoreHorizontal, Circle, Filter, ArrowLeft } from 'lucide-react';

const CONVERSATIONS = [
    {
        id: 1,
        name: 'Sandra Dioup',
        preview: 'After which we were able to create a ...',
        time: '2:45 PM',
        unread: 2,
        online: true,
        messages: [
            { id: 1, from: 'them', text: 'Hey! Have you gone through module 2 yet?', time: '2:30 PM' },
            { id: 2, from: 'me', text: 'Yes! Just finished it. The Figma section was really detailed.', time: '2:32 PM' },
            { id: 3, from: 'them', text: 'After which we were able to create a full prototype. Did you try the exercise?', time: '2:45 PM' },
        ],
    },
    {
        id: 2,
        name: 'Kacy Kuzre',
        preview: 'After which we were able to create a ...',
        time: '1:12 PM',
        unread: 0,
        online: false,
        messages: [
            { id: 1, from: 'them', text: 'When is the next live session?', time: '1:10 PM' },
            { id: 2, from: 'me', text: 'Thursday at 5 PM. Check the schedule tab.', time: '1:11 PM' },
            { id: 3, from: 'them', text: 'After which we were able to create a working prototype!', time: '1:12 PM' },
        ],
    },
    {
        id: 3,
        name: 'Ventura Aliyante',
        preview: 'After which we were able to create a ...',
        time: 'Yesterday',
        unread: 1,
        online: true,
        messages: [
            { id: 1, from: 'them', text: 'Great insights in today\'s live session!', time: 'Yesterday' },
            { id: 2, from: 'me', text: 'Agreed! The Q&A was super helpful.', time: 'Yesterday' },
            { id: 3, from: 'them', text: 'After which we were able to create a much better understanding.', time: 'Yesterday' },
        ],
    },
    {
        id: 4,
        name: 'Kenny Ntsiwa',
        preview: 'After which we were able to create a ...',
        time: 'Mon',
        unread: 0,
        online: false,
        messages: [
            { id: 1, from: 'me', text: 'Thanks for the feedback on my assignment!', time: 'Mon' },
            { id: 2, from: 'them', text: 'Sure! After which we were able to create a much better flow.', time: 'Mon' },
        ],
    },
    {
        id: 5,
        name: 'Piert Coursel',
        preview: 'After which we were able to create a ...',
        time: 'Sun',
        unread: 0,
        online: false,
        messages: [
            { id: 1, from: 'them', text: 'After which we were able to create a design system from scratch.', time: 'Sun' },
        ],
    },
    {
        id: 6,
        name: 'Thinya Bianmia',
        preview: 'After which we were able to create a ...',
        time: 'Fri',
        unread: 0,
        online: true,
        messages: [
            { id: 1, from: 'them', text: 'After which we were able to create a working component library.', time: 'Fri' },
        ],
    },
];

const FILTER_TABS = ['All', 'Unread', 'Read', 'Archived'];

export default function MessagesPage() {
    const [activeConversation, setActiveConversation] = useState(null);
    const [filterTab, setFilterTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [conversations, setConversations] = useState(CONVERSATIONS);

    const unreadCount = conversations.filter((c) => c.unread > 0).length;

    const filtered = conversations.filter((c) => {
        if (searchQuery) return c.name.toLowerCase().includes(searchQuery.toLowerCase());
        if (filterTab === 'Unread') return c.unread > 0;
        if (filterTab === 'Read') return c.unread === 0;
        return true;
    });

    const handleSend = () => {
        if (!messageInput.trim() || !activeConversation) return;
        const newMsg = { id: Date.now(), from: 'me', text: messageInput.trim(), time: 'now' };
        setConversations((prev) =>
            prev.map((c) =>
                c.id === activeConversation.id
                    ? { ...c, messages: [...c.messages, newMsg], preview: messageInput.trim() }
                    : c
            )
        );
        setActiveConversation((prev) => ({ ...prev, messages: [...prev.messages, newMsg] }));
        setMessageInput('');
    };

    const openConversation = (convo) => {
        setActiveConversation(convo);
        setConversations((prev) =>
            prev.map((c) => (c.id === convo.id ? { ...c, unread: 0 } : c))
        );
    };

    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="px-6 py-5 border-b bg-white flex-shrink-0">
                <h1 className="text-xl font-bold text-gray-900">Messages</h1>
                <p className="text-sm text-gray-500 mt-0.5">
                    You have <span className="font-semibold text-[#69315E]">{unreadCount} unread</span> message{unreadCount !== 1 ? 's' : ''}
                </p>
            </div>

            {/* Body */}
            <div className="flex-1 flex overflow-hidden">
                {/* Conversation list */}
                <div className={`flex flex-col border-r bg-white flex-shrink-0 ${activeConversation ? 'hidden md:flex w-80' : 'flex w-full md:w-80'}`}>
                    {/* Search + filter */}
                    <div className="px-4 py-3 border-b space-y-3 flex-shrink-0">
                        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                            <Search size={14} className="text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search conversations..."
                                className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-1">
                            {FILTER_TABS.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setFilterTab(tab)}
                                    className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                                        filterTab === tab
                                            ? 'bg-[#69315E] text-white'
                                            : 'text-gray-500 hover:bg-gray-100'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                            <button className="ml-auto p-1 text-gray-400 hover:text-gray-600">
                                <Filter size={14} />
                            </button>
                        </div>
                    </div>

                    {/* List */}
                    <div className="flex-1 overflow-y-auto">
                        {filtered.map((convo) => (
                            <button
                                key={convo.id}
                                onClick={() => openConversation(convo)}
                                className={`w-full flex items-center gap-3 px-4 py-3.5 border-b hover:bg-gray-50 transition text-left ${
                                    activeConversation?.id === convo.id ? 'bg-purple-50 border-l-2 border-l-[#69315E]' : ''
                                }`}
                            >
                                {/* Avatar */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#69315E] to-purple-700 flex items-center justify-center text-white text-sm font-semibold">
                                        {convo.name[0]}
                                    </div>
                                    {convo.online && (
                                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
                                    )}
                                </div>

                                {/* Text */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between mb-0.5">
                                        <p className={`text-sm truncate ${convo.unread > 0 ? 'font-semibold text-gray-900' : 'font-medium text-gray-800'}`}>
                                            {convo.name}
                                        </p>
                                        <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{convo.time}</span>
                                    </div>
                                    <p className="text-xs text-gray-500 truncate">{convo.preview}</p>
                                </div>

                                {/* Unread badge */}
                                {convo.unread > 0 && (
                                    <span className="w-5 h-5 rounded-full bg-[#69315E] text-white text-xs flex items-center justify-center flex-shrink-0">
                                        {convo.unread}
                                    </span>
                                )}
                            </button>
                        ))}
                        {filtered.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                                <p className="text-sm">No conversations found</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Chat window */}
                <div className={`flex-1 flex flex-col ${activeConversation ? 'flex' : 'hidden md:flex'}`}>
                    {activeConversation ? (
                        <>
                            {/* Chat header */}
                            <div className="px-5 py-3.5 border-b bg-white flex items-center gap-3 flex-shrink-0">
                                <button
                                    onClick={() => setActiveConversation(null)}
                                    className="md:hidden text-gray-500 hover:text-gray-700 mr-1"
                                >
                                    <ArrowLeft size={18} />
                                </button>
                                <div className="relative flex-shrink-0">
                                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#69315E] to-purple-700 flex items-center justify-center text-white text-sm font-semibold">
                                        {activeConversation.name[0]}
                                    </div>
                                    {activeConversation.online && (
                                        <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-white" />
                                    )}
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-semibold text-gray-900">{activeConversation.name}</p>
                                    <p className="text-xs text-gray-500">{activeConversation.online ? 'Online' : 'Offline'}</p>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400">
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition"><Phone size={16} /></button>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition"><Video size={16} /></button>
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition"><MoreHorizontal size={16} /></button>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 bg-gray-50">
                                {activeConversation.messages.map((msg) => (
                                    <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                                        {msg.from === 'them' && (
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#69315E] to-purple-700 flex items-center justify-center text-white text-xs font-semibold mr-2 flex-shrink-0 self-end mb-1">
                                                {activeConversation.name[0]}
                                            </div>
                                        )}
                                        <div className={`max-w-[65%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                                            msg.from === 'me'
                                                ? 'bg-[#69315E] text-white rounded-br-sm'
                                                : 'bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm'
                                        }`}>
                                            <p>{msg.text}</p>
                                            <p className={`text-xs mt-1 ${msg.from === 'me' ? 'text-white/60' : 'text-gray-400'}`}>{msg.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Input */}
                            <div className="px-4 py-3 border-t bg-white flex-shrink-0">
                                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder-gray-400"
                                        value={messageInput}
                                        onChange={(e) => setMessageInput(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    />
                                    <button
                                        onClick={handleSend}
                                        disabled={!messageInput.trim()}
                                        className="w-8 h-8 rounded-lg bg-[#69315E] flex items-center justify-center text-white disabled:opacity-40 hover:bg-[#541f4a] transition flex-shrink-0"
                                    >
                                        <Send size={14} />
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        /* Empty state */
                        <div className="flex-1 flex flex-col items-center justify-center text-center px-8 bg-gray-50">
                            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-4">
                                <Circle size={28} className="text-[#69315E]" />
                            </div>
                            <h3 className="text-base font-semibold text-gray-800 mb-1">Select a message thread</h3>
                            <p className="text-sm text-gray-500 max-w-xs">
                                Choose a conversation from the left to start chatting with your classmates or instructors.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
