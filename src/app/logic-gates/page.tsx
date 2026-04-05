"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CQQuestion from '@/data/logicGate/CQQuestion';

const truthTableRows = [
    { A: 0, B: 0, Y: 1 },
    { A: 0, B: 1, Y: 0 },
    { A: 1, B: 0, Y: 0 },
    { A: 1, B: 1, Y: 1 },
];

const PracticePage = () => {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* --- Header --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black text-slate-900 tracking-tighter">    Question <span className="text-indigo-600">Bank</span> </h1>
                        <p className="text-slate-500 font-medium">নিজে প্র্যাকটিস করো এবং সমাধান মিলিয়ে নাও।</p>
                    </div>
                    {/* Tab */}
                    <div className="flex p-1.5 bg-slate-100 rounded-3xl border border-slate-200 shadow-inner">
                        {['all', 'cq', 'mcq'].map((tab) => (
                            <button key={tab} onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}  > {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {(activeTab === 'all' || activeTab === 'cq') && (
                        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">

                            <div className="max-w-6xl mx-auto space-y-16">
                                {/* Header */}
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4" >
                                    <h1 className="text-4xl md:text-6xl font-black text-slate-900">     CQ: লজিক সার্কিট ও গেট   </h1>
                                    <p className="text-slate-600 max-w-3xl mx-auto">  নিচের ৪টি চিত্র এবং ১৪টি প্রশ্ন একত্রে সমাধান কর।  </p>
                                </motion.div>

                                {/* Figures Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* Figure-1: Truth Table */}
                                    <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">চিত্র-1: Truth Table</h3>
                                        <table className="w-full border-collapse font-mono text-sm">
                                            <thead>
                                                <tr className="bg-slate-100 text-slate-700">
                                                    <th className="border px-4 py-2">A</th>
                                                    <th className="border px-4 py-2">B</th>
                                                    <th className="border px-4 py-2">Y</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {truthTableRows.map((row, idx) => (
                                                    <tr key={idx} className="hover:bg-slate-50">
                                                        <td className="border px-4 py-2 text-center">{row.A}</td>
                                                        <td className="border px-4 py-2 text-center">{row.B}</td>
                                                        <td className="border px-4 py-2 text-center font-bold text-blue-600">{row.Y}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Figure-2: Logic gate */}
                                    <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-2: Block Diagram</h3>
                                        <img src="/logicGate.png" className="" alt="" />
                                    </div>

                                    {/* Figure-3: Block Diagram */}
                                    <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৩: Block Diagram</h3>
                                        <div className="flex items-center gap-6">
                                            {/* Input */}
                                            <div className="flex flex-col items-center">
                                                <span className="text-sm font-bold text-slate-600 mb-2">Input</span>
                                                <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">N</div>
                                            </div>

                                            {/* Main Box (bigger with border) */}
                                            <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
                                                Device </div>

                                            {/* Output */}
                                            <div className="flex flex-col items-center">
                                                <span className="text-sm font-bold text-slate-600 mb-2">Output</span>
                                                <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">   2^N </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Figure-8: Multi Input-Output Box */}
                                    <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-4: Multi I/O Diagram</h3>
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col gap-2">
                                                <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 1</div>
                                                <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 2</div>
                                                <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 3</div>
                                            </div>
                                            <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
                                                Device </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 1</div>
                                                <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 2</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Q/A section */}
                                <CQQuestion />
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
};

export default PracticePage;