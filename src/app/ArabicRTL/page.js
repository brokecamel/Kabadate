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
                                Arabic RTL
                            </h1>
                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>What is Arabic RTL?</span>
                                </span>
                                <p>
                                    Arabic RTL (Right-To-Left) is a feature that allows users to switch the language 
                                    of Kaba to Arabic. The entire user interface (UI) of the app will automatically 
                                    change to support the Arabic language, translating all static texts, profile pages, 
                                    and edit profile pages into Arabic. Users can also perform searches in Arabic on the app.
                                </p>
                            </div>

                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>Why Arabic RTL?</span>
                                </span>
                                <p>
                                    This feature addresses language barriers and enriches the user experience on Kaba by 
                                    providing support for Arabic RTL. It enables users to interact better and more comfortably 
                                    using their preferred language.
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
                    <h2 className="text-3xl md:text-5xl font-bold font-conthrax mt-10 mb-5">How to Use Video Calling</h2>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Switch Language in Settings</span>:
                        </span>
                        <p>
                            In the settings page, users will find an option to switch the language to Arabic RTL. 
                            Once selected, the entire UI of Kaba will automatically adjust to Arabic RTL.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Translated Texts and Icons</span>:
                        </span>
                        <p>
                            All static texts on the app will be translated into Arabic. Some icons, such as arrow marks, 
                            will also be inverted. Users can make searches in Arabic RTL and use it on the Edit Profile 
                            page as well.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Limitations</span>:
                        </span>
                        <p>
                            Numeric values on the app will NOT be translated into Arabic. Additionally, dynamic inputs 
                            from the Admin and users cannot be changed instantly to Arabic RTL.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>NOTE</span>:
                        </span>
                        <p>
                            This feature ensures a seamless experience for Arabic-speaking users, allowing them to navigate 
                            and use Kaba comfortably in their preferred language.
                        </p>
                    </div>
                   
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DisclaimerPage;
