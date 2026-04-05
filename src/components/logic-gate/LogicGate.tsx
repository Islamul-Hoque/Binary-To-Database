"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList } from 'lucide-react';

// এটি আপনার public/data/solutions.json এর সম্ভাব্য স্ট্রাকচার অনুযায়ী সাজানো
interface Solution {
  id: number;
  q: string;
  ans: string;
  category: string; // cq বা mcq
}

interface LogicGateProps {
  initialSolutions: Solution[];
}

const LogicGate = ({ initialSolutions }: LogicGateProps) => {
  const [activeTab, setActiveTab] = useState('all');
  const [showSolutions, setShowSolutions] = useState(false);

  // ট্যাব অনুযায়ী ডেটা ফিল্টার করা
  const filteredSolutions = initialSolutions.filter(item => 
    activeTab === 'all' ? true : item.category === activeTab
  );

  // চিত্র-১ এর জন্য ট্রুথ টেবিল ডেটা (প্রয়োজন হলে JSON থেকেও আনতে পারেন)
  const truthTableRows = [
    { A: 0, B: 0, Y: 1 },
    { A: 0, B: 1, Y: 0 },
    { A: 1, B: 0, Y: 0 },
    { A: 1, B: 1, Y: 1 },
  ];

  return (
    <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Header & Tabs --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="space-y-2">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
              Question <span className="text-indigo-600">Bank</span>
            </h1>
            <p className="text-slate-500 font-medium">নিজে প্র্যাকটিস করো এবং সমাধান মিলিয়ে নাও।</p>
          </div>

          <div className="flex p-1.5 bg-slate-100 rounded-3xl border border-slate-200 shadow-inner">
            {['all', 'cq', 'mcq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${
                  activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.section
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-16"
          >
            {/* --- Static Figures Section (CQ এর জন্য) --- */}
            {(activeTab === 'all' || activeTab === 'cq') && (
              <div className="space-y-16">
                <div className="text-center space-y-4">
                  <h1 className="text-4xl md:text-6xl font-black text-slate-900">CQ: লজিক সার্কিট ও গেট</h1>
                  <p className="text-slate-600 max-w-3xl mx-auto">নিচের চিত্রগুলো লক্ষ্য করো এবং প্রশ্নগুলোর সমাধান করো।</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Figure-1: Truth Table */}
                  <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">চিত্র-১: Truth Table</h3>
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
                          <tr key={idx} className="hover:bg-slate-50 text-center">
                            <td className="border px-4 py-2">{row.A}</td>
                            <td className="border px-4 py-2">{row.B}</td>
                            <td className="border px-4 py-2 font-bold text-blue-600">{row.Y}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Figure-2: Image Placeholder */}
                  <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-২: Logic Gate</h3>
                    <div className="w-full h-40 bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200">
                       <span className="text-slate-400">Logic Gate Image Here</span>
                    </div>
                  </div>

                  {/* Figure-3: Device Block */}
                  <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৩: Encoder/Decoder Block</h3>
                    <div className="flex items-center gap-6">
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-slate-500 mb-1">Input</span>
                        <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">N</div>
                      </div>
                      <div className="w-32 h-24 bg-slate-200 border-2 border-slate-400 rounded-xl flex items-center justify-center font-bold text-slate-700 text-sm">
                        Device
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-slate-500 mb-1">Output</span>
                        <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">2^N</div>
                      </div>
                    </div>
                  </div>

                  {/* Figure-4: Multi I/O */}
                  <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৪: Multi I/O</h3>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col gap-1">
                        {[1, 2, 3].map(i => <div key={i} className="w-3 h-3 bg-indigo-400 rounded-full" />)}
                      </div>
                      <div className="w-32 h-24 bg-indigo-50 border-2 border-indigo-200 rounded-xl flex items-center justify-center font-bold text-indigo-700 text-sm">
                        Circuit
                      </div>
                      <div className="flex flex-col gap-1">
                        {[1, 2].map(i => <div key={i} className="w-3 h-3 bg-emerald-400 rounded-full" />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* --- Dynamic Q/A Section --- */}
            <div className="space-y-8">
              <div className="flex justify-between items-center px-4">
                <h2 className="text-2xl font-black text-slate-900">গাণিতিক প্রশ্নসমূহ ({filteredSolutions.length})</h2>
                <button 
                  onClick={() => setShowSolutions(!showSolutions)} 
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg ${
                    showSolutions ? 'bg-indigo-50 text-indigo-600' : 'bg-indigo-600 text-white shadow-indigo-200'
                  }`}
                >
                  <ClipboardList size={18} /> 
                  {showSolutions ? 'সমাধান হাইড করো' : 'সম্পূর্ণ সমাধান দেখুন'}
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredSolutions.map((item, i) => (
                  <div key={item.id} className="group bg-white border border-slate-100 rounded-[32px] p-8 hover:border-indigo-200 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-100/20">
                    <div className="flex gap-5">
                      <span className="w-10 h-10 bg-slate-50 text-slate-500 rounded-2xl flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        {i + 1}
                      </span>
                      <div className="space-y-6 flex-1">
                        <p className="text-slate-800 font-bold leading-relaxed pt-2">{item.q}</p>
                        
                        <AnimatePresence>
                          {showSolutions && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }} 
                              animate={{ opacity: 1, height: 'auto' }} 
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-6 border-t border-slate-50 text-slate-600 text-sm leading-loose whitespace-pre-line">
                                {item.ans}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default LogicGate;