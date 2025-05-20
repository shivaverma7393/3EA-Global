import React, { useState, useEffect } from "react";
import MainLayout from "../Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Globe, Star, ChevronLeft, ChevronRight, Clock, MapPin, Mail, Phone, Shield, Zap } from "lucide-react";

export default function Home() {
    // Required states
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCampaigns, setVisibleCampaigns] = useState([]);
    const [activeTestimonial, setActiveTestimonial] = useState(0);

    // Add missing impactStats data
    const [impactStats] = useState([
        { number: "₹50Cr+", label: "Total Investment Raised" },
        { number: "120+", label: "Successful Ventures" },
        { number: "85%", label: "Success Rate" },
        { number: "25", label: "Industry Sectors" }
    ]);

    // Add campaigns data
    const [campaigns] = useState([
        {
            id: 1,
            title: "AI-Powered Healthcare Platform",
            image: "https://img.freepik.com/free-photo/medical-technology-iot-background_53876-104039.jpg",
            amount: "₹2.5Cr raised of ₹4Cr goal",
            progress: "62%",
            category: "Healthcare Tech",
            location: "Bangalore, India",
            daysLeft: 15
        },
        {
            id: 2,
            title: "Restaurant Chain Franchise",
            image: "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg",
            amount: "₹75L raised of ₹1.5Cr goal",
            progress: "50%",
            category: "Food & Beverage",
            location: "Mumbai, India",
            daysLeft: 20
        },
        {
            id: 3,
            title: "AI-Powered Healthcare Platform",
            image: "https://img.freepik.com/free-photo/medical-technology-iot-background_53876-104039.jpg",
            amount: "₹2.5Cr raised of ₹4Cr goal",
            progress: "62%",
            category: "Healthcare Tech",
            location: "Bangalore, India",
            daysLeft: 15
        },
        {
            id: 4,
            title: "AI-Powered Healthcare Platform",
            image: "https://img.freepik.com/free-photo/medical-technology-iot-background_53876-104039.jpg",
            amount: "₹2.5Cr raised of ₹4Cr goal",
            progress: "62%",
            category: "Healthcare Tech",
            location: "Bangalore, India",
            daysLeft: 15
        }
    ]);

    // Add testimonials data
    const [testimonials] = useState([
        {
            quote: "As an investor, I've seen exceptional returns from the startups featured on this platform.",
            author: "Rajesh Kumar",
            position: "Angel Investor",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
        },
        {
            quote: "The platform helped us raise Series A funding in record time.",
            author: "Priya Sharma",
            position: "CEO, TechVision",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
        }
    ]);

    // Add slider state
    const [currentSlide, setCurrentSlide] = useState(0);

    // Add slider images
    const sliderImages = [
        {
            url: "https://img.freepik.com/free-photo/business-meeting-office_53876-101882.jpg",
            title: "Strategic Investment",
            subtitle: "Fund Tomorrow's Leaders"
        },
        {
            url: "https://img.freepik.com/free-photo/business-people-working-finance_53876-94857.jpg",
            title: "Expert Guidance",
            subtitle: "Navigate Growth Together"
        },
        {
            url: "https://img.freepik.com/free-photo/business-people-discussing-charts_53876-102617.jpg",
            title: "Smart Capital",
            subtitle: "Drive Innovation Forward"
        }
    ];

    // Slider navigation functions
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    };

    // Auto slide effect
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    // Update the function names to match the button onClick handlers
    const [currentCampaignIndex, setCurrentCampaignIndex] = useState(0);

    const prevCampaigns = () => {
        setCurrentCampaignIndex((prev) => Math.max(0, prev - 1));
    };

    const nextCampaigns = () => {
        const maxIndex = campaigns.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
        setCurrentCampaignIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    // Calculate visible campaigns
    useEffect(() => {
        const start = currentCampaignIndex;
        const end = Math.min(start + 3, campaigns.length);
        setVisibleCampaigns(campaigns.slice(start, end));
    }, [currentCampaignIndex, campaigns]);

    // Replace motion.span with div
    const AnimatedSpan = ({ children, ...props }) => (
        <div className={props.className}>
            {children}
        </div>
    );

    // Replace motion.h2 with regular h2
    const AnimatedHeading = ({ children, ...props }) => (
        <h2 className={props.className}>
            {children}
        </h2>
    );

    return (
        <MainLayout title="InvestHub - Business Investment Platform">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Slider Images */}
                {sliderImages.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            currentSlide === index ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <div className="absolute inset-0 bg-black/50 z-10"></div>
                        <img
                            src={slide.url}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}

                {/* Content */}
                <div className="container mx-auto px-4 relative z-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            {sliderImages[currentSlide].title}
                            <span className="block text-[#95c630] mt-4">
                                {sliderImages[currentSlide].subtitle}
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-12">
                            Join our platform to connect with verified businesses and make strategic investments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/opportunities"
                                className="bg-[#95c630] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#86b22b] transition-all"
                            >
                                Explore Opportunities
                                <ArrowRight className="inline-block ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/register"
                                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Slider Navigation */}
                <div className="absolute inset-x-0 bottom-10 flex justify-center items-center gap-4 z-20">
                    {sliderImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                currentSlide === index
                                    ? 'bg-[#95c630] w-8'
                                    : 'bg-white/50 hover:bg-white'
                            }`}
                        />
                    ))}
                </div>

                {/* Arrow Navigation */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white transition-all"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white/70 hover:text-white transition-all"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </section>

            {/* Rest of your sections */}
            {/* Platform Mission Statement */}
            <section className="py-16 md:py-24 bg-[#ebf5d6] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-gray-800 text-sm font-medium mb-6">
                            Our Mission
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Empowering Growth Through
                            <span className="text-[#95c630] block mt-2">Strategic Investments</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                            We bridge the gap between visionary entrepreneurs and strategic investors,
                            fostering innovation and sustainable growth in India's dynamic business landscape.
                        </p>
                        {/* Updated Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300">
                                <div className="text-[#95c630] mb-4">
                                    <Target className="w-8 h-8 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Verified Opportunities</h3>
                                <p className="text-gray-600">Thoroughly vetted investment opportunities</p>
                            </div>

                            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300">
                                <div className="text-[#95c630] mb-4">
                                    <Users className="w-8 h-8 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Expert Support</h3>
                                <p className="text-gray-600">Guidance from industry professionals</p>
                            </div>

                            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300">
                                <div className="text-[#95c630] mb-4">
                                    <Globe className="w-8 h-8 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Global Network</h3>
                                <p className="text-gray-600">Connect with international investors</p>
                            </div>

                            <div className="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition-all duration-300">
                                <div className="text-[#95c630] mb-4">
                                    <Zap className="w-8 h-8 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Fast Growth</h3>
                                <p className="text-gray-600">Access to rapid scaling opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Stats - Compact design */}
            <section className="py-16 md:py-24 bg-[#95c630]">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Impact So Far</h2>
                        <p className="text-xl text-white/80">Together, we're making a difference</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {impactStats.map((stat, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                                <div className="text-lg text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Campaigns - Improved grid spacing */}
            <section className="py-10 md:py-15 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                        <span className="text-[#95c630] font-semibold text-sm tracking-wider uppercase mb-2 block">
                            Featured Campaigns
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Top Investment Campaigns
                        </h2>
                        <p className="text-xl text-gray-600">
                            Discover high-potential businesses vetted by our experts
                        </p>
                    </div>

                    <div className="relative">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {visibleCampaigns.map((campaign) => (
                                <div key={campaign.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={campaign.image}
                                            alt={campaign.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium text-gray-800">
                                                {campaign.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                            <MapPin className="w-4 h-4" />
                                            <span>{campaign.location}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#95c630] transition-colors">
                                            {campaign.title}
                                        </h3>

                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex justify-between text-sm mb-2">
                                                    <span className="text-gray-600">{campaign.amount}</span>
                                                    <span className="font-medium text-[#95c630]">{campaign.progress}</span>
                                                </div>
                                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-[#95c630] rounded-full transition-all duration-700"
                                                        style={{ width: campaign.progress }}
                                                    />
                                                </div>
                                            </div>

                                            {campaign.highlights && (
                                                <div className="flex flex-wrap gap-2 pt-4 border-t">
                                                    {campaign.highlights.map((highlight, idx) => (
                                                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                            {highlight}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between pt-4 border-t">
                                                <div className="flex items-center gap-2 text-gray-500">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="text-sm">{campaign.daysLeft} days left</span>
                                                </div>
                                                <Link
                                                    href={`/opportunities/${campaign.id}`}
                                                    className="inline-flex items-center gap-2 text-[#95c630] font-medium hover:underline"
                                                >
                                                    View Details
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-center mt-8 md:mt-12 gap-4">
                            <button
                                onClick={prevCampaigns}  // Now matches the function name
                                className={`p-3 rounded-full border-2 transition-all duration-300 ${
                                    currentCampaignIndex === 0
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-200 hover:border-[#95c630] hover:text-[#95c630]'
                                }`}
                                disabled={currentCampaignIndex === 0}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextCampaigns}  // Now matches the function name
                                className={`p-3 rounded-full border-2 transition-all duration-300 ${
                                    currentCampaignIndex >= campaigns.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)
                                        ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                        : 'border-gray-200 hover:border-[#95c630] hover:text-[#95c630]'
                                }`}
                                disabled={currentCampaignIndex >= campaigns.length - (window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1)}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials with Stats */}
            <section className="py-10 lg:py-5 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 bg-[url('/patterns/dot-pattern.svg')] opacity-5"></div>
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#95c630]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#95c630]/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-20">
                        <AnimatedSpan
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#95c630]/10 text-[#95c630] font-medium text-sm mb-6"
                        >
                            <Star className="w-4 h-4 fill-[#95c630]" />
                            Client Testimonials
                        </AnimatedSpan>
                        <AnimatedHeading
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        >
                            What Our Clients Say
                        </AnimatedHeading>
                    </div>

                    <div className="relative">
                        {/* Testimonial Cards Container */}
                        <div className="overflow-visible w-full">
                            <div
                                className="flex transition-transform duration-500 ease-out"
                                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-4 pt-10 pb-4"
                                    >
                                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative mx-auto max-w-4xl hover:shadow-2xl transition-all duration-300">
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                                                <div className="w-16 h-16 bg-[#95c630] rounded-full flex items-center justify-center shadow-lg">
                                                    <Star className="w-8 h-8 text-white" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col md:flex-row items-center gap-8 pt-6">
                                                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                                                    <img
                                                        src={testimonial.image}
                                                        alt={testimonial.author}
                                                        className="w-full h-full object-cover rounded-xl"
                                                    />
                                                    <div className="absolute inset-0 ring-2 ring-[#95c630]/20 rounded-xl"></div>
                                                </div>

                                                <div className="flex-1 text-center md:text-left">
                                                    <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                                                        "{testimonial.quote}"
                                                    </blockquote>
                                                    <div className="flex flex-col md:flex-row items-center justify-between">
                                                        <div>
                                                            <h4 className="font-bold text-gray-900 text-lg">
                                                                {testimonial.author}
                                                            </h4>
                                                            <p className="text-[#95c630] font-medium">
                                                                {testimonial.position}
                                                            </p>
                                                        </div>
                                                        <div className="flex gap-1 mt-4 md:mt-0">
                                                            {[...Array(5)].map((_, i) => (
                                                                <Star key={i} className="w-5 h-5 text-[#95c630] fill-current" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Controls - Enhanced for mobile */}
                        <div className="flex items-center justify-center mt-8 md:mt-12 gap-6 md:gap-8">
                            <button
                                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                className="p-3 rounded-full border-2 border-gray-300 hover:border-[#95c630] hover:text-[#95c630] transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <div className="flex gap-4">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveTestimonial(index)}
                                        className="group focus:outline-none"
                                    >
                                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            activeTestimonial === index
                                                ? "bg-[#95c630] scale-125"
                                                : "bg-gray-300 hover:bg-gray-400"
                                        }`} />
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                                className="p-3 rounded-full border-2 border-gray-300 hover:border-[#95c630] hover:text-[#95c630] transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-gray-300">
                {/* Main Footer */}
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

            {/* Global Styles */}
            <style jsx global>{`
                /* Reset spacing */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                /* Container utilities */
                .container {
                    width: 100%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-left: 1rem;
                    padding-right: 1rem;
                }

                @media (min-width: 640px) {
                    .container {
                        max-width: 640px;
                        padding-left: 1.5rem;
                        padding-right: 1.5rem;
                    }
                }

                @media (min-width: 768px) {
                    .container {
                        max-width: 768px;
                    }
                }

                @media (min-width: 1024px) {
                    .container {
                        max-width: 1024px;
                        padding-left: 2rem;
                        padding-right: 2rem;
                    }
                }

                @media (min-width: 1280px) {
                    .container {
                        max-width: 1280px;
                    }
                }

                /* Section transitions */
                section {
                    scroll-margin-top: 80px;
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUp 0.6s ease-out forwards;
                    overflow: hidden;
                }

                /* Responsive text utilities */
                @media (max-width: 640px) {
                    h1 {
                        font-size: 2.5rem !important;
                        line-height: 1.2 !important;
                    }
                    h2 {
                        font-size: 2rem !important;
                        line-height: 1.3 !important;
                    }
                    p {
                        font-size: 1rem !important;
                    }
                }

                /* Animation utilities */
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </MainLayout>
    );
}

// Missing component imports - add these at the top
const Book = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const Utensils = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
    <path d="M7 2v20"></path>
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
  </svg>
);

const ChevronDown = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

const Handshake = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 11l3 3L22 4"></path>
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
  </svg>
);

const BuildingOffice2 = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 22V12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2Z"></path>
    <path d="M7 12V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9"></path>
    <path d="M9 22h6"></path>
    <path d="M17 16v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z"></path>
  </svg>
);

const GiftIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12v10H4V12"></path>
    <path d="M2 7h20v5H2z"></path>
    <path d="M12 22V7"></path>
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
  </svg>
);

const IdentificationBadge = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
    <circle cx="9" cy="10" r="2"></circle>
    <path d="M15 8h2"></path>
    <path d="M15 12h2"></path>
    <path d="M7 16h10"></path>
  </svg>
);

const RocketLaunch = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 13a8 8 0 0 1 7 7 6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3"></path>
    <path d="M7 14a6 6 0 0 0-3 6a6 6 0 0 0 6-3"></path>
    <circle cx="15" cy="9" r="1"></circle>
  </svg>
);

const HandHeart = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 13l-4-4"></path>
    <path d="M10 13l4 4"></path>
    <path d="M14 10l6 6"></path>
    <path d="M6 13l-2 2"></path>
    <path d="M9 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"></path>
    <path d="M10.5 10a2 2 0 1 0 3 0a2 2 0 1 0-3 0"></path>
    <path d="M16 4a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></path>
    <path d="M19 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></path>
    <path d="M5 11a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></path>
    <path d="M2 19a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"></path>
    <path d="M22 14v4"></path>
    <path d="M20 16h4"></path>
    <path d="M10 20v4"></path>
    <path d="M8 22h4"></path>
  </svg>
);

const ChartLine = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18"></path>
    <path d="m19 9-5 5-4-4-3 3"></path>
  </svg>
);