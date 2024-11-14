"use client"

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Features from '@/components/features';


import { useEffect } from 'react';

function ProjectsPage() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <>
            <Navbar />

            <main className="p-4 md:p-10 lg:p-16 h-auto -mt-10">
                <Features />
            </main>

            <Footer />
        </>
    );
}

export default ProjectsPage;