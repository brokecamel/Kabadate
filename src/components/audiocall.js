"use client"

import { useState } from "react";
import Link from "next/link";

function Projects({ count = -1 }) {
    const projects = [
        {
            title: "Audio Call",
            description: "Write something about audio calls...",
            link: "/"
        },
    ]
    const [currentHover, setCurrentHover] = useState(-1);



    return (
        <div className="py-4 mt-10" id="projects">
            <h1 className="heading text-3xl md:text-6xl text-primary font-bold font-conthrax" data-text="Projects">
                Audio Call
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                {
                    projects.map((project, index) => (
                        count !== -1 && index >= count ? null :
                            <div key={'project' + index}>
                                <Link href={project.link} className="w-full h-full">
                                    <div className="p-6 border-2 w-full h-full min-h-[260px] cursor-pointer group border-[#dfdfdf] hover:border-primary"
                                        style={{
                                            backdropFilter: 'blur(10px)',
                                            WebkitBackdropFilter: "blur(10px)",
                                            clipPath: 'polygon(0 0,calc(100% - 20px) 0,100% 20px,100% 100%,0 100%)',
                                            background: `linear-gradient(-135deg,${currentHover === index ? '#ab6bff' : '#dfdfdf'} calc(0.707* 20px + 2px),#0000 0) border-box`,
                                            backgroundColor: (currentHover === index ? '#ab6bff2f' : 'transparent')
                                        }}

                                        onMouseEnter={() => setCurrentHover(index)}
                                        onMouseLeave={() => setCurrentHover(-1)}
                                    >
                                        <h1 className="text-2xl pb-6 font-bold font-conthrax">
                                            {project.title}
                                        </h1>
                                        <hr className="border-[#dfdfdf] group-hover:border-primary -mx-10 border"></hr>
                                        <p className="text-xl pt-6 text-gray-200 font-jura">
                                            {project.description}
                                        </p>
                                        <div className="relative text-gray-100 z-0 pb-1 font-jura outline-none w-fit group-hover:text-primary transition-all duration-300 ease-in-out overflow-hidden mt-3 font-jura before:content-[''] before:transition-all before:duration-300 before:ease-in-out before:w-full before:h-0.5 before:absolute before:bottom-0 before:-left-[100%] before:bg-primary after:content-[''] after:w-full after:h-0.5 after:absolute after:bottom-0 after:left-0 after:bg-[#dfdfdf] before:group-hover:-left-0 before:z-10 after:z-0">
                                            More
                                        </div>
                                    </div>
                                </Link>
                            </div>
                    ))
                }
            </div >

            {
                count !== -1 &&
                <div className="flex justify-center mt-10">
                    <Link href="/projects" className="button px-4 py-2 font-conthrax text-xl">
                        View More
                    </Link>
                </div>
            }
        </div >
    )
}

export default Projects
