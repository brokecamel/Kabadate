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
                                Login Options
                            </h1>
                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>What are the Login Options?</span>
                                </span>
                                <p>
                                    Kaba provides multiple login options, including phone login, email login, and iCloud login for iOS users. 
                                    These options ensure flexibility and convenience for users.
                                </p>
                            </div>

                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>Why Multiple Login Options?</span>
                                </span>
                                <p>
                                    Offering various login options makes it easier for users to access their accounts. It also provides an 
                                    additional layer of security, especially during password resets.
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
                    <h2 className="text-3xl md:text-5xl font-bold font-conthrax mt-10 mb-5">How to Use Login Options</h2>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Phone Login</span>:
                        </span>
                        <p>
                            Users can log in using their phone number. This is a quick and easy method for accessing the app.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Email Login</span>:
                        </span>
                        <p>
                            Users can also log in using their email address. During password reset, the email is used to facilitate the process.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>iCloud Login</span>:
                        </span>
                        <p>
                            iOS users can log in directly using their iCloud account for seamless access within the app.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>NOTE</span>:
                        </span>
                        <p>
                            This feature ensures that users have multiple ways to securely log in and access Kaba.
                        </p>
                    </div>
                   
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DisclaimerPage;
