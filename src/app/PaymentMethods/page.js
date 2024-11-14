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
                                Payment Methods
                            </h1>
                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>What are the Available Payment Methods?</span>
                                </span>
                                <p>
                                    Kaba offers various payment methods to cater to users from different regions. 
                                    These methods include card payments via Stripe, in-app payments via Apple Pay 
                                    and Google Pay, and local payments via Chapa and cash payment options for 
                                    specific regions.
                                </p>
                            </div>

                            <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                                <span className='font-bold'>
                                    <span className='number-highlight'>Why Multiple Payment Methods?</span>
                                </span>
                                <p>
                                    Providing multiple payment methods ensures that users from different countries 
                                    can conveniently complete their payments using their preferred method. This 
                                    enhances the user experience by offering flexibility and accessibility.
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
                    <h2 className="text-3xl md:text-5xl font-bold font-conthrax mt-10 mb-5">How to Use Available Payment Methods</h2>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Stripe Payments</span>:
                        </span>
                        <p>
                            Users from the United States, Europe, Canada, Australia, and similar regions can use Stripe to 
                            complete their payments. Stripe is compatible with debit cards, credit cards, MasterCard, Visa, 
                            etc. Additionally, these users can utilize in-app payments via Apple Pay or Google Pay.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Chapa Payments</span>:
                        </span>
                        <p>
                            Users from Ethiopia and other African countries can use the Chapa payment gateway to make payments 
                            in their local currency.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Cash Payments</span>:
                        </span>
                        <p>
                            For countries without online payment methods, cash payment options are available. Users can complete 
                            their payments through wire transfer or other forms of offline payments.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>Selecting Payment Methods</span>:
                        </span>
                        <p>
                            When users select any of the premium plans, Boost feature, or Super Like, they will be presented with 
                            the available payment methods. They can then choose their preferred payment method and follow the prompts 
                            for the next steps.
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl sm-padding sm-margin-top'>
                        <span className='font-bold'>
                            <span className='number-highlight'>NOTE</span>:
                        </span>
                        <p>
                            This process ensures that users can easily and securely complete their payments on Kaba.
                        </p>
                    </div>
                   
                </div>
            </main>
            <Footer />
        </>
    );
}

export default DisclaimerPage;
