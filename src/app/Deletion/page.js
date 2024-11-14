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
                                Deactivation & Deletion
                            </h1>
                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>What are Deactivation and Deletion?</span>
                                </span>
                                <p>
                                    Kaba allows users to either deactivate or delete their accounts. Deactivation temporarily 
                                    disables the account, while deletion permanently removes it.
                                </p>
                            </div>

                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>Why Deactivation & Deletion?</span>
                                </span>
                                <p>
                                    Providing options for deactivation and deletion ensures that users have control over their accounts 
                                    and can manage their presence on the app as needed.
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
                    <h2 className="text-3xl md:text-5xl font-bold font-conthrax mt-10 mb-5">How to Deactivate or Delete an Account</h2>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Access Account Settings</span>:
                        </span>
                        <p>
                            Go to the profile page and click on the settings icon at the top right.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Select Deactivation or Deletion</span>:
                        </span>
                        <p>
                            Scroll to the bottom and choose the option to Deactivate Account or Delete Account.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Confirm Action</span>:
                        </span>
                        <p>
                            Follow the prompts to confirm your action. Deactivation will temporarily disable your account, while deletion will 
                            permanently remove it.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>NOTE</span>:
                        </span>
                        <p>
                            This feature ensures that users can manage their accounts according to their preferences.
                        </p>
                    </div>
                   
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DisclaimerPage;
