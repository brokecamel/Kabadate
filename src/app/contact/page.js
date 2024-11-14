"use client"

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

import Link from 'next/link';
import Image from 'next/image';

import { useEffect } from 'react';

function Contact() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <>
            <Navbar />

            <main className="relative container mx-auto p-4 py-20 text-center">
                <div className="absolute inset-x-0 -top-20 left-32 transform-gpu overflow-hidden blur-3xl sm:-top-60 -z-10" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[40deg] bg-gradient-to-br from-transparent to-primary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                    </div>
                </div>
                <h1 className="text-6xl font-bold text-primary">Get in Touch</h1>
                <p className="mt-4 text-xl max-w-3xl mx-auto">
                    Send Us an Email:
                </p>

                <Link href="mailto:admin@suprememe.live" className="text-primary text-center hover:brightness-110 active:scale-95 transition-all duration-200 ease-in-out mx-auto">support@kabadate.com</Link>

                <h2 className="text-xl font-bold mt-6">Follow Us on Social Media</h2>
                <div className='flex mx-auto gap-2 items-center justify-center mt-2'>
                    <Link href={'https://www.instagram.com/kaba_date/'} target="_blank"> 
                        <Image className='bg-primary p-3 rounded-full w-10 md:w-16 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out' src='/images/instagram.png' width={512} height={512} alt="Instagram" />
                    </Link>
                    <Link href={'https://www.tiktok.com/@kaba_date'} target="_blank">
                        <Image className='bg-primary p-3 rounded-full w-10 md:w-16 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out' src='/images/tiktok.png' width={512} height={512} alt="TikTok" />
                    </Link>
                    <Link href={'https://www.twitter.com'} target="_blank">
                        <Image className='bg-primary p-3 rounded-full w-10 md:w-16 hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out' src='/images/twitter.png' width={512} height={512} alt="Twitter" />
                    </Link>
                </div>

                <h2 className="text-xl font-bold mt-6">Join Our Community</h2>
                <p className="mt-2">...</p>
            </main >

            <Footer />
        </>
    );
}

export default Contact;