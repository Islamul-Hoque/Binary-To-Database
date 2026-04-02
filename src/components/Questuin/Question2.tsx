// "use client";
// import { motion } from "framer-motion";

// export default function CQPage() {
//   const questions = [
//     "(i) চিত্র-১ কোন গেটের সাথে সাদৃশ্যপূর্ণ তার বর্ণনা দাও।",
//     "(ii) চিত্র-১ এর গেটটিকে মৌলিক গেটের সাহায্যে প্রকাশ কর।",
//     "(iii) চিত্র-১ এর গেটটিকে NAND এবং NOR গেটের সাহায্যে বাস্তবায়ন কর এবং লজিক গেট আঁক।",
//     "(iv) চিত্র-২ হতে আউটপুট Y এর মান সত্যক সারণিতে দেখাও।",
//     "(v) চিত্র-২ এর আউটপুট F এর মান নির্ণয় কর এবং সরলীকরণ করে নতুন লজিক গেট আঁক।",
//     "(vi) চিত্র-২ এ ২ ও ৩ নং চিহ্নিত গেটগুলোর পারস্পরিক পরিবর্তনে যে লজিক সার্কিট পাওয়া যায় তার Y এর মান সত্যক সারণিতে দেখাও।",
//     "(vii) ‘vi’ নং প্রাপ্ত গেটটির (Y) মান NAND এবং NOR গেটের সাহায্যে বাস্তবায়ন কর।",
//     "(viii) চিত্র-4 এর ডিভাইসটিকে মৌলিক গেটের সাহায্যে প্রকাশ কর এবং লজিক গেট আঁকন কর।",
//     "(ix) চিত্র-3 এর ডিভাইসটি কী? গঠন ব্যাখ্যা কর।",
//     "(x) চিত্র-2 এর ডিভাইসটি হলে F = ¯AB · ¯AB এর সরলীকৃত মান নির্ণয় করে লজিক গেট আঁকন কর।",
//     "(xi) চিত্র-3 এর ডিভাইস ইনপুট 4টি এবং আউটপুট 2টি হলে যে নতুন ডিভাইস পাওয়া যায়, তার লজিক গেট আঁকন কর।",
//     "(xii) “vi” নং প্রশ্নে প্রাপ্ত গেটটি বাইনারি যোগের বর্তনীতে ব্যবহারের উপযোগী - মূল্যায়ন কর।",
//     "(xiii) চিত্র-2 এর 2নং গেট দ্বারা মৌলিক গেটগুলো বাস্তবায়ন করা সম্ভব - ব্যাখ্যা কর।",
//     "(xiv) চিত্র-4 এ একটি ইনপুট কম হলে যে ডিভাইসটি পাওয়া যায় তার দ্বারা পূর্বের ডিভাইসটি বাস্তবায়ন করা সম্ভব- সত্যতা যাচাই কর।",
//   ];

// const truthTableRows = [
//   { A: 0, B: 0, Y: 1 },
//   { A: 0, B: 1, Y: 0 },
//   { A: 1, B: 0, Y: 0 },
//   { A: 1, B: 1, Y: 1 },
// ];

//   return (
//     <main className="min-h-screen bg-slate-50 py-20 px-6">
//       <div className="max-w-6xl mx-auto space-y-16">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center space-y-4"
//         >
//           <h1 className="text-4xl md:text-6xl font-black text-slate-900">
//             CQ: লজিক সার্কিট ও গেট
//           </h1>
//           <p className="text-slate-600 max-w-3xl mx-auto">
//             নিচের ৪টি চিত্র এবং ১৪টি প্রশ্ন একত্রে সমাধান কর।
//           </p>
//         </motion.div>

//         {/* Figures Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//           {/* Figure-1: Truth Table */}
//           <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200">
//             <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">চিত্র-১: Truth Table</h3>
//             <table className="w-full border-collapse font-mono text-sm">
//               <thead>
//                 <tr className="bg-slate-100 text-slate-700">
//                   <th className="border px-4 py-2">A</th>
//                   <th className="border px-4 py-2">B</th>
//                   <th className="border px-4 py-2">Y</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {truthTableRows.map((row, idx) => (
//                   <tr key={idx} className="hover:bg-slate-50">
//                     <td className="border px-4 py-2 text-center">{row.A}</td>
//                     <td className="border px-4 py-2 text-center">{row.B}</td>
//                     <td className="border px-4 py-2 text-center font-bold text-blue-600">{row.Y}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Figure-2: Logic gate */}
//           <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
//             <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৩: Block Diagram</h3>
//             <img src="/logicGate.png" className="" alt="" />
//           </div>

//           {/* Figure-3: Block Diagram */}
//           <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
//             <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৩: Block Diagram</h3>
//             <div className="flex items-center gap-6">
//               {/* Input */}
//               <div className="flex flex-col items-center">
//                 <span className="text-sm font-bold text-slate-600 mb-2">Input</span>
//                 <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">N</div>
//               </div>

//               {/* Main Box (bigger with border) */}
//               <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
//                 Device
//               </div>

//               {/* Output */}
//               <div className="flex flex-col items-center">
//                 <span className="text-sm font-bold text-slate-600 mb-2">Output</span>
//                 <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">
//                   2^N
//                 </div>
//               </div>
//             </div>
//           </div>


//           {/* Figure-8: Multi Input-Output Box */}
//           <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
//             <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৮: Multi I/O Diagram</h3>
//             <div className="flex items-center gap-6">
//               <div className="flex flex-col gap-2">
//                 <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 1</div>
//                 <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 2</div>
//                 <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 3</div>
//               </div>
//               <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
//                 Device
//               </div>
//               <div className="flex flex-col gap-2">
//                 <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 1</div>
//                 <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 2</div>
//               </div>
//             </div>
//           </div>

//           {/* Figure-4: Placeholder for image */}

//         </div>

//         {/* Questions Section */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="bg-white rounded-[48px] shadow-xl p-10 border border-slate-200"
//         >
//           <h2 className="text-2xl font-black text-slate-900 mb-6">প্রশ্নাবলী</h2>
//           <ul className="space-y-4 list-decimal list-inside text-slate-700 font-medium">
//             {questions.map((q, idx) => (
//               <li key={idx}>{q}</li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>
//     </main>
//   );
// }



