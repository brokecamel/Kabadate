"use client";

import Navbar from "@/components/navbar";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";



const supportData = [
    {
        title: "General Inquiries",
        description: "For general questions about app usage, navigation, and features.",
        email: "support@kabadate.com",
        icon: "/images/general.png"
    },
    {
        title: "Account Assistance",
        description: "Help with account settings, profile updates, and issues related to logging in or out.",
        email: "support@kabadate.com",
        icon: "/images/account.png"
    },
    {
        title: "Billing Support",
        description: "Assistance with payment issues, subscription queries, and refunds.",
        email: "support@kabadate.com",
        icon: "/images/billing.png"
    },
    {
        title: "Technical Support",
        description: "Solutions for app malfunctions, bugs, or any operational concerns.",
        email: "support@kabadate.com",
        icon: "/images/technical.png"
    },
    {
        title: "Safety and Security",
        description: "Reporting security concerns, privacy issues, and handling breaches.",
        email: "support@kabadate.com",
        icon: "/images/safety.png"
    },
    {
        title: "Abuse and Harassment",
        description: "Report abuse or harassment, inappropriate content, and user misconduct.",
        email: "support@kabadate.com",
        icon: "/images/abuse.png"
    },
    {
        title: "Feature Suggestions",
        description: "Submit ideas for new features or improvements to existing ones.",
        email: "support@kabadate.com",
        icon: "/images/feature.png"
    },
    {
        title: "Partnership Inquiries",
        description: "For businesses and advertisers interested in partnerships or collaborations.",
        email: "support@kabadate.com",
        icon: "/images/partnership.png"
    },
    {
        title: "Legal Inquiries",
        description: "Questions regarding terms of service, privacy policy, and other legal matters.",
        email: "support@kabadate.com",
        icon: "/images/legal.png"
    },
    {
        title: "Emergency Contacts",
        description: "For immediate threats or safety issues, contact local law enforcement or dial emergency services like 911.",
        email: "",
        icon: "/images/emergency.png"
    }
];

function Support() {
    return (
        <div className="py-4 mt-10" id="support">
            <h1 className="heading text-3xl md:text-6xl text-primary font-bold font-conthrax" data-text="Support">
                Support
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                {supportData.map((support, index) => (
                    <div key={index} className="p-6 border-2 border-gray-200 hover:border-primary cursor-pointer relative group transition-all duration-300 ease-in-out" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <div className="flex items-center mb-4">
                            <Image src={support.icon} alt={support.title} width={40} height={40} className="mr-4" />
                            <h2 className="text-xl font-bold font-conthrax text-white">{support.title}</h2>
                        </div>
                        <p className="font-jura text-white mb-4">{support.description}</p>
                        {support.email && (
                            <a href={`mailto:${support.email}`} className="text-primary font-bold hover:underline">
                                {support.email}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Support;
