"use client"

import React, { useEffect } from 'react';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

function DisclaimerPage() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleContextMenu = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Navbar />
            <main className="relative p-4 md:p-10 lg:p-16 h-auto font-jura flex flex-col md:flex-row">
                <div className="flex-1">
                    <div className="py-4" id="about">
                        <h1 className="heading text-3xl md:text-6xl font-bold font-conthrax" data-text="About">
                            Audio Call
                        </h1>
                        <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                            Elevate your dating experience with secure, private audio calls directly within Kaba. 
                            Connect effortlessly with matches without compromising your personal information.
                        </div>
                        {/* Additional content divs... */}
                        <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                            <span className='font-bold'>
                                1.<span className='number-highlight'>Enhanced Privacy</span>:
                            </span>
                            <p>
                                No need to share your phone number, keeping your personal details secure.
                            </p>
                        </div>
                        <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                            <span className='font-bold'>
                                2.<span className='number-highlight'>Instant Connectivity</span>:
                            </span>
                            <p>
                                Easy and immediate communication with just a tap.
                            </p>
                        </div>

                        <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                            <span className='font-bold'>
                                3.<span className='number-highlight'>Deeper Engagement</span>:
                            </span>
                            <p>
                                Build meaningful connections through the richness of voice
                            </p>
                        </div>
                        {/* More content sections */}
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <div className="video-container">
                        <video
                            onContextMenu={handleContextMenu}
                            controls
                            controlsList="nodownload"
                            style={{ width: '100%', height: '400px', objectFit: 'contain' }}
                        >
                            <source src="/video/Test.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DisclaimerPage;
