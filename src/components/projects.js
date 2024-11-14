"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Projects() {
  const projects = [
    {
      title: "KABA SILVER",
      description:
        "Ideal for getting started with Kaba, offering all the basic features you need.",
      link: "/projects/silver",
      icon: "/images/silver.png",
      features: [
        "Audio Call",
        "Video Call",
        "Messages",
        "Voice Notes",
        "Unlimited Likes",
        "Change Location",
        "Profile Control",
        "Turn off Ads",
      ],
      plans: [
        { name: "Daily", price: "$1" },
        { name: "7 Days", price: "$5.99" },
        { name: "Monthly", price: "$9.99" },
      ],
    },
    {
      title: "KABA GOLD",
      description:
        "Includes all Silver features plus additional perks for a more enhanced experience.",
      link: "/projects/gold",
      icon: "/images/gold.png",
      features: [
        "Audio Call",
        "Video Call",
        "Messages",
        "Voice Notes",
        "Unlimited Likes",
        "Change Location",
        "Profile Control",
        "Turn off Ads",
        "Boost",
        "Super Like",
      ],
      plans: [
        { name: "Daily", price: "$2" },
        { name: "7 Days", price: "$9.99" },
        { name: "Monthly", price: "$14.99" },
      ],
    },
    {
      title: "KABA PLATINUM",
      description:
        "The ultimate package for users looking for premium features and the best experience.",
      link: "/projects/platinum",
      icon: "/images/platinum.png",
      features: [
        "Audio Call",
        "Video Call",
        "Messages",
        "Voice Notes",
        "Unlimited Likes",
        "Change Location",
        "Profile Control",
        "Turn off Ads",
        "Boost",
        "Super Like",
        "Reset Card",
      ],
      plans: [
        { name: "Daily", price: "$3" },
        { name: "7 Days", price: "$14.99" },
        { name: "Monthly", price: "$19.99" },
      ],
    },
  ];

  const comparisonData = [
    { feature: "Audio Call", kaba: true, others: false },
    { feature: "Video Call", kaba: true, others: true },
    { feature: "Messages", kaba: true, others: true },
    { feature: "Voice Notes", kaba: true, others: false },
    { feature: "Unlimited Likes", kaba: true, others: false },
    { feature: "Change Location", kaba: true, others: false },
    { feature: "Profile Control", kaba: true, others: false },
    { feature: "Turn off Ads", kaba: true, others: true },
    { feature: "Boost", kaba: true, others: true },
    { feature: "Super Like", kaba: true, others: true },
    { feature: "Reset Card", kaba: true, others: false },
    { feature: "End-To-End Encryption", kaba: true, others: false },
  ];

  const checkIcon = "/images/checked.png";
  const crossIcon = "/images/remove.png";
  const [visibleItems, setVisibleItems] = useState(6);

  const toggleItems = () => {
    setVisibleItems(visibleItems === 6 ? comparisonData.length : 6);
  };

  const featureIcons = {
    AI: "/images/gold.png",
    "Audio Call": "/images/gold.png",
    "Video Call": "/images/gold.png",
    Messages: "/images/gold.png",
    "Voice Notes": "/images/gold.png",
    "Unlimited Likes": "/images/gold.png",
    "Change Location": "/images/gold.png",
    "Profile Control": "/images/gold.png",
    "Turn off Ads": "/images/gold.png",
    Boost: "/images/gold.png",
    "Super Like": "/images/gold.png",
    "Reset Card": "/images/gold.png",
    "End-To-End Encryption": "/images/gold.png",
  };

  return (
    <div className="py-4 mt-10" id="projects">
      <h1
        className="heading text-3xl md:text-6xl text-primary font-bold font-conthrax"
        data-text="Projects"
      >
        Premium Plans
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border-2 border-gray-200 hover:border-primary min-h-[360px] cursor-pointer relative group transition-all duration-300 ease-in-out"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="bg-primary p-2 text-center flex items-center justify-center">
              <h2 className="text-2xl font-bold font-conthrax text-black mr-2">
                {project.title}
              </h2>
              <Image
                src={project.icon}
                alt={`${project.title} icon`}
                width={30}
                height={30}
              />
            </div>
            <p className="font-jura my-2 text-white">{project.description}</p>
            <div className="grid grid-cols-2 gap-1 text-sm font-bold font-jura text-white">
              {project.features.map((feature, idx) => (
                <span key={idx} className="flex items-center justify-center">
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-2 p-2 border-t border-gray-200 text-white">
              {project.plans.map((plan, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-1"
                >
                  <span>{plan.name}</span>
                  <span className="font-bold">{plan.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <a
          href="/features"
          className="button bg-primary text-white px-6 py-3 text-lg rounded-lg shadow hover:bg-primary-dark"
        >
          Learn More
        </a>
      </div>

      <div className="py-4 mt-10" id="comparison">
        <h1
          className="heading text-3xl md:text-6xl text-primary font-bold font-conthrax mb-6"
          data-text="Kaba vs. Competitors"
        >
          KABA VS. OTHERS
        </h1>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="flex-grow md:w-2/3">
            <div className="overflow-x-auto">
              <table className="min-w-full text-white border-collapse border border-white">
                <thead>
                  <tr className="text-lg font-bold text-center">
                    <th className="px-2 py-2 text-xl border-b-2 border-white">
                      <span className="bg-white text-black p-1 px-4 font-bold font-conthrax flex items-center justify-center">
                        FEATURES
                        <Image
                          src="/images/silver.png"
                          alt="Feature Icon"
                          width={24}
                          height={24}
                          className="ml-2"
                        />
                      </span>
                    </th>
                    <th className="px-2 py-2 text-xl border-b-2 border-white">
                      <span className="bg-white text-black p-1 px-4 font-bold font-conthrax flex items-center justify-center">
                        KABA
                        <Image
                          src="/images/gold.png"
                          alt="Kaba Icon"
                          width={24}
                          height={24}
                          className="ml-2"
                        />
                      </span>
                    </th>
                    <th className="px-2 py-2 text-xl border-b-2 border-white">
                      <span className="bg-white text-black p-1 px-4 font-bold font-conthrax flex items-center justify-center">
                        OTHERS
                        <Image
                          src="/images/platinium.png"
                          alt="Others Icon"
                          width={24}
                          height={24}
                          className="ml-2"
                        />
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.slice(0, visibleItems).map((item, index) => (
                    <tr
                      key={index}
                      className="text-lg border-b-2 border-white"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                      <td className="px-2 py-2 text-center border-r-2 border-white flex items-center justify-center">
                        <Image
                          src={featureIcons[item.feature]}
                          alt={item.feature}
                          width={24}
                          height={24}
                          className="mr-2"
                        />
                        {item.feature}
                      </td>
                      <td className="px-2 py-2 text-center border-r-2 border-white">
                        <Image
                          src={item.kaba ? checkIcon : crossIcon}
                          alt={item.kaba ? "Check" : "Cross"}
                          width={24}
                          height={24}
                        />
                      </td>
                      <td className="px-2 py-2 text-center">
                        <Image
                          src={item.others ? checkIcon : crossIcon}
                          alt={item.others ? "Check" : "Cross"}
                          width={24}
                          height={24}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-4">
              <button
                onClick={toggleItems}
                className="button bg-primary text-white px-6 py-3 text-lg rounded-lg shadow hover:bg-primary-dark"
              >
                {visibleItems === 6 ? "Show More" : "Show Less"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
