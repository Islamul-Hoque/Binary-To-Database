"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Calculator, ArrowRightLeft, Hash, CheckCircle2, ClipboardList } from 'lucide-react';

const truthTableRows = [
    { A: 0, B: 0, Y: 1 },
    { A: 0, B: 1, Y: 0 },
    { A: 1, B: 0, Y: 0 },
    { A: 1, B: 1, Y: 1 },
];


const PracticePage = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [showSolutions, setShowSolutions] = useState(false);

    const solutions = [
        {
            id: 1,
            q: "(i) চিত্র-১ কোন গেটের সাথে সাদৃশ্যপূর্ণ তার বর্ণনা দাও।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <div>
                        <p className="font-bold text-slate-900">
                            চিত্র-১ X-NOR gate এর সাথে সাদৃশ্যপূর্ণ।
                        </p>
                        <p className="mt-2">
                            যে ডিজিটাল ইলেকট্রনিক সার্কিটে দুই বা ততোধিক ইনপুট দিয়ে একটি মাত্র আউটপুট পাওয়া যায় এবং বিজোড় সংখ্যক ১ ইনপুট এর জন্য আউটপুট ০ ও জোড় সংখ্যক ১ ইনপুট এর জন্য আউটপুট ১ হবে তাকে X-NOR gate বলে। এটি একটি সমন্বিত গেট। X-NOR gate মৌলিক গেট দিয়ে তৈরি করা যায়।
                        </p>
                    </div>

                    <div className="w-full">
                        <p className="mb-2 font-bold text-slate-800">নিচে X-NOR gate এর সত্যক সারণিসহ লজিক গেট দেখানো হলো:</p>

                        {/* লজিক গেট ইমেজ */}
                        <div className="flex justify-center py-4 bg-white rounded border border-slate-100 mb-4">
                            <img
                                src="/logicGates/x-nor.png"
                                alt="X-NOR Gate Logic"
                                className="h-auto max-w-[280px] object-contain"
                            />
                        </div>

                        {/* সত্যক সারণি (Table) */}
                        <table className="w-full border-collapse border border-slate-400 text-center text-[12px] table-fixed">
                            <thead className="bg-slate-100 font-bold">
                                <tr>
                                    <th colSpan={2} className="border border-slate-400 p-1 bg-slate-200/50">input</th>
                                    <th colSpan={2} className="border border-slate-400 p-1"></th>
                                    <th colSpan={2} className="border border-slate-400 p-1"></th>
                                    <th className="border border-slate-400 p-1 bg-slate-200/50">output</th>
                                </tr>
                                <tr>
                                    <th className="border border-slate-400 p-1">A</th>
                                    <th className="border border-slate-400 p-1">B</th>
                                    <th className="border border-slate-400 p-1">Ā</th>
                                    <th className="border border-slate-400 p-1">B̄</th>
                                    <th className="border border-slate-400 p-1">AB</th>
                                    <th className="border border-slate-400 p-1">Ā.B̄</th>
                                    <th className="border border-slate-400 p-1 bg-indigo-50">Y = AB + Ā.B̄</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono">
                                <tr>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1 font-bold bg-indigo-50/30">1</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1 font-bold bg-indigo-50/30">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1 font-bold bg-indigo-50/30">0</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1">1</td>
                                    <td className="border border-slate-400 p-1">0</td>
                                    <td className="border border-slate-400 p-1 font-bold bg-indigo-50/30">1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            q: "(ii) চিত্র-১ এর গেটটিকে মৌলিক গেটের সাহায্যে প্রকাশ কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed font-sans">
                    <p>
                        চিত্র-১ এর সত্যক সারণিটি হলো X-NOR গেটের। ২ ইনপুট বিশিষ্ট X-NOR গেট হলো:
                    </p>

                    {/* X-NOR Gate Image */}
                    <div className="flex justify-center py-2 bg-white rounded border border-slate-50">
                        <img
                            src="/logicGates/x-nor.png"
                            alt="X-NOR Gate"
                            className="h-auto max-w-[250px] object-contain"
                        />
                    </div>

                    <p className="font-bold text-slate-900">
                        X-NOR গেটকে মৌলিক গেটের সাহায্যে প্রকাশ করা হলো :
                    </p>

                    {/* X-NOR using Basic Gates Image */}
                    <div className="flex justify-center py-2 bg-white rounded border border-slate-50">
                        <img
                            src="/logicGates/x-nor-basic.png"
                            alt="X-NOR using Basic Gates"
                            className="h-auto max-w-[350px] object-contain"
                        />
                    </div>

                    <p className="mt-2">
                        ২ ইনপুট বিশিষ্ট X-NOR গেটকে মৌলিক গেটের সাহায্যে প্রকাশের জন্য ২ টি NOT গেট, ২ টি AND গেট এবং ১ টি OR গেট প্রয়োজন।
                    </p>
                </div>
            )
        },
        {
            id: 3,
            q: "(iii) চিত্র-১ এর গেটটিকে NAND এবং NOR গেটের সাহায্যে বাস্তবায়ন কর এবং লজিক গেট আঁক।",
            ans: (
                <div className="space-y-6 text-[13px] text-slate-700 leading-relaxed font-sans">

                    {/* NAND Implementation Section */}
                    <div className="space-y-3">
                        <p className="font-bold text-slate-900 border-b pb-1">NAND গেটের সাহায্যে X-NOR গেট বাস্তবায়ন:</p>

                        <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 font-mono text-[14px] overflow-x-auto">
                            <p className="flex items-center mb-4"> Y = <span className="border-t border-black pt-0.5 ml-2">  A ⊕ B </span> </p>
                            <p className="mb-4"> = AB + <span className="border-t border-slate-900 mx-0.5">A</span>.<span className="border-t border-slate-900 mx-0.5">B</span> </p>

                            <p className="mb-4 flex items-center"> =
                                <span className="border-t border-slate-900 pt-0.5 ml-2">
                                    <span className="border-t border-slate-900 pt-0.5 pb-1">AB
                                        <span className="mx-1">+</span>
                                        <span className="border-t border-slate-900">A</span>.<span className="border-t border-slate-900">B</span>
                                    </span>
                                </span>
                            </p>

                            <p className="flex items-center "> =
                                <span className="border-t border-black pt-1 ml-2 flex items-center">
                                    <span className="border-t border-black pt-0.5">
                                        <span className=" border-black pt-0.5">
                                            (<span className="border-t border-black">A</span>
                                            <span className="border-t border-black ml-0.5">B</span>)
                                        </span>
                                    </span>
                                    <span className="mx-1">.</span>
                                    <span className="border-t border-black pt-0.5">
                                        (AB)
                                    </span>
                                </span>
                            </p>
                        </div>

                        <div className="flex justify-center py-2 bg-white rounded border border-slate-100">
                            <img src="/logicGates/xnor-to-nand.png" className="h-auto max-w-[300px] object-contain" alt="X-NOR using NAND Gates" />
                        </div>
                    </div>

                    {/* NOR Implementation Section */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                        <p className="font-bold text-slate-900 border-b pb-1">NOR গেটের সাহায্যে X-NOR গেট বাস্তবায়ন:</p>

                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 font-mono text-[14px] overflow-x-auto">
                            {/* Line 1 */}
                            <p className="mb-4 flex items-center">
                                Y = <span className="border-t border-slate-900 pt-0.5 ml-1">A⊕B</span>
                            </p>

                            {/* Line 2 */}
                            <p className="mb-4 flex items-center">
                                = AB + <span className="border-t border-slate-900 mx-0.5">A</span>.<span className="border-t border-slate-900 mx-0.5">B</span>
                            </p>

                            {/* Line 3 */}
                            <p className="mb-4 flex items-center">
                                = <span className="border-t border-slate-900 pt-0.5 ml-2">
                                    <span className="border-t border-slate-900 pt-0.5">AB</span>
                                </span>
                                <span className="mx-2">+</span>
                                <span className="border-t border-slate-900 pt-0.5">
                                    <span className="border-t border-slate-900 pt-0.5">
                                        <span className="border-t border-slate-900">A</span>.<span className="border-t border-slate-900">B</span>
                                    </span>
                                </span>
                            </p>

                            {/* Line 4 */}
                            <p className="mb-4 flex items-center">=
                                <span className="border-t border-slate-900 pt-0.5 ml-2">
                                    <span className="border-t border-slate-900 pt-0.5">A</span> + <span className="border-t border-slate-900 pt-0.5">B</span>
                                </span>
                                <span className="mx-2">+</span>

                                <span className="border-t border-slate-900 pt-0.5 flex items-center">
                                    <span className="flex flex-col items-center">
                                        <span className="border-t border-slate-900 pt-0.5">
                                            <span className="border-t border-slate-900 px-1">A</span>
                                        </span>
                                    </span>
                                    <span className="mx-1">+</span>
                                    <span className="flex flex-col items-center">
                                        <span className="border-t border-slate-900 pt-0.5">
                                            <span className="border-t border-slate-900 px-1">B</span>
                                        </span>
                                    </span>
                                </span>
                            </p>

                            {/* Line 5  */}
                            <p className="mb-4 flex items-center">
                                = <span className="border-t border-slate-900 pt-0.5 ml-2">
                                    <span className="border-t border-slate-900">A</span> + <span className="border-t border-slate-900">B</span>
                                </span>
                                <span className="mx-1">+</span>
                                <span className="border-t border-slate-900 pt-0.5 ml-1">A + B</span>
                            </p>

                            {/* Line 6  */}
                            <p className="flex items-center">
                                = <span className="border-t border-slate-900 pt-0.5 ml-2">
                                    <span className="border-t border-slate-900 pt-0.5 flex items-center">

                                        <span className="border-t border-slate-900 pt-0.5">
                                            <span className="border-t border-slate-900 pt-0.5">A</span> + <span className="border-t border-slate-900 pt-0.5">B</span>
                                        </span>
                                        <span className="mx-1">+</span>

                                        <span className="border-t border-slate-900 pt-0.5">A + B</span>
                                    </span>
                                </span>
                            </p>
                        </div>

                        <div className="flex justify-center py-2 bg-white rounded border border-slate-100">
                            <img src="/logicGates/x-nor-nor.png" className="h-auto max-w-[300px] object-contain" alt="X-NOR using NOR Gates" />
                        </div>
                    </div>



                </div>
            )
        },
        {
            id: 4,
            q: "(iv) চিত্র-২ হতে আউটপুট Y এর মান সত্যক সারণিতে দেখাও।",
            ans: (
                <div className="space-y-6 text-[13px] text-slate-700">
                    {/* শুরুতে লজিক গেট ইমেজ সেকশন */}
                    <p className="mt-2 ">চিত্র-২: আউটপুট Y এর জন্য লজিক গেট</p>
                    <div className="flex flex-col items-center">

                        <img
                            src="/logicGates/logic-gate-y.png"
                            alt="Logic Gate Diagram"
                            className="max-w-full h-auto rounded shadow-sm border border-slate-200"
                        />

                    </div>


                    <div className="space-y-2 font-mono">
                        <p className="font-bold text-slate-900 mb-3 text-[14px]">আউটপুট, Y এর সরলীকরণ:</p>

                        {/* Line 1 */}
                        <p className="flex items-center">
                            Y = <span className="border-t border-slate-900 pt-0.5 ml-1">
                                <span className="border-t border-slate-900 pt-0.5">A</span>.B
                            </span>
                            <span className="mx-3">+</span>
                            <span className="border-t border-slate-900 pt-0.5">
                                A.<span className="border-t border-slate-900 pt-0.5">B</span>
                            </span>
                        </p>

                        {/* Line 2 */}
                        <p className="flex items-center">
                            =
                            <span className="flex flex-col items-center">
                                <span className="border-t border-slate-900 pt-0.5">
                                    <span className="border-t border-slate-900 px-1">A</span>
                                </span>
                            </span>
                            <span className="mx-1">+</span>
                            <span className="border-t border-slate-900 pt-0.5">B</span>
                            <span className="mx-3">+</span>
                            <span className="border-t border-slate-900 pt-0.5">A</span>
                            <span className="mx-1">+</span>
                            <span className="flex flex-col items-center">
                                <span className="border-t border-slate-900 pt-0.5">
                                    <span className="border-t border-slate-900 px-1">B</span>
                                </span>
                            </span>

                        </p>

                        {/* Line 3 */}
                        <p className="flex items-center">
                            = A + <span className="border-t border-slate-900 pt-0.5">B</span>
                            <span className="mx-3">+</span>
                            <span className="border-t border-slate-900 pt-0.5">A</span> + B
                        </p>

                        {/* Line 4 */}
                        <p className="flex items-center">
                            = (A + <span className="border-t border-slate-900 pt-0.5">A</span>)
                            <span className="mx-3">+</span>
                            (B + <span className="border-t border-slate-900 pt-0.5">B</span>)
                        </p>

                        <p>= 1 + 1</p>
                        <p className="font-bold text-slate-900">= 1</p>
                        <p className="mt-2 text-slate-600 italic font-sans text-[12px]">অর্থাৎ, A, B তে ইনপুট যাই দেওয়া হোক না কেন, আউটপুট সবসময় ১ আসবে।</p>
                    </div>

                    <div>
                        <p className="font-bold mb-3 text-slate-900 text-[14px]">সত্যক সারণি:</p>
                        <div className="overflow-x-auto">
                            <table className="min-w-full border-collapse border border-slate-300 text-center">
                                <thead className="bg-slate-100">
                                    <tr className="text-slate-500 text-[11px]">
                                        <th colSpan={6} className="border border-slate-300 p-1">input</th>

                                        <th className="border border-slate-300 p-1 bg-blue-50">output</th>
                                    </tr>
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-300 p-2">A</th>
                                        <th className="border border-slate-300 p-2">B</th>
                                        <th className="border border-slate-300 p-2"><span className="border-t border-slate-900">A</span></th>
                                        <th className="border border-slate-300 p-2"><span className="border-t border-slate-900">B</span></th>

                                        <th className="border border-slate-300 p-2 font-mono text-[10px]">
                                            <span className="border-t border-slate-900 pt-0.5">
                                                <span className="border-t border-slate-900">A</span>.B
                                            </span>
                                        </th>
                                        <th className="border border-slate-300 p-2 font-mono text-[10px]">
                                            <span className="border-t border-slate-900 pt-0.5">
                                                A.<span className="border-t border-slate-900">B</span>
                                            </span>
                                        </th>

                                        <th className="border border-slate-300 p-2 bg-blue-50 font-mono text-[10px] text-blue-700">
                                            Y = <span className="border-t border-slate-900 pt-0.5">
                                                <span className="border-t border-slate-900">A</span>.B
                                            </span>
                                            <span> + </span>
                                            <span className="border-t border-slate-900 pt-0.5">
                                                A.<span className="border-t border-slate-900">B</span>
                                            </span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {[
                                        [0, 0, 1, 1, 1, 1, 1],
                                        [0, 1, 1, 0, 0, 1, 1],
                                        [1, 0, 0, 1, 1, 0, 1],
                                        [1, 1, 0, 0, 1, 1, 1]
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50/50">
                                            {row.map((cell, i) => (
                                                <td key={i} className={`border border-slate-300 p-2 ${i === 6 ? 'bg-blue-50/30 font-bold text-blue-600' : ''}`}>
                                                    {cell}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-3 text-slate-600 text-[12px]">সুতরাং, সত্যক সারণি হতেও দেখা যাচ্ছে, ইনপুট যাই দেওয়া হোক না কেন প্রতিবারই আউটপুট ১ আসছে।</p>
                    </div>
                </div>
            )
        },
        {
            id: 5,
            q: "(v) চিত্র-২ এর আউটপুট F এর মান নির্ণয় কর এবং সরলীকরণ করে নতুন লজিক গেট আঁক।",
            ans: (
                <div className="space-y-6 text-[13px] text-slate-700 font-mono">
                    <div className="space-y-3">
                        <p className="font-sans font-bold text-slate-900 mb-3"> চিত্র-২ হতে আউটপুট F এর জন্য লজিক গেট-     </p>
                        <div className="bg-white p-4 border border-slate-200 rounded-lg inline-block">
                            <img src="/q-v/q-v.png" alt="AND Gate AC" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="pl-4 border-l-2 border-emerald-400 py-1 space-y-2">
                            <p className="flex items-center">
                                আউটপুট, f = (A + B) . (A + <span className="border-t border-slate-900 pt-0.5">B</span>) . (<span className="border-t border-slate-900 pt-0.5">A</span> + C)
                            </p>
                            <p className="flex items-center">
                                = (A.A + A.<span className="border-t border-slate-900 pt-0.5">B</span> + B.A + B.<span className="border-t border-slate-900 pt-0.5">B</span>) . (<span className="border-t border-slate-900 pt-0.5">A</span> + C)
                            </p>
                            <p className="flex items-center">
                                = (A + A.<span className="border-t border-slate-900 pt-0.5">B</span> + A.B + 0) . (<span className="border-t border-slate-900 pt-0.5">A</span> + C)
                            </p>
                            <p className="flex items-center">
                                = (A(1 + <span className="border-t border-slate-900 pt-0.5">B</span>) + A.B) . (<span className="border-t border-slate-900 pt-0.5">A</span> + C)
                            </p>
                            <p className="flex items-center">
                                = (A.1 + A.B) . (<span className="border-t border-slate-900 pt-0.5">A</span> + C)
                            </p>
                            <p className="flex items-center">
                                = A(1 + B) . (<span className="border-t border-slate-900 pt-0.5">A</span> + C)
                            </p>
                            <p className="flex items-center">
                                = A . (<span className="border-t border-slate-900 pt-0.5">A</span> + C)
                            </p>
                            <p className="flex items-center">
                                = A.<span className="border-t border-slate-900 pt-0.5">A</span> + A.C
                            </p>
                            <p>= 0 + A.C</p>
                            <p className="font-bold text-blue-600 text-base">= AC</p>
                        </div>
                    </div>
                    {/* Logic Gate Diagram */}
                    <p className="font-sans font-bold text-slate-900 mb-3"> সরলীকৃত সঠিক গোটঃ  </p>
                    <div className="flex justify-center">
                        <img src="/q-v/y-ac.png" className="max-w-[280px] h-auto rounded shadow-sm border border-slate-200" alt="Simplified Logic Gate (AND gate with A and C inputs)" />
                    </div>
                    <p className="font-sans text-slate-600 italic">
                        সুতরাং, নতুন লজিক গেটে ইনপুট হিসেবে A এবং C নিয়ে একটি AND gate ব্যবহার করলেই F এর আউটপুট পাওয়া সম্ভব।
                    </p>
                </div>
            )
        },
        {
            id: 6,
            q: "(vi) চিত্র-২ এ ২ ও ৩ নং চিহ্নিত গেটগুলোর পারস্পরিক পরিবর্তনে প্রাপ্ত Y এর মান সত্যক সারণিতে দেখাও।",
            ans: (
                <div className="space-y-6 text-[13px] text-slate-700 font-mono">
                    {/* Logic Gate Diagram */}
                    <p className="font-sans  text-slate-900 mb-3"> চিত্র-২ এ ২ নং চিহ্নিত গেট হলো NAND গেট এবং ৩ নং চিহ্নিত গেট হলো OR গেট।   চিত্রের ২ ও ৩ নং গেটগুলোর পারস্পরিক পরিবর্তনে যে লজিক গেটটি পাওয়া যায় তা নিচে আঁকা হলো: </p>

                    <div className="flex ">
                        <img src="/q6/q6.png" className=" h-auto rounded shadow-sm border border-slate-200" alt="Logic Gate Diagram for Y" />
                    </div>

                    {/* Simplification Steps */}
                    <p className="font-sans font-bold">আউটপুটের সরলীকরণ:</p>
                    <div className="pl-4 border-l-2 border-emerald-400 py-1 space-y-2">
                        <p>  Y = <span className="border-t border-slate-900 pt-0.5">( <span className="border-t border-slate-900">A</span> + B) · (A + <span className="border-t border-slate-900">B</span>) </span> </p>
                        <p className="flex items-center">  = <span className="border-t border-slate-900 pt-0.5"> ( <span className="border-t border-slate-900">A</span> + B ) </span> + <span className="border-t border-slate-900 pt-0.5"> ( A + <span className="border-t border-slate-900">B</span> ) </span> </p>
                        <p className="flex items-center">  = <span className="border-t border-slate-900"><span className="border-t border-slate-900">A</span></span>·<span className="border-t border-slate-900">B</span>  <span className='mx-2'>+</span> <span className="border-t border-slate-900">A</span>·<span className="border-t border-slate-900"><span className="border-t border-slate-900">B</span></span>
                        </p>
                        <p>= A.<span className="border-t border-slate-900">B</span>  <span className='mx-1'>+</span> <span className="border-t border-slate-900">A</span>.B </p>
                        <p>=  <span className="border-t border-slate-900">A</span>.B <span className='mx-1'>+</span> A.<span className="border-t border-slate-900">B</span>  </p>
                        <p className="font-bold text-blue-600 text-base"> = A ⊕ B </p>
                    </div>

                    {/* Truth Table */}
                    <p className="font-sans text-slate-700 italic">  সুতরাং, লজিক গেটটির আউটপুট X-OR গেটের ন্যায় হওয়ায় সত্যক সারণিও X-OR গেটের ন্যায় হবে।   </p>
                    <p className="font-sans font-bold text-slate-900 mb-3">সত্যক সারণি:</p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border-collapse border border-slate-300 text-center">
                            <thead className="bg-slate-100">
                                <tr className="text-slate-500 text-[11px]">
                                    <th colSpan={6} className="border border-slate-300 p-1">input</th>
                                    <th className="border border-slate-300 p-1 bg-blue-50">output</th>
                                </tr>
                                <tr className="bg-slate-50">
                                    <th className="border border-slate-300 p-2">A</th>
                                    <th className="border border-slate-300 p-2">B</th>
                                    <th className="border border-slate-300 p-2"><span className="border-t border-slate-900">A</span></th>
                                    <th className="border border-slate-300 p-2"><span className="border-t border-slate-900">B</span></th>
                                    <th className="border border-slate-300 p-2 "><span className="border-t border-slate-900">A</span>.B</th>
                                    <th className="border border-slate-300 p-2">A.<span className="border-t border-slate-900">B</span></th>
                                    <th className="border border-slate-300 p-2 bg-blue-50 font-mono text-[10px] text-blue-700">Y = A ⊕ B</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    [0, 0, 1, 1, 0, 0, 0],
                                    [0, 1, 1, 0, 1, 0, 1],
                                    [1, 0, 0, 1, 0, 1, 1],
                                    [1, 1, 0, 0, 0, 0, 0]
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50/50">
                                        {row.map((cell, i) => (
                                            <td key={i} className={`border border-slate-300 p-2 ${i === 6 ? 'bg-blue-50/30 font-bold text-blue-600' : ''}`}>
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        },
        {
            id: 7,
            q: "(vii) ‘vi’ নং প্রাপ্ত গেটটির (Y) মান NAND এবং NOR গেটের সাহায্যে বাস্তবায়ন কর।",
            ans: (
                <div className="space-y-6 text-[13px] text-slate-700 font-mono">
                    {/* Heading */}
                    <p className="font-sans  text-slate-900">
                        “vi” হতে পাই, Y = A <span className='text-[1.14rem]'>⊕</span> B, যা X-OR গেটের আউটপুট। নিচে Y-কে NAND এবং NOR গেটের সাহায্যে বাস্তবায়ন করা হয়েছে।
                    </p>

                    {/* NAND Implementation */}
                    <p className="font-sans font-bold underline">NAND এর সাহায্যে বাস্তবায়নঃ</p>
                    <div className="pl-4 border-l-2 border-emerald-400 space-y-2">
                        <p>A ⊕ B</p>
                        <p className="flex items-center">  = <span >  <span className="border-t border-slate-900">A</span>·B + A·<span className="border-t border-slate-900">B</span>    </span>
                        </p>

                        <p className="flex items-center">
                            = <span className="border-t border-slate-900 pt-0.5">
                                <span className="border-t pt-0.5 border-slate-900">
                                    <span className="border-t border-slate-900">A</span>·B + A·<span className="border-t border-slate-900">B</span>
                                </span>
                            </span>
                        </p>

                        <p className="flex items-center ">
                            = <span className="border-t border-slate-900 pt-0.5">
                                <span className="flex gap-2 items-center">
                                    <span className="border-t border-slate-900 pt-0.5">
                                        <span className="border-t border-slate-900">A.</span>B
                                    </span>
                                    <span className="pb-1">.</span>
                                    <span className="border-t border-slate-900 pt-0.5">
                                        A.<span className="border-t border-slate-900">B</span>
                                    </span>

                                </span>
                            </span>
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img src="/q7/xor-to-nand.png" alt="NAND Implementation of XOR" className="max-w-[320px] h-auto rounded shadow-sm border border-slate-200" />
                    </div>

                    {/* NOR Implementation */}
                    <p className="font-sans font-bold underline">NOR এর সাহায্যে বাস্তবায়নঃ</p>
                    <div className="pl-4 border-l-2 border-rose-400 space-y-3 font-mono text-xl">
                        <p>A ⊕ B</p>
                        {/* Line 2: ĀB + AB̄ */}
                        <p>  = <span className="border-t border-slate-900">A</span>B + A<span className="border-t border-slate-900">B</span>      </p>

                        {/* Line 3: Triple/Double bar structure for (ĀB + AB̄) */}
                        <p className="flex items-center ">
                            <span className='pr-2'>  =</span> <div className="flex gap-4  items-center">
                                <span className="border-t border-slate-900 pt-0.5">
                                    <span className="border-t border-slate-900 pt-0.5">
                                        <span className="border-t border-slate-900">A.</span>B
                                    </span>
                                </span>
                                <span className="text-xl">+</span>
                                <span className="border-t border-slate-900 pt-0.5">
                                    <span className="border-t border-slate-900 pt-0.5">
                                        A<span className="border-t border-slate-900">.B</span>
                                    </span>
                                </span>
                            </div>
                        </p>

                        {/* Line 4:  */}
                        <p className="flex items-center">  =
                            <span className="flex gap-1 items-center">
                                <span className='border-t border-slate-900 pt-0.5'>
                                    <span className="border-t border-slate-900 pt-0.5">
                                        <span className="border-t border-slate-900">A</span>
                                    </span>
                                    + <span className="border-t border-slate-900 pt-0.5">B</span>
                                </span> +

                                <span className='border-t border-slate-900 pt-0.5'>
                                    <span className="border-t border-slate-900 pt-0.5">
                                        <span className="border-t border-slate-900">B</span>
                                    </span>
                                    + <span className="border-t border-slate-900">A</span>
                                </span>
                            </span>
                        </p>

                        {/* Line 5: Final Output */}
                        <p className="flex items-center">
                            =
                            <span className='border-t border-slate-900 pt-1'>
                                <span className='border-t border-slate-900 pt-0.5'>
                                    <span className="flex gap-1 items-center">
                                        <span className='border-t border-slate-900 pt-1'>
                                            A  + <span className="border-t border-slate-900 pt-0.5">B</span>
                                        </span>
                                        <span className='px-1'>+</span>

                                        <span className='border-t border-slate-900 pt-1'>
                                            <span className="border-t border-slate-900">A</span>
                                            + B </span>
                                    </span>
                                </span>
                            </span>
                        </p>



                    </div>
                    <div className="flex justify-center">
                        <img src="/q7/xor-to-nor.png" alt="NOR Implementation of XOR" className="max-w-[320px] h-auto rounded shadow-sm border border-slate-200" />
                    </div>
                </div>
            )
        },
        {
            id: 8,
            q: "(viii) চিত্র-4 এর ডিভাইসটিকে মৌলিক গেটের সাহায্যে প্রকাশ কর এবং লজিক গেট আঁকন কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700">
                    <p>  চিত্র-৪ এর ডিজাইনটি হলো একটি ফুল অ্যাডার। ফুল অ্যাডারের ২টি আউটপুট হয় — একটি যোগফল (Sum) এবং একটি ক্যারি (Carry)।  আউটপুট দুইটির লজিক ফাংশন নিচে প্রকাশ করা হলো:  </p>

                    <div className="space-y-2 font-mono bg-indigo-50 p-3 text-indigo-800 rounded">
                        <p className="font-bold border-b border-indigo-200 pb-1">লজিক ফাংশন:</p>
                        <div className="space-y-2 font-mono text-lg text-slate-800 bg-indigo-50/50 p-4 rounded-lg">

                            <p className="flex flex-wrap items-center gap-1">
                                <span className="font-bold">S</span> =
                                <span className="border-t border-slate-900">A</span>.<span className="border-t border-slate-900">B</span>.Cᵢ +
                                <span className="border-t border-slate-900">A</span>.B.<span className="border-t border-slate-900">Cᵢ</span> +
                                A.<span className="border-t border-slate-900">B</span>.<span className="border-t border-slate-900">Cᵢ</span> +
                                A.B.Cᵢ
                            </p>
                            <div className="space-y-2 font-mono text-[13px] text-slate-700">
                                <p>
                                    C = <span className="border-t border-slate-900">A</span>·B·Cᵢ +
                                    A·<span className="border-t border-slate-900">B</span>·Cᵢ +
                                    A·<span className="border-t border-slate-900">B</span>·<span className="border-t border-slate-900">Cᵢ</span> +
                                    A·B·<span className="border-t border-slate-900">Cᵢ</span> +
                                    A·B·Cᵢ
                                </p>
                                <p>
                                    = <span className="border-t border-slate-900">A</span>·B·Cᵢ + A.B.Cᵢ +
                                    A·<span className="border-t border-slate-900">B</span>·Cᵢ + A.B.Cᵢ +
                                    A·B·<span className="border-t border-slate-900">Cᵢ</span> + A·B·Cᵢ
                                </p>
                                <p>
                                    = B·Cᵢ(<span className="border-t border-slate-900">A</span> + A) +
                                    A·Cᵢ(<span className="border-t border-slate-900">B</span> + B) +
                                    A·B(<span className="border-t border-slate-900">Cᵢ</span> + Cᵢ)
                                </p>
                                <p>   = B·Cᵢ·1 + A·Cᵢ·1 + A·B·1      </p>
                                <p className="font-bold text-blue-600">    = AB + BCᵢ + ACᵢ   </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="mb-2 font-semibold">   নিচে মৌলিক গেটের সাহায্যে ফুল অ্যাডার বাস্তবায়ন করা হলো: </p>
                        <img src="/q8/q8.png" className="w-full max-w-md border rounded-lg shadow-sm" alt="Full Adder using basic gates" />
                    </div>
                </div>
            )
        },
        {
            id: 9,
            q: "(ix) চিত্র-3 এর ডিভাইসটি কী? গঠন ব্যাখ্যা কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700">
                    <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed text-justify">
                        <p>
                            <span className="font-bold">চিত্র-৩</span> এর ডিভাইসটি হলো <span className="border border-rose-500 px-1 rounded text-rose-600 font-bold">ডিকোডার</span>। কারণ, ডিকোডারে N সংখ্যক ইনপুট এর জন্য 2<sup>N</sup> সংখ্যক আউটপুট পাওয়া যায়। নিচে 2 to 4 ডিকোডারের গঠন আলোচনা করা হলো :
                        </p>
                        <p>   2 to 4 ডিকোডার ডিজিটাল লজিক সার্কিটে 2 সংখ্যক ইনপুটের জন্য 4 টি আউটপুট লাইন পাওয়া যায়। যেকোনো একটি আউটপুট লাইনের মান 1 হলে বাকি সব কয়টি আউটপুট লাইনের মান 0 হবে। কখন কোন আউটপুট লাইনের মান 1 হবে তা নির্ভর করে ইনপুটগুলোর মানের উপর।    </p>
                    </div>
                    {/* Truth Table */}
                    <div className="overflow-x-auto">
                        <div className="space-y-2">
                            <p className="mb-2 font-semibold">2 to 4 লাইন ডিকোডারের সত্যক সারণি:</p>
                            <table className="table-auto border-collapse border border-slate-500 text-center text-[13px] w-full max-w-sm">
                                <thead>
                                    {/* মেইন হেডার: input এবং output */}
                                    <tr className="bg-slate-50">
                                        <th colSpan={2} className="border border-slate-500 px-2 py-1 font-semibold text-slate-900">input</th>
                                        <th colSpan={4} className="border border-slate-500 px-2 py-1 font-semibold text-slate-900">output</th>
                                    </tr>
                                    {/* সাব হেডার: ভেরিয়েবল নামসমূহ */}
                                    <tr className="bg-slate-50">
                                        <th className="border border-slate-500 px-2 py-1">A</th>
                                        <th className="border border-slate-500 px-2 py-1">B</th>
                                        <th className="border border-slate-500 px-2 py-1">D₀</th>
                                        <th className="border border-slate-500 px-2 py-1">D₁</th>
                                        <th className="border border-slate-500 px-2 py-1">D₂</th>
                                        <th className="border border-slate-500 px-2 py-1">D₃</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { A: 0, B: 0, D0: 1, D1: 0, D2: 0, D3: 0 },
                                        { A: 0, B: 1, D0: 0, D1: 1, D2: 0, D3: 0 },
                                        { A: 1, B: 0, D0: 0, D1: 0, D2: 1, D3: 0 },
                                        { A: 1, B: 1, D0: 0, D1: 0, D2: 0, D3: 1 },
                                    ].map((row, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                                            <td className="border border-slate-500 px-2 py-1">{row.A}</td>
                                            <td className="border border-slate-500 px-2 py-1">{row.B}</td>
                                            <td className="border border-slate-500 px-2 py-1 font-medium">{row.D0}</td>
                                            <td className="border border-slate-500 px-2 py-1 font-medium">{row.D1}</td>
                                            <td className="border border-slate-500 px-2 py-1 font-medium">{row.D2}</td>
                                            <td className="border border-slate-500 px-2 py-1 font-medium">{row.D3}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Logic Functions */}
                    <p className="font-bold text-slate-900">
                        সত্যক সারণি হতে আউটপুটের জন্য লজিক ফাংশন-
                    </p>

                    <div className="space-y-1 font-mono text-[13px]">
                        <p>D₀ = <span className="border-t border-slate-900">A</span>·<span className="border-t border-slate-900">B</span></p>
                        <p>D₁ = <span className="border-t border-slate-900">A</span>·B</p>
                        <p>D₂ = A·<span className="border-t border-slate-900">B</span></p>
                        <p>D₃ = A·B</p>
                    </div>

                    {/* Circuit Diagram */}
                    <div className="mt-4">
                        <p className="mb-2 font-semibold">উক্ত ফাংশন হতে বাস্তবায়িত সার্কিট:</p>
                        <img src="/q9/q9.png" alt="2-to-4 Decoder Circuit" className="w-full max-w-md border rounded-lg shadow-sm" />
                    </div>
                </div>
            )
        },
        {
            id: 10,
            q: "(x) F = ĀB · ĀB এর সরলীকৃত মান নির্ণয় করে লজিক গেট আঁকন কর।",
            ans: (
                <div className="space-y-3 text-[13px] text-slate-700 font-mono">
                    <p>F = (ĀB) · (ĀB)</p>
                    <p>= ĀB [যেহেতু X · X = X]</p>
                    <p className="font-sans mt-2">লজিক গেট: একটি NOT গেট এবং একটি AND গেট লাগবে।</p>
                </div>
            )
        },
        {
            id: 11,
            q: "(xi) চিত্র-3 এর ডিভাইস ইনপুট 4টি এবং আউটপুট 2টি হলে যে নতুন ডিভাইস পাওয়া যায়, তার লজিক গেট আঁকন কর।",
            ans: (
                <div className="space-y-3 text-[13px] text-slate-700">
                    <p>এটি একটি **4-to-2 লাইন এনকোডার**।</p>
                    <p className="font-bold underline">আউটপুট সমীকরণ:</p>
                    <p className="font-mono">Y₀ = D₁ + D₃</p>
                    <p className="font-mono">Y₁ = D₂ + D₃</p>
                </div>
            )
        },
        {
            id: 12,
            q: "(xii) “vi” নং প্রশ্নে প্রাপ্ত গেটটি বাইনারি যোগের বর্তনীতে ব্যবহারের উপযোগী - মূল্যায়ন কর।",
            ans: (
                <div className="space-y-3 text-[13px] text-slate-700">
                    <p>XOR গেট বাইনারি যোগের ক্ষেত্রে অপরিহার্য। কারণ এটি ইনপুটগুলোর মধ্যে 'অড প্যারিটি' চেক করে সাম (Sum) প্রদান করে। হাফ-অ্যাডার সার্কিটে একটি XOR গেট সরাসরি সাম হিসেবে কাজ করে।</p>
                </div>
            )
        },
        {
            id: 13,
            q: "(xiii) চিত্র-2 এর 2নং গেট দ্বারা মৌলিক গেটগুলো বাস্তবায়ন করা সম্ভব - ব্যাখ্যা কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700">
                    <p>২নং গেটটি যদি **NAND** গেট হয়, তবে এটি একটি সার্বজনীন গেট।</p>
                    <p>ব্যাখ্যা: NAND গেটের উভয় ইনপুটকে শর্ট করলে **NOT** গেট পাওয়া যায়। দুটি NAND গেট পর পর যুক্ত করলে **AND** গেট পাওয়া যায় এবং তিনটি NAND গেট দিয়ে **OR** গেট তৈরি করা যায়।</p>
                </div>
            )
        },
        {
            id: 14,
            q: "(xiv) চিত্র-4 এ একটি ইনপুট কম হলে যে ডিভাইসটি পাওয়া যায় তার দ্বারা পূর্বের ডিভাইসটি বাস্তবায়ন করা সম্ভব- সত্যতা যাচাই কর।",
            ans: (
                <div className="space-y-4 text-[13px] text-slate-700 leading-relaxed">
                    <p>চিত্র-৪ একটি ৩-টু-৮ ডিকোডার হলে, ইনপুট কমিয়ে ২-টু-৪ ডিকোডার পাওয়া যাবে।</p>
                    <p className="font-bold text-rose-600 italic">যাচাই: হ্যাঁ, একাধিক ছোট ডিকোডার (যেমন ২-টু-৪) ব্যবহার করে একটি বড় ডিকোডার (যেমন ৩-টু-৮) বাস্তবায়ন করা সম্ভব। একে ডিকোডার এক্সপানশন বলা হয়।</p>
                </div>
            )
        }
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
                            <div className="max-w-6xl mx-auto space-y-16">

                                {/* Header */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center space-y-4"
                                >
                                    <h1 className="text-4xl md:text-6xl font-black text-slate-900">
                                        CQ: লজিক সার্কিট ও গেট
                                    </h1>
                                    <p className="text-slate-600 max-w-3xl mx-auto">
                                        নিচের ৪টি চিত্র এবং ১৪টি প্রশ্ন একত্রে সমাধান কর।
                                    </p>
                                </motion.div>

                                {/* Figures Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                                    {/* Figure-1: Truth Table */}
                                    <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4 text-center">চিত্র-1: Truth Table</h3>
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
                                                    <tr key={idx} className="hover:bg-slate-50">
                                                        <td className="border px-4 py-2 text-center">{row.A}</td>
                                                        <td className="border px-4 py-2 text-center">{row.B}</td>
                                                        <td className="border px-4 py-2 text-center font-bold text-blue-600">{row.Y}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Figure-2: Logic gate */}
                                    <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-2: Block Diagram</h3>
                                        <img src="/logicGate.png" className="" alt="" />
                                    </div>

                                    {/* Figure-3: Block Diagram */}
                                    <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৩: Block Diagram</h3>
                                        <div className="flex items-center gap-6">
                                            {/* Input */}
                                            <div className="flex flex-col items-center">
                                                <span className="text-sm font-bold text-slate-600 mb-2">Input</span>
                                                <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">N</div>
                                            </div>

                                            {/* Main Box (bigger with border) */}
                                            <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
                                                Device
                                            </div>

                                            {/* Output */}
                                            <div className="flex flex-col items-center">
                                                <span className="text-sm font-bold text-slate-600 mb-2">Output</span>
                                                <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">
                                                    2^N
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Figure-8: Multi Input-Output Box */}
                                    <div className="bg-white rounded-[32px] shadow-lg p-6 border border-slate-200 flex flex-col items-center">
                                        <h3 className="text-lg font-bold text-slate-800 mb-4">চিত্র-৮: Multi I/O Diagram</h3>
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col gap-2">
                                                <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 1</div>
                                                <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 2</div>
                                                <div className="px-4 py-2 bg-blue-100 text-blue-600 font-black rounded-lg">Input 3</div>
                                            </div>
                                            <div className="w-48 h-32 bg-slate-200 border-2 border-black rounded-xl flex items-center justify-center font-bold text-slate-700">
                                                Device
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 1</div>
                                                <div className="px-4 py-2 bg-emerald-100 text-emerald-600 font-black rounded-lg">Output 2</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Figure-4: Placeholder for image */}

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