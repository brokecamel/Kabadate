"use client"

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import { useEffect } from 'react';

function PrivacyPolicyPage() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <>
            <Navbar />

            <main className="relative p-4 md:p-10 lg:p-16 h-auto font-jura">
                <div className="absolute inset-x-0 -top-20 left-32 transform-gpu overflow-hidden blur-3xl sm:-top-60 -z-10" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[120deg] bg-gradient-to-br from-transparent to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                    </div>
                </div>

                <div className="py-4" id="about">
                    <h1 className="heading text-3xl md:text-6xl font-bold font-conthrax" data-text="About">
                        Privacy Policy
                    </h1>


                    <h2 className='text-xl md:text-2xl p-6df] mt-6'>
                        Effective Date: <span className='text-primary'>08/01/2024</span>
                    </h2>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        write something here...
                    </div>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        <span className='font-bold'><span className='text-primary'>1.</span> Write something</span>
                        <p>
                            <span className='text-primary opacity-80'>(a).</span> Write something
                        </p>
                        <p>
                            <span className='text-primary opacity-80'>(b).</span> Write soething here...
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        <span className='font-bold'>
                            <span className='text-primary'>2.</span> Write soething here...
                        </span>
                        <p>
                            <span className='text-primary opacity-80'>(a).</span> Write soething here...
                        </p>
                        <p>
                            <span className='text-primary opacity-80'>(b).</span> Write soething here...
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        <span className='font-bold'>
                            <span className='text-primary'>3.</span> Write soething here...
                        </span>
                        <p>
                        Write soething here...
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        <span className='font-bold'>
                            <span className='text-primary'>4.</span> Write soething here...
                        </span>
                        <p>
                            Write soething here...
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        <span className='font-bold'>
                            <span className='text-primary'>5.</span> Data Security
                        </span>
                        <p>
                            Write soething here...
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        <span className='font-bold'>
                            <span className='text-primary'>6.</span> Write soething here...
                        </span>
                        <p>
                            Write soething here...
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        <span className='font-bold'>
                            <span className='text-primary'>7.</span> Write soething here...
                        </span>
                        <p>
                            Write soething here...
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        <span className='font-bold'><span className='text-primary'>8.</span> Write soething here...</span>
                        <p>
                            Write soething here...
                        </p>
                    </div>
                    <div className='text-xl md:text-2xl p-6df] mt-6'>
                        <span className='font-bold'>
                            <span className='text-primary'>9.</span> Write soething here...
                        </span>
                        <p>
                            Write soething here...
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}

export default PrivacyPolicyPage;