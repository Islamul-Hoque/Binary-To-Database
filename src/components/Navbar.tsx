"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Sun, Moon, Menu, X, Binary, Cpu, Layout, Code2, Database, } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const navRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".nav-item", {
                y: -20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power4.out"
            });
        }, navRef);
        return () => ctx.revert();
    }, []);

    const navLinks = [
        { name: 'Number System', href: '/number-system', icon: <Binary size={20} /> },
        { name: 'Logic Gates', href: '/logic-gates', icon: <Cpu size={20} /> },
        { name: 'HTML', href: '/html', icon: <Layout size={20} /> },
        { name: 'C Programming', href: '/c-programming', icon: <Code2 size={20} /> },
        { name: 'Database', href: '/database', icon: <Database size={20} /> },
    ];

    return (
        <nav ref={navRef} className="fixed  top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

                {/* Logo */}
                <Link href="/" className="nav-item flex items-center gap-3 shrink-0 group">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 transition-transform group-hover:rotate-12">
                        <Binary size={22} />
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="text-xl font-black text-slate-900 tracking-tight uppercase">
                            Binary <span className="text-blue-600">To</span>
                        </span>
                        <span className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">
                            Database
                        </span>
                    </div>
                </Link>

                {/* Desktop Links (Hidden on small screens) */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`nav-item relative group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'
                                    }`}
                            >
                                {link.icon}
                                {link.name}
                                {isActive && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Icons & Hamburger Button */}
                <button   onClick={() => setIsDarkMode(!isDarkMode)}
                    className="group relative w-12 h-12 flex items-center justify-center rounded-2xl bg-white border border-slate-200 transition-all duration-300 active:scale-90 overflow-hidden"
                >

                    <div className={`absolute inset-0 transition-transform duration-700 rounded-full ${isDarkMode ? 'bg-slate-900 scale-150' : 'bg-amber-50 scale-0'
                        }`} />

                    <div className="relative z-10 w-6 h-6 flex items-center justify-center">
                        <Sun
                            size={22}
                            className={`absolute transition-all duration-500 transform ${isDarkMode
                                ? 'scale-100 rotate-0 opacity-100 text-amber-400'
                                : 'scale-0 -rotate-90 opacity-0'
                                }`}
                        />

                        <Moon
                            size={20}
                            className={`absolute transition-all duration-500 transform ${!isDarkMode
                                ? 'scale-100 rotate-0 opacity-100 text-blue-600'
                                : 'scale-0 rotate-90 opacity-0'
                                }`}
                        />
                    </div>
                </button>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-4 flex flex-col gap-1 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 text-slate-700 font-bold transition-colors group"
                            >
                                <span className="text-slate-400 group-hover:text-blue-600 transition-colors">
                                    {link.icon}
                                </span>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;