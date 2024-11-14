"use client";

import React, { useState } from "react";
import Link from "next/link";

function Projects() {
  const projects = [
    {
      title: "Profile Verification",
      description:
        "Profile Verification is our method of ensuring that all profiles on Kaba are authentic.",
      link: "/faceai",
    },
    {
      title: "Message",
      description:
        "Boost is a feature that allows users to increase the visibility of their profile on Kaba.",
      link: "/messaging",
    },
    {
      title: "Video Calls",
      description:
        "The Video Calling feature in Kaba enables users to have high-quality face-to-face conversations with their matches.",
      link: "/videocall",
    },
    {
      title: "Audio Calls",
      description:
        "The Audio Calling feature in Kaba allows users to have clear voice conversations with their matches.",
      link: "/audiocall",
    },
    {
      title: "Voice Message",
      description:
        "Voice Messaging is a feature that lets you record and send quick audio messages to your contacts within the app.",
      link: "/voicenotes",
    },
    {
      title: "Arabic RTL",
      description:
        "Arabic RTL (Right-To-Left) is a feature that allows users to switch the language of Kaba Date to Arabic.",
      link: "/arabicrtl",
    },
    {
      title: "Chat Translation",
      description:
        "Chat Translation is a feature that allows users to view incoming chat messages in their preferred language.",
      link: "/chattranslation",
    },
    {
      title: "Boost",
      description:
        "Boost is a feature that allows users to increase the visibility of their profile on Kaba.",
      link: "/boost",
    },
    {
      title: "Super Like",
      description:
        "Super Like is a feature that allows users to show a strong interest in someone on Kaba.",
      link: "/superlike",
    },
    {
      title: "Encryption",
      description:
        "End-To-End Encryption ensures that personal conversations remain private.",
      link: "/e2ee",
    },
    {
      title: "Emoji, Stickers, and GIFs ",
      description:
        "Emoji, Stickers, and GIFs are fun and expressive elements that users can incorporate into their chats.",
      link: "/emoji",
    },
    {
      title: "Match",
      description:
        "Matches in Kaba are connections made when two users show mutual interest in each other.",
      link: "/match",
    },
    {
      title: "Payment Methods",
      description:
        "Kaba offers various payment methods to cater to users from different regions.",
      link: "/paymentmethods",
    },
    {
      title: "Feeds",
      description:
        "Feeds in Kaba allow users to see updates from their matches",
      link: "/feed",
    },
    {
      title: "Login Options",
      description:
        "Kaba provides multiple login options, including phone login and email login.",
      link: "/login",
    },
    {
      title: "Different Languages",
      description:
        "Kaba supports multiple languages, allowing users to experience the app in their preferred language.",
      link: "/language",
    },
    {
      title: "Deactivation & Deletion",
      description:
        "Kaba allows users to either deactivate or delete their accounts.",
      link: "/deletion",
    },
    {
      title: "Profile Control",
      description:
        "Profile Control in Kaba allows users to manage their profile visibility and privacy settings.",
      link: "/profilecontrol",
    },
  ];

  const initialCount = 6;
  const [visibleCount, setVisibleCount] = useState(initialCount); // Initially show 6 features

  const showMore = () => {
    setVisibleCount(projects.length); // Display all features when button is clicked
  };

  const showLess = () => {
    setVisibleCount(initialCount); // Revert to initial count
  };

  return (
    <div className="py-4 mt-10" id="projects">
      <h1
        className="heading text-3xl md:text-6xl text-primary font-bold font-conthrax"
        data-text="Projects"
      >
        Features
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {projects.slice(0, visibleCount).map((project, index) => (
          <div
            key={"project" + index}
            className="p-6 border-2 border-[#dfdfdf] hover:border-primary min-h-[260px] cursor-pointer relative group transition-all duration-300 ease-in-out"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              clipPath:
                "polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,0 100%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Background color adjusted here
            }}
          >
            <h1 className="text-2xl pb-6 font-bold font-conthrax text-center">
              {project.title}
            </h1>
            <p className="text-xl pt-6 text-gray-200 font-jura">
              {project.description}
            </p>
            <a
              href={project.link}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
            >
              <button className="button bg-primary text-white py-2 px-4">
                Learn More
              </button>
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        {visibleCount < projects.length ? (
          <button
            onClick={showMore}
            className="button px-4 py-2 font-conthrax text-xl bg-primary text-white"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={showLess}
            className="button px-4 py-2 font-conthrax text-xl bg-primary text-white"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}

export default Projects;
