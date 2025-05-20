// resources/js/Pages/Support/FAQ.jsx
import React from "react";
import MainLayout from "../../Layouts/MainLayout";

export default function FAQ() {
    const faqs = [
        { q: "How does donation work?", a: "Donations are securely processed and disbursed to verified clients." },
        { q: "Is my donation tax deductible?", a: "You will receive a donation receipt for tax purposes." },
    ];

    return (
        <MainLayout title="FAQs">
            <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white shadow p-4 rounded">
                        <h2 className="font-semibold text-lg">{faq.q}</h2>
                        <p className="text-gray-600">{faq.a}</p>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
}
