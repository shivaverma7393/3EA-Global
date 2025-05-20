// resources/js/Pages/Campaigns/Index.jsx
import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { Link } from "@inertiajs/react";

export default function CampaignIndex({ campaigns = [] }) {
    return (
        <MainLayout title="Browse Campaigns">
            <h1 className="text-3xl font-bold mb-6">Active Campaigns</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                    <div key={campaign.id} className="bg-white shadow rounded p-4">
                        <img src={campaign.image} alt={campaign.title} className="rounded mb-2" />
                        <h2 className="text-lg font-semibold">{campaign.title}</h2>
                        <p className="text-sm text-gray-600">{campaign.short_description}</p>
                        <div className="mt-2 text-brand">{campaign.progress}% Funded</div>
                        <Link href={`/campaigns/${campaign.id}`} className="text-blue-600 text-sm mt-2 inline-block">
                            View Details →
                        </Link>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
}