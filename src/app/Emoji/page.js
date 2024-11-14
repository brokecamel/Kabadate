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
                                Emoji, Stickers, and GIFs 
                            </h1>
                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>What are Animated Emoji, Stickers, and GIFs?</span>
                                </span>
                                <p>
                                    Animated Emoji, Stickers, and GIFs are fun and expressive elements that users can incorporate 
                                    into their chats on Kaba. These features allow you to add personality and emotion to your 
                                    conversations.
                                </p>
                            </div>

                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>Why Use Animated Emoji, Stickers, and GIFs?</span>
                                </span>
                                <p>
                                    Using animated emoji, stickers, and GIFs helps you convey emotions and reactions more vividly 
                                    than text alone. They make your chats more lively, engaging, and enjoyable, allowing you to 
                                    express yourself better.
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
                    <h2 className="text-3xl md:text-5xl font-bold font-conthrax mt-10 mb-5">How to Use Animated Emoji, Stickers, and GIFs</h2>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Access the Emoji and Sticker Menu</span>:
                        </span>
                        <p>
                            In the chat interface, you&apos;ll find an icon to access animated emoji, stickers, and GIFs.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Choose and Send</span>:
                        </span>
                        <p>
                            Browse through the collection and choose the emoji, sticker, or GIF that best fits your mood or message. 
                            Click to send it instantly in your chat.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Enhance Your Messages</span>:
                        </span>
                        <p>
                            Use these elements to enhance your messages, making your conversations more dynamic and expressive.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>NOTE</span>:
                        </span>
                        <p>
                            This feature ensures that your conversations on Kaba are not just about words but also about the fun 
                            and expressive elements that bring your chats to life.
                        </p>
                    </div>
                   
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DisclaimerPage;
