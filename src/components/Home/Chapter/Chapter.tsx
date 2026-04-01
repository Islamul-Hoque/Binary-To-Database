"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Book, Layers, ShieldCheck, Binary, Globe, Code, Database, Info } from 'lucide-react';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const chapterList = [
    {
        id: '01',
        title: "Information & Tech",
        icon: <Info size={28} />,
        lessons: "12 Lessons",
        bgImage: "/information.png",
        color: "from-blue-600/80 to-indigo-900/90"
    },
    {
        id: '02',
        title: "Communication Systems",
        icon: <Globe size={28} />,
        lessons: "15 Lessons",
        bgImage: "/communicationSystems.png",
        color: "from-emerald-600/80 to-teal-900/90"
    },
    {
        id: '03',
        title: "Number Systems",
        icon: <Binary size={28} />,
        lessons: "20 Lessons",
        bgImage: "numberSystems2.png",
        color: "from-indigo-600/80 to-purple-900/90"
    },
    {
        id: '04',
        title: "Web Design & HTML",
        icon: <Globe size={28} />,
        lessons: "18 Lessons",
        bgImage: "/webDesign.jpg",
        color: "from-blue-500/80 to-cyan-900/90"
    },
    {
        id: '05',
        title: "C Programming",
        icon: <Code size={28} />,
        lessons: "25 Lessons",
        // bgImage: "plash.com/photo-15158https://images.uns79218367-8466d910aaa4?auto=format&fit=crop&q=80",
        bgImage: "/cProgramming.png",
        color: "from-rose-600/80 to-pink-900/90"
    },
    {
        id: '06',
        title: "Database Systems",
        icon: <Database size={28} />,
        lessons: "10 Lessons",
        // bgImage: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80",
        bgImage: "/databaseSystems.png",
        color: "from-purple-600/80 to-fuchsia-900/90"
    },
];


const ChapterGrid = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            gsap.utils.toArray(".chapter-card").forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card, 
                        start: "top 90%", 
                        toggleActions: "restart none none reverse",
                    },
                    y: 80,
                    opacity: 0,
                    scale: 0.85,
                    duration: 0.8,
                    delay: i % 3 * 0.15, 
                    ease: "power4.out",
                });
            });

            
            gsap.from(".header-animate", {
                y: -20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".header-animate",
                    start: "top 95%",
                    toggleActions: "restart none none reverse",
                }
            });
        }, gridRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={gridRef} className="py-28 relative overflow-hidden bg-[#fafafa]">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-200/50 rounded-full blur-[120px] animate-pulse duration-[8s]" />
                <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] animate-bounce duration-[10s] opacity-60" />
                <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-emerald-100/40 rounded-full blur-[110px] animate-pulse duration-[6s]" />
                <div className="absolute bottom-[-5%] right-[-5%] w-[550px] h-[550px] bg-rose-100/40 rounded-full blur-[130px]" />
                <div className="absolute inset-0 opacity-[0.15]"
                    style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />
            </div>

            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Section with Animation Classes */}

                <div className="flex flex-col items-center justify-center mb-10 space-y-6 text-center border-b border-slate-100 pb-12">
                    {/* Badge */}
                    <div className="header-animate inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-black uppercase tracking-widest shadow-sm">
                        <Book size={16} /> Structured Learning Path
                    </div>
                    {/* Title */}
                    <h2 className="header-animate text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] max-w-4xl">
                        Explore the <span className="text-blue-600">Curriculum.</span>
                    </h2>
                    {/* Description */}
                    <p className="header-animate text-slate-500 font-medium max-w-2xl text-lg md:text-xl leading-relaxed">
                        Everything you need to master HSC ICT. Pick a chapter and dive into interactive notes and board solutions.
                    </p>
                </div>

                {/* Chapter Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {chapterList.map((chapter) => (
                        <div key={chapter.id}  className="chapter-card group relative  rounded-[40px] overflow-hidden shadow-xl shadow-slate-100 cursor-pointer border border-slate-100"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 transition-transform overflow-hidden duration-[1500ms] group-hover:scale-110 z-0"
                                style={{
                                    backgroundImage: `url(${chapter.bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} transition-colors duration-1000 z-10`} />

                            {/* Content */}
                            <div className="relative z-20 h-full p-10 flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <div className="w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/20">
                                            {chapter.icon}
                                        </div>
                                        <span className="text-8xl font-black text-white/10 tracking-tighter transition-colors group-hover:text-white/20">
                                            {chapter.id}
                                        </span>
                                    </div>
                                    <div className="space-y-3">
                                        <h3 className="text-3xl font-black text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                                            {chapter.title}
                                        </h3>
                                        <div className="flex items-center gap-5 pt-1 text-sm font-bold text-white/70 uppercase tracking-widest">
                                            <span className="flex items-center gap-1.5"><Layers size={14} /> {chapter.lessons}</span>
                                            <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-green-400" /> Board Std.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-5 border-t border-white/10">
                                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                                        <div className="w-0 group-hover:w-full h-full bg-white transition-all duration-[1000ms] ease-out" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChapterGrid;