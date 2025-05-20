import React from 'react';
import MainLayout from '../Layouts/MainLayout';
import { Target, Users, Shield, Award } from 'lucide-react';

export default function About() {
    const stats = [
        { number: "10+", label: "Years Experience" },
        { number: "500+", label: "Projects Completed" },
        { number: "₹100Cr+", label: "Investments Facilitated" },
        { number: "95%", label: "Success Rate" }
    ];

    const team = [
        {
            name: "Rajesh Kumar",
            position: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
            description: "20+ years of investment banking experience"
        },
        {
            name: "Priya Sharma",
            position: "Investment Director",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
            description: "Former VP at Goldman Sachs"
        },
         {
            name: "Rajesh Kumar",
            position: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
            description: "20+ years of investment banking experience"
        },
        // Add more team members as needed
    ];

    return (
        <MainLayout title="About Us - InvestHub">
            {/* Hero Section */}
            <section className="py-20 bg-[#ebf5d6]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Transforming <span className="text-[#95c630]">Investment</span> Landscape
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            The investment landscape is undergoing a significant transformation driven by rapid technological advancements, evolving investor expectations, and increased regulatory focus on transparency and sustainability. Traditional investment models are being redefined by digital platforms, AI-powered analytics, and decentralized finance (DeFi), enabling broader access and real-time decision-making. At the same time, investors are shifting toward ESG (Environmental, Social, and Governance)-focused strategies, demanding greater accountability and long-term impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-[#95c630] mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Meet Our <span className="text-[#95c630]">Team</span>
                        </h2>
                        <p className="text-xl text-gray-600">
                            Expert professionals dedicated to your success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {team.map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-[#95c630] font-medium mb-4">
                                        {member.position}
                                    </p>
                                    <p className="text-gray-600">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
