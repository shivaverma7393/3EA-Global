import React, { useState, useEffect } from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Link } from "@inertiajs/react";
import { Search, ArrowRight, MapPin, Clock, Filter, Star, TrendingUp, ChevronDown } from "lucide-react";

export default function Campaigns() {
    const [filter, setFilter] = useState('all');
    const [sortBy, setSortBy] = useState('popular');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);

    const campaigns = [
        {
            id: 1,
            title: "AI-Powered Healthcare Platform",
            image: "https://img.freepik.com/free-photo/medical-technology-iot-background_53876-104039.jpg",
            interestedCount: 245,
            scheduledMeetings: 12,
            category: "Healthcare Tech",
            location: "Bangalore, India",
            daysLeft: 15,
            description: "IoT-based farming solutions for improved crop yield and resource management."
        },
        {
            id: 2,
            title: "Smart Agriculture Solution",
            image: "https://img.freepik.com/free-photo/agricultural-automated-irrigation-sprinklers_53876-138415.jpg",
            interestedCount: 180,
            scheduledMeetings: 8,
            category: "Agriculture Tech",
            location: "Punjab, India",
            daysLeft: 20,
            description: "AI-driven solutions for precision farming and crop monitoring."
        },
        {
            id: 3,
            title: "Premium Restaurant Chain",
            image: "https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg",
            interestedCount: 320,
            scheduledMeetings: 25,
            category: "F&B",
            location: "Mumbai, India",
            daysLeft: 10,
            description: "Expanding luxury dining experience across major metropolitan cities."
        },
        {
            id: 4,
            title: "Commercial Real Estate Project",
            image: "https://img.freepik.com/free-photo/modern-corporate-building_1127-3092.jpg",
            interestedCount: 150,
            scheduledMeetings: 5,
            category: "Real Estate",
            location: "Delhi, India",
            daysLeft: 30,
            description: "Premium commercial space in prime business district."
        }
    ];

    // Filter and sort logic
    useEffect(() => {
        let result = [...campaigns];

        // Apply category filter
        if (filter !== 'all') {
            result = result.filter(campaign =>
                campaign.category.toLowerCase() === filter.toLowerCase()
            );
        }

        // Apply search filter
        if (searchTerm) {
            result = result.filter(campaign =>
                campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                campaign.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                campaign.location.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Apply sorting
        switch (sortBy) {
            case 'newest':
                result.sort((a, b) => b.daysLeft - a.daysLeft);
                break;
            case 'funded':
                result.sort((a, b) => parseInt(b.progress) - parseInt(a.progress));
                break;
            case 'popular':
                result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
                break;
            default:
                break;
        }

        setFilteredCampaigns(result);
    }, [filter, sortBy, searchTerm]);

    return (
        <MainLayout title="Investment Campaigns - InvestHub">
            {/* Hero Section */}
            <section className="bg-[#ebf5d6] py-20 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#95c630]/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#95c630]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#95c630] text-white font-medium text-sm mb-6">
                            <Star className="w-4 h-4" />
                            Investment Opportunities
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Discover Investment <span className="text-[#95c630]">Opportunities</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-12">
                            Explore verified and high-potential investment opportunities across various sectors
                        </p>
                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search campaigns..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#95c630] focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="sticky top-20 py-4 bg-white border-b z-40 backdrop-blur-sm bg-white/90">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4 overflow-x-auto pb-2">
                            <Filter className="text-[#95c630] w-5 h-5 flex-shrink-0" />
                            <div className="flex gap-2">
                                {['All', 'Technology', 'Healthcare', 'Real Estate', 'F&B'].map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setFilter(category.toLowerCase())}
                                        className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${
                                            filter === category.toLowerCase()
                                                ? 'bg-[#95c630] text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-[#95c630]" />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-transparent text-gray-600 focus:outline-none cursor-pointer"
                            >
                                <option value="popular">Most Popular</option>
                                <option value="newest">Newest First</option>
                                <option value="funded">Most Funded</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campaigns Grid */}
            <section className="py-12 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4">
                    {filteredCampaigns.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="max-w-md mx-auto">
                                <Filter className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <p className="text-2xl text-gray-600 mb-2">No campaigns found</p>
                                <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {filteredCampaigns.map((campaign) => (
                                <div
                                    key={campaign.id}
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

                                        <p className="text-gray-600 mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                            {campaign.description}
                                        </p>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            <div className="bg-gray-50 rounded-xl p-4 text-center">
                                                <div className="text-2xl font-bold text-[#95c630] mb-1">
                                                    {campaign.interestedCount}
                                                </div>
                                                <div className="text-sm text-gray-600">Interested People</div>
                                            </div>
                                            <div className="bg-gray-50 rounded-xl p-4 text-center">
                                                <div className="text-2xl font-bold text-[#95c630] mb-1">
                                                    {campaign.scheduledMeetings}
                                                </div>
                                                <div className="text-sm text-gray-600">Meetings Scheduled</div>
                                            </div>
                                        </div>

                                        {/* View Details button */}
                                        <div className="flex items-center justify-between pt-4 border-t">
                                            <Link
                                                href={`/campaigns/${campaign.id}`}
                                                className="w-full text-center py-2 px-4 rounded-lg bg-gray-50 text-[#95c630] font-medium hover:bg-[#95c630] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                                            >
                                                View Details
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Add these styles to your existing global styles */}
                <style jsx global>{`
                    @keyframes fadeInUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}</style>
            </section>
        </MainLayout>
    );
}
