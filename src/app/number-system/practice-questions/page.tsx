"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CQQuestion from '@/data/number-system/CQQuestion';

const PracticePage = () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* --- Header & Tabs --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
                            Question <span className="text-indigo-600">Bank</span>
                        </h1>
                        <p className="text-slate-500 font-medium">নিজে প্র্যাকটিস করো এবং সমাধান মিলিয়ে নাও।</p>
                    </div>
                    <div className="flex p-1.5 bg-slate-100 rounded-3xl border border-slate-200 shadow-inner">
                        {['all', 'cq', 'mcq'].map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {(activeTab === 'all' || activeTab === 'cq') && (
                        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">

                            {/* উদ্দীপক */}
                            <div className="bg-slate-950 rounded-[48px] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl shadow-indigo-200/20">
                                <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full" />
                                <div className="relative z-10 space-y-6">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-indigo-300 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10 backdrop-blur-md">
                                        Creative Scenario
                                    </div>
                                    <p className="text-xl md:text-2xl leading-relaxed text-slate-100 font-medium">
                                        ইউসুফ, আবদুল্লাহ, আফিয়া ও খাদিজার নির্বাচনী পরীক্ষায় রসায়নে প্রাপ্ত নম্বর যথাক্রমে
                                        <span className="inline-flex flex-wrap gap-3 ml-3">
                                            <span className="text-indigo-400 font-mono font-bold">(53)₁₆</span>,
                                            <span className="text-emerald-400 font-mono font-bold">(127)₈</span>,
                                            <span className="text-blue-400 font-mono font-bold">(1011100)₂</span> এবং
                                            <span className="text-rose-400 font-mono font-bold">(5F)₁₆</span>
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#05070a] rounded-[48px] p-8 md:p-14 text-white relative overflow-hidden shadow-[0_30px_100px_-15px_rgba(79,70,229,0.3)] border border-white/10">
    
    {/* Dynamic Mesh Gradients - এটি ব্যাকগ্রাউন্ডকে প্রাণবন্ত করবে */}
    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/15 blur-[120px] rounded-full" />
    <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full" />

    {/* Subtle Grid Pattern Overlay */}
    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

    <div className="relative z-10 space-y-10">
        {/* Scenario Header */}
        <div className="flex justify-center md:justify-start">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 backdrop-blur-2xl shadow-xl">
                <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500 shadow-[0_0_10px_#6366f1]"></span>
                </div>
                <span className="text-indigo-100 text-[12px] font-black uppercase tracking-[0.25em]">Creative Scenario</span>
            </div>
        </div>

        {/* Main Title/Question */}
        <div className="max-w-4xl space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                ইউসুফ, আবদুল্লাহ, আফিয়া ও খাদিজার রসায়নে প্রাপ্ত নম্বর যথাক্রমে —
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { name: "ইউসুফ", val: "53", base: "16", color: "from-indigo-500/20", border: "hover:border-indigo-500/50", text: "text-indigo-300" },
                { name: "আবদুল্লাহ", val: "127", base: "8", color: "from-emerald-500/20", border: "hover:border-emerald-500/50", text: "text-emerald-300" },
                { name: "আফিয়া", val: "1011100", base: "2", color: "from-blue-500/20", border: "hover:border-blue-500/50", text: "text-blue-300" },
                { name: "খাদিজা", val: "5F", base: "16", color: "from-rose-500/20", border: "hover:border-rose-500/50", text: "text-rose-300" }
            ].map((item, i) => (
                <div key={i} className={`relative p-8 rounded-[32px] bg-gradient-to-b ${item.color} to-transparent border border-white/5 backdrop-blur-md transition-all duration-500 group ${item.border} hover:-translate-y-2`}>
                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 rounded-[32px] bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <span className="text-[11px] text-slate-500 font-black uppercase tracking-[0.2em] mb-4 group-hover:text-slate-300 transition-colors">
                            {item.name}
                        </span >
                        <div className={`text-3xl font-mono font-black ${item.text} drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                            ({item.val})<sub className="text-[14px] ml-1 opacity-70 italic">{item.base}</sub>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

                            {/* Q/A Section */}
                            <CQQuestion />
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
};

export default PracticePage;