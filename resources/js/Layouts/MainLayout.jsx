// resources/js/Layouts/MainLayout.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, Head } from "@inertiajs/react";
import { Menu, X } from "lucide-react";
import '../../css/common.css';  // Update the import path

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        // Prevent body scroll when mobile menu is open
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Handle click outside
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Campaigns", href: "/campaigns" },
        { name: "Donation Flow", href: "/donation-flow" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            3EA Global
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-[#95c630] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/login"
                                className="px-4 py-2 text-gray-600 hover:text-[#95c630] transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="px-4 py-2 bg-[#95c630] text-white rounded-lg hover:bg-[#86b22b] transition-colors"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu with Animations */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Animated Background Overlay */}
                <div
                    className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-700 ease-in-out ${
                        isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>

                {/* Animated Menu Content */}
                <div
                    className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full pt-16 pb-6 overflow-y-auto">
                        <div className="px-4">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    style={{
                                        transitionDelay: `${isMobileMenuOpen ? index * 100 : 0}ms`
                                    }}
                                    className={`block py-3 text-base font-medium text-gray-900 hover:text-[#95c630] border-b border-gray-100 transition-all duration-500 transform ${
                                        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-4 space-y-4">
                                <Link
                                    href="/login"
                                    style={{
                                        transitionDelay: `${isMobileMenuOpen ? navItems.length * 100 : 0}ms`
                                    }}
                                    className={`block w-full py-3 text-center text-gray-600 hover:text-[#95c630] bg-gray-50 rounded-lg transition-all duration-500 transform ${
                                        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    style={{
                                        transitionDelay: `${isMobileMenuOpen ? (navItems.length + 1) * 100 : 0}ms`
                                    }}
                                    className={`block w-full py-3 text-center text-white bg-[#95c630] hover:bg-[#86b22b] rounded-lg transition-all duration-500 transform ${
                                        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function MainLayout({ children, title }) {
    return (
        <>
            <Head title={title} />
            <Navbar />
            <main className="flex-1 mt-16">{children}</main>
            <footer className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
                Empowering verified causes | © {new Date().getFullYear()} 3EA Global.
                All rights reserved.
            </footer>
        </>
    );
}
