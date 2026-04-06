"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardList } from 'lucide-react';


const PracticePage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [showSolutions, setShowSolutions] = useState(false);

    const solutions = [
        {
            "id": 1,
            "q": "P + 1 = 1 ব্যাখ্যা কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            P + 1 = 1 হলো বুলিয়ান অ্যালজেবরার একটি মৌলিক উপপাদ্য।
                        </p>
                        <p className="mt-2">
                            এটি একটি অর (OR) অপারেশন। বুলিয়ান অ্যালজেবরায় অর অপারেশনের নিয়ম অনুযায়ী, যেকোনো একটি ইনপুট ১ (True) হলে আউটপুট সবসময় ১ হয়। এখানে P এর মান যাই হোক না কেন, অপর ইনপুটটি ১ হওয়ায় ফলাফল সবসময় ১ হবে।
                        </p>
                    </div>

                    <div className="w-full">
                        <p className="mb-2 font-bold text-slate-800">নিচে সত্যক সারণির সাহায্যে এটি দেখানো হলো:</p>

                        {/* Table */}
                        <table className="w-full border-collapse border border-slate-400 text-center text-[12px] table-fixed">
                            <thead className="bg-slate-100 font-bold">
                                <tr>
                                    <th className="border border-slate-400 p-1 bg-slate-200/50">P</th>
                                    <th className="border border-slate-400 p-1 bg-slate-200/50">1</th>
                                    <th className="border border-slate-400 p-1 bg-indigo-50">Output (P + 1)</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono">
                                <tr>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1 font-bold bg-indigo-50/30">1</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1 font-bold bg-indigo-50/30">1</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="mt-3">
                            উপরোক্ত সত্যক সারণি থেকে দেখা যায়, P এর মান ০ বা ১ যাই হোক না কেন, অর অপারেশনের কারণে আউটপুট সবসময় ১ হবে।
                        </p>
                    </div>
                </div>
            )
        },
        {
            "id": 2,
            "q": "'বাইনারি ও বিসিডি এক নয়' — ব্যাখ্যা কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            \"বাইনারি ও বিসিডি এক নয়\" বক্তব্যটি সঠিক। নিচে এদের মধ্যে পার্থক্য তুলে ধরা হলো:
                        </p>
                    </div>

                    <div className="w-full">
                        {/* Table */}
                        <table className="w-full border-collapse border border-slate-400 text-left text-[12px]">
                            <thead className="bg-slate-100 font-bold text-center">
                                <tr>
                                    <th className="border border-slate-400 p-2 bg-slate-200/50 w-1/2">বিসিডি (BCD)</th>
                                    <th className="border border-slate-400 p-2 bg-slate-200/50 w-1/2">বাইনারি (Binary)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-400 p-2">
                                        ১। BCD হলো Binary Coded Decimal। এটি কোনো সংখ্যা পদ্ধতি নয়; এটি মূলত দশমিক সংখ্যার প্রতিটি অঙ্ককে সমতুল্য বাইনারিতে এনকোড করার পদ্ধতি।
                                    </td>
                                    <td className="border border-slate-400 p-2">
                                        ১। বাইনারি একটি সংখ্যা পদ্ধতি যার ভিত্তি ২ এবং চিহ্নগুলো হচ্ছে ০ ও ১।
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-2">
                                        ২। দশমিক সংখ্যাকে বিসিডি কোডে প্রকাশ করা খুব সহজ। যেমন: (১৩৭)<sub>১০</sub> এর বিসিডি কোড = (০০০১০০১১০১১১) BCD
                                    </td>
                                    <td className="border border-slate-400 p-2">
                                        ২। দশমিক সংখ্যাকে বাইনারি সংখ্যায় প্রকাশ করা বিসিডির মতো সহজ নয়। যেমন: (১৩৭)<sub>১০</sub> এর সমতুল্য বাইনারি = (১০০০১০০১)<sub>২</sub>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-2">
                                        ৩। কোনো সংখ্যাকে বিসিডি কোডে প্রকাশের জন্য তুলনামূলক বেশি বিট লাগে।
                                    </td>
                                    <td className="border border-slate-400 p-2">
                                        ৩। কোনো সংখ্যাকে বাইনারিতে প্রকাশের জন্য তুলনামূলক কম বিট লাগে।
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        },
        {
            "id": 3,
            "q": "সত্যক সারণির সাহায্যে ডি-মরগ্যানের উপপাদ্য প্রমাণ কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            সত্যক সারণির সাহায্যে ডি-মরগ্যানের উপপাদ্য প্রমাণ করা সম্ভব। নিচে A ও B দুটি চলকের ডি-মরগ্যানের উপপাদ্য দুটি দেওয়া হলো:
                        </p>
                        <ul className="mt-2 list-disc list-inside space-y-1">
                            <li>১ম উপপাদ্য: <span className="font-mono">overline{"{A + B}"} = Ā . B̄</span></li>
                            <li>২য় উপপাদ্য: <span className="font-mono">overline{"{A . B}"} = Ā + B̄</span></li>
                        </ul>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <p className="mb-2 font-bold text-slate-800">প্রমাণের সত্যক সারণি নিচে দেখানো হলো:</p>

                        {/* Table */}
                        <table className="w-full border-collapse border border-slate-400 text-center text-[11px] table-fixed">
                            <thead className="bg-slate-100 font-bold">
                                <tr>
                                    <th colSpan={2} className="border border-slate-400 p-1 bg-slate-200/50">Input</th>
                                    <th colSpan={2} className="border border-slate-400 p-1">Complement</th>
                                    <th colSpan={2} className="border border-slate-400 p-1 bg-blue-50">1st Theorem</th>
                                    <th colSpan={2} className="border border-slate-400 p-1 bg-green-50">2nd Theorem</th>
                                </tr>
                                <tr>
                                    <th className="border border-slate-400 p-1">A</th>
                                    <th className="border border-slate-400 p-1">B</th>
                                    <th className="border border-slate-400 p-1">Ā</th>
                                    <th className="border border-slate-400 p-1">B̄</th>
                                    <th className="border border-slate-400 p-1 bg-blue-50/50">A+B</th>
                                    <th className="border border-slate-400 p-1 bg-blue-100">overline{"{A+B}"}</th>
                                    <th className="border border-slate-400 p-1 bg-green-50/50">A.B</th>
                                    <th className="border border-slate-400 p-1 bg-green-100">overline{"{A.B}"}</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono">
                                <tr>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1 font-bold">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1 font-bold">1</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1 font-bold">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1 font-bold">1</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1 font-bold">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1 font-bold">1</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1 font-bold">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1 font-bold">0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-[12px] italic text-slate-600 mt-2">
                        সত্যক সারণি হতে দেখা যায় যে, বামপক্ষ এবং ডানপক্ষের মানগুলো সমান। অর্থাৎ, ডি-মরগ্যানের উপপাদ্য দুটি প্রমাণিত।
                    </p>
                </div>
            )
        },
        {
            "id": 4,
            "q": "ডি-মরগ্যান-এর উপপাদ্য যৌক্তিক যোগ ও যৌক্তিক গুণের মধ্যে বিনিময় সাধন করে — ব্যাখ্যা কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            ফরাসি গণিতবিদ ডি-মরগ্যান বুলিয়ান বীজগণিতের ওপর দুটি গুরুত্বপূর্ণ সূত্র প্রদান করেন, যা যৌক্তিক যোগ ও গুণের মধ্যে সম্পর্ক বা বিনিময় স্থাপন করে।
                        </p>
                        <p className="mt-2 italic">উপপাদ্য দুটি নিম্নরূপ:</p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-3 bg-slate-50 border-l-4 border-indigo-400 rounded">
                            <p className="font-bold text-slate-800">প্রথম উপপাদ্য (যৌক্তিক যোগ থেকে গুণ):</p>
                            <p>যেকোনো সংখ্যক চলকের যৌক্তিক যোগের কমপ্লিমেন্ট হবে প্রত্যেক চলকের কমপ্লিমেন্টের যৌক্তিক গুণফলের সমান।</p>
                            <p className="mt-1 font-mono font-bold text-indigo-600 text-sm">overline{"{A + B}"} = Ā . B̄</p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-emerald-400 rounded">
                            <p className="font-bold text-slate-800">দ্বিতীয় উপপাদ্য (যৌক্তিক গুণ থেকে যোগ):</p>
                            <p>যেকোনো সংখ্যক চলকের যৌক্তিক গুণফলের কমপ্লিমেন্ট হবে প্রত্যেক চলকের কমপ্লিমেন্টের যৌক্তিক যোগফলের সমান।</p>
                            <p className="mt-1 font-mono font-bold text-emerald-600 text-sm">overline{"{A . B}"} = Ā + B̄</p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <p>
                            অর্থাৎ, সূত্র দুটি বিশ্লেষণ করলে দেখা যায় যে, বামপক্ষে যেখানে **যৌক্তিক যোগ (+)** আছে, ডানপক্ষে তা পরিবর্তিত হয়ে **যৌক্তিক গুণে (.)** পরিণত হচ্ছে (এবং উল্টোটা)। এভাবেই ডি-মরগ্যানের উপপাদ্য দুটি যৌক্তিক যোগ ও গুণের মধ্যে বিনিময় সাধন করে।
                        </p>
                    </div>
                </div>
            )
        },
        {
            "id": 5,
            "q": "F = ĀB + AC + BC সরল কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">বুলিয়ান অ্যালজেবরার সাহায্যে সরলীকরণ:</p>
                        <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <p className="font-mono text-[14px] whitespace-pre-wrap space-y-2">
                                F = ĀB + AC + BC <br />
                                = ĀB + AC + BC (A + Ā)  <span className="text-blue-600 ml-2">[∵ A + Ā = 1]</span><br />
                                = ĀB + AC + ABC + ĀBC <br />
                                = ĀB + ĀBC + AC + ABC <br />
                                = ĀB (1 + C) + AC (1 + B) <br />
                                = ĀB + AC <span className="text-blue-600 ml-2">[∵ 1 + X = 1]</span>
                            </p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <p className="font-bold text-slate-800">ব্যবহৃত উপপাদ্যসমূহ:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            <li>পরিপূরক উপপাদ্য: <span className="font-mono">A + Ā = 1</span></li>
                            <li>মৌলিক উপপাদ্য (অর): <span className="font-mono">1 + X = 1</span></li>
                            <li>বন্টন উপপাদ্য প্রয়োগ করে রাশিটি বিস্তৃত করা হয়েছে।</li>
                        </ul>
                    </div>

                    <div className="mt-2 p-2 bg-indigo-50 rounded border border-indigo-100">
                        <p className="text-indigo-900 font-bold">নির্ণেয় সরল মান: F = ĀB + AC</p>
                    </div>
                </div>
            )
        },
        {
            "id": 6,
            "q": "৯ + ৭ = ২০ কীভাবে সম্ভব তা দেখাও।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            দশমিক সংখ্যা পদ্ধতিতে ৯ + ৭ এর যোগফল হয় ১৬। কিন্তু এই যোগফলকে যদি অক্টাল সংখ্যা পদ্ধতিতে রূপান্তর করা হয়, তবে ফলাফল ২০ হওয়া সম্ভব।
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="bg-slate-50 p-4 rounded border border-slate-200 font-mono">
                            <p className="mb-2 font-bold text-slate-800 underline">অক্টাল রূপান্তর:</p>
                            <div className="flex items-center gap-2">
                                <div className="border-r-2 border-slate-400 pr-2 text-right">
                                    <p>৮ | ১৬</p>
                                    <p>৮ | ২</p>
                                    <p className="pl-4">০</p>
                                </div>
                                <div className="text-left">
                                    <p>— ০ (LSB)</p>
                                    <p>— ২ (MSB)</p>
                                </div>
                            </div>
                            <p className="mt-4 text-indigo-700 font-bold">= (২০)₈</p>
                        </div>

                        <div className="flex-1 space-y-2">
                            <p>
                                অর্থাৎ, দশমিক সংখ্যা পদ্ধতিতে ৯ এবং ৭ যোগ করলে যোগফল হয় ১৬, যার অক্টাল মান পাওয়া যাবে ২০।
                            </p>
                            <p className="bg-indigo-50 p-2 rounded text-indigo-900 font-semibold">
                                অতএব, (৯)₁₀ + (৭)₁₀ = (২০)₈
                            </p>
                            <p className="font-bold text-slate-800">
                                বা, ৯ + ৭ = ২০ লেখা সম্ভব।
                            </p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            "id": 7,
            "q": "কম্পিউটার ডিজাইনে বাইনারি সংখ্যা পদ্ধতি ব্যবহারের কারণ লিখ।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            কম্পিউটার ডিজাইনে বাইনারি সংখ্যা পদ্ধতি ব্যবহারের প্রধান কারণগুলো নিচে আলোচনা করা হলো:
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="p-3 bg-slate-50 border-l-4 border-blue-400 rounded">
                            <p>
                                ১. কম্পিউটার অসংখ্য ইলেকট্রনিক সার্কিটের সমন্বয়ে গঠিত একটি যন্ত্র। এই সার্কিটগুলো বিদ্যুতের <span className="font-bold">High Voltage</span> ও <span className="font-bold">Low Voltage</span> এর ভিত্তিতে কাজ করে।
                            </p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-indigo-400 rounded">
                            <p>
                                ২. ডিজিটাল ইলেকট্রনিক্সে High Voltage-কে <span className="font-mono font-bold text-indigo-600">বিট-১</span> এবং Low Voltage-কে <span className="font-mono font-bold text-indigo-600">বিট-০</span> দিয়ে নির্দেশ করা হয়। এর ফলে কম্পিউটারের অভ্যন্তরীণ ক্রিয়া-প্রক্রিয়া বাইনারি পদ্ধতিতে সহজে ব্যাখ্যা করা যায়।
                            </p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-emerald-400 rounded">
                            <p>
                                ৩. বাইনারি সংখ্যা পদ্ধতির জন্য সার্কিট ডিজাইন করা অনেক সহজ এবং একই ধরনের সার্কিট ব্যবহার করে গাণিতিক কাজ যেমন— <span className="font-bold">যোগ, বিয়োগ, গুণ ও ভাগ</span> করা সম্ভব।
                            </p>
                        </div>
                    </div>

                    <div className="pt-1">
                        <p>
                            মূলত অধিকাংশ ইলেকট্রনিক সার্কিট বাইনারি মোডে (On/Off) কাজ করে বলেই কম্পিউটার ডিজাইনে এই পদ্ধতিটি সবচেয়ে কার্যকর।
                        </p>
                    </div>
                </div>
            )
        }, {
            "id": 8,
            "q": "পজিশনাল সংখ্যা পদ্ধতিতে কোনো একটি সংখ্যার মান বের করতে কী প্রয়োজন? বুঝিয়ে লেখ।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            পজিশনাল সংখ্যা পদ্ধতিতে কোনো একটি সংখ্যার মান বের করার জন্য তিনটি উপাত্ত বা ডেটা প্রয়োজন হয়। যথা:
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">১</span>
                            <p>সংখ্যাটিতে ব্যবহৃত অঙ্কগুলোর <span className="font-bold text-slate-900">নিজস্ব মান (Intrinsic Value)</span>।</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">২</span>
                            <p>সংখ্যা পদ্ধতির <span className="font-bold text-slate-900">বেজ বা ভিত্তি (Base)</span>।</p>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-slate-50 rounded border border-slate-200">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">৩</span>
                            <p>সংখ্যাটিতে ব্যবহৃত অঙ্কগুলোর <span className="font-bold text-slate-900">অবস্থান বা স্থানীয় মান (Positional Value)</span>।</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            "id": 9,
            "q": "(11)₁₀ সংখ্যাটিকে পজিশনাল সংখ্যা বলা হয় কেন?",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            পজিশনাল সংখ্যা পদ্ধতিতে একটি সংখ্যা যে প্রতীকগুলো দিয়ে প্রকাশ করা হয়, সেই প্রতীকগুলোর অবস্থানের ওপর ভিত্তি করে সংখ্যার মান কম-বেশি হতে পারে।
                        </p>
                        <p className="mt-2">
                            (11)₁₀ সংখ্যাটিতে দুটি '1' থাকলেও তাদের অবস্থান অনুযায়ী মান ভিন্ন।
                        </p>
                    </div>

                    <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                        <p className="mb-2 font-bold text-indigo-900">ব্যাখ্যা:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>সংখ্যাটির ডান পাশের <span className="font-bold underline text-indigo-700">১</span> একক স্থানীয় মান প্রকাশ করে।</li>
                            <li>বাম পাশের <span className="font-bold underline text-indigo-700">১</span> দশক স্থানীয় মান প্রকাশ করে।</li>
                        </ul>
                        <p className="mt-3 text-[12px] italic">
                            যেহেতু এখানে অঙ্কের অবস্থানের ওপর ভিত্তি করে মান নির্ধারিত হচ্ছে এবং একে রেডিক্স পয়েন্ট (.) দিয়ে পূর্ণাংশ ও ভগ্নাংশে ভাগ করা যায়, তাই এটি একটি পজিশনাল সংখ্যা।
                        </p>
                    </div>
                </div>
            )
        },
        {
            "id": 10,
            "q": "বিশ্বের সকল ভাষাকে কোডভুক্ত করা সম্ভব হয়েছে — ব্যাখ্যা কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            বিশ্বের ছোট-বড় সকল ভাষাকে কম্পিউটারে কোডভুক্ত করার জন্য ইউনিকোড (Unicode) ব্যবহার করা হয়।
                        </p>
                        <p className="mt-2">
                            ইউনিকোডের পূর্ণরূপ হচ্ছে <span className="italic text-indigo-600">Universal Code</span>। এটি মূলত ২ বাইট বা ১৬ বিটের একটি কোড।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded shadow-sm">
                            <p className="font-bold text-slate-800 mb-1">বিশাল ক্ষমতা:</p>
                            <p>
                                ১৬ বিটের কোড হওয়ায় এর মাধ্যমে $2^{16}$ বা <span className="font-bold text-indigo-700">৬৫,৫৩৬টি</span> অদ্বিতীয় চিহ্ন বা বর্ণকে পৃথকভাবে প্রকাশ করা সম্ভব।
                            </p>
                        </div>
                        <div className="p-3 bg-slate-50 border border-slate-200 rounded shadow-sm">
                            <p className="font-bold text-slate-800 mb-1">সীমাবদ্ধতা দূরীকরণ:</p>
                            <p>
                                পূর্বে ব্যবহৃত ৮ বিটের কোডগুলো দিয়ে জাপানিজ, চাইনিজ বা কোরিয়ান ভাষার মতো জটিল ও বিপুল বর্ণমালার ভাষাকে কোডভুক্ত করা সম্ভব ছিল না।
                            </p>
                        </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                        <p>
                            ইউনিকোড এই সীমাবদ্ধতা দূর করেছে এবং ১৬ বিটের বিশাল পরিসর ব্যবহার করে বিশ্বের সকল ভাষার সকল চিহ্নকে কম্পিউটারে প্রকাশ করা সহজতর করেছে। এই কারণেই ইউনিকোড বিশ্বের সকল ভাষাভাষী মানুষের জন্য এক আশীর্বাদস্বরূপ।
                        </p>
                    </div>
                </div>
            )
        },
        {
            "id": 11,
            "q": "২-এর পরিপূরক গঠনের প্রয়োজনীয়তা ব্যাখ্যা কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            আধুনিক কম্পিউটারে ২-এর পরিপূরক (2's Complement) পদ্ধতি ব্যবহারের প্রধান কারণ ও প্রয়োজনীয়তাগুলো নিচে দেওয়া হলো:
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="p-3 bg-slate-50 border-l-4 border-indigo-400 rounded">
                            <p>
                                ১. ২-এর পরিপূরক গঠনের ফলে <span className="font-bold">বিয়োগের কাজ যোগের মাধ্যমে</span> করা যায়। এতে কম্পিউটারের ভেতরে আলাদা বিয়োগের সার্কিটের প্রয়োজন হয় না।
                            </p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-blue-400 rounded">
                            <p>
                                ২. যোগ ও বিয়োগের জন্য <span className="font-bold">একই বর্তনী বা সার্কিট</span> ব্যবহার করা যায়। ফলে সার্কিটের মাত্রা ও জটিলতা অনেক কমে যায়।
                            </p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-emerald-400 rounded">
                            <p>
                                ৩. ২-এর পরিপূরক ব্যবহার করে <span className="font-bold">সরল লজিক বর্তনী</span> তৈরি করা যায়, যা দামে সস্তা এবং অত্যন্ত দ্রুত গতিতে কাজ করতে সক্ষম।
                            </p>
                        </div>
                    </div>

                    <div className="pt-1 italic text-slate-600">
                        <p>
                            মূলত হার্ডওয়্যারের খরচ কমাতে এবং গাণিতিক হিসাব প্রক্রিয়াকে সহজ ও দ্রুততর করতেই ২-এর পরিপূরক পদ্ধতি অপরিহার্য।
                        </p>
                    </div>
                </div>
            )
        }, {
            "id": 12,
            "q": "AND গেইটে যেকোনো একটি ইনপুট মিথ্যা হলে আউটপুট মিথ্যা হয়—ব্যাখ্যা কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            AND গেটের মূল বৈশিষ্ট্য হলো, এর সকল ইনপুট সত্য (১) হলে তবেই আউটপুট সত্য (১) হয়। অন্যথায় যেকোনো একটি ইনপুট মিথ্যা (০) হলে আউটপুট মিথ্যা (০) হয়।
                        </p>
                        <p className="mt-2">
                            AND অপারেশন মূলত যৌক্তিক গুণের (Logical Multiplication) নিয়ম মেনে চলে। গাণিতিকভাবে একে <span className="font-mono font-bold">C = A . B</span> আকারে প্রকাশ করা হয়।
                        </p>
                    </div>

                    <div className="w-full">
                        <p className="mb-2 font-bold text-slate-800 text-center">নিচে AND গেইটের সত্যক সারণি দেখানো হলো:</p>

                        {/* Table */}
                        <table className="mx-auto w-1/2 border-collapse border border-slate-400 text-center text-[12px]">
                            <thead className="bg-slate-100 font-bold">
                                <tr>
                                    <th className="border border-slate-400 p-2">A (Input)</th>
                                    <th className="border border-slate-400 p-2">B (Input)</th>
                                    <th className="border border-slate-400 p-2 bg-indigo-50">C = AB (Output)</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono">
                                <tr>
                                    <td className="border border-slate-400 p-2">0</td>
                                    <td className="border border-slate-400 p-2">0</td>
                                    <td className="border border-slate-400 p-2 font-bold text-red-600">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-2">0</td>
                                    <td className="border border-slate-400 p-2">1</td>
                                    <td className="border border-slate-400 p-2 font-bold text-red-600">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-2">1</td>
                                    <td className="border border-slate-400 p-2">0</td>
                                    <td className="border border-slate-400 p-2 font-bold text-red-600">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-2">1</td>
                                    <td className="border border-slate-400 p-2">1</td>
                                    <td className="border border-slate-400 p-2 font-bold text-emerald-600">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="p-3 bg-indigo-50 rounded border border-indigo-100 italic">
                        <p>
                            সারণি থেকে স্পষ্ট যে, ইনপুটের যেকোনো একটি মান '০' বা মিথ্যা হওয়ার সাথে সাথে যৌক্তিক গুণের কারণে আউটপুটও '০' হয়ে যাচ্ছে।
                        </p>
                    </div>
                </div>
            )
        },
        {
            "id": 13,
            "q": "“কোডেড ডেটাকে আনকোডেড ডেটায় রূপান্তর করা সম্ভব।”—ব্যাখ্যা কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            কোডেড ডেটাকে আনকোডেড ডেটায় রূপান্তর করা অবশ্যই সম্ভব এবং এর জন্য 'ডিকোরার' (Decoder) নামক ইলেকট্রনিক ডিভাইস ব্যবহৃত হয়।
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="p-3 bg-slate-50 border-l-4 border-indigo-400 rounded">
                            <p>
                                ১. ডিকোডারের সংজ্ঞা: ডিকোডার এমন একটি ইলেকট্রনিক যন্ত্র যা কম্পিউটারের বোধগম্য ভাষাকে মানুষের বোধগম্য ভাষায় রূপান্তর করে।
                            </p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-blue-400 rounded">
                            <p>
                                ২. ইনপুট ও আউটপুট সম্পর্ক: ডিকোডারে ইনপুট সংখ্যা <span className="font-mono font-bold">n</span> হলে, তার আউটপুট সংখ্যা হবে <span className="font-mono font-bold">2ⁿ</span>।
                            </p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-emerald-400 rounded">
                            <p>
                                ৩. কাজের ধরন: আউটপুট লাইনের যেকোনো একটি আউটপুট ১ হলে বাকি সব আউটপুট ০ পাওয়া যায়। আউটপুট অবস্থা সর্বদা ইনপুট অবস্থার ওপর নির্ভরশীল।
                            </p>
                        </div>
                    </div>

                    <div className="pt-1 italic text-slate-600">
                        <p>
                            সহজ কথায়, ডিকোডার ব্যবহারের মাধ্যমেই আমরা ডিজিটাল সিস্টেমের জটিল কোডগুলোকে সাধারণ তথ্যে রূপান্তর করতে পারি।
                        </p>
                    </div>
                </div>
            )
        }, {
            "id": 14,
            "q": "XOR সকল মৌলিক গেইটের সমন্বিত লজিক গেইট—ব্যাখ্যা কর।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            XOR গেইট সকল মৌলিক গেইটের সমন্বিত গেইট। কারণ AND, OR এবং NOT এই তিনটি মৌলিক গেইট ব্যবহার করে XOR গেইট তৈরি করা যায়।
                        </p>
                        <p className="mt-2">
                            XOR গেইটের আউটপুট সমীকরণ হলো: <br />
                            <span className="font-mono font-bold text-indigo-600 text-sm">Y = A ⊕ B = ĀB + A‍B̄</span>
                        </p>
                    </div>

                    <div className="w-full">
                        <p className="mb-2 font-bold text-slate-800">শুধুমাত্র মৌলিক গেইটের সাহায্যে XOR গেইটের লজিক চিত্র:</p>
                        <div className="flex justify-center py-4 bg-white rounded border border-slate-100">
                            <img
                                src="/logicGates/xor-fundamental.png"
                                className="h-auto max-w-full object-contain"
                                alt="XOR implementation using basic gates"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="font-bold text-slate-800 underline">ব্যাখ্যা:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Ā এবং B̄ তৈরির জন্য দুটি <span className="font-bold">NOT</span> গেইট ব্যবহৃত হয়েছে।</li>
                            <li>ĀB এবং A‍B̄ গুণের কাজ সম্পন্ন করার জন্য দুটি <span className="font-bold">AND</span> গেইট ব্যবহৃত হয়েছে।</li>
                            <li>শেষে (ĀB + A‍B̄) যোগের কাজের জন্য একটি <span className="font-bold">OR</span> গেইট ব্যবহৃত হয়েছে।</li>
                        </ul>
                        <p className="mt-2">
                            যেহেতু এই তিনটি মৌলিক গেইট ব্যবহার করেই XOR গেইটের লজিক বাস্তবায়ন করা সম্ভব, তাই একে একটি সমন্বিত লজিক গেইট বলা হয়।
                        </p>
                    </div>
                </div>
            )
        },
        {
            "id": 15,
            "q": "পাঁচ ইনপুটের অ্যান্ড গেইট বাস্তবায়নে কয়টি ন্যান্ড গেইট প্রয়োজন? বুঝিয়ে লেখ।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            পাঁচ ইনপুটের একটি অ্যান্ড (AND) গেইট বাস্তবায়ন করতে মোট ২টি ন্যান্ড (NAND) গেইট প্রয়োজন।
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="p-3 bg-slate-50 border-l-4 border-indigo-400 rounded">
                            <p className="font-bold text-slate-800">যৌক্তিক সমীকরণ:</p>
                            <p className="mt-1 font-mono text-sm bg-white p-2 rounded border border-slate-200">
                                F = X₁ . X₂ . X₃ . X₄ . X₅ = overline{"{overline{X₁ . X₂ . X₃ . X₄ . X₅}}"}
                            </p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-blue-400 rounded">
                            <p className="font-bold text-slate-800">ব্যাখ্যা:</p>
                            <p>
                                ১. প্রথম পর্যায়ে পাঁচটি ইনপুটকে (X₁, X₂, X₃, X₄, X₅) একটি ন্যান্ড গেইটের মধ্য দিয়ে চালনা করলে আউটপুট পাওয়া যায়: <span className="font-mono">overline{"{X₁ . X₂ . X₃ . X₄ . X₅}"}</span>।
                            </p>
                            <p className="mt-2">
                                ২. এই আউটপুটকে পুনরায় আরেকটি ন্যান্ড গেইটের (নট হিসেবে কাজ করে) মধ্য দিয়ে চালনা করলে অ্যান্ড গেইটের সমতুল্য আউটপুট পাওয়া যায়।
                            </p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center py-4 bg-white rounded border border-slate-100">
                        <p className="mb-2 font-bold text-slate-800">লজিক সার্কিট চিত্র:</p>
                        <p className="mt-4 font-bold text-indigo-700">আউটপুট: F = X₁ . X₂ . X₃ . X₄ . X₅</p>
                    </div>
                </div>
            )
        }
        , {
            "id": 16,
            "q": "চারবিট রেজিস্টারে চারটি ফ্লিপ-ফ্লপ থাকে— বুঝিয়ে লেখ।",
            "ans": (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            রেজিস্টার হলো এক প্রকার মেমোরি ডিভাইস, যা কতগুলো বিটকে ধারণ বা সংরক্ষণ করে থাকে।
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="p-3 bg-slate-50 border-l-4 border-indigo-400 rounded">
                            <p>
                                ১. গঠন প্রকৃতি: এটি একগুচ্ছ ফ্লিপ-ফ্লপ এর গেট—এর সমন্বয়ে গঠিত সার্কিট।
                            </p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-blue-400 rounded">
                            <p>
                                ২. ধারণ ক্ষমতা: প্রতিটি ফ্লিপ-ফ্লপ একটি করে বাইনারি বিট (০ অথবা ১) ধারণ করতে পারে।
                            </p>
                        </div>

                        <div className="p-3 bg-slate-50 border-l-4 border-emerald-400 rounded">
                            <p>
                                ৩. চারবিট রেজিস্টার: যেহেতু ১টি ফ্লিপ-ফ্লপ ১টি বিট রাখে, সেহেতু ৪-বিট বাইনারি তথ্য সংরক্ষণ করার জন্য ৪টি ফ্লিপ-ফ্লপ প্রয়োজন।
                            </p>
                        </div>
                    </div>

                    <div className="pt-1">
                        <p>
                            রেজিস্টার প্রথম মেমোরি ডিভাইস হিসেবে CPU-এর অভ্যন্তরে থাকে এবং প্রসেসিং এর সময় অস্থায়ীভাবে ডেটা সঞ্চিত রাখে।
                        </p>
                    </div>
                </div>
            )
        }




    ]

    return (
        <main className="min-h-screen bg-[#fdfdfd] pt-32 pb-20 px-6">
            <div className="max-w-6xl mx-auto">
                <AnimatePresence mode="wait">
                    {(activeTab === 'all' || activeTab === 'cq') && (
                        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">

                            {/* Q/A section */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-center px-4">
                                    <h2 className="text-2xl font-black text-slate-900"> প্রশ্নসমূহ</h2>
                                    <button onClick={() => setShowSolutions(!showSolutions)} className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all shadow-lg ${showSolutions ? 'bg-indigo-50 text-indigo-600' : 'bg-indigo-600 text-white shadow-indigo-200'}`} >
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

                                                    {/* Solution Button */}
                                                    {showSolutions && (
                                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-6 border-t border-slate-50"   >
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