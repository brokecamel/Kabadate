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
                                Chat Translation
                            </h1>
                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>What is Chat Translation?</span>
                                </span>
                                <p>
                                    Chat Translation is a feature that allows users to view incoming chat messages 
                                    in their preferred language. By selecting a language from a list of choices, 
                                    users can instantly translate their chat conversations, making interactions 
                                    more engaging and overcoming language barriers.
                                </p>
                            </div>

                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>Why Chat Translation?</span>
                                </span>
                                <p>
                                    This feature leverages AI translator technology to eliminate language barriers when 
                                    chatting with matches on Kaba. Users can instantly translate chat conversations 
                                    into their preferred language, making communication smoother and more interesting.
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
                    <h2 className="text-3xl md:text-5xl font-bold font-conthrax mt-10 mb-5">How to Use Audio Calling</h2>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Set Default Translation Language</span>:
                        </span>
                        <p>
                            On the chat page, users will see a globe icon to set the default chat translation language. 
                            Choose your preferred language from the list of available options.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Automatic Translation</span>:
                        </span>
                        <p>
                            Once the translation language is set, incoming messages on the chat page will automatically be 
                            translated into the selected language, provided both the sender and receiver are currently on 
                            the chat page.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Manual Translation</span>:
                        </span>
                        <p>
                            If you are out of the chat page or app, received messages will not be translated. The messages 
                            shown in push notifications will also not be in the preferred language. In such cases, click on 
                            the globe icon next to the message to translate it into the selected language.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Change Translation Language</span>:
                        </span>
                        <p>
                            Users can change the chat translation language whenever required to suit their needs.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>NOTE</span>:
                        </span>
                        <p>
                            This feature ensures that you can enjoy conversations in your preferred language, enhancing your experience on Kaba.
                        </p>
                    </div>
                   
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DisclaimerPage;
