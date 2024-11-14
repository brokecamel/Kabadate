"use client"

import { useState } from "react"

function FAQs() {
    const faqs = [
        {
            title: "What is Kaba Date?",
            description: `Kaba Date is a dating app that uses advanced 
            facial recognition AI to ensure the authenticity of user 
            profiles, providing a secure and genuine dating experience. 
            Our platform includes various features like video calls, 
            messaging, and profile control to enhance your dating journey.`
        },
        {
            title: "How does the facial recognition feature work?",
            description: `Our facial recognition technology verifies 
            the authenticity of users during the signup process, 
            ensuring that no fake profiles exist on our platform. 
            This process helps maintain a trustworthy and safe 
            environment for all users.`
        },
        {
            title: "Can I deactivate or delete my profile?",
            description: `Yes, you have complete control over your profile. 
            You can temporarily deactivate or permanently delete your 
            profile through the settings menu.`
        }, 
        {
            title: "What communication options are available?",
            description: `Kaba Date offers multiple ways to communicate, 
            including audio calls, video calls, voice notes, and text messages. 
            This variety ensures that you can connect with matches in whatever 
            manner you prefer.`
        },
        {
            title: "What are Super Likes and how do they work?",
            description: `Super Likes allow you to express a higher level of 
            interest in someone than a standard like. When you Super Like someone, 
            they are notified immediately, increasing your chances of a match.`
        },
        {
            title: "How does the Boost feature work?",
            description: `Boost increases the visibility of your profile for a 
            period of time, making it more likely to be seen by potential matches. 
            This can be activated through the app's interface.`
        },
        {
            title: "Can I change my location to see matches in other areas?",
            description: `Yes, you can change your location to discover users in 
            different areas. This feature is perfect for those who travel or want 
            to explore connections in other cities.`
        },
        {
            title: "What security measures are in place?",
            description: `Kaba Date uses end-to-end encryption for all communications 
            to ensure your messages remain private and secure. Additionally, we have 
            robust image moderation and profile privacy controls to protect your information.`
        }, 
        {
            title: "How can I manage what others see on my profile?",
            description: `Profile privacy settings allow you to control what information 
            is visible to other users. You can also see who has visited your profile and 
            manage who sees your likes and other activities.`
        }, 
        {
            title: "What is Chat Translation?",
            description: `Our Chat Translation feature allows you to communicate with 
            users who speak different languages, breaking down language barriers and 
            making connections easier.`
        },
        {
            title: "How do I report or block someone?",
            description: `If you encounter any inappropriate behavior, you can easily 
            report or block a user through their profile page. This helps maintain a 
            respectful and safe environment for all users.`
        },
        {
            title: "What are Feeds?",
            description: `Feeds allow you to see updates and activities from your 
            matches and potential interests, helping you stay connected and informed 
            about what's new with them.`
        },
        {
            title: "How do I turn off ads?",
            description: `You can enjoy an ad-free experience by subscribing to 
            our premium service, which also unlocks other exclusive features like 
            seeing who likes you before you match.`
        }
    
    ]
    const MINI_FAQS = 4;
    const [active, setActive] = useState(-1);
    const [isLessFAQs, setIsLessFAQs] = useState(true);

    return (
        <div className="py-4 mt-10" id="about">
            <h1 className="heading text-3xl md:text-6xl font-bold font-conthrax" data-text="About">
                FAQs
            </h1>

            {
                faqs.map((faq, index) => (
                    isLessFAQs && index >= MINI_FAQS ? null :
                        <div key={index} className="text-xl transition-all duration-300 ease-in-out md:text-2xl p-6 border-2 border-[#dfdfdf] mt-6 bg-gradient-to-tl to-[#ab6bff0f] from-[#ab6bff1f]"
                            style={{
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                            }}
                        >
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => setActive(prev => prev === index ? -1 : index)}>
                                <h3 className="font-bold text-xl font-conthrax text-white">{faq.title}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`w-6 h-6 transition-all duration-300 ease-in-out ${active === index ? "transform rotate-180" : ""}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                            <p className={`mt-4 text-white text-lg font-jura ${active === index ? "block" : "hidden"}`}>{faq.description}</p>
                            {faq.steps && active === index &&
                                <ul className="mt-4 text-white text-lg font-jura space-y-2">
                                    {faq.steps.map((step, i) => <li key={i}>{step}</li>)}
                                </ul>
                            }
                        </div>
                ))
            }

            <div className="flex justify-center mt-6">
                <button className="px-4 py-2 text-white font-bold button font-jura bg-gradient-to-tl to-[#ab6bff] from-[#ab6bff1f]"
                    onClick={() => setIsLessFAQs(prev => !prev)}
                >
                    {isLessFAQs ? "View More" : "View Less"}
                </button>
            </div>
        </div>
    )
}

export default FAQs