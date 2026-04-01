"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Home, ChevronLeft, Binary, Search } from 'lucide-react';

export default function NotFound() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            
            gsap.from(".animate-up", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            });

            gsap.to(".search-pulse", {
                scale: 1.5,
                opacity: 0,
                duration: 2,
                repeat: -1,
                ease: "expo.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="relative py-30 mt-20 min-h-screen flex items-center justify-center bg-[#fdfdfd] px-6 pt-20 overflow-hidden">

            {/* Background Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[130px] -z-10 opacity-70" />
            </div>

            <div className="relative z-10 text-center flex flex-col items-center">

                {/* --- Integrated 404 & Search Icon --- */}
                <div className="animate-up mb-10">
                    <div className="flex items-center justify-center font-black text-slate-950 leading-none tracking-tighter text-[110px] md:text-[180px]">
                        <span>4</span>

                        {/* Interactive "0" with Search Icon */}
                        <div className="relative w-24 h-24 md:w-36 md:h-36 mx-2 md:mx-4 rounded-3xl md:rounded-[40px] bg-blue-600 shadow-2xl shadow-blue-200 border-4 border-white flex items-center justify-center">
                            {/* Pulse background effect */}
                            <div className="search-pulse absolute inset-0 bg-white/40 rounded-full" />

                            {/* Search Icon - Fixed Responsive Size using Tailwind Classes */}
                            <div className="relative z-10 text-white">
                                <Search className="w-12 h-12 md:w-16 md:h-16" strokeWidth={3} />
                            </div>
                        </div>

                        <span>4</span>
                    </div>
                </div>

                {/* Content */}
                <div className="animate-up space-y-4 mb-12 max-w-lg">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                        Oops! Data <span className="text-blue-600">Not Found.</span>
                    </h2>
                    <p className="text-slate-500 font-medium text-lg md:text-xl leading-relaxed mx-auto px-4">
                        The requested page could not be retrieved. Our system encountered a null pointer while searching.
                    </p>
                </div>

                {/* Modern Buttons */}
                <div className="animate-up flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto mt-14">
                    {/* --- Primary Button: Home (Magnetic & Expansion Effect) --- */}
                    <Link  href="/" className="group relative flex items-center justify-center h-[64px] px-8 bg-slate-950 text-white rounded-[22px] font-bold overflow-hidden transition-all duration-500 hover:w-[260px] hover:bg-blue-600 hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.5)] active:scale-95 w-full sm:w-[220px]"   >

                        <div className="flex items-center gap-3 transition-all duration-500 group-hover:gap-4">
                            <div className="relative overflow-hidden w-5 h-5 shrink-0">
                                {/* shrink-0 */}
                                <Home size={20} className="absolute transition-all duration-500 group-hover:translate-y-0 translate-y-8" />
                                <Binary size={20} className="absolute transition-all duration-500 group-hover:-translate-y-8 translate-y-0 opacity-50" />
                            </div>

                            {/* whitespace-nowrap  */}
                            <span className="text-[15px] tracking-tight whitespace-nowrap">
                                Take Me Home
                            </span>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </Link>

                    {/* --- Secondary Button: Go Back (Clean Apple Style) --- */}
                    <button
                        onClick={() => window.history.back()}
                        className="group relative flex items-center justify-center h-[64px] px-10 bg-white text-slate-800 border border-slate-200 rounded-[22px] font-bold transition-all duration-500 hover:border-slate-400 hover:bg-slate-50 active:scale-95 w-full sm:w-auto overflow-hidden"
                    >
                        <div className="flex items-center gap-2 transition-all duration-500 group-hover:-translate-x-1">
                            <ChevronLeft size={20} className="transition-transform duration-500 group-hover:-translate-x-1" />
                            <span className="text-[15px]">Go Back</span>
                        </div>

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-blue-600 transition-all duration-500 group-hover:w-1/3" />
                    </button>
                </div>


            </div>
        </main>
    );
}


// feat(not-found): design animated 404 page with GSAP effects, search pulse, and modern navigation buttons
