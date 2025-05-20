import React, { useState } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { MapPin, Clock, Users, Target, ChevronRight, ArrowLeft, Heart, Share2, AlertCircle, Shield, Award, TrendingUp, ChevronDown, Briefcase, FileText, Building, User, Phone, Mail, ExternalLink } from 'lucide-react';

export default function CampaignDetails({ campaign }) {
    const [selectedTab, setSelectedTab] = useState('overview');
    const [selectedImage, setSelectedImage] = useState(0);
    const [showAllHighlights, setShowAllHighlights] = useState(false);

    // Example campaign data (replace with actual data from props)
    const campaignData = {
        id: 1,
        title: "AI-Powered Healthcare Platform",
        image: "https://img.freepik.com/free-photo/medical-technology-iot-background_53876-104039.jpg",
        gallery: [
            "https://img.freepik.com/free-photo/medical-technology-iot-background_53876-104039.jpg",
            "https://img.freepik.com/free-photo/doctor-using-tablet-meeting-with-desperate-patient_1098-2225.jpg",
            "https://img.freepik.com/free-photo/doctor-with-technological-medical-interface_53876-96715.jpg",
        ],
        amount: "₹2.5Cr raised of ₹4Cr goal",
        progress: "62%",
        category: "Healthcare",
        location: "Bangalore, India",
        daysLeft: 15,
        trending: true,
        description: "Revolutionary AI platform transforming healthcare diagnostics and patient care.",
        longDescription: `Our AI-powered healthcare platform is revolutionizing the way medical diagnostics are performed.
        By leveraging advanced machine learning algorithms and vast medical databases, we're able to provide more accurate
        and faster diagnostic suggestions to healthcare providers.

        The platform integrates seamlessly with existing hospital systems and can process various types of medical data,
        including imaging, lab results, and patient history.`,
        highlights: [
            "AI-powered diagnostic assistance",
            "Integration with existing systems",
            "Real-time patient monitoring",
            "Predictive analytics"
        ],
        tiers: [
            {
                name: "Early Bird",
                amount: "₹50,000",
                benefits: ["Priority Access", "5% equity bonus", "Quarterly Updates"],
                limit: "50 spots",
            },
            {
                name: "Growth Partner",
                amount: "₹2,00,000",
                benefits: ["Board Meeting Access", "10% equity bonus", "Monthly Updates", "Strategic Input Rights"],
                limit: "20 spots",
                recommended: true,
            },
            {
                name: "Strategic Investor",
                amount: "₹5,00,000",
                benefits: ["Board Seat", "15% equity bonus", "Weekly Updates", "Strategic Input Rights", "First Right of Refusal"],
                limit: "5 spots",
            }
        ],
        team: [
            {
                name: "Dr. Rajesh Kumar",
                position: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                linkedin: "#"
            },
            // Add more team members
        ],
        documents: [
            { name: "Pitch Deck", size: "2.5 MB", type: "pdf" },
            { name: "Financial Projections", size: "1.8 MB", type: "xlsx" },
            { name: "Market Analysis", size: "3.2 MB", type: "pdf" },
        ]
    };

    const tabContent = {
        overview: (
            <div className="space-y-8">
                <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold mb-4">About the Project</h3>
                    <p className="text-gray-600 whitespace-pre-line">{campaignData.longDescription}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="text-lg font-semibold mb-4">Key Highlights</h4>
                        <ul className="space-y-3">
                            {campaignData.highlights.map((highlight, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-600">
                                    <Shield className="w-5 h-5 text-[#95c630]" />
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <h4 className="text-lg font-semibold mb-4">Documents</h4>
                        <ul className="space-y-3">
                            {campaignData.documents.map((doc, index) => (
                                <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <span className="text-gray-600">{doc.name}</span>
                                    <button className="text-[#95c630] hover:underline">Download</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ),
        team: (
            <div className="grid md:grid-cols-3 gap-6">
                {campaignData.team.map((member, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-[#95c630]">{member.position}</p>
                    </div>
                ))}
            </div>
        ),
        updates: (
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <p className="text-gray-600">No updates yet</p>
                </div>
            </div>
        )
    };

    return (
        <MainLayout>
            {/* Sticky Header with reduced height */}
            <div className="sticky top-16 z-50 bg-white border-b shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-14">
                        <Link href="/campaigns" className="flex items-center gap-2 text-gray-600 hover:text-[#95c630] transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Campaigns
                        </Link>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-gray-600 hover:text-[#95c630] transition-colors">
                                <Heart className="w-5 h-5" />
                                <span className="hidden md:inline">Save</span>
                            </button>
                            <button className="flex items-center gap-2 text-gray-600 hover:text-[#95c630] transition-colors">
                                <Share2 className="w-5 h-5" />
                                <span className="hidden md:inline">Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content with adjusted spacing */}
            <div className="bg-gray-50">
                {/* Hero Section with tighter spacing */}
                <section className="pt-6 pb-12">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-6 items-start">
                            {/* Left Column - Gallery with adjusted sticky positioning */}
                            <div className="space-y-4 lg:sticky lg:top-32">
                                <div className="bg-white p-4 rounded-2xl shadow-sm">
                                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                                        <img
                                            src={campaignData.gallery[selectedImage]}
                                            alt={campaignData.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="grid grid-cols-4 gap-4 mt-4">
                                        {campaignData.gallery.map((image, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setSelectedImage(index)}
                                                className={`relative rounded-lg overflow-hidden ${
                                                    selectedImage === index ? 'ring-2 ring-[#95c630]' : ''
                                                }`}
                                            >
                                                <div className="aspect-w-16 aspect-h-9">
                                                    <img
                                                        src={image}
                                                        alt={`Gallery ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Stats with consistent spacing */}
                                <div className="grid grid-cols-2 gap-3">
                                    {/*
                                        { icon: Users, label: 'Investors', value: '142+' },
                                        { icon: Target, label: 'Success Rate', value: '92%' },
                                        { icon: Building, label: 'Company Age', value: '3 Years' },
                                        { icon: Briefcase, label: 'Industry', value: campaignData.category }
                                    */}
                                </div>
                            </div>

                            {/* Right Column with adjusted spacing */}
                            <div className="space-y-4">
                                {/* Campaign Info Card */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm">
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                        <MapPin className="w-4 h-4" />
                                        <span>{campaignData.location}</span>
                                        {campaignData.trending && (
                                            <span className="ml-auto inline-flex items-center gap-1 text-[#95c630]">
                                                <TrendingUp className="w-4 h-4" />
                                                Trending
                                            </span>
                                        )}
                                    </div>

                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                        {campaignData.title}
                                    </h1>

                                    {/* Investment Progress with consistent padding */}
                                    <div className="bg-gray-50 p-5 rounded-xl my-5">
                                        <div className="grid grid-cols-2 gap-4 mb-4">
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Raised Amount</p>
                                                <p className="text-2xl font-bold text-gray-900">₹2.5Cr</p>
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-500 mb-1">Target Amount</p>
                                                <p className="text-2xl font-bold text-gray-900">₹4Cr</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-500">Progress</span>
                                                <span className="text-[#95c630] font-semibold">62%</span>
                                            </div>
                                            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-[#95c630] to-[#86b22b] transition-all duration-500"
                                                    style={{ width: '62%' }}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Investment Tiers with consistent spacing */}
                                    <div className="space-y-3 mt-6">
                                        {campaignData.tiers.map((tier, index) => (
                                            <div
                                                key={index}
                                                className="bg-white p-5 rounded-xl shadow-sm border-2 transition-all"
                                            >
                                                {tier.recommended && (
                                                    <div className="flex justify-end mb-2">
                                                        <span className="inline-flex items-center gap-1 text-sm text-[#95c630] font-medium">
                                                            <Award className="w-4 h-4" />
                                                            Recommended
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="flex justify-between items-start mb-4">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">{tier.name}</h3>
                                                        <p className="text-gray-500 text-sm">{tier.limit}</p>
                                                    </div>
                                                    <p className="text-xl font-bold text-gray-900">{tier.amount}</p>
                                                </div>
                                                <ul className="space-y-2 mb-4">
                                                    {tier.benefits.map((benefit, idx) => (
                                                        <li key={idx} className="flex items-center gap-2 text-gray-600">
                                                            <ChevronRight className="w-4 h-4 text-[#95c630]" />
                                                            {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <button className="w-full py-2 rounded-lg font-medium transition-all duration-300 border-2 border-[#95c630] hover:bg-[#95c630] hover:text-white text-[#95c630]">
                                                    Invest Now
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tabs with consistent spacing */}
                                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                                    <div className="border-b">
                                        <div className="flex">
                                            {['Overview', 'Team', 'Documents', 'Updates'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setSelectedTab(tab.toLowerCase())}
                                                    className="flex-1 px-5 py-3 text-sm font-medium transition-colors relative"
                                                >
                                                    {tab}
                                                    {selectedTab === tab.toLowerCase() && (
                                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#95c630]" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        {tabContent[selectedTab]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Campaigns Section with consistent spacing */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Similar Opportunities</h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* ...existing campaign cards... */}
                        </div>
                    </div>
                </section>
            </div>
        </MainLayout>
    );
}
