"use client";
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Binary, Mail, ArrowRight, Globe } from 'lucide-react';

// Register ScrollTrigger for GSAP
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
    const footerRef = useRef(null);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Main Footer Columns Animation
            gsap.from(".footer-column", {
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power4.out"
            });

            // Bottom Bar Animation (Copyright & Links)
            gsap.from(".footer-bottom-item", {
                scrollTrigger: {
                    trigger: ".footer-bottom-container",
                    start: "top 95%",
                },
                y: 20,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.6
            });

            // Floating Social Icons Animation
            gsap.to(".social-icon", {
                y: -5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                stagger: 0.2,
                ease: "sine.inOut"
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    const footerLinks = [
        { name: 'Number System', href: '/number-system' },
        { name: 'Logic Gates', href: '/logic-gates' },
        { name: 'HTML', href: '/html' },
        { name: 'C Programming', href: '/c-programming' },
        { name: 'Database', href: '/database' },
    ];

    return (
        <footer ref={footerRef} className="bg-white border-t border-slate-100 pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

                    {/* 1. Brand Section */}
                    <div className="footer-column md:col-span-4">
                        <Link href="/" className="flex items-center gap-3 mb-8 group w-fit">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110">
                                <Binary size={26} />
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="text-2xl font-black text-slate-900 uppercase tracking-tighter">
                                    Binary <span className="text-blue-600">To</span>
                                </span>
                                <span className="text-[11px] font-bold text-slate-400 tracking-[0.3em] uppercase mt-1">
                                    Database
                                </span>
                            </div>
                        </Link>
                        <p className="text-slate-500 text-[15px] leading-relaxed max-w-sm">
                            The ultimate platform for mastering HSC ICT. We simplify complex concepts from Number Systems to Databases for every student.
                        </p>
                    </div>

                    {/* 2. Chapters */}
                    <div className="footer-column md:col-span-3">
                        <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.2em] mb-8">Chapters</h4>
                        <ul className="space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-500 hover:text-blue-600 text-[15px] transition-all flex items-center gap-2 group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-600" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Resources */}
                    <div className="footer-column md:col-span-2">
                        <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.2em] mb-8">Resources</h4>
                        <ul className="space-y-4 text-[15px] text-slate-500">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Lecture Notes</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Board Questions</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">ICT Tips</Link></li>
                        </ul>
                    </div>

                    {/* 4. Stay Connected */}
                    <div className="footer-column md:col-span-3">
                        <h4 className="text-slate-900 font-bold text-xs uppercase tracking-[0.2em] mb-8">Stay Connected</h4>
                        <div className="flex gap-4 mb-10">
                            {/* Facebook */}
                            <Link href="https://www.facebook.com/ISLAMUL.HOQUE.ISHFAK.OFFICIAL" className="social-icon w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-100">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </Link>
                            {/* Github */}
                            <Link href="#" className="social-icon w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all duration-300 border border-slate-100">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            </Link>
                            {/* LinkedIn */}
                            <Link href="#" className="social-icon w-11 h-11 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all duration-300 border border-slate-100">
                                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            </Link>
                        </div>
                        <div className="space-y-4">
                            <a href="mailto:islamulhoque2006@gmail.com" className="text-sm text-slate-500 hover:text-blue-600 flex items-center gap-3 group transition-colors">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <Mail size={16} />
                                </div>
                                islamulhoque2006@gmail.com
                            </a>
                            <div className="text-sm text-slate-500 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Globe size={16} />
                                </div>
                                www.islamulhoque.com
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar with Animation Items */}
                <div className="footer-bottom-container pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="footer-bottom-item text-slate-400 text-[13px] font-medium opacity-100">
                        © {currentYear} <span className="text-slate-900 font-bold italic">Binary To Database</span>. Crafted for ICT excellence.
                    </p>
                    <div className="flex gap-10 text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                        <Link href="#" className="footer-bottom-item hover:text-blue-600 transition-colors">Privacy</Link>
                        <Link href="#" className="footer-bottom-item hover:text-blue-600 transition-colors">Terms</Link>
                        <Link href="#" className="footer-bottom-item hover:text-blue-600 transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;