import React from 'react';
import { Link } from "@inertiajs/react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <img
                            src="/images/logo.png"
                            alt="3EA Global"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-gray-600 hover:text-[#95c630] transition-colors">Home</Link>
                        <Link href="/about" className="text-gray-600 hover:text-[#95c630] transition-colors">About</Link>
                        <Link href="/campaigns" className="text-gray-600 hover:text-[#95c630] transition-colors">Campaigns</Link>
                        <Link href="/how-it-works" className="text-gray-600 hover:text-[#95c630] transition-colors">How it Works</Link>
                          <Link href="/blogs" className="text-gray-600 hover:text-[#95c630] transition-colors">Blogs</Link>
                        <Link href="/contact" className="text-gray-600 hover:text-[#95c630] transition-colors">Contact</Link>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/register"
                            className="bg-[#95c630] text-white px-4 py-2 rounded-lg hover:bg-[#86b22b] transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
