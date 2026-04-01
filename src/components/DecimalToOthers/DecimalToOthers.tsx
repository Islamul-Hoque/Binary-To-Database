// "use client";
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ArrowRight, Lightbulb, Calculator, HelpCircle, FileText } from 'lucide-react';

// const allDecimalConversions = [
//     {
//         id: "binary",
//         from: "Decimal",
//         to: "Binary",
//         question: "দশমিক সংখ্যা (25.625)₁₀ কে বাইনারি সংখ্যায় রূপান্তর করো।",
//         method: "Division/Multiplication by 2",
//         base: "2",
//         integerPart: "25",
//         integerSteps: [
//             { res: "12", rem: "1" },
//             { res: "6", rem: "0" },
//             { res: "3", rem: "0" },
//             { res: "1", rem: "1" },
//             { res: "0", rem: "1" },
//         ],
//         fractionTable: [
//             { mult: ".625 × 2", int: "1", frac: ".250" },
//             { mult: ".250 × 2", int: "0", frac: ".500" },
//             { mult: ".500 × 2", int: "1", frac: ".000" },
//         ],
//         result: "(25.625)₁₀ = (11001.101)₂"
//     },
//     {
//         id: "octal",
//         from: "Decimal",
//         to: "Octal",
//         question: "দশমিক সংখ্যা (311.32)₁₀ কে অক্টাল সংখ্যায় রূপান্তর করো।",
//         method: "Division/Multiplication by 8",
//         base: "8",
//         integerPart: "311",
//         integerSteps: [
//             { res: "38", rem: "7" },
//             { res: "4", rem: "6" },
//             { res: "0", rem: "4" },
//         ],
//         fractionTable: [
//             { mult: ".32 × 8", int: "2", frac: ".56" },
//             { mult: ".56 × 8", int: "4", frac: ".48" },
//             { mult: ".48 × 8", int: "3", frac: ".84" },
//             { mult: ".84 × 8", int: "6", frac: ".72" },
//             { mult: ".72 × 8", int: "5", frac: ".76" },
//         ],
//         result: "(311.32)₁₀ = (467.24365...)₈"
//     },
//     {
//         id: "hexadecimal",
//         from: "Decimal",
//         to: "Hexadecimal",
//         question: "দশমিক সংখ্যা (436.32)₁₀ কে হেক্সাডেসিমেল সংখ্যায় রূপান্তর করো।",
//         method: "Division/Multiplication by 16",
//         base: "16",
//         integerPart: "436",
//         integerSteps: [
//             { res: "27", rem: "4" },
//             { res: "1", rem: "11 (B)" },
//             { res: "0", rem: "1" },
//         ],
//         fractionTable: [
//             { mult: ".32 × 16", int: "5", frac: ".12" },
//             { mult: ".12 × 16", int: "1", frac: ".92" },
//             { mult: ".92 × 16", int: "14 (E)", frac: ".72" },
//             { mult: ".72 × 16", int: "11 (B)", frac: ".52" },
//         ],
//         result: "(436.32)₁₀ = (1B4.51EB...)₁₆"
//     }
// ];

// export default function DecimalToOthers() {
//     const [activeTab, setActiveTab] = useState("all");

//     const filteredData = activeTab === "all" 
//         ? allDecimalConversions 
//         : allDecimalConversions.filter(item => item.id === activeTab);

//     return (
//         <section className="max-w-6xl mx-auto py-12 px-6 space-y-16">
//             {/* Header & Tabs */}
//             <div className="text-center space-y-6">
//                 <h1 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
//                     Decimal <span className="text-blue-600">to</span> Others
//                 </h1>
//                 <p className="text-slate-500 font-medium italic">Complete step-by-step guides for Decimal to Binary, Octal, and Hexadecimal conversion</p>
//                 <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
//                     {["all", "binary", "octal", "hexadecimal"].map((tab) => (
//                         <button
//                             key={tab}
//                             onClick={() => setActiveTab(tab)}
//                             className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all capitalize ${
//                                 activeTab === tab ? "bg-white text-blue-600 shadow-sm scale-105" : "text-slate-500 hover:text-slate-800"
//                             }`}
//                         >
//                             {tab === 'all' ? 'Show All' : tab}
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             <div className="space-y-24">
//                 <AnimatePresence mode='popLayout'>
//                     {filteredData.map((item) => (
//                         <motion.div
//                             key={item.id}
//                             layout
//                             initial={{ opacity: 0, y: 30 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl relative overflow-hidden"
//                         >
//                             {/* Problem Taskbar */}
//                             <div className="relative z-10 space-y-10">
//                                 <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-50 pb-8">
//                                     <div className="flex items-center gap-3">
//                                         <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
//                                             <FileText size={24} />
//                                         </div>
//                                         <div>
//                                             <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">Convert</span>
//                                             <h3 className="text-xl font-bold text-slate-800 mt-1">{item.question}</h3>
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center gap-2 px-5 py-2.5 bg-slate-50 rounded-full border border-slate-100">
//                                         <Calculator size={16} className="text-slate-400" />
//                                         <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight">{item.method}</span>
//                                     </div>
//                                 </div>

//                                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pt-4">
//                                     {/* Integer Part: Staircase Style */}
//                                     <div className="lg:col-span-7 space-y-8">
//                                         <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
//                                             <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div> পূর্ণাংশের ধাপসমূহ (Integer)
//                                         </h4>
//                                         <div className="p-8 bg-slate-50 rounded-[35px] border border-slate-100 font-mono text-sm leading-loose relative overflow-x-auto">
//                                             {item.integerSteps.map((step, idx) => (
//                                                 <div 
//                                                     key={idx} 
//                                                     className="flex items-end gap-0"
//                                                     style={{ marginLeft: `${idx * 28}px` }}
//                                                 >
//                                                     {/* সিঁড়ির মতো বাঁকা করে প্রতিটা ধাপের আগে বেস */}
//                                                     <div className="w-12 h-12 border-l-2 border-b-2 border-slate-300 flex items-center justify-center text-blue-600 font-black text-xs">
//                                                         {item.base}
//                                                     </div>
//                                                     <div className="px-6 py-2 border-b-2 border-slate-300 min-w-[80px] text-center">
//                                                         {idx === 0 ? item.integerPart : item.integerSteps[idx-1].res}
//                                                     </div>
//                                                     <div className="pl-6 pb-2 text-emerald-600 font-bold flex gap-2 items-center">
//                                                         — {step.rem}
//                                                         {idx === 0 && <span className="text-[9px] ml-1 text-slate-400 uppercase tracking-tight">LSB</span>}
//                                                         {idx === item.integerSteps.length - 1 && <span className="text-[9px] ml-1 text-slate-400 uppercase tracking-tight">MSB</span>}
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                             <div className="flex items-end" style={{ marginLeft: `${item.integerSteps.length * 28}px` }}>
//                                                 <div className="w-12 h-12"></div>
//                                                 <div className="px-6 py-2 font-mono text-lg text-slate-400">0</div>
//                                             </div>
                                            
//                                             {/* Bottom to Top Arrow */}
//                                             <div className="absolute right-8 top-12 bottom-8 flex flex-col items-center gap-2 justify-center">
//                                                 <div className="h-4/5 w-[2.5px] bg-blue-600 relative">
//                                                     <div className="absolute -top-1 -left-[4.5px] border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-blue-600" />
//                                                 </div>
//                                                 <span className="text-[9px] font-black text-blue-600 [writing-mode:vertical-lr] rotate-180 uppercase tracking-widest">Read Up</span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     {/* Fraction Section */}
//                                     <div className="lg:col-span-5 space-y-8">
//                                         <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
//                                             <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div> ভগ্নাংশের টেবিল (Fraction)
//                                         </h4>
//                                         <div className="bg-slate-950 rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden font-mono text-xs leading-relaxed">
//                                             <div className="grid grid-cols-3 pb-3 border-b border-white/10 text-[10px] text-slate-500 font-black mb-4">
//                                                 <span>CALCULATION</span>
//                                                 <span className="text-center text-emerald-300">INTEGER</span>
//                                                 <span className="text-right text-blue-300">FRACTION</span>
//                                             </div>
//                                             {item.fractionTable.map((row, i) => (
//                                                 <div key={i} className="grid grid-cols-3 items-center group/row py-1">
//                                                     <span className="text-slate-400 group-hover/row:text-white transition-colors">{row.mult}</span>
//                                                     <span className="text-center text-emerald-400 font-bold">{row.int}</span>
//                                                     <span className="text-right text-blue-400">{row.frac}</span>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Full Result */}
//                                 <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-[35px] flex flex-col md:flex-row justify-between items-center gap-5 shadow-inner">
//                                     <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Final Conversion</span>
//                                     <div className="flex items-center gap-3">
//                                         <h2 className="text-2xl font-mono font-black text-slate-950 tracking-tighter">
//                                             {item.result}
//                                         </h2>
//                                         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-600 border border-slate-100">
//                                             <ArrowRight size={20} />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </AnimatePresence>
//             </div>

//             {/* Hint Note */}
//             <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100 flex gap-6 items-center shadow-inner">
//                 <HelpCircle size={28} className="text-blue-600 shrink-0" />
//                 <p className="text-sm font-bold text-blue-900 leading-relaxed">
//                     প্রয়োজনীয় টিপস: পূর্ণাংশের ক্ষেত্রে ভাগশেষগুলো <span className="underline decoration-blue-500 decoration-2 underline-offset-4 font-black">নিচ থেকে উপরে (MSB → LSB)</span> সাজাতে হয়, তোমার ছবির সিঁড়ির মতো করে।
//                 </p>
//             </div>
//         </section>
//     );
// }






"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calculator, FileText, HelpCircle, Lightbulb } from 'lucide-react';


interface Step {
  res: string;
  rem: string;
}

interface FractionRow {
  mult: string;
  int: string;
  frac: string;
}

interface ConversionData {
  id: string;
  question: string;
  method: string;
  base: string;
  integerPart: string;
  integerSteps: Step[];
  fractionTable?: FractionRow[]; 
  result: string;
}


const RecursiveStaircase = ({ steps, base, initialValue, index = 0 }: any) => {
  if (index >= steps.length) {
    return (
      <div className="ml-12 mt-4">
        <div className="px-6 py-2 bg-slate-800 text-white rounded-xl inline-block font-black text-2xl shadow-xl border-4 border-slate-700">
          0
        </div>
      </div>
    );
  }

  const currentStep = steps[index];
  const currentValue = index === 0 ? initialValue : steps[index - 1].res;

  return (
    <div className="flex flex-col">
      <div className="flex items-end">
        <div className="w-12 h-12 flex items-center justify-center font-black text-blue-600 text-xl italic">
          {base}
        </div>
        <div className="border-l-[3px] border-b-[3px] border-blue-500/40 px-8 py-4 bg-white shadow-sm min-w-[100px] text-center rounded-bl-2xl">
          <span className="text-3xl font-black text-slate-800">{currentValue}</span>
        </div>
        <div className="ml-10 pb-4 flex flex-col items-start border-l-2 border-dotted border-emerald-300 pl-4">
          <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Remainder</span>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-emerald-600">— {currentStep.rem}</span>
            {index === 0 && <span className="text-[9px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">LSB</span>}
            {index === steps.length - 1 && <span className="text-[9px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded font-bold">MSB</span>}
          </div>
        </div>
      </div>
      <div className="ml-12 flex flex-col">
        <RecursiveStaircase steps={steps} base={base} initialValue={initialValue} index={index + 1} />
      </div>
    </div>
  );
};


const allDecimalConversions: ConversionData[] = [
  {
    id: "binary",
    question: "দশমিক সংখ্যা (25.625)₁₀ কে বাইনারি সংখ্যায় রূপান্তর করো।",
    method: "Division/Multiplication by 2",
    base: "2",
    integerPart: "25",
    integerSteps: [
      { res: "12", rem: "1" },
      { res: "6", rem: "0" },
      { res: "3", rem: "0" },
      { res: "1", rem: "1" },
      { res: "0", rem: "1" },
    ],
    fractionTable: [
      { mult: ".625 × 2", int: "1", frac: ".250" },
      { mult: ".250 × 2", int: "0", frac: ".500" },
      { mult: ".500 × 2", int: "1", frac: ".000" },
    ],
    result: "(25.625)₁₀ = (11001.101)₂"
  },
  {
    id: "octal",
    question: "দশমিক সংখ্যা (311.32)₁₀ কে অক্টাল সংখ্যায় রূপান্তর করো।",
    method: "Division/Multiplication by 8",
    base: "8",
    integerPart: "311",
    integerSteps: [
      { res: "38", rem: "7" },
      { res: "4", rem: "6" },
      { res: "0", rem: "4" },
    ],
    fractionTable: [
      { mult: ".32 × 8", int: "2", frac: ".56" },
      { mult: ".56 × 8", int: "4", frac: ".48" },
      { mult: ".48 × 8", int: "3", frac: ".84" },
    ],
    result: "(311.32)₁₀ = (467.243...)₈"
  },
  {
    id: "hexadecimal",
    question: "দশমিক সংখ্যা (436.32)₁₀ কে হেক্সাডেসিমেল সংখ্যায় রূপান্তর করো।",
    method: "Division/Multiplication by 16",
    base: "16",
    integerPart: "436",
    integerSteps: [
      { res: "27", rem: "4" },
      { res: "1", rem: "11 (B)" },
      { res: "0", rem: "1" },
    ],
    fractionTable: [
      { mult: ".32 × 16", int: "5", frac: ".12" },
      { mult: ".12 × 16", int: "1", frac: ".92" },
    ],
    result: "(436.32)₁₀ = (1B4.51...)₁₆"
  }
];

export default function DecimalToOthers() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredData = activeTab === "all" 
    ? allDecimalConversions 
    : allDecimalConversions.filter(item => item.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">
            Decimal <span className="text-blue-600 italic">to</span> Others
          </h1>

{/* Master Tip: Decimal to Others */}

<motion.div 
  layout 
  className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20 max-w-6xl mx-auto"
>
  {/* Background Glow */}
  <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-[120px] rounded-full -mr-32 -mt-32" />
  
  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start text-left">
    {/* Icon Container */}
    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/20">
      <Lightbulb size={32} />
    </div>

    {/* Content Area */}
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-2xl font-black text-blue-400 tracking-tight">Master Tip: Decimal → Any Base</h3>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          ডেসিমেল থেকে অন্য যেকোনো পদ্ধতিতে রূপান্তরের সময় ওই নাম্বার সিস্টেমের <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">বেজ (Base)</span> ব্যবহার করে নিচের নিয়মটি অনুসরণ করো:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Rule for Integers */}
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <p className="text-blue-200 font-black uppercase tracking-widest text-[10px]">For Integers (পূর্ণ সংখ্যা)</p>
          </div>
          <p className="text-slate-400 text-[13px] leading-relaxed">
            বেজ দিয়ে ক্রমাগত <span className="text-white font-bold underline">ভাগ</span> করতে হবে এবং ভাগশেষগুলো <span className="text-blue-400 font-black italic">নিচ থেকে উপরে (LSB to MSB)</span> সাজাতে হবে।
          </p>
        </div>

        {/* Rule for Fractions */}
        <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <p className="text-emerald-200 font-black uppercase tracking-widest text-[10px]">For Fractions (ভগ্নাংশ)</p>
          </div>
          <p className="text-slate-400 text-[13px] leading-relaxed">
            বেজ দিয়ে ক্রমাগত <span className="text-white font-bold underline">গুণ</span> করতে হবে এবং পূর্ণ সংখ্যাগুলো <span className="text-emerald-400 font-black italic">উপর থেকে নিচে</span> সাজাতে হবে।
          </p>
        </div>
      </div>
    </div>
  </div>
</motion.div>



          <div className="flex justify-center gap-3 mt-6">
            {["all", "binary", "octal", "hexadecimal"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeTab === tab ? "bg-blue-600 text-white shadow-xl" : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-16">
          <AnimatePresence mode="wait">
            {filteredData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[48px] p-8 md:p-12 border border-slate-200 shadow-2xl overflow-hidden"
              >
                {/* Info Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 pb-8 mb-12">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3">
                      <FileText size={28} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Full Solution</span>
                      <h3 className="text-xl font-bold text-slate-800 leading-tight">{item.question}</h3>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-xs font-black text-slate-500 uppercase">
                    {item.method}
                  </div>
                </div>

                {/* Main Logic Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  
                  {/* Left: Integer Part (The Staircase) */}
                  <div className="lg:col-span-7 space-y-6">
                    <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div> পূর্ণাংশের সিঁড়ি (Integer)
                    </h4>
                    <div className="relative pt-4 pb-10 overflow-x-auto scrollbar-hide bg-slate-50/50 rounded-[40px] p-4 border border-slate-100">
                      <div className="min-w-max">
                        <RecursiveStaircase 
                          steps={item.integerSteps} 
                          base={item.base} 
                          initialValue={item.integerPart} 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right: Fraction Part (The Table) */}
                  <div className="lg:col-span-5 space-y-6">
                    <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div> ভগ্নাংশের টেবিল (Fraction)
                    </h4>
                    {item.fractionTable ? (
                      <div className="bg-slate-950 rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden font-mono text-xs leading-relaxed">
                        <div className="grid grid-cols-3 pb-3 border-b border-white/10 text-[10px] text-slate-500 font-black mb-4">
                            <span>CALCULATION</span>
                            <span className="text-center text-emerald-300">INTEGER</span>
                            <span className="text-right text-blue-300">FRACTION</span>
                        </div>
                        {item.fractionTable.map((row, i) => (
                            <div key={i} className="grid grid-cols-3 items-center group/row py-2 border-b border-white/5 last:border-0">
                                <span className="text-slate-400 group-hover/row:text-white transition-colors">{row.mult}</span>
                                <span className="text-center text-emerald-400 font-bold text-lg">{row.int}</span>
                                <span className="text-right text-blue-400">{row.frac}</span>
                            </div>
                        ))}
                        {/* Direction Arrow for Fraction */}
                        <div className="mt-6 flex justify-center">
                            <div className="flex flex-col items-center gap-1 opacity-50">
                                <div className="h-8 w-px bg-emerald-400 relative">
                                    <div className="absolute -bottom-1 -left-[4px] border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-emerald-400"></div>
                                </div>
                                <span className="text-[8px] text-emerald-400 font-black uppercase">Read Top to Bottom</span>
                            </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center bg-slate-100 rounded-[40px] border-2 border-dashed border-slate-200 text-slate-400 text-sm font-bold">
                        No Fraction Part
                      </div>
                    )}

                    {/* Result Box */}
                    <div className="p-8 bg-blue-600 rounded-[40px] text-white shadow-xl shadow-blue-100 flex flex-col justify-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Result</span>
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-mono font-black">{item.result}</h2>
                            <ArrowRight />
                        </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Note */}
        <div className="max-w-2xl mx-auto p-8 bg-amber-50 rounded-[40px] border border-amber-100 flex gap-6 items-center shadow-sm">
          <HelpCircle size={32} className="text-amber-500 shrink-0" />
          <p className="text-sm font-bold text-slate-600 leading-relaxed italic">
            পূর্ণাংশের ক্ষেত্রে আমরা নিচ থেকে উপরে (MSB to LSB) রিড করি, কিন্তু ভগ্নাংশের ক্ষেত্রে আমরা উপর থেকে নিচে রিড করি।
          </p>
        </div>
      </div>
    </div>
  );
}








// import React from 'react';

// // টাইপ ডেফিনিশন
// interface Step {
//   base: number;
//   dividend: number;
//   remainder: string | number;
//   label?: string;
// }

// const DecimalToOthers = () => {
//   // তোমার স্যাম্পল অনুযায়ী ডেটা (এখানে চাইলে আরও স্টেপ বাড়ানো যাবে)
//   const binarySteps: Step[] = [
//     { base: 2, dividend: 25, remainder: 1, label: 'LSB' },
//     { base: 2, dividend: 12, remainder: 0 },
//     { base: 2, dividend: 6, remainder: 0 },
//     { base: 2, dividend: 3, remainder: 1 },
//     { base: 2, dividend: 1, remainder: 1, label: 'MSB' },
//   ];

//   // রিকার্সিভ ফাংশন: যা সিঁড়ির মতো একটার ভেতর একটা ধাপ তৈরি করবে
//   const renderSteps = (steps: Step[], index: number): React.ReactNode => {
//     if (index >= steps.length) {
//       // শেষ ধাপের ০ (Zero)
//       return (
//         <div className="ml-12 mt-4">
//           <div className="px-6 py-2 bg-[#7b3200] text-white rounded-md inline-block font-bold text-2xl shadow-lg">
//             0
//           </div>
//         </div>
//       );
//     }

//     const current = steps[index];

//     return (
//       <div className="flex flex-col">
//         <div className="flex items-end">
//           {/* বেস সংখ্যা (Base) - এল শেপের আগে */}
//           <div className="w-12 h-12 flex items-center justify-center font-bold text-[#00488d] text-xl">
//             {current.base}
//           </div>
          
//           {/* এল-শেপ ব্র্যাকেট এবং ভাজ্য (Dividend) */}
//           <div className="border-l-2 border-b-2 border-[#00488d] px-8 py-4 bg-white shadow-sm min-w-[100px] text-center">
//             <span className="text-3xl font-bold">{current.dividend}</span>
//           </div>

//           {/* ডানপাশে ভাগশেষ (Remainder) */}
//           <div className="ml-12 pb-4 flex flex-col items-center">
//             <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Remainder</span>
//             <span className="text-3xl font-bold text-[#7b3200]">{current.remainder}</span>
//             {current.label && (
//               <span className="text-[10px] text-blue-500 font-bold">{current.label}</span>
//             )}
//           </div>
//         </div>

//         {/* পরবর্তী ধাপ - যা অটোমেটিক ডানে সরে যাবে (Indented) */}
//         <div className="ml-12 flex flex-col">
//           {renderSteps(steps, index + 1)}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <main className="flex-1 p-6 md:p-12 max-w-5xl mx-auto bg-[#f7f9fb] min-h-screen">
//       <section className="relative">
//         <div className="flex justify-between items-start mb-8">
//           <h3 className="text-sm font-bold uppercase tracking-tighter text-gray-400">
//             Algorithmic Cascade
//           </h3>
//           <div className="flex items-center space-x-2 text-[#7b3200]">
//             <span className="text-xs font-medium">Remainder tracks the binary digit</span>
//           </div>
//         </div>

//         {/* মেইন ক্যাসকেড এরিয়া */}
//         <div className="flex flex-col space-y-0 relative">
//           {renderSteps(binarySteps, 0)}

//           {/* রিড অর্ডার অ্যারো (নিচ থেকে উপরে) */}
//           <div className="absolute right-0 top-12 bottom-20 flex items-center">
//             <div className="h-full w-px border-r-2 border-dashed border-[#00488d] relative flex items-center justify-center">
//               <div className="absolute bottom-0 w-4 h-4 bg-[#00488d] rounded-full mb-[-8px]"></div>
//               <div className="absolute top-0 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-[#00488d] mt-[-12px]"></div>
//               <div className="whitespace-nowrap -rotate-90 bg-[#f7f9fb] px-4 py-1 text-[#00488d] font-bold text-xs tracking-widest uppercase">
//                 Read Order: Bottom to Top
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default DecimalToOthers;