"use client";
import { motion } from 'framer-motion';
import Link from 'next/link'; // লিঙ্ক করার জন্য ইমপোর্ট
import { 
    Binary, Hash, ArrowRightLeft, Calculator, BookOpen, CheckCircle2, Info, Lightbulb, HelpCircle
} from 'lucide-react';

const topics = [
    {
        title: "সংখ্যা পদ্ধতির প্রকারভেদ",
        slug: "types-of-number-system", 
        desc: "ডেসিমেল, বাইনারি, অকটাল এবং হেক্সাডেসিমেল পদ্ধতির বিস্তারিত আলোচনা।",
        icon: <Hash className="text-blue-600" size={24} />,
        color: "bg-blue-50"
    },
    {
        title: "সংখ্যা পদ্ধতির রূপান্তর",
        slug: "conversion",
        desc: "এক পদ্ধতি থেকে অন্য পদ্ধতিতে রূপান্তরের সহজ নিয়ম ও শর্টকাট টেকনিক।",
        icon: <ArrowRightLeft className="text-purple-600" size={24} />,
        color: "bg-purple-50"
    },
    {
        title: "২-এর পরিপূরক (2's Comp)",
        slug: "2s-complement",
        desc: "চিহ্নযুক্ত সংখ্যা এবং কম্পিউটার কীভাবে বিয়োগের কাজ যোগ দিয়ে করে।",
        icon: <Calculator className="text-orange-600" size={24} />,
        color: "bg-orange-50"
    },
    {
        title: "ডিজিটাল কোডিং",
        slug: "digital-coding",
        desc: "BCD, ASCII এবং Unicode সম্পর্কে বিস্তারিত তথ্য ও পার্থক্য।",
        icon: <Binary className="text-emerald-600" size={24} />,
        color: "bg-emerald-50"
    },
    {
        title: "প্র্যাকটিস কোশ্চেন ব্যাংক",
        slug: "practice-questions",
        desc: "বোর্ড পরীক্ষা এবং অ্যাডমিশনের জন্য গুরুত্বপূর্ণ MCQ ও সৃজনশীল প্রশ্নের সমাধান।",
        icon: <CheckCircle2 className="text-rose-600" size={24} />,
        color: "bg-rose-50"
    }
];


export default function NumberSystemPage() {
    return (
        <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
            <motion.div className="max-w-7xl mx-auto">
                
                {/* --- Header --- */}
                <motion.div 
                    className="text-center mb-20 space-y-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100">
                        <BookOpen size={14} /> Chapter 03: Part A
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-950 tracking-tighter leading-none">
                        Number <span className="text-blue-600">System</span>
                    </h1>
                </motion.div>

                {/* --- Topics Grid (Now Clickable) --- */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                        hidden: {}
                    }}
                >
                    {topics.map((topic, index) => (
                        <Link href={`/number-system/${topic.slug}`} key={index}>
                            <motion.div 
                                className="group p-8 bg-white border border-slate-100 rounded-[32px] hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:-translate-y-2 h-full cursor-pointer"
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                            >
                                <div className={`w-14 h-14 ${topic.color} rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                                    {topic.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{topic.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{topic.desc}</p>
                                
                                {/* ডাইনামিক ইন্ডিকেটর */}
                                <div className="mt-6 flex items-center text-blue-600 text-xs font-bold gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    বিস্তারিত পড়ুন <ArrowRightLeft size={12} className="rotate-180" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>

                {/* --- মূল পড়া সেকশন --- */}
                <motion.div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
                    
                    <motion.div 
                        className="lg:col-span-2 space-y-12"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* নতুন সেকশন: সংখ্যা পদ্ধতি কী? */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                                <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                                <HelpCircle className="text-emerald-500" />
                                সংখ্যা পদ্ধতি কী?
                            </h2>
                            <div className="bg-emerald-50/50 p-8 rounded-[32px] border border-emerald-100">
                                <p className="text-slate-700 leading-relaxed font-medium">
                                    প্রাচীনকাল থেকে মানুষ হিসাব-নিকাশ করার জন্য বিভিন্ন মাধ্যম ব্যবহার করত। বর্তমানে কোনো সংখ্যা লিখে প্রকাশ করার জন্য যে পদ্ধতি ব্যবহার করা হয়, তাকেই **সংখ্যা পদ্ধতি** বলা হয়। এটি মূলত কতগুলো চিহ্নের সমষ্টি এবং এগুলো সাজানোর নির্দিষ্ট নিয়ম।
                                </p>
                            </div>
                        </section>

                        {/* সংখ্যা পদ্ধতির বেসিক */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                                <div className="w-2 h-8 bg-blue-600 rounded-full" />
                                সংখ্যা পদ্ধতির বেসিক
                            </h2>
                            <p className="text-slate-600 leading-relaxed italic border-l-4 border-slate-200 pl-6">
                                "কোনো সংখ্যা প্রকাশ করার পদ্ধতিকেই সংখ্যা পদ্ধতি বলা হয়।"
                            </p>
                            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100 space-y-4">
                                <h4 className="font-bold text-blue-600 flex items-center gap-2">
                                    <Info size={18}/> মনে রাখতে হবে:
                                </h4>
                                <ul className="space-y-3 text-slate-700 font-medium">
                                    <li className="flex gap-2">✔️ বাইনারি (বেস ২): ০, ১</li>
                                    <li className="flex gap-2">✔️ অক্টাল (বেস ৮): ০-৭</li>
                                    <li className="flex gap-2">✔️ ডেসিমেল (বেস ১০): ০-৯</li>
                                    <li className="flex gap-2">✔️ হেক্সাডেসিমেল (বেস ১৬): ০-৯, A-F</li>
                                </ul>
                            </div>
                        </section>

                        {/* ২-এর পরিপূরক সেকশন */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                                <div className="w-2 h-8 bg-purple-600 rounded-full" />
                                ২-এর পরিপূরক (2's Complement)
                            </h2>
                            <div className="space-y-4 text-slate-600">
                                <p>কম্পিউটার আসলে বিয়োগ করতে পারে না, সে ২-এর পরিপূরক ব্যবহার করে বিয়োগের কাজ যোগের মাধ্যমে সম্পন্ন করে।</p>
                                <div className="p-6 bg-white border-2 border-dashed border-slate-200 rounded-3xl">
                                    <p className="font-bold text-slate-800 mb-2">ধাপসমূহ:</p>
                                    <p className="text-sm">১. সংখ্যাটির বাইনারি মান বের করো।</p>
                                    <p className="text-sm">২. ১-এর পরিপূরক করো (০ থাকলে ১, ১ থাকলে ০)।</p>
                                    <p className="text-sm">৩. এর সাথে <span className="text-purple-600 font-bold">১ যোগ</span> করলেই ২-এর পরিপূরক পাওয়া যাবে।</p>
                                </div>
                            </div>
                        </section>
                    </motion.div>

                    {/* ডান পাশ: কুইক টিপস সাইডবার */}
                    <motion.div 
                        className="space-y-8"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-blue-600 text-white p-8 rounded-[40px] shadow-2xl shadow-blue-200 relative overflow-hidden group">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
                            <Lightbulb size={40} className="mb-6 text-blue-200" />
                            <h3 className="text-2xl font-black mb-4">শর্টকাট টিপস!</h3>
                            <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                ডেসিমেল থেকে বাইনারি করার সময় বারবার ২ দিয়ে ভাগ না করে <span className="font-bold text-white italic">১-২-৪-৮-১৬-৩২</span> এই সিরিজটি ব্যবহার করো।
                            </p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* --- Bottom CTA --- */}
                <motion.div 
                    className="bg-slate-950 rounded-[48px] p-12 md:p-20 text-center text-white relative overflow-hidden"
                    whileInView={{ scale: [0.95, 1], opacity: 1 }}
                    initial={{ opacity: 0 }}
                >
                    <h2 className="text-4xl font-black mb-6">পুরো চ্যাপ্টার শেষ করতে চাও?</h2>
                    <button className="px-12 py-5 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40">
                        ফুল নোটস ডাউনলোড করো
                    </button>
                </motion.div>

            </motion.div>
        </main>
    );
}