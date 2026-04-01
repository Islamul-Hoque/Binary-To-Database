"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
    ChevronLeft, 
    Hash, 
    Binary, 
    Layers, 
    Cpu, 
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

const systems = [
    {
        name: "বাইনারি (Binary)",
        base: "Base 2",
        digits: "0, 1",
        desc: "কম্পিউটারের ইলেকট্রনিক সার্কিট শুধুমাত্র বিদ্যুৎ আছে (১) না কি নাই (০) তা বুঝতে পারে। তাই কম্পিউটারের অভ্যন্তরীণ সব কাজের জন্য এটি ব্যবহৃত হয়।",
        color: "blue"
    },
    {
        name: "অক্টাল (Octal)",
        base: "Base 8",
        digits: "0, 1, 2, 3, 4, 5, 6, 7",
        desc: "এটি ৩-বিট বাইনারি সংখ্যার সংক্ষিপ্ত রূপ হিসেবে ব্যবহৃত হয়। বড় বাইনারি সংখ্যাকে ছোট করে প্রকাশ করতে এটি বেশ কার্যকর।",
        color: "purple"
    },
    {
        name: "ডেসিমেল (Decimal)",
        base: "Base 10",
        digits: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9",
        desc: "মানুষের ব্যবহার্য সবচেয়ে জনপ্রিয় পদ্ধতি। প্রাচীনকাল থেকে হিসাব-নিকাশের জন্য আমরা এই ১০ ভিত্তিক পদ্ধতি ব্যবহার করে আসছি।",
        color: "emerald"
    },
    {
        name: "হেক্সাডেসিমেল (Hexadecimal)",
        base: "Base 16",
        digits: "0-9 এবং A, B, C, D, E, F",
        desc: "মেমোরি অ্যাড্রেসিং এবং কালার কোড (যেমন: #FFFFFF) প্রকাশের জন্য এটি ব্যবহৃত হয়। এখানে ১০ থেকে ১৫ পর্যন্ত অংকগুলোকে A থেকে F দিয়ে বোঝানো হয়।",
        color: "orange"
    }
];

export default function TypesOfNumberSystem() {
    return (
        <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
            <div className="max-w-5xl mx-auto">
                
                {/* --- Back Button --- */}
                <Link href="/number-system" className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-10 font-bold text-sm">
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Chapter
                </Link>

                {/* --- Header --- */}
                <motion.div 
                    className="mb-16 space-y-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <h1 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tight leading-tight">
                        সংখ্যা পদ্ধতির <span className="text-blue-600">প্রকারভেদ</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-3xl">
                        ভিত্তি বা বেস-এর উপর নির্ভর করে আধুনিক পজিশনাল সংখ্যা পদ্ধতিকে মূলত ৪টি ভাগে ভাগ করা হয়েছে। নিচে এদের বিস্তারিত আলোচনা করা হলো:
                    </p>
                </motion.div>

                {/* --- Comparison Cards --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {systems.map((sys, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-[40px] border border-slate-100 hover:shadow-2xl hover:shadow-blue-100 transition-all group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`px-4 py-1.5 rounded-full bg-slate-50 text-slate-900 font-black text-xs border border-slate-100`}>
                                    {sys.base}
                                </div>
                                <div className="text-slate-200 group-hover:text-blue-100 transition-colors">
                                    <Hash size={40} />
                                </div>
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">{sys.name}</h3>
                            <div className="mb-4 flex flex-wrap gap-2">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">ব্যবহৃত অংক:</span>
                                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">{sys.digits}</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {sys.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* --- In-depth Analysis Section --- */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-slate-950 rounded-[48px] p-10 md:p-16 text-white overflow-hidden relative"
                >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -mr-20 -mt-20" />
                    
                    <div className="relative z-10 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black flex items-center gap-4">
                                <Layers className="text-blue-400" /> হেক্সাডেসিমেল কেন আলাদা?
                            </h2>
                            <p className="text-slate-400 leading-relaxed text-lg italic">
                                "হেক্সাডেসিমেল পদ্ধতিতে ৯-এর পরের অংকগুলোকে ইংরেজি বড় হাতের অক্ষর দিয়ে প্রকাশ করা হয়।"
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-8 text-center font-black">
                                {['A=10', 'B=11', 'C=12', 'D=13', 'E=14', 'F=15'].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 py-4 rounded-2xl hover:bg-white/10 transition-colors">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-10 border-t border-white/10 space-y-6">
                            <h2 className="text-3xl font-black flex items-center gap-4">
                                <Cpu className="text-emerald-400" /> কম্পিউটারের জন্য কোনটা জরুরি?
                            </h2>
                            <p className="text-slate-400 leading-relaxed">
                                কম্পিউটার শুধুমাত্র <span className="text-white font-bold underline">বাইনারি</span> পদ্ধতি বোঝে। তবে ডেটা সহজে উপস্থাপন করার জন্য প্রোগ্রামাররা অক্টাল বা হেক্সাডেসিমেল ব্যবহার করে থাকেন।
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 items-center text-slate-300">
                                    <CheckCircle2 size={18} className="text-emerald-500" /> ১ টি হেক্সাডেসিমেল অংক = ৪ টি বাইনারি বিট
                                </li>
                                <li className="flex gap-3 items-center text-slate-300">
                                    <CheckCircle2 size={18} className="text-emerald-500" /> ১ টি অক্টাল অংক = ৩ টি বাইনারি বিট
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* --- Next Navigation --- */}
                <div className="mt-16 flex justify-end">
                    <Link href="/number-system/conversion" className="group flex items-center gap-4 px-10 py-5 bg-white border border-slate-200 rounded-[30px] font-black hover:border-blue-600 transition-all shadow-xl shadow-slate-100">
                        <div className="text-right leading-none">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Next Topic</p>
                            <p className="text-slate-900">রূপান্তর পদ্ধতি (Conversion)</p>
                        </div>
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                            <ArrowRight size={20} />
                        </div>
                    </Link>
                </div>

            </div>
        </main>
    );
}