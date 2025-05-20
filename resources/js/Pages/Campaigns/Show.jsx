// resources/js/Pages/Campaigns/Show.jsx
import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { Link } from "@inertiajs/react";

export default function CampaignShow({ campaign }) {
    return (
        <MainLayout title={campaign.title}>
            <div className="max-w-4xl mx-auto">
                <img src={campaign.image} alt={campaign.title} className="rounded mb-4" />
                <h1 className="text-3xl font-bold mb-2">{campaign.title}</h1>
                <p className="text-gray-700 mb-4">{campaign.description}</p>
                <div className="text-brand text-lg">{campaign.progress}% Funded</div>
                <div className="mt-6">
                    <Link href={`/donate/${campaign.id}`} className="bg-brand text-white px-6 py-2 rounded hover:bg-brand-dark">
                        Donate Now
                    </Link>
                </div>
            </div>
        </MainLayout>
    );
}
