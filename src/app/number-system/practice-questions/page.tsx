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