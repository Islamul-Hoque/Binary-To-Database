"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronDown, ChevronUp, Calculator, ArrowRightLeft,
    Hash, CheckCircle2, ClipboardList
} from 'lucide-react';

import Question2 from '../../../components/Questuin/Question2';


const PracticePage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [showSolutions, setShowSolutions] = useState(false);

    const solutions = [
        {
            id: 1,
            q: "ইউসুফ ও আফিয়ার প্রাপ্ত নম্বরকে ডেসিমাল সংখ্যা পদ্ধতিতে রূপান্তর কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
                    <div>
                        <p className="font-bold text-slate-900 mb-2">ইউসুফের প্রাপ্ত নম্বর (53)₁₆ যা হেক্সাডেসিমাল সংখ্যা পদ্ধতিতে দেওয়া আছে।</p>
                        <p className="font-bold text-indigo-600 mb-1">ইউসুফের প্রাপ্ত নম্বর ডেসিমালে রূপান্তর:</p>
                        <div className="pl-4 border-l-2 border-indigo-100 font-mono space-y-1">
                            <p>(53)₁₆</p>
                            <p>= 5 × (16)¹ + 3 × (16)⁰</p>
                            <p>= 80 + 3</p>
                            <p>= (83)₁₀</p>
                        </div>
                    </div>
                    <div className="pt-2">
                        <p className="font-bold text-slate-900 mb-2">আফিয়ার প্রাপ্ত নম্বর (1011100)₂ যা বাইনারি সংখ্যা পদ্ধতিতে দেওয়া আছে।</p>
                        <p className="font-bold text-emerald-600 mb-1">আফিয়ার প্রাপ্ত নম্বর ডেসিমালে রূপান্তর:</p>
                        <div className="pl-4 border-l-2 border-emerald-100 font-mono space-y-1 overflow-x-auto">
                            <p>(1011100)₂</p>
                            <p>= 1×2⁶ + 0×2⁵ + 1×2⁴ + 1×2³ + 1×2² + 0×2¹ + 0×2⁰</p>
                            <p>= 64 + 0 + 16 + 8 + 4 + 0 + 0</p>
                            <p>= (92)₁₀</p>
                        </div>
                    </div>
                    <p className="font-black text-slate-900 mt-2">সুতরাং, ইউসুফ ও আফিয়ার প্রাপ্ত নম্বর (83)₁₀ এবং (92)₁₀।</p>
                </div>
            )
        },
        {
            id: 2,
            q: "আবদুল্লাহ ও খাদিজার প্রাপ্ত নম্বরের পার্থক্য কত? বাইনারিতে নির্ণয় কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700">
                    <p>আবদুল্লাহর প্রাপ্ত নম্বর (127)₈ যা অক্টাল পদ্ধতিতে দেওয়া আছে।</p>
                    <p className="font-mono ml-4">∴ (127)₈ = (001 010 111)₂ = (1010111)₂</p>

                    <p>খাদিজার প্রাপ্ত নম্বর (5F)₁₆ যা হেক্সাডেসিমাল পদ্ধতিতে দেওয়া আছে।</p>
                    <p className="font-mono ml-4">∴ (5F)₁₆ = (0101 1111)₂ = (1011111)₂</p>

                    <p className="font-bold text-slate-900">যেহেতু (1011111)₂ {'>'} (1010111)₂</p>

                    <div className="bg-slate-50 p-4 rounded-2xl font-mono text-right w-fit ml-auto border border-slate-100">
                        <p>&nbsp;&nbsp;1011111</p>
                        <p className="border-b border-slate-300">(-) 1010111</p>
                        <p>0001000</p>
                    </div>
                    <p className="font-black text-slate-900">∴ আবদুল্লাহ ও খাদিজার প্রাপ্ত নম্বরের পার্থক্য বাইনারিতে (1000)₂।</p>
                </div>
            )
        },
        {
            id: 3,
            q: "তাদের চারজনের কে বেশি নম্বর পেয়েছে?",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
                    <p className="font-bold">(i) হতে পাই- ইউসুফ ও আফিয়ার প্রাপ্ত নম্বর যথাক্রমে (83)₁₀ ও (92)₁₀।</p>
                    <div className="space-y-3">
                        <div>
                            <p>আবদুল্লাহর প্রাপ্ত নম্বর (127)₈</p>
                            <p className="font-mono ml-4">= 1 × 8² + 2 × 8¹ + 7 × 8⁰</p>
                            <p className="font-mono ml-4">= 64 + 16 + 7 = (87)₁₀</p>
                        </div>
                        <div>
                            <p>খাদিজার প্রাপ্ত নম্বর (5F)₁₆</p>
                            <p className="font-mono ml-4">= 5 × 16¹ + 15 × 16⁰</p>
                            <p className="font-mono ml-4">= 80 + 15 = (95)₁₀</p>
                        </div>
                    </div>
                    <p className="font-bold mt-4">এখানে,</p>
                    <div className="inline-block border-2 border-rose-500 px-4 py-2 rounded-lg text-rose-600 font-black font-mono">
                        (95)₁₀ {'>'} (92)₁₀ {'>'} (87)₁₀ {'>'} (83)₁₀
                    </div>
                    <p className="font-black text-slate-900">সুতরাং, খাদিজা বেশি নম্বর পেয়েছে।</p>
                </div>
            )
        },
        {
            id: 4,
            q: "ইউসুফ ও আবদুল্লাহর নম্বর বাইনারিতে রূপান্তর কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700">
                    <p>ইউসুফের প্রাপ্ত নম্বর (53)₁₆ যা হেক্সাডেসিমালে দেওয়া।</p>
                    <p className="font-mono ml-4">∴ (53)₁₆ = (0101 0011)₂ = (1010011)₂</p>

                    <p>আবদুল্লাহর প্রাপ্ত নম্বর (127)₈ যা অক্টালে দেওয়া।</p>
                    <p className="font-mono ml-4">∴ (127)₈ = (001 010 111)₂ = (1010111)₂</p>

                    <p className="font-black text-slate-900 mt-4 italic">সুতরাং, ইউসুফ ও আবদুল্লাহর প্রাপ্ত নম্বর বাইনারিতে (1010011)₂ এবং (1010111)₂।</p>
                </div>
            )
        },
        {
            id: 5,
            q: "খাদিজার প্রাপ্ত নম্বরকে দশমিকে নিয়ে তারপর অক্টালে রূপান্তর কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700">
                    <p className="font-bold text-slate-900">খাদিজার প্রাপ্ত নম্বর (5F)₁₆ যা হেক্সাডেসিমালে দেওয়া।</p>
                    <p className="font-bold">(iii) হতে পাই, (5F)₁₆ = (95)₁₀</p>

                    <p className="font-bold underline decoration-indigo-200">খাদিজার প্রাপ্ত নম্বর অক্টালে রূপান্তর:</p>
                    <div className="flex items-center gap-8 bg-slate-50 p-6 rounded-3xl border border-slate-100 w-fit">
                        <div className="font-mono text-sm leading-6">
                            <div className="flex gap-4"><span>8 | 95</span></div>
                            <div className="flex gap-4 border-t border-slate-300"><span>8 | 11</span> <span>--- 7 (LSB)</span></div>
                            <div className="flex gap-4 border-t border-slate-300"><span>8 | 1</span> <span>--- 3</span></div>
                            <div className="flex gap-4 border-t border-slate-300"><span>&nbsp;&nbsp;&nbsp;| 0</span> <span>--- 1 (MSB)</span></div>
                        </div>
                        <div className="text-xs font-black text-slate-400 rotate-90 md:rotate-0">
                            ↑ <br /> MSB to LSB
                        </div>
                    </div>
                    <p className="font-mono font-bold">∴ (95)₁₀ = (137)₈</p>
                    <p className="font-black text-slate-900">সুতরাং, খাদিজার প্রাপ্ত নম্বর দশমিকে (95)₁₀ এবং অক্টালে (137)₈।</p>
                </div>
            )
        },
        {
            id: 6,
            q: "ইউসুফ ও আফিয়ার নম্বর অক্টালে রূপান্তর করে তাদের নম্বরের পার্থক্য নির্ণয় কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
                    <p className="font-bold ">ইউসুফের প্রাপ্ত নম্বর (53)₁₆ এবং আফিয়ার প্রাপ্ত নম্বর (1011100)₂</p>
                    <div className="space-y-4 pl-4">
                        <p className="font-bold">ইউসুফের প্রাপ্ত নম্বর অক্টালে রূপান্তর:</p>
                        <div className="flex items-center gap-6 font-mono text-[12px] bg-slate-50 p-4 rounded-xl w-fit">
                            <div className="text-center">53 <br /> ↙ ↘ <br /> 0101 0011</div>
                            <div className="text-xl">→</div>
                            <div className="text-center">
                                001 | 010 | 011 <br />
                                ↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ <br />
                                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3
                            </div>
                        </div>
                        <p className="font-mono">∴ (53)₁₆ = (123)₈</p>

                        <p className="font-bold">আফিয়ার প্রাপ্ত নম্বর অক্টালে রূপান্তর:</p>
                        <div className="flex items-center gap-6 font-mono text-[12px] bg-slate-50 p-4 rounded-xl w-fit">
                            <div className="text-center">
                                001 | 011 | 100 <br />
                                ↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ <br />
                                1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
                            </div>
                        </div>
                        <p className="font-mono">∴ (1011100)₂ = (134)₈</p>
                    </div>
                    <div className="pt-2">
                        <p className="font-bold  text-rose-600">এখানে, (134)₈ {'>'} (123)₈</p>

                        <div className="bg-slate-950 text-emerald-400 p-6 rounded-2xl w-fit font-mono text-right shadow-xl">
                            <p>&nbsp;&nbsp;134</p>
                            <p className="border-b border-emerald-800 pb-1">(-) 123</p>
                            <p className="pt-1">011</p>
                        </div>


                        <p className="font-black text-slate-900">সুতরাং, ইউসুফ ও আফিয়ার নম্বরের পার্থক্য (11)₈।</p>
                    </div>
                </div>
            )
        },
        {
            id: 7,
            q: "আবদুল্লাহ ও খাদিজা মোট কত নম্বর পেয়েছে? বাইনারিতে নির্ণয় কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
                    <p className="font-bold">আবদুল্লাহর প্রাপ্ত নম্বর (127)₈ এবং খাদিজার প্রাপ্ত নম্বর (5F)₁₆</p>
                    <div className="pl-4 space-y-1 font-mono text-indigo-600 font-bold">
                        <p>(ii) হতে পাই, (127)₈ = (1010111)₂</p>
                        <p>(5F)₁₆ = (1011111)₂</p>
                    </div>
                    <p className="font-bold underline">আবদুল্লাহ ও খাদিজার মোট নম্বর বাইনারি যোগের মাধ্যমে নির্ণয়:</p>
                    <div className="bg-slate-950 text-emerald-400 p-6 rounded-2xl w-fit font-mono text-right shadow-xl">
                        <p>&nbsp;&nbsp;1010111</p>
                        <p className="border-b border-emerald-800 pb-1">(+) 1011111</p>
                        <p className="pt-1">10110110</p>
                    </div>
                    <p className="font-black text-slate-900 mt-4">সুতরাং, তাদের মোট প্রাপ্ত নম্বর (10110110)₂</p>
                </div>
            )
        },
        {
            id: 8,
            q: "ইউসুফ ও আবদুল্লাহর প্রাপ্ত নম্বরের পার্থক্য হেক্সাডেসিমাল ও বাইনারিতে নির্ণয় কর।",
            ans: (
                <div className="space-y-6 text-[13px] text-slate-700 leading-relaxed">
                    <p className="font-bold">ইউসুফ ও আবদুল্লাহর প্রাপ্ত নম্বর যথাক্রমে (53)₁₆ এবং (127)₈</p>
                    <div className="space-y-4">
                        <p className="font-bold text-indigo-600 italic">আবদুল্লাহর প্রাপ্ত নম্বর হেক্সাডেসিমালে রূপান্তর:</p>
                        <div className="flex items-center gap-6 font-mono bg-slate-50 p-4 rounded-xl w-fit text-[12px]">
                            <div className="text-center">127 <br /> ↙ ↓ ↘ <br /> 001 010 111</div>
                            <div className="text-xl">→</div>
                            <div className="text-center">
                                0000 | 0101 | 0111 <br />
                                ↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ <br />
                                0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7
                            </div>
                        </div>
                        <p className="font-mono">∴ (127)₈ = (57)₁₆</p>

                        <p className="font-bold underline decoration-rose-200">হেক্সাডেসিমালে পার্থক্য নির্ণয়:</p>
                        <p className="font-bold text-rose-600">(57)₁₆ {'>'} (53)₁₆</p>

                        <div className="bg-slate-950 text-emerald-400 p-6 rounded-2xl w-fit font-mono text-right shadow-xl">
                            <p>&nbsp;&nbsp;57</p>
                            <p className="border-b border-emerald-800 pb-1">(-) 53</p>
                            <p className="pt-1">04</p>
                        </div>

                        <p className="font-bold">সুতরাং, তাদের নম্বরের পার্থক্য হেক্সাডেসিমালে (4)₁₆</p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 space-y-4">
                        <div className="font-mono text-indigo-600 font-bold space-y-1">
                            <p>(iv) হতে পাই, (53)₁₆ = (1010011)₂</p>
                            <p>(ii) হতে পাই, (127)₈ = (1010111)₂</p>
                        </div>
                        <p className="font-bold underline decoration-blue-200">বাইনারিতে পার্থক্য নির্ণয়:</p>
                        <p className="font-bold text-blue-600">(1010011)₂ {'<'} (1010111)₂</p>


                        <div className="bg-slate-950 text-emerald-400 p-6 rounded-2xl w-fit font-mono text-right shadow-xl">
                            <p>&nbsp;&nbsp;1010111</p>
                            <p className="border-b border-emerald-800 pb-1">(-) 1010011</p>
                            <p className="pt-1">0000100</p>
                        </div>


                        <p className="font-black text-slate-900">সুতরাং, তাদের নম্বরের পার্থক্য বাইনারিতে (100)₂।</p>
                    </div>
                </div>
            )
        },
        {
            id: 9,
            q: "\"যোগের মাধ্যমে ইউসুফ ও আবদুল্লাহর প্রাপ্ত নম্বরের পার্থক্য নির্ণয় করা সম্ভব\" - গাণিতিকভাবে বিশ্লেষণ কর।",
            ans: (
                <div className="space-y-6 text-[13px] text-slate-700 leading-relaxed font-sans">
                    {/* শুরু অংশ */}
                    <div>
                        <p className="font-bold text-slate-900 italic ">
                            "যোগের মাধ্যমে ইউসুফ ও আবদুল্লাহর প্রাপ্ত নম্বরের পার্থক্য নির্ণয় করা সম্ভব" - উক্তিটি ২-এর পরিপূরক যোগের ক্ষেত্রে সত্য।
                        </p>
                        <p className="mt-2 text-slate-600 font-medium text-[12px]">ইউসুফ ও আবদুল্লাহর প্রাপ্ত নম্বর (53)₁₆ এবং (127)₈</p>
                    </div>

                    {/* প্রাথমিক কনভার্সন */}
                    <div className="font-mono text-indigo-600 font-bold space-y-1 pl-4 border-l-2 border-indigo-100">
                        <p>(iv) হতে পাই, (53)₁₆ = (1010011)₂</p>
                        <p>(ii) হতে পাই, (127)₈ = (1010111)₂</p>
                        <div className="text-slate-500 pt-2 text-[11px] font-sans">
                            <p>এখানে,</p>
                            <p className="pl-4 font-mono">(53)₁₆ - (127)₈ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[পার্থক্য নির্ণয়ের ক্ষেত্রে]</p>
                            <p className="pl-4 font-mono">= (53)₁₆ + (-(127)₈) &nbsp;&nbsp;[নিগেশন করে পাই]</p>
                        </div>
                    </div>

                    {/* মূল ক্যালকুলেশন যা ডান দিকে থাকবে */}
                    <div className="flex flex-col items-end space-y-2 pr-4 lg:pr-10">
                        <div className="font-mono text-right space-y-1">
                            <p>৮ বিট রেজিস্টারে (53)₁₆ এর বাইনারি = 0 1 0 1 0 0 1 1</p>
                            <p>৮ বিট রেজিস্টারে (127)₈ এর বাইনারি = 0 1 0 1 0 1 1 1</p>

                            {/* তীর চিহ্ন এবং পরিপূরক */}
                            <p className="tracking-[0.5em] text-slate-400 mr-1">↓↓↓↓↓↓↓↓</p>
                            <p className="font-bold">১ এর পরিপূরক = 1 0 1 0 1 0 0 0</p>
                            <p className="border-b border-slate-400 w-fit ml-auto pb-1">+ 1</p>
                            <p className="font-bold text-indigo-600 py-1">২ এর পরিপূরক, (-127)₈ = 1 0 1 0 1 0 0 1</p>

                            {/* যোগফল */}
                            <div className="mt-4 pt-4 border-t border-slate-200">
                                <p>∴ (53)₁₆ = 0 1 0 1 0 0 1 1</p>
                                <p className="border-b border-slate-900 pb-1">(+) (-127)₈ = 1 0 1 0 1 0 0 1</p>
                                <p className="font-black text-rose-600 pt-1">1 1 1 1 1 1 0 0</p>
                            </div>
                        </div>
                    </div>

                    {/* ফলাফল বিশ্লেষণ */}
                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-3">
                        <p className="font-bold text-slate-800 leading-relaxed">
                            যেহেতু, চিহ্নবিট 1 এসেছে, তাই ফলাফল ঋণাত্মক। চিহ্নবিট বাদে ফলাফলকে আবার ২-এর পরিপূরক করে পাই,
                        </p>
                        <div className="font-mono pl-10 space-y-1 text-slate-700">
                            <p>1 1 1 1 1 0 0</p>
                            <p className="flex justify-between w-[200px]"><span>0 0 0 0 0 1 1</span> <span className="font-sans text-[11px] text-slate-500">[১-এর পরিপূরক]</span></p>
                            <p className="border-b border-slate-400 w-[120px] pb-1">+ 1</p>
                            <p className="font-bold flex justify-between w-[220px] text-indigo-700"><span>0 0 0 0 1 0 0</span> <span className="font-sans text-[11px]">[২-এর পরিপূরক]</span></p>
                        </div>
                        <p className="font-bold text-slate-900 pt-2 italic">∴ ফলাফল = (0000100)₂ = (-4)₁₀</p>
                        <p className="text-[12px] text-slate-600">সুতরাং, তাদের নম্বরের পার্থক্য 4 এবং আবদুল্লাহ বেশি নম্বর পাওয়ায় পার্থক্য ঋণাত্মক এসেছে।</p>
                    </div>

                    {/* বি:দ্র: অংশ */}
                    <div className="bg-slate-100 p-4 rounded-xl border-l-4 border-rose-500 text-[11.5px] leading-relaxed shadow-sm">
                        <p className="font-bold text-slate-800 mb-2 underline decoration-rose-300">বি: দ্র: এক্ষেত্রে, বিকল্প সমাধান হিসেবে বড় সংখ্যাটি থেকে ছোট সংখ্যা বিয়োগ দেওয়া যেতে পারে। তাহলে শেষের অংশটুকু আর করা লাগবে না। যেমন :</p>
                        <div className="font-mono space-y-1 pl-4 text-slate-700">
                            <p>(53)₁₆ = (1010011)₂</p>
                            <p>(127)₈ = (1010111)₂</p>
                            <p className="pt-2 font-bold text-indigo-600">(1010111)₂ {'>'} (1010011)₂</p>
                            <p>বা, (127)₈ {'>'} (53)₁₆</p>
                            <p className="mt-1">∴ (127)₈ - (53)₁₆ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[পার্থক্য নির্ণয়ের ক্ষেত্রে]</p>
                            <p>= (127)₈ + (-(53)₁₆) &nbsp;&nbsp;[নিগেশন করে পাই]</p>
                        </div>
                        <p className="mt-3 text-center font-black text-rose-600 border-t border-rose-100 pt-2">[পার্থক্য নির্ণয় করা সম্ভব]</p>
                    </div>
                </div>
            )
        },


        {
            id: 10,
            q: "৮ বিট রেজিস্টার ব্যবহার করে ২-এর পরিপূরক পদ্ধতিতে উদ্দীপকের আফিয়া ও খাদিজার প্রাপ্ত নম্বরের পার্থক্য নির্ণয় কর।",
            ans: (
                <div className="space-y-6 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <p className="font-bold text-slate-900 underline underline-offset-4 decoration-indigo-200">
                        উদ্দীপকের আফিয়া এবং খাদিজার প্রাপ্ত নম্বর যথাক্রমে (1011100)₂ এবং (5F)₁₆
                    </p>

                    <div className="space-y-1 font-mono text-indigo-600 font-bold pl-4 border-l-2 border-indigo-100">
                        <p>(ii) হতে পাই, (5F)₁₆ = (1011111)₂</p>
                        <p>(1011111)₂ {'>'} (1011100)₂</p>
                    </div>

                    <p className="font-bold text-slate-900">এখানে,</p>

                    {/* মূল ক্যালকুলেশন পার্ট - রাইট অ্যালাইনড */}
                    <div className="flex justify-end pr-2 lg:pr-8">
                        <div className="inline-block text-right">
                            <div className="font-mono space-y-1 mb-2">
                                <p>৮ বিট রেজিস্টারে (5F)₁₆ এর বাইনারি = 0 1 0 1 1 1 1 1</p>
                                <p>৮ বিট রেজিস্টারে (1011100)₂ এর বাইনারি = 0 1 0 1 1 1 0 0</p>
                            </div>

                            <div className="flex flex-col items-end">
                                <p className="font-mono text-slate-400 tracking-[0.5em] mb-1">↓↓↓↓↓↓↓↓</p>
                                <p className="font-mono font-bold">১ এর পরিপূরক = 1 0 1 0 0 0 1 1</p>
                                <p className="font-mono font-bold border-b border-slate-400 pb-1 w-fit">+ 1</p>
                                <p className="font-mono font-bold text-indigo-600 pt-1">
                                    ২ এর পরিপূরক = 1 0 1 0 0 1 0 0
                                </p>
                            </div>

                            <div className="mt-4 bg-slate-950 text-white p-5 rounded-2xl font-mono shadow-lg">
                                <div className="space-y-2">
                                    <p>&nbsp;&nbsp;0 1 0 1 1 1 1 1</p>
                                    <p className="border-b border-white/20 pb-1">(+) 1 0 1 0 0 1 0 0</p>
                                    <p className="pt-1 text-emerald-400 font-bold">
                                        1 | 0 0 0 0 0 0 1 1
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 pt-2">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
                            <p className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-[12px] font-bold">
                                এখানে, ক্যারি বিট অতিরিক্ত।
                            </p>
                        </div>

                        <div className="font-mono font-bold space-y-1 pl-4 border-l-2 border-slate-200">
                            <p>সুতরাং, ফলাফল = (00000011)₂</p>
                            <p className="ml-10 text-indigo-600">= (3)₁₀</p>
                        </div>

                        <p className="font-black text-slate-900 text-sm border-t border-slate-100 pt-4">
                            সুতরাং, আফিয়া ও খাদিজার প্রাপ্ত নম্বরের পার্থক্য (3)₁₀, অর্থাৎ খাদিজা আফিয়ার চেয়ে বেশি নম্বর পেয়েছে।
                        </p>
                    </div>
                </div>
            )
        }


    ];

    return (
        <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">

<Question2 />

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

                            {/* প্রশ্ন ও উত্তর সেকশন */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center px-4">
                                    <h2 className="text-2xl font-black text-slate-900">গাণিতিক প্রশ্নসমূহ</h2>
                                    <button
                                        onClick={() => setShowSolutions(!showSolutions)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg ${showSolutions ? 'bg-indigo-50 text-indigo-600' : 'bg-indigo-600 text-white shadow-indigo-200'}`}
                                    >
                                        <ClipboardList size={18} /> {showSolutions ? 'সমাধান হাইড করো' : 'সম্পূর্ণ সমাধান দেখুন'}
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {solutions.map((item, i) => (
                                        <div key={i} className="group bg-white border border-slate-100 rounded-[32px] p-8 hover:border-indigo-200 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-100/20">
                                            <div className="flex gap-5">
                                                <span className="w-10 h-10 bg-slate-50 text-slate-500 rounded-2xl flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                                    {i + 1}
                                                </span>
                                                <div className="space-y-6 flex-1">
                                                    <p className="text-slate-800 font-bold leading-relaxed pt-2">{item.q}</p>

                                                    {/* সলিউশন শুধুমাত্র বাটনে ক্লিক করলে দেখাবে */}
                                                    {showSolutions && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            className="pt-6 border-t border-slate-50"
                                                        >
                                                            {item.ans}
                                                        </motion.div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
        </main>
    );
};

export default PracticePage;