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
                            Encryption
                        </h1>
                        <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                            Enhance the security of your conversations with Kaba&apos;s End-to-End Encryption. 
                            This feature secures your messages using the Advanced Encryption Standard AES-256 Algorithm, 
                            ensuring all communications are fully protected, which boosts the app&apos;s credibility and user trust.
                        </div>
                        {/* Additional content divs... */}
                        <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                            <span className='font-bold'>
                                1.<span className='number-highlight'>Secure Communication</span>:
                            </span>
                            <p>
                                Every message sent is encrypted from start to finish, ensuring that only the intended recipient can read it
                            </p>
                        </div>
                        <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                            <span className='font-bold'>
                                2.<span className='number-highlight'>Advanced Technology</span>:
                            </span>
                            <p>
                                Utilizes AES 256, one of the most secure encryption algorithms available.
                            </p>
                        </div>

                        <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                            <span className='font-bold'>
                                3.<span className='number-highlight'>Privacy Assurance</span>:
                            </span>
                            <p>
                                Ensures that no one, not even Kaba, can access your private conversations, upholding the highest standards of privacy
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
