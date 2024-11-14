"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const navStyles = isNavbarOpen ?
        "transition-all duration-300 ease-in-out transform translate-x-0" :
        "transition-all duration-300 ease-in-out transform translate-x-full";

    useEffect(() => {
        if (isNavbarOpen) {
            document.documentElement.style.overflow = "hidden"
        }
        else {
            document.documentElement.style.overflow = "auto"
        }
    }, [isNavbarOpen])

    return (
        <>
            <nav id="navbar" className="fixed w-full flex justify-between items-center h-20 md:h-24 px-4 md:px-10 font-conthrax bg-transparent z-50"
                style={{
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                }}
            >
                <div className="flex items-center">
                    <Link href='/'>
                        <h1 className="font-conthrax text-2xl md:text-4xl font-extrabold text-primary hover:brightness-125 cursor-pointer active:scale-95 transition-all duration-300 ease-in-out">KABA DATE</h1>
                    </Link>
                </div>
                <div className="hidden lg:items-center lg:flex gap-4 lg:gap-8">
                    <Link href="/projects" className="text-xl animated-link font-semibold">Premium</Link>
                    <Link href="/features" className="text-xl animated-link font-semibold">Features</Link>
                    <Link href="/support" className="text-xl animated-link font-semibold">Support</Link>
                    <Link href="/locations" className="text-xl animated-link font-semibold">Locations</Link>
                    <Link href="/game" className="text-xl animated-link font-semibold">Games</Link>
                </div>
                <div className="hidden lg:block">
                    <Link href="/contact" className="button px-4 py-2 text-sm font-medium leading-5 ">
                        Contact Us
                    </Link>
                </div>
                <button
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                    className="flex flex-col gap-2 lg:hidden w-8 hover:brightness-105 hover:scale-105 transition-all duration-300 ease-in-out active:scale-95">
                    <span className={`w-full h-1 transition-all duration-300 ease-out bg-primary ${isNavbarOpen ? 'rotate-45' : ''}`}></span>
                    <span className={`w-full h-1 transition-all duration-300 ease-out bg-primary ${isNavbarOpen ? '-rotate-45 -mt-2' : ''}`}></span>
                </button>
            </nav>
            <div className="h-20 md:h-24"></div>

            <div className={`z-50 fixed w-full h-screen bg-black ${navStyles}`}>
                <div className="items-center gap-4 flex flex-col justify-start pt-10 w-full h-full">
                    <Link href="/projects" className="text-3xl animated-link font-semibold">Premium</Link>
                    <Link href="/features" className="text-3xl animated-link font-semibold">Features</Link>
                    <Link href="/support" className="text-3xl animated-link font-semibold">Support</Link>
                    <Link href="/locations" className="text-3xl animated-link font-semibold">Locations</Link>
                    <Link href="/game" className="text-3xl animated-link font-semibold">Game</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;
