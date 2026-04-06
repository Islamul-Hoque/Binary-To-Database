"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Lightbulb, CheckCircle2 } from 'lucide-react';


interface SolutionItemProps {
  item: {
    q: string;
    ans: React.ReactNode;
  };
  index: number;
}


const SolutionItem: React.FC<SolutionItemProps> = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="group bg-white border border-slate-100 rounded-[32px] p-6 sm:p-8 hover:border-indigo-200 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-100/20 flex flex-col h-full">
            <div className="flex gap-5 flex-1">
                <span className="w-10 h-10 bg-slate-50 text-slate-500 rounded-2xl flex items-center justify-center font-bold text-xs shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                    {index + 1}
                </span>

                <div className="flex-1 flex flex-col">

                    <div className="flex-1">
                        <p className="text-slate-800 font-bold leading-relaxed text-[15px] sm:text-[16px]">
                            {item.q}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
                        <div className="flex items-center gap-1.5 text-slate-400">
                            <CheckCircle2 size={14} className={isOpen ? "text-emerald-500" : "text-slate-300"} />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Solution</span>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl font-bold text-xs transition-all shadow-md active:scale-95 ${isOpen
                                    ? 'bg-indigo-600 text-white shadow-indigo-200'
                                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-indigo-200'
                                }`}
                        >
                            <Lightbulb size={14} className={isOpen ? "animate-pulse" : ""} />
                            {isOpen ? 'হাইড করো' : 'সমাধান দেখুন'}
                            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pt-6 mt-4 border-t border-dashed border-slate-200">
                            <div className="bg-indigo-50/30 rounded-[24px] p-5 sm:p-6 border border-indigo-50/50">
                                {item.ans}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SolutionItem;