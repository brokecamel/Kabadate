"use client"

import React, { useEffect, useState } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Image from "next/image";

const supportData = [
    {
        title: "General Inquiries",
        description: "For general questions about app usage, navigation, and features.",
        email: "support@kabadate.com",
        chat: "chat-link",
        icon: "/images/silver.png"
    },
    {
        title: "Account Assistance",
        description: "Help with account settings, profile updates, and issues related to logging in or out.",
        email: "support@kabadate.com",
        chat: "chat-link",
        icon: "/images/gold.png"
    },
    {
        title: "Billing Support",
        description: "Assistance with payment issues, subscription queries, and refunds.",
        email: "support@kabadate.com",
        chat: "chat-link",
        icon: "/images/platinum.png"
    },
    {
        title: "Technical Support",
        description: "Solutions for app malfunctions, bugs, or any operational concerns.",
        email: "support@kabadate.com",
        chat: "chat-link",
        icon: "/images/sliver.png"
    },
    {
        title: "Safety and Security",
        description: "Reporting security concerns, privacy issues, and handling breaches.",
        email: "support@kabadate.com",
        chat: "chat-link",
        icon: "/images/gold.png"
    },
    {
        title: "Abuse and Harassment",
        description: "Report abuse or harassment, inappropriate content, and user misconduct.",
        email: "support@kabadate.com",
        chat: "chat-link",
        icon: "/images/platinum.png"
    },
    {
        title: "Feature Suggestions",
        description: "Submit ideas for new features or improvements to existing ones.",
        email: "support@kabadate.com",
        chat: "chat-link",
        icon: "/images/silver.png"
    },
    {
        title: "Partnership Inquiries",
        description: "For businesses and advertisers interested in partnerships or collaborations.",
        email: "support@kabadate.com",
        chat: "chat-link",
        icon: "/images/gold.png"
    },
    {
        title: "Legal Inquiries",
        description: "Questions regarding terms of service, privacy policy, and other legal matters.",
        email: "support@kabadate.com",
        chat: "chat-link",
        icon: "/images/platinum.png"
    },
];

function SupportPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(supportData);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    useEffect(() => {
        const results = supportData.filter(support =>
            support.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            support.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(results);
    }, [searchTerm]);

    return (
        <>
            <Navbar />
            <main className="relative p-4 md:p-10 lg:p-16 h-auto font-jura">
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-center py-10">
                    <h1 className="text-4xl md:text-6xl font-bold">How can we help you?</h1>
                    <div className="mt-6">
                        <input
                            type="text"
                            placeholder="Enter your search term"
                            className="w-full md:w-1/2 p-3 rounded-lg text-black"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                    {filteredData.map((support, index) => (
                        <div
                            key={index}
                            className="p-6 border-2 border-gray-200 cursor-pointer relative group transition-all duration-300 ease-in-out rounded-lg bg-black text-white hover:bg-black hover:text-white"
                            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                        >
                            <div className="flex items-center mb-4">
                                <Image src={support.icon} alt={support.title} width={40} height={40} className="mr-4" />
                                <h2 className="text-2xl font-bold group-hover:text-white">{support.title}</h2>
                            </div>
                            <p className="mb-4 group-hover:text-white">{support.description}</p>
                            {support.email && (
                                <div className="flex justify-center space-x-4 mt-4">
                                    <a
                                        href={`mailto:${support.email}`}
                                        className="button bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark transition duration-300 ease-in-out animate-pulse"
                                    >
                                        Email
                                    </a>
                                    <a
                                        href={support.chat}
                                        className="button bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary-dark transition duration-300 ease-in-out animate-pulse"
                                    >
                                        Chat
                                    </a>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

export default SupportPage;
