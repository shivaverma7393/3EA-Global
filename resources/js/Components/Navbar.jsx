import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg py-4' : 'bg-transparent py-6'
        }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-white">
                        InvestHub
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex gap-6">
                            {[
                                ['Home', '/'],
                                ['Opportunities', '/opportunities'],
                                ['How It Works', '/how-it-works'],
                                ['Success Stories', '/success-stories'],
                                ['About Us', '/about'],
                            ].map(([label, href]) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="text-gray-300 hover:text-[#95c630] transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                        <Link
                            href="/register"
                            className="bg-[#95c630] hover:bg-[#86b22b] px-6 py-2 rounded-lg text-white font-semibold transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="pt-4 pb-3 space-y-3">
                        {[
                            ['Home', '/'],
                            ['Opportunities', '/opportunities'],
                            ['How It Works', '/how-it-works'],
                            ['Success Stories', '/success-stories'],
                            ['About Us', '/about'],
                        ].map(([label, href]) => (
                            <Link
                                key={label}
                                href={href}
                                className="block text-gray-300 hover:text-[#95c630] transition-colors py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                        <Link
                            href="/register"
                            className="block bg-[#95c630] hover:bg-[#86b22b] px-6 py-2 rounded-lg text-white font-semibold transition-colors text-center mt-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
