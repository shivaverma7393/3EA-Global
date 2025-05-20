// resources/js/Pages/Contact.jsx
import React from "react";
import MainLayout from "../Layouts/MainLayout";

export default function Contact() {
    return (
        <MainLayout title="Contact Us">
            <div className="max-w-xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Name</label>
                        <input type="text" className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input type="email" className="w-full border p-2 rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Message</label>
                        <textarea className="w-full border p-2 rounded"></textarea>
                    </div>
                    <button type="submit" className="bg-brand text-white px-6 py-2 rounded hover:bg-brand-dark">
                        Send Message
                    </button>
                </form>
            </div>
        </MainLayout>
    );
}
