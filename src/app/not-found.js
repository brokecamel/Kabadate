"use client"

import Link from 'next/link'
import Image from 'next/image'

import { useEffect } from 'react'

function NotFound() {


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <div className='reletive w-screen h-screen grid place-content-center'>
            <div className="absolute inset-x-0 -top-20 left-32 transform-gpu overflow-hidden blur-3xl sm:-top-60 -z-10" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[40deg] bg-gradient-to-br from-transparent to-primary opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
                </div>
            </div>
            <div className='flex flex-col space-y-4'>
                <Image src='/images/404-error.png' className='w-64 animate-pulse rotate-6' width={512} height={512} alt='404' />
                <h1 className='text-6xl text-center text-primary font-bold font-conthrax'>404</h1>
                <p className='text-2xl text-center text-white font-conthrax'>Page not found</p>
                <div className='mx-auto font-jura'>
                    <Link className='text-2xl px-4 py-2 button' href={'/'}>
                        Go Back Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound