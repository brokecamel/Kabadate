"use client"

import Navbar from "@/components/navbar";
import Hexagon from "@/components/hexagon";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import FAQs from "@/components/faqs";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  // Define the handleContextMenu function
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Navbar />

      <main className="relative p-4 md:p-10 lg:p-16 h-auto">
        <div className="absolute inset-x-0 -top-20 left-32 transform-gpu overflow-hidden blur-3xl sm:-top-60 -z-10" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[40deg] bg-gradient-to-br from-transparent to-primary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-auto">
          <div className="flex flex-col justify-center pt-10 py-8 md:pb-16">
            <h2 className="flex items-center h-full text-sm md:text-2xl lg:text-4xl font-conthrax">
              Welcome to
              <div className="animation font-jura">
                <div className="first text-2xl"><div className="px-4 py-2">DATING APP</div></div>
                <div className="second text-2xl"><div className="px-4 py-2">SOCIAL APP</div></div>
                <div className="third text-2xl"><div className="px-4 py-2">SECURE</div></div>
              </div>
            </h2>
            <h1 className="glitch text-4xl md:text-6xl lg:text-8xl font-conthrax">
              <span aria-hidden="true">KABA</span>
              KABA
              <span aria-hidden="true">KABA</span>
            </h1>
            <p
              className="animated-para text-sm md:text-xl mt-4 text-white font-jura max-w-xl">
              At Kaba, we&apos;re redefining the way you find Love online. 
              Say Goodbye to endless Swiping and Hello to Meaningful Connections. 
              Our revolutionary Face recognition AI ensures every Profile is Genuine, 
              so you can date with confidence and peace of mind. 
              Tailor your search with filters for Language, Religion, and Location to 
              find exactly who you&apos;re looking for.
            </p>
            <div>
              <Link
                className="button font-conthrax px-4 py-2 md:px-6 md:py-3 text-xl md:text-2xl font-semibold leading-normal mt-6"
                href="/projects"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden lg:block"></div>
        </div>

        <Projects count={3} />

        <div className="py-4 mt-10" id="blockchain">
          <h1 className="heading text-3xl md:text-6xl font-bold font-conthrax" data-text="About">
            MATCH MAGIC! 
          </h1>

          <div className="video-container relative w-full h-0 pb-9/16">
            <video
              onContextMenu={handleContextMenu}
              controls
              controlsList="nodownload"
              className="absolute top-0 left-0 w-full h-full object-cover"
              poster="/images/introcover.png"  // Add this line
            >
              <source src="/video/intro.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-20 items-center justify-center">
            <Image src="/images/icons/(1).png" alt="Blockchain-1" className="w-20 animated-logo" width={128} height={128} />
            <Image src="/images/icons/(2).png" alt="Blockchain-2" className="w-20 animated-logo" width={128} height={128} />
            <Image src="/images/icons/(3).png" alt="Blockchain-3" className="w-20 animated-logo" width={128} height={128} />
          </div>
        </div>


        <div className="py-4 mt-10" id="about">
          <h1 className="heading text-3xl md:text-6xl font-bold font-conthrax" data-text="About">
            Why Choose KABA?
          </h1>

          <p className="text-xl md:text-2xl p-6 border-2 border-[#dfdfdf] mt-6 bg-gradient-to-tl to-[#ab6bff0f] from-[#ab6bff1f]"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            KABA Date is a cutting-edge dating app that guarantees genuine connections through advanced facial recognition 
            AI, ensuring all profiles are authentic. It prioritizes user safety with robust features like end-to-end 
            encryption and comprehensive profile controls. The app supports diverse communication tools including video calls, 
            chat translation, and interactive features like Super Likes and Boosts, enhancing user interaction and visibility. 
            KABA Date&apos; s intuitive interface and premium options like ad-free browsing provide a superior, secure, and engaging 
            dating experience for a global audience.
          </p>

          <p className="text-xl md:text-2xl p-6 border-2 border-[#dfdfdf] mt-6 bg-gradient-to-tl to-[#ab6bff0f] from-[#ab6bff1f]"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            1.Facial Recognition AI: This feature ensures all profiles are genuine, which builds a safer and more trustworthy 
            platform for users.

          </p>
          <p className="mt-6 text-xl md:text-2xl p-6 border-2 border-[#dfdfdf] bg-gradient-to-tl to-[#ab6bff0f] from-[#ab6bff1f]"
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            2. Enhanced Communication Tools: Offering a variety of communication methods including video calls, voice notes, 
            and chat translation, KABA Date facilitates meaningful connections no matter the distance or language differences.
          </p>
          <p className="mt-6 text-xl md:text-2xl p-6 border-2 border-[#dfdfdf] bg-gradient-to-tl to-[#ab6bff0f] from-[#ab6bff1f]"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
          >
            3.Comprehensive Privacy and Security: With features like end-to-end encryption, user-controlled profile visibility, 
            and robust reporting mechanisms, KABA Date provides a secure environment where users can feel safe while exploring 
            romantic connections.
          
          </p>
        </div>

        <FAQs />

      </main >

      <Footer />

      <div className="fixed top-0 -z-10 w-full h-full">
        <Hexagon />
      </div>
    </>
  )
}
