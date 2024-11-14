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
            <main className="relative p-4 md:p-10 lg:p-16 h-auto font-jura">
                <div className="flex flex-col md:flex-row">
                    <div className="flex-1">
                        <div className="py-4" id="about">
                            <h1 className="heading text-3xl md:text-6xl font-bold font-conthrax" data-text="About">
                                Encryption
                            </h1>
                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>What is End-to-End Encryption?</span>
                                </span>
                                <p>
                                    End-to-End Encryption (E2EE) is a secure communication protocol that prevents anyone other 
                                    than the communicating users from accessing the data being communicated or stored. This feature 
                                    is crucial for protecting the privacy of messages and conversations within Kaba.
                                </p>
                            </div>

                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>Why End-to-End Encryption?</span>
                                </span>
                                <p>
                                    E2EE ensures that personal conversations remain private. By encrypting messages from sender to receiver, 
                                    users can have peace of mind knowing their communications are protected from interception or eavesdropping. 
                                    This enhances user trust and app credibility.
                                </p>
                            </div>
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
                </div> {/* Closing the flex-row here to stop the two-column layout */}

                {/* Full-width section starts here */}
                <div className="w-full">
                    <h2 className="text-3xl md:text-5xl font-bold font-conthrax mt-10 mb-5">How to Use End-to-End Encryption</h2>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Encryption of Messages</span>:
                        </span>
                        <p>
                            When you send a message on the chat page, it is encrypted before it leaves your device. This means that the 
                            message travels in a secure format that can only be decoded by the recipient&apos;s device.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Advanced Encryption Standard</span>:
                        </span>
                        <p>
                            The encryption is powered by the Advanced Encryption Standard (AES) 256 algorithm, one of the most secure 
                            encryption methods available. This standard is used by governments and security experts worldwide.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Secure All Activities</span>:
                        </span>
                        <p>
                            All activities on Kaba, including video calls, audio calls, and messages, are protected by End-To-End Encryption, 
                            ensuring that all your communications are secure.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>NOTE</span>:
                        </span>
                        <p>
                            This process ensures that your conversations and interactions on Kaba are private and secure, providing you 
                            with a safe and trustworthy platform to connect with others.
                        </p>
                    </div>
                   
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DisclaimerPage;
