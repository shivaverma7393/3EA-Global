import React from 'react';
import { Link } from "@inertiajs/react";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">3EA Global</h3>
                        <p className="text-gray-400">Connecting investors with verified businesses for sustainable growth and impact.</p>
                        <div className="flex gap-4">
                            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                                <a
                                    key={social}
                                    href={`https://${social}.com`}
                                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#95c630] flex items-center justify-center transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="sr-only">{social}</span>
                                    <span className="capitalize">{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Our Services', 'How It Works', 'Success Stories', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-gray-400 hover:text-[#95c630] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
                        <ul className="space-y-4">
                            {[
                                'Investment Guide',
                                'FAQs',
                                'Terms of Service',
                                'Privacy Policy',
                                'Blog'
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-gray-400 hover:text-[#95c630] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#95c630] mt-1" />
                                <span>123 Business Avenue, New Delhi, 110001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#95c630]" />
                                <a href="tel:+911234567890" className="hover:text-[#95c630] transition-colors">
                                    +91 123 456 7890
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#95c630]" />
                                <a href="mailto:info@investhub.com" className="hover:text-[#95c630] transition-colors">
                                    info@investhub.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">
                            © {new Date().getFullYear()} InvestHub. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/terms" className="text-gray-400 hover:text-[#95c630] transition-colors">
                                Terms
                            </Link>
                            <Link href="/privacy" className="text-gray-400 hover:text-[#95c630] transition-colors">
                                Privacy
                            </Link>
                            <Link href="/cookies" className="text-gray-400 hover:text-[#95c630] transition-colors">
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
