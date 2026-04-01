// "use client";
// import { motion } from 'framer-motion';
// import {
//     Hash, ArrowRight, Lightbulb, Calculator,
//     Layers, ChevronRight, HelpCircle
// } from 'lucide-react';

// const baseToDecimalEx = [
//     {
//         from: "Binary ",
//         method: "Base Power Method (2ⁿ)",
//         integer: "(1011010)₂ = 1×2⁶ + 0×2⁵ + 1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = (90)₁₀",
//         fraction: "(11011.101)₂ = (1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 1×2⁰) + (1×2⁻¹ + 0×2⁻² + 1×2⁻³) = (27.625)₁₀",
//         color: "blue"
//     },
//     {
//         from: "Octal  ",
//         method: "Base Power Method (8ⁿ)",
//         integer: "(203)₈ = 2×8² + 0×8¹ + 3×8⁰ = 128 + 0 + 3 = (131)₁₀",
//         fraction: "(123.540)₈ = (1×8² + 2×8¹ + 3×8⁰) + (5×8⁻¹ + 4×8⁻² + 0×8⁻³) = (83.6875)₁₀",
//         color: "purple"
//     },
//     {
//         from: "Hexadecimal ",
//         method: "Base Power Method (16ⁿ)",
//         integer: "(ABCD)₁₆ = 10×16³ + 11×16² + 12×16¹ + 13×16⁰ = (43981)₁₀",
//         fraction: "(B5D.48)₁₆ = (11×16² + 5×16¹ + 13×16⁰) + (4×16⁻¹ + 8×16⁻²) = (2909.28125)₁₀",
//         color: "emerald"
//     }
// ];

// export default function BinaryToOthers() {
//     return (
//         <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
//             <div className="max-w-5xl mx-auto space-y-12">

//                 {/* --- Header --- */}
//                 <motion.div
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="text-center space-y-4"
//                 >
//                     <h1 className="text-4xl md:text-6xl font-black text-slate-950">
//                         Any Base to <span className="text-blue-600">Decimal</span>
//                     </h1>
//                     <p className="text-slate-500 font-medium italic">
//                         Complete guide for converting Decimal to Binary, Octal, and Hexadecimal.
//                     </p>
//                     {/* <p className="text-slate-500 font-medium italic">
//                         বাইনারি থেকে ডেসিমেল, অক্টাল এবং হেক্সাডেসিমেল রূপান্তরের পূর্ণাঙ্গ গাইড
//                     </p> */}
//                 </motion.div>

//                 {/* --- Master Tips Box (English Terms) --- */}
//                 <motion.div
//                     initial={{ scale: 0.95, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.5, ease: "easeOut" }}
//                     className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20"
//                 >
//                     {/* --- Decorative Background Glows --- */}
//                     <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full -mr-32 -mt-32" />
//                     <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 blur-[120px] rounded-full -ml-32 -mb-32" />

//                     <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
//                         {/* --- Icon Wrapper --- */}
//                         <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
//                             <Lightbulb size={32} className="text-white" />
//                         </div>

//                         {/* --- Content --- */}
//                         <div className="space-y-6">
//                             <div className="space-y-2">
//                                 <h3 className="text-2xl md:text-3xl font-black text-blue-400 tracking-tight">
//                                     Master Tip: Any Base → Decimal
//                                 </h3>
//                                 {/* <p className="text-slate-300 leading-relaxed text-lg font-medium">
//                                     To convert any number system to <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">Decimal</span>,
//                                     multiply each digit by its <span className="text-blue-400 font-bold">Base Power</span>.
//                                 </p> */}
//                                 <p className="text-slate-300 leading-relaxed text-lg">
//                                     যে কোনো সংখ্যা পদ্ধতি থেকে <span className="text-white font-bold">ডেসিমেলে</span> নিতে হলে ওই Number System এর <span className="text-blue-400 font-bold">বেজ</span> দিয়ে গুণ করতে হবে।
//                                 </p>
//                             </div>

//                             {/* --- Rule Cards --- */}
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//                                 {/* Integer Rule */}
//                                 <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-colors group">
//                                     <div className="flex items-center gap-3 mb-3">
//                                         <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
//                                         <p className="text-sm font-black text-blue-200 uppercase tracking-wider">For Integers</p>
//                                     </div>
//                                     <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
//                                         পাওয়ার <span className="text-white font-mono font-bold">0</span> থেকে শুরু করে  <span className="text-blue-300 font-bold"> বাম </span> দিকে বাড়তে থাকবে (0, 1, 2...).
//                                     </p>
//                                 </div>

//                                 {/* Fractional Rule */}
//                                 <div className="bg-white/5 backdrop-blur-sm p-6 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-colors group">
//                                     <div className="flex items-center gap-3 mb-3">
//                                         <div className="w-2 h-2 rounded-full bg-emerald-400 group-full:scale-150 transition-transform" />
//                                         <p className="text-sm font-black text-emerald-200 uppercase tracking-wider">For Fractions</p>
//                                     </div>
//                                     <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
//                                         পাওয়ার <span className="text-white font-mono font-bold">-1</span>  থেকে শুরু করে  <span className="text-emerald-300 font-bold "> ডান </span>  দিকে কমতে থাকবে(-1, -2, -3...).
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* --- Visual Hint --- */}
//                             <p className="text-[10px] md:text-xs font-bold text-slate-500 italic flex items-center gap-2">
//                                 <span className="w-4 h-[1px] bg-slate-700" />
//                                 Example: (101.1)₂ →  1×2² + 0×2¹ + 1×2⁰ + 1×2⁻¹ = (5.5)₁₀
//                             </p>

//                         </div>
//                     </div>
//                 </motion.div>

//                 {/* --- Step by Step Examples --- */}
//                 <div className="grid grid-cols-1 gap-8">
//                     {baseToDecimalEx.map((item, idx) => (
//                         <motion.div
//                             key={idx}
//                             initial={{ opacity: 0, x: -20 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-10 shadow-xl shadow-slate-100/50 hover:border-blue-200 transition-all"
//                         >
//                             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//                                 <div className="space-y-1">
//                                     <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
//                                         Transformation
//                                     </span>
//                                     <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
//                                         {item.from} <ArrowRight size={20} className="text-blue-600" /> Decimal
//                                     </h2>
//                                 </div>
//                                 <div className="px-5 py-2 bg-slate-50 rounded-full border border-slate-100 text-xs font-bold text-slate-600 flex items-center gap-2 font-mono">
//                                     <Calculator size={14} /> {item.method}
//                                 </div>
//                             </div>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div className="space-y-3">
//                                     <p className="text-xs font-black text-slate-400 uppercase">Integer Part</p>
//                                     <div className="p-5 bg-slate-50 rounded-[24px] font-mono text-sm text-slate-700 leading-loose border border-slate-100">
//                                         {item.integer}
//                                     </div>
//                                 </div>
//                                 <div className="space-y-3">
//                                     <p className="text-xs font-black text-slate-400 uppercase">Fractional Part</p>
//                                     <div className="p-5 bg-slate-50 rounded-[24px] font-mono text-sm text-slate-700 leading-loose border border-slate-100">
//                                         {item.fraction}
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}

//                 </div>

//                 {/* --- Pro Visual Note --- */}
//                 <div className="p-8 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-6 items-center">
//                     <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0 text-white shadow-lg shadow-blue-200">
//                         <HelpCircle size={24} />
//                     </div>
//                     <p className="text-sm font-bold text-blue-900 leading-relaxed">
//                         মনে রেখো: অক্টাল বা হেক্সাডেসিমেলে নেওয়ার সময় দশমিকের আগের অংশকে <span className="underline">ডান থেকে বামে</span> ৩ বা ৪ বিট করে গ্রুপ করতে হয়, আর দশমিকের পরের অংশকে <span className="underline">বাম থেকে ডানে</span> গ্রুপ করতে হয়।
//                     </p>
//                 </div>

//             </div>
//         </main>
//     );
// }



"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Lightbulb, Calculator, HelpCircle } from 'lucide-react';
import DecimalToOthers from '@/components/DecimalToOthers/DecimalToOthers';

const conversionData = [
    {
        id: "binary",
        from: "Binary",
        method: "Base Power Method (2ⁿ)",
        integer: "(1011010)₂ = 1×2⁶ + 0×2⁵ + 1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 0×2⁰ = (90)₁₀",
        fraction: "(11011.101)₂ = (1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 1×2⁰) + (1×2⁻¹ + 0×2⁻² + 1×2⁻³) = (27.625)₁₀",
    },
    {
        id: "octal",
        from: "Octal",
        method: "Base Power Method (8ⁿ)",
        integer: "(203)₈ = 2×8² + 0×8¹ + 3×8⁰ = 128 + 0 + 3 = (131)₁₀",
        fraction: "(123.540)₈ = (1×8² + 2×8¹ + 3×8⁰) + (5×8⁻¹ + 4×8⁻² + 0×8⁻³) = (83.6875)₁₀",
    },
    {
        id: "hexadecimal",
        from: "Hexadecimal",
        method: "Base Power Method (16ⁿ)",
        integer: "(ABCD)₁₆ = 10×16³ + 11×16² + 12×16¹ + 13×16⁰ = (43981)₁₀",
        fraction: "(B5D.48)₁₆ = (11×16² + 5×16¹ + 13×16⁰) + (4×16⁻¹ + 8×16⁻²) = (2909.28125)₁₀",
    }
];

export default function BinaryToOthers() {
    const [activeTab, setActiveTab] = useState("all");
    const [mainType, setMainType] = useState("binary");

    const filteredData = activeTab === "all"
        ? conversionData
        : conversionData.filter(item => item.id === activeTab);

    const tabs = [
        { id: "all", label: "All Modes" },
        { id: "binary", label: "Binary" },
        { id: "octal", label: "Octal" },
        { id: "hexadecimal", label: "Hexadecimal" },
    ];
    const mainTabs = [
        { id: "decimal", label: "Decimal" },
        { id: "binary", label: "Binary" },
        { id: "octal", label: "Octal" },
        { id: "hexadecimal", label: "Hexadecimal" },
    ];

    return (
        <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto space-y-12">

                <div className="flex flex-col items-center gap-6">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 bg-slate-100 px-4 py-1 rounded-full">
                        Select Conversion Source
                    </span>
                    <div className="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-[30px] border border-slate-100 shadow-sm">
                        {mainTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => { setMainType(tab.id); setSubFilter("all"); }}
                                className={`px-8 py-3 rounded-[22px] text-sm font-black transition-all ${
                                    mainType === tab.id 
                                    ? "bg-slate-950 text-white shadow-xl scale-105" 
                                    : "text-slate-500 hover:bg-slate-50"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl md:text-6xl font-black text-center text-slate-950">
                        Any Base to <span className="text-blue-600">Decimal</span>
                    </h1>
                </motion.div>

                {/* --- Master Tips Box --- */}
                <motion.div layout className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full -mr-32 -mt-32" />
                    <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                        <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                            <Lightbulb size={32} />
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-blue-400">Master Tip: Any Base → Decimal</h3>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                যে কোনো সংখ্যা পদ্ধতি থেকে <span className="text-white font-bold underline">ডেসিমেলে</span> নিতে হলে ওই Number System এর বেজ দিয়ে গুণ করতে হবে।
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                                <div className="bg-white/5 p-5 rounded-3xl border border-white/10">
                                    <p className="text-blue-200 font-bold mb-1 uppercase">For Integers</p>
                                    <p className="text-slate-400">পাওয়ার 0 থেকে বাম দিকে বাড়তে থাকে।</p>
                                </div>
                                <div className="bg-white/5 p-5 rounded-3xl border border-white/10">
                                    <p className="text-emerald-200 font-bold mb-1 uppercase">For Fractions</p>
                                    <p className="text-slate-400">পাওয়ার -1 থেকে ডান দিকে কমতে থাকে।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* --- Header & Tabs --- */}
                <div className="text-center space-y-8">


                    {/* --- Filter Tabs --- */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all duration-300 ${activeTab === tab.id
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                                        : "bg-white text-slate-500 border border-slate-200 hover:border-blue-300"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* --- Conversion Cards Display --- */}
                <div className="grid grid-cols-1 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredData.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white border border-slate-100 rounded-[40px] p-8 md:p-10 shadow-xl"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                                    <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                                        {item.from} <ArrowRight size={20} className="text-blue-600" /> Decimal
                                    </h2>
                                    <div className="px-5 py-2 bg-slate-50 rounded-full border border-slate-100 text-xs font-bold text-slate-600 font-mono">
                                        <Calculator size={14} className="inline mr-2" /> {item.method}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono">
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Integer Part</p>
                                        <div className="p-5 bg-slate-50 rounded-[24px] text-sm text-slate-700 border border-slate-100">{item.integer}</div>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Fractional Part</p>
                                        <div className="p-5 bg-slate-50 rounded-[24px] text-sm text-slate-700 border border-slate-100">{item.fraction}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* --- Help Note --- */}
                <motion.div layout className="p-8 bg-blue-50 rounded-[32px] border border-blue-100 flex gap-6 items-center">
                    <HelpCircle size={24} className="text-blue-600 shrink-0" />
                    <p className="text-sm font-bold text-blue-900 leading-relaxed">
                        মনে রেখো: অক্টাল বা হেক্সাডেসিমেলে নেওয়ার সময় দশমিকের আগের অংশকে <span className="underline">ডান থেকে বামে</span> ৩ বা ৪ বিট করে গ্রুপ করতে হয়, আর দশমিকের পরের অংশকে <span className="underline">বাম থেকে ডানে</span> গ্রুপ করতে হয়।
                    </p>
                </motion.div>


                
            <DecimalToOthers />
            </div>

        </main>
    );
}