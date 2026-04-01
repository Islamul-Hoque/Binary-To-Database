// "use client";
// import { useEffect, useState, useRef } from 'react';
// import { gsap } from 'gsap';
// import { 
//     Binary, Cpu, Globe, Code, Database, 
//     ArrowRight, BookOpen, ShieldCheck 
// } from 'lucide-react';

// const chapters = [
//     {
//         title: "Number Systems",
//         desc: "Master Binary, Octal, and Hexadecimal conversions with ease.",
//         icon: <Binary size={32} />,
//         color: "from-blue-600/90 to-indigo-900/90",
//         bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80", 
//         badge: "Chapter 3"
//     },
//     {
//         title: "Digital Devices",
//         desc: "Learn Logic Gates, Encoders, and Decoders with interactive diagrams.",
//         icon: <Cpu size={32} />,
//         color: "from-indigo-600/90 to-purple-900/90",
//         bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
//         badge: "Chapter 3.2"
//     },
//     {
//         title: "Web Development",
//         desc: "Build your first website using HTML and CSS from scratch.",
//         icon: <Globe size={32} />,
//         color: "from-emerald-600/90 to-teal-900/90",
//         bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
//         badge: "Chapter 4"
//     },
//     {
//         title: "C Programming",
//         desc: "From basic syntax to complex loops—start coding today.",
//         icon: <Code size={32} />,
//         color: "from-orange-600/90 to-red-900/90",
//         bgImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80",
//         badge: "Chapter 5"
//     },
// ];

// const Hero = () => {
//     const [index, setIndex] = useState(0);
//     const sliderRef = useRef(null);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             gsap.to(sliderRef.current, {
//                 x: -20,
//                 opacity: 0,
//                 duration: 0.5,
//                 onComplete: () => {
//                     setIndex((prev) => (prev + 1) % chapters.length);
//                     gsap.fromTo(sliderRef.current, 
//                         { x: 20, opacity: 0 }, 
//                         { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
//                     );
//                 }
//             });
//         }, 4500);
//         return () => clearInterval(interval);
//     }, []);

//     const current = chapters[index];

//     return (
//         <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 bg-white overflow-hidden">
//             {/* Background Glow */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
//                 <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-[120px]" />
//                 <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-100 rounded-full blur-[120px]" />
//             </div>

//             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
//                 {/* Left Side: Content */}
//                 <div className="space-y-8 text-center lg:text-left">
//                     <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[11px] font-black uppercase tracking-widest">
//                         <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
//                         HSC ICT Learning Hub
//                     </div>

//                     <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter">
//                         Navigate from <br />
//                         <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
//                             Binary to Database.
//                         </span>
//                     </h1>

//                     <p className="text-slate-500 text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
//                         Master the complex world of ICT with interactive lessons and board-standard resources. Simplified for every student.
//                     </p>

//                     <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
//                         <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95 shadow-lg shadow-blue-100">
//                             Explore Chapters <ArrowRight size={20} />
//                         </button>
//                         <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center gap-3">
//                             <BookOpen size={19} className="text-blue-600" /> Read Notes
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right Side: Animated Card with Image Background */}
//                 <div className="relative flex justify-center lg:justify-end">
//                     <div 
//                         ref={sliderRef}
//                         className="relative w-full max-w-[480px] aspect-[4/3.5] rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 group border border-slate-100"
//                     >
//                         {/* Background Image inside Card */}
//                         <div 
//                             className="absolute inset-0 transition-transform duration-[2000ms] group-hover:scale-110"
//                             style={{ 
//                                 backgroundImage: `url(${current.bgImage})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                             }}
//                         />
                        
//                         {/* Overlay Gradient (Important for Text Readability) */}
//                         <div className={`absolute inset-0 bg-gradient-to-br ${current.color} transition-colors duration-1000`} />

//                         {/* Card Content */}
//                         <div className="relative h-full p-10 flex flex-col justify-between z-10">
//                             <div className="space-y-6">
//                                 <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white border border-white/30">
//                                     {current.icon}
//                                 </div>
//                                 <div className="space-y-3">
//                                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">{current.badge}</span>
//                                     <h3 className="text-4xl font-black text-white tracking-tighter leading-tight">
//                                         {current.title}
//                                     </h3>
//                                     <p className="text-white/80 text-lg font-medium leading-relaxed">
//                                         {current.desc}
//                                     </p>
//                                 </div>
//                             </div>

//                             {/* Bottom Bar */}
//                             <div className="flex items-center justify-between pt-6 border-t border-white/10">
//                                 <div className="flex gap-2">
//                                     {chapters.map((_, i) => (
//                                         <div key={i} className={`h-1.5 rounded-full transition-all duration-700 ${i === index ? 'w-10 bg-white' : 'w-2.5 bg-white/30'}`} />
//                                     ))}
//                                 </div>
//                                 <div className="flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-widest">
//                                     <ShieldCheck size={14} /> Topic Active
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Hero;


"use client";
import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { 
    Binary, Cpu, Globe, Code, Database, 
    ArrowRight, BookOpen, ChevronLeft, ChevronRight 
} from 'lucide-react';

const chapters = [
    {
        title: "Number Systems",
        subtitle: "The Foundation of Computing",
        desc: "Master Binary, Octal, and Hexadecimal conversions with interactive visual tools designed for HSC students.",
        icon: <Binary size={48} />,
        // bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80", 
        bgImage: "/numberSystems.png", 
        accent: "blue"
    },
    {
        title: "Digital Devices",
        subtitle: "Logic Gates & Circuits",
        desc: "Understand how computers think. Explore Logic Gates, Encoders, and Decoders with real-time circuit simulation.",
        icon: <Cpu size={48} />,
        // bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
        bgImage: "/digitalDevices.png",
        accent: "indigo"
    },
    {
        title: "Web Design & HTML",
        subtitle: "Build the Future with HTML",
        desc: "From basic tags to professional layouts. Start your journey into the world of web technologies today.",
        icon: <Globe size={48} />,
        // bgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80",
        bgImage: "/webDesign.jpg",
        
        accent: "emerald"
    },
    {
        title: "C Programming",
        subtitle: "Master Problem Solving",
        desc: "Learn the core of programming. We make C syntax and logic simple through step-by-step code execution.",
        icon: <Code size={48} />,
        // bgImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80",
        bgImage: "/cProgramming.png",
        accent: "orange"
    },
    {
        title: "Database Systems",
        subtitle: "Organizing & Querying Data",
        desc: "Learn how to design efficient databases and master SQL queries to manage information like a pro developer.",
        icon: <Database size={48} />,
        // bgImage: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80", 
        bgImage: "/databaseSystems.png", 
        accent: "purple"
    }
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const contentRef = useRef(null);
    const bgRef = useRef(null);

    const nextSlide = () => {
        gsap.to(contentRef.current, {
            y: 20, opacity: 0, duration: 0.4,
            onComplete: () => {
                setIndex((prev) => (prev + 1) % chapters.length);
                gsap.fromTo(contentRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
            }
        });
    };

    const prevSlide = () => {
        gsap.to(contentRef.current, {
            y: 20, opacity: 0, duration: 0.4,
            onComplete: () => {
                setIndex((prev) => (prev === 0 ? chapters.length - 1 : prev - 1));
                gsap.fromTo(contentRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
            }
        });
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 6000);
        return () => clearInterval(interval);
    }, []);

    const current = chapters[index];

    return (
        <section className="relative mt-20 min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
            
            {/* 1. Full Background Image with Zoom Effect */}
            <div 
                ref={bgRef}
                className="absolute inset-0 z-0 transition-all duration-[1500ms] ease-out scale-105"
                style={{ 
                    backgroundImage: `url(${current.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlays for cinematic look */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950" />
            </div>

            {/* 2. Main Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div ref={contentRef} className="space-y-8">
                    
                    {/* Icon Badge */}
                    <div className="flex justify-center">
                        <div className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-[32px] flex items-center justify-center text-white border border-white/20 shadow-2xl animate-float">
                            {current.icon}
                        </div>
                    </div>

                    {/* Typography */}
                    <div className="space-y-4">
                        <p className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs">
                            {current.subtitle}
                        </p>
                        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
                            {current.title}
                        </h1>
                        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                            {current.desc}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-5 pt-6">
                        <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-blue-900/40 border border-blue-500">
                            Start Chapter <ArrowRight size={20} />
                        </button>
                        <button className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center gap-3 backdrop-blur-md">
                            <BookOpen size={20} /> Lecture Notes
                        </button>
                    </div>
                </div>
            </div>

            {/* 3. Slider Controls (Navigation) */}
            <div className="absolute bottom-12 left-0 right-0 z-20 px-10 flex items-center justify-between">
                {/* Progress Indicators */}
                <div className="flex gap-3">
                    {chapters.map((_, i) => (
                        <button 
                            key={i} 
                            onClick={() => setIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-12 bg-blue-500' : 'w-3 bg-white/20'}`} 
                        />
                    ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex gap-4">
                    <button onClick={prevSlide} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-90 backdrop-blur-md">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={nextSlide} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all active:scale-90 backdrop-blur-md">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            {/* CSS Animation for Float */}
            <style jsx>{`
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }
            `}</style>
        </section>
    );
};

export default Hero;