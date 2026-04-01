// // "use client";
// // import { motion } from "framer-motion";

// // export default function CQPage() {
// //   const questions = [
// //     "(i) চিত্র-১ কোন গেটের সাথে সাদৃশ্যপূর্ণ তার বর্ণনা দাও।",
// //     "(ii) চিত্র-১ এর গেটটিকে মৌলিক গেটের সাহায্যে প্রকাশ কর।",
// //     "(iii) চিত্র-১ এর গেটটিকে NAND এবং NOR গেটের সাহায্যে বাস্তবায়ন কর এবং লজিক গেট আঁক।",
// //     "(iv) চিত্র-২ হতে আউটপুট Y এর মান সত্যক সারণিতে দেখাও।",
// //     "(v) চিত্র-২ এর আউটপুট F এর মান নির্ণয় কর এবং সরলীকরণ করে নতুন লজিক গেট আঁক।",
// //     "(vi) চিত্র-২ এ ২ ও ৩ নং চিহ্নিত গেটগুলোর পারস্পরিক পরিবর্তনে যে লজিক সার্কিট পাওয়া যায় তার Y এর মান সত্যক সারণিতে দেখাও।",
// //     "(vii) ‘vi’ নং প্রাপ্ত গেটটির (Y) মান NAND এবং NOR গেটের সাহায্যে বাস্তবায়ন কর।",
// //     "(viii) চিত্র-4 এর ডিভাইসটিকে মৌলিক গেটের সাহায্যে প্রকাশ কর এবং লজিক গেট আঁকন কর।",
// //     "(ix) চিত্র-3 এর ডিভাইসটি কী? গঠন ব্যাখ্যা কর।",
// //     "(x) চিত্র-2 এর ডিভাইসটি হলে F = ¯AB · ¯AB এর সরলীকৃত মান নির্ণয় করে লজিক গেট আঁকন কর।",
// //     "(xi) চিত্র-3 এর ডিভাইস ইনপুট 4টি এবং আউটপুট 2টি হলে যে নতুন ডিভাইস পাওয়া যায়, তার লজিক গেট আঁকন কর।",
// //     "(xii) “vi” নং প্রশ্নে প্রাপ্ত গেটটি বাইনারি যোগের বর্তনীতে ব্যবহারের উপযোগী - মূল্যায়ন কর।",
// //     "(xiii) চিত্র-2 এর 2নং গেট দ্বারা মৌলিক গেটগুলো বাস্তবায়ন করা সম্ভব - ব্যাখ্যা কর।",
// //     "(xiv) চিত্র-4 এ একটি ইনপুট কম হলে যে ডিভাইসটি পাওয়া যায় তার দ্বারা পূর্বের ডিভাইসটি বাস্তবায়ন করা সম্ভব- সত্যতা যাচাই কর।",
// //   ];

// // const truthTableRows = [
// //   { A: 0, B: 0, Y: 1 },
// //   { A: 0, B: 1, Y: 0 },
// //   { A: 1, B: 0, Y: 0 },
// //   { A: 1, B: 1, Y: 1 },
// // ];

// //   return (
// //     <main className="min-h-screen bg-slate-50 py-20 px-6">
// //       <div className="max-w-6xl mx-auto space-y-16">

// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="text-center space-y-4"
// //         >
// //           <h1 className="text-4xl md:text-6xl font-black text-slate-900">
// //             CQ: লজিক সার্কিট ও গেট
// //           </h1>
// //           <p className="text-slate-600 max-w-3xl mx-auto">
// //             নিচের ৪টি চিত্র এবং ১৪টি প্রশ্ন একত্রে সমাধান কর।
// //           </p>
// //         </motion.div>

// //         {/* Figures Section */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

// //           {/* Figure-1: Truth Table */}
// //           <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200">
// //             <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">চিত্র-১: Truth Table</h3>
// //             <table className="w-full border-collapse font-mono text-sm">
// //               <thead>
// //                 <tr className="bg-slate-100 text-slate-700">
// //                   <th className="border px-4 py-2">A</th>
// //                   <th className="border px-4 py-2">B</th>
// //                   <th className="border px-4 py-2">Y</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {truthTableRows.map((row, idx) => (
// //                   <tr key={idx} className="hover:bg-slate-50">
// //                     <td className="border px-4 py-2 text-center">{row.A}</td>
// //                     <td className="border px-4 py-2 text-center">{row.B}</td>
// //                     <td className="border px-4 py-2 text-center font-bold text-blue-600">{row.Y}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* Figure-2: Logic gate */}
// //           <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
// //             <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৩: Block Diagram</h3>
// //             <img src="/logicGate.png" className="" alt="" />
// //           </div>

// //           {/* Figure-3: Block Diagram */}
// //           <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
// //             <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৩: Block Diagram</h3>
// //             <div className="flex items-center gap-6">
// //               {/* Input */}
// //               <div className="flex flex-col items-center">
// //                 <span className="text-sm font-bold text-slate-600 mb-2">Input</span>
// //                 <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">N</div>
// //               </div>

// //               {/* Main Box (bigger with border) */}
// //               <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
// //                 Device
// //               </div>

// //               {/* Output */}
// //               <div className="flex flex-col items-center">
// //                 <span className="text-sm font-bold text-slate-600 mb-2">Output</span>
// //                 <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">
// //                   2^N
// //                 </div>
// //               </div>
// //             </div>
// //           </div>


// //           {/* Figure-8: Multi Input-Output Box */}
// //           <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
// //             <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৮: Multi I/O Diagram</h3>
// //             <div className="flex items-center gap-6">
// //               <div className="flex flex-col gap-2">
// //                 <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 1</div>
// //                 <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 2</div>
// //                 <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 3</div>
// //               </div>
// //               <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
// //                 Device
// //               </div>
// //               <div className="flex flex-col gap-2">
// //                 <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 1</div>
// //                 <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 2</div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Figure-4: Placeholder for image */}

// //         </div>

// //         {/* Questions Section */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           className="bg-white rounded-[48px] shadow-xl p-10 border border-slate-200"
// //         >
// //           <h2 className="text-2xl font-black text-slate-900 mb-6">প্রশ্নাবলী</h2>
// //           <ul className="space-y-4 list-decimal list-inside text-slate-700 font-medium">
// //             {questions.map((q, idx) => (
// //               <li key={idx}>{q}</li>
// //             ))}
// //           </ul>
// //         </motion.div>
// //       </div>
// //     </main>
// //   );
// // }



// "use client";
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   ChevronDown, ChevronUp, Calculator, ArrowRightLeft,
//   Hash, CheckCircle2, ClipboardList
// } from 'lucide-react';

// const truthTableRows = [
//   { A: 0, B: 0, Y: 1 },
//   { A: 0, B: 1, Y: 0 },
//   { A: 1, B: 0, Y: 0 },
//   { A: 1, B: 1, Y: 1 },
// ];


// const PracticePage = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [showSolutions, setShowSolutions] = useState(false);

//   const solutions = [
//     {
//       id: 1,
//       q: "(i) চিত্র-১ কোন গেটের সাথে সাদৃশ্যপূর্ণ তার বর্ণনা দাও।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
//           <p className="font-bold text-slate-900">চিত্র-১ সাধারণত একটি XOR গেটকে নির্দেশ করে (উদ্দীপক অনুযায়ী)।</p>
//           <p>XOR গেট হলো এমন একটি লজিক গেট যার ইনপুট সংখ্যা বিজোড় সংখ্যক ১ (1) হলে আউটপুট ১ হয়, অন্যথায় ০ হয়। এটি ডিজিটাল সার্কিটে হাফ-অ্যাডার এবং ফুল-অ্যাডারের সাম (Sum) তৈরিতে ব্যবহৃত হয়।</p>
//         </div>
//       )
//     },
//     {
//       id: 2,
//       q: "(ii) চিত্র-১ এর গেটটিকে মৌলিক গেটের সাহায্যে প্রকাশ কর।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
//           <p>XOR গেটের আউটপুট সমীকরণ: <span className="font-mono font-bold">Y = A⊕B = ĀB + AḂ</span></p>
//           <p className="font-bold text-indigo-600 underline">প্রয়োজনীয় মৌলিক গেট:</p>
//           <ul className="list-disc pl-5 space-y-1">
//             <li>২টি NOT গেট (ইনপুটের বিপরীত মান পাওয়ার জন্য)</li>
//             <li>২টি AND গেট (গুণের কাজ করার জন্য)</li>
//             <li>১টি OR গেট (যোগের কাজ করার জন্য)</li>
//           </ul>
//         </div>
//       )
//     },
//     {
//       id: 3,
//       q: "(iii) চিত্র-১ এর গেটটিকে NAND এবং NOR গেটের সাহায্যে বাস্তবায়ন কর এবং লজিক গেট আঁক।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
//           <p className="font-bold">NAND গেট দিয়ে XOR বাস্তবায়ন:</p>
//           <div className="bg-slate-50 p-3 rounded font-mono border-l-2 border-indigo-500">
//             Y = ((A(AB)')' (B(AB)')')'
//           </div>
//           <p>এক্ষেত্রে মোট ৪টি NAND গেট প্রয়োজন। একইভাবে ৫টি NOR গেট ব্যবহার করে এই লজিক গেটটি বাস্তবায়ন করা সম্ভব।</p>
//         </div>
//       )
//     },
//     {
//       id: 4,
//       q: "(iv) চিত্র-২ হতে আউটপুট Y এর মান সত্যক সারণিতে দেখাও।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700">
//           <p className="font-bold mb-2 text-slate-900">Y = A + B (OR Gate) এর সত্যক সারণি:</p>
//           <table className="min-w-[180px] border-collapse border border-slate-300 text-center">
//             <thead className="bg-slate-100">
//               <tr>
//                 <th className="border border-slate-300 p-1">A</th>
//                 <th className="border border-slate-300 p-1">B</th>
//                 <th className="border border-slate-300 p-1">Y</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td className="border border-slate-300 p-1">0</td><td className="border border-slate-300 p-1">0</td><td className="border border-slate-300 p-1">0</td></tr>
//               <tr><td className="border border-slate-300 p-1">0</td><td className="border border-slate-300 p-1">1</td><td className="border border-slate-300 p-1">1</td></tr>
//               <tr><td className="border border-slate-300 p-1">1</td><td className="border border-slate-300 p-1">0</td><td className="border border-slate-300 p-1">1</td></tr>
//               <tr><td className="border border-slate-300 p-1">1</td><td className="border border-slate-300 p-1">1</td><td className="border border-slate-300 p-1">1</td></tr>
//             </tbody>
//           </table>
//         </div>
//       )
//     },
//     {
//       id: 5,
//       q: "(v) চিত্র-২ এর আউটপুট F এর মান নির্ণয় কর এবং সরলীকরণ করে নতুন লজিক গেট আঁক।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700 font-mono">
//           <p className="font-sans font-bold">সরলীকরণ প্রক্রিয়া:</p>
//           <div className="pl-4 border-l-2 border-emerald-400 py-1">
//             <p>F = A + AB</p>
//             <p>= A(1 + B)</p>
//             <p>= A · 1</p>
//             <p>= A</p>
//           </div>
//           <p className="font-sans text-slate-600 italic">নতুন লজিক গেটটি হবে একটি Buffer বা সরাসরি সংযোগ।</p>
//         </div>
//       )
//     },
//     {
//       id: 6,
//       q: "(vi) চিত্র-২ এ ২ ও ৩ নং চিহ্নিত গেটগুলোর পারস্পরিক পরিবর্তনে প্রাপ্ত Y এর মান সত্যক সারণিতে দেখাও।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700">
//           <p>গেটগুলো পরিবর্তনের পর প্রাপ্ত সমীকরণ যদি <span className="font-mono font-bold text-rose-600">Y = (A·B)'</span> (NAND) হয়:</p>
//           <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 w-fit">
//             <p className="font-mono">A=0, B=0 → Y=1</p>
//             <p className="font-mono">A=1, B=1 → Y=0</p>
//           </div>
//           <p>এটি প্রমাণ করে যে গেট পরিবর্তনের ফলে আউটপুট সম্পূর্ণ বিপরীত হয়ে যায়।</p>
//         </div>
//       )
//     },
//     {
//       id: 7,
//       q: "(vii) ‘vi’ নং প্রাপ্ত গেটটির (Y) মান NAND এবং NOR গেটের সাহায্যে বাস্তবায়ন কর।",
//       ans: (
//         <div className="space-y-3 text-[13px] text-slate-700">
//           <p>প্রাপ্ত গেটটি NAND হলে, এটি নিজেই একটি NAND গেট।</p>
//           <p className="font-bold underline">NOR গেট দিয়ে NAND বাস্তবায়ন:</p>
//           <p className="font-mono">Y = ((A+A)' + (B+B)')'</p>
//           <p>এক্ষেত্রে মোট ৪টি NOR গেট প্রয়োজন হয়।</p>
//         </div>
//       )
//     },
//     {
//       id: 8,
//       q: "(viii) চিত্র-4 এর ডিভাইসটিকে মৌলিক গেটের সাহায্যে প্রকাশ কর এবং লজিক গেট আঁকন কর।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700">
//           <p>চিত্র-৪ একটি **Decoder** হলে এর আউটপুট মৌলিক গেট (AND ও NOT) দিয়ে প্রকাশ করা হয়।</p>
//           <p className="font-mono font-bold bg-indigo-50 p-2 text-indigo-700 inline-block rounded">D₀ = ĀḂ, D₁ = ĀB, D₂ = AḂ, D₃ = AB</p>
//         </div>
//       )
//     },
//     {
//       id: 9,
//       q: "(ix) চিত্র-3 এর ডিভাইসটি কী? গঠন ব্যাখ্যা কর।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700">
//           <p className="font-bold text-slate-900">এটি একটি এনকোডার (Encoder)।</p>
//           <p>গঠন: এটিতে 2ⁿ সংখ্যক ইনপুট এবং n সংখ্যক আউটপুট থাকে। এটি মূলত OR গেটের সমন্বয়ে গঠিত একটি ডিজিটাল সার্কিট।</p>
//         </div>
//       )
//     },
//     {
//       id: 10,
//       q: "(x) F = ĀB · ĀB এর সরলীকৃত মান নির্ণয় করে লজিক গেট আঁকন কর।",
//       ans: (
//         <div className="space-y-3 text-[13px] text-slate-700 font-mono">
//           <p>F = (ĀB) · (ĀB)</p>
//           <p>= ĀB [যেহেতু X · X = X]</p>
//           <p className="font-sans mt-2">লজিক গেট: একটি NOT গেট এবং একটি AND গেট লাগবে।</p>
//         </div>
//       )
//     },
//     {
//       id: 11,
//       q: "(xi) চিত্র-3 এর ডিভাইস ইনপুট 4টি এবং আউটপুট 2টি হলে যে নতুন ডিভাইস পাওয়া যায়, তার লজিক গেট আঁকন কর।",
//       ans: (
//         <div className="space-y-3 text-[13px] text-slate-700">
//           <p>এটি একটি **4-to-2 লাইন এনকোডার**।</p>
//           <p className="font-bold underline">আউটপুট সমীকরণ:</p>
//           <p className="font-mono">Y₀ = D₁ + D₃</p>
//           <p className="font-mono">Y₁ = D₂ + D₃</p>
//         </div>
//       )
//     },
//     {
//       id: 12,
//       q: "(xii) “vi” নং প্রশ্নে প্রাপ্ত গেটটি বাইনারি যোগের বর্তনীতে ব্যবহারের উপযোগী - মূল্যায়ন কর।",
//       ans: (
//         <div className="space-y-3 text-[13px] text-slate-700">
//           <p>XOR গেট বাইনারি যোগের ক্ষেত্রে অপরিহার্য। কারণ এটি ইনপুটগুলোর মধ্যে 'অড প্যারিটি' চেক করে সাম (Sum) প্রদান করে। হাফ-অ্যাডার সার্কিটে একটি XOR গেট সরাসরি সাম হিসেবে কাজ করে।</p>
//         </div>
//       )
//     },
//     {
//       id: 13,
//       q: "(xiii) চিত্র-2 এর 2নং গেট দ্বারা মৌলিক গেটগুলো বাস্তবায়ন করা সম্ভব - ব্যাখ্যা কর।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700">
//           <p>২নং গেটটি যদি **NAND** গেট হয়, তবে এটি একটি সার্বজনীন গেট।</p>
//           <p>ব্যাখ্যা: NAND গেটের উভয় ইনপুটকে শর্ট করলে **NOT** গেট পাওয়া যায়। দুটি NAND গেট পর পর যুক্ত করলে **AND** গেট পাওয়া যায় এবং তিনটি NAND গেট দিয়ে **OR** গেট তৈরি করা যায়।</p>
//         </div>
//       )
//     },
//     {
//       id: 14,
//       q: "(xiv) চিত্র-4 এ একটি ইনপুট কম হলে যে ডিভাইসটি পাওয়া যায় তার দ্বারা পূর্বের ডিভাইসটি বাস্তবায়ন করা সম্ভব- সত্যতা যাচাই কর।",
//       ans: (
//         <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
//           <p>চিত্র-৪ একটি ৩-টু-৮ ডিকোডার হলে, ইনপুট কমিয়ে ২-টু-৪ ডিকোডার পাওয়া যাবে।</p>
//           <p className="font-bold text-rose-600 italic">যাচাই: হ্যাঁ, একাধিক ছোট ডিকোডার (যেমন ২-টু-৪) ব্যবহার করে একটি বড় ডিকোডার (যেমন ৩-টু-৮) বাস্তবায়ন করা সম্ভব। একে ডিকোডার এক্সপানশন বলা হয়।</p>
//         </div>
//       )
//     }
//   ];


//   return (
//     <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
//       <div className="max-w-6xl mx-auto">



//         {/* --- Header & Tabs --- */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
//           <div className="space-y-2">
//             <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
//               Question <span className="text-indigo-600">Bank</span>
//             </h1>
//             <p className="text-slate-500 font-medium">নিজে প্র্যাকটিস করো এবং সমাধান মিলিয়ে নাও।</p>
//           </div>
//           <div className="flex p-1.5 bg-slate-100 rounded-3xl border border-slate-200 shadow-inner">
//             {['all', 'cq', 'mcq'].map((tab) => (
//               <button key={tab} onClick={() => setActiveTab(tab)}
//                 className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>

//         <AnimatePresence mode="wait">
//           {(activeTab === 'all' || activeTab === 'cq') && (
//             <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">

//               {/* উদ্দীপক */}



//               <div className="max-w-6xl mx-auto space-y-16">

//                 {/* Header */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   className="text-center space-y-4"
//                 >
//                   <h1 className="text-4xl md:text-6xl font-black text-slate-900">
//                     CQ: লজিক সার্কিট ও গেট
//                   </h1>
//                   <p className="text-slate-600 max-w-3xl mx-auto">
//                     নিচের ৪টি চিত্র এবং ১৪টি প্রশ্ন একত্রে সমাধান কর।
//                   </p>
//                 </motion.div>

//                 {/* Figures Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//                   {/* Figure-1: Truth Table */}
//                   <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200">
//                     <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">চিত্র-১: Truth Table</h3>
//                     <table className="w-full border-collapse font-mono text-sm">
//                       <thead>
//                         <tr className="bg-slate-100 text-slate-700">
//                           <th className="border px-4 py-2">A</th>
//                           <th className="border px-4 py-2">B</th>
//                           <th className="border px-4 py-2">Y</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {truthTableRows.map((row, idx) => (
//                           <tr key={idx} className="hover:bg-slate-50">
//                             <td className="border px-4 py-2 text-center">{row.A}</td>
//                             <td className="border px-4 py-2 text-center">{row.B}</td>
//                             <td className="border px-4 py-2 text-center font-bold text-blue-600">{row.Y}</td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Figure-2: Logic gate */}
//                   <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
//                     <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৩: Block Diagram</h3>
//                     <img src="/logicGate.png" className="" alt="" />
//                   </div>

//                   {/* Figure-3: Block Diagram */}
//                   <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
//                     <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৩: Block Diagram</h3>
//                     <div className="flex items-center gap-6">
//                       {/* Input */}
//                       <div className="flex flex-col items-center">
//                         <span className="text-sm font-bold text-slate-600 mb-2">Input</span>
//                         <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">N</div>
//                       </div>

//                       {/* Main Box (bigger with border) */}
//                       <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
//                         Device
//                       </div>

//                       {/* Output */}
//                       <div className="flex flex-col items-center">
//                         <span className="text-sm font-bold text-slate-600 mb-2">Output</span>
//                         <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">
//                           2^N
//                         </div>
//                       </div>
//                     </div>
//                   </div>


//                   {/* Figure-8: Multi Input-Output Box */}
//                   <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
//                     <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৮: Multi I/O Diagram</h3>
//                     <div className="flex items-center gap-6">
//                       <div className="flex flex-col gap-2">
//                         <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 1</div>
//                         <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 2</div>
//                         <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 3</div>
//                       </div>
//                       <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
//                         Device
//                       </div>
//                       <div className="flex flex-col gap-2">
//                         <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 1</div>
//                         <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 2</div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Figure-4: Placeholder for image */}

//                 </div>


//               </div>






//               {/* প্রশ্ন ও উত্তর সেকশন */}
//               <div className="space-y-6">
//                 <div className="flex justify-between items-center px-4">
//                   <h2 className="text-2xl font-black text-slate-900">গাণিতিক প্রশ্নসমূহ</h2>
//                   <button
//                     onClick={() => setShowSolutions(!showSolutions)}
//                     className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg ${showSolutions ? 'bg-indigo-50 text-indigo-600' : 'bg-indigo-600 text-white shadow-indigo-200'}`}
//                   >
//                     <ClipboardList size={18} /> {showSolutions ? 'সমাধান হাইড করো' : 'সম্পূর্ণ সমাধান দেখুন'}
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                   {solutions.map((item, i) => (
//                     <div key={i} className="group bg-white border border-slate-100 rounded-[32px] p-8 hover:border-indigo-200 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-100/20">
//                       <div className="flex gap-5">
//                         <span className="w-10 h-10 bg-slate-50 text-slate-500 rounded-2xl flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
//                           {i + 1}
//                         </span>
//                         <div className="space-y-6 flex-1">
//                           <p className="text-slate-800 font-bold leading-relaxed pt-2">{item.q}</p>

//                           {/* সলিউশন শুধুমাত্র বাটনে ক্লিক করলে দেখাবে */}
//                           {showSolutions && (
//                             <motion.div
//                               initial={{ opacity: 0, height: 0 }}
//                               animate={{ opacity: 1, height: 'auto' }}
//                               className="pt-6 border-t border-slate-50"
//                             >
//                               {item.ans}
//                             </motion.div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}

//                 </div>
//               </div>
//             </motion.section>
//           )}
//         </AnimatePresence>
//       </div>
//     </main>
//   );
// };

// export default PracticePage;