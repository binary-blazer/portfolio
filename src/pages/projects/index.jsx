import Tippy from '@tippyjs/react';
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Head from 'next/head'


export default function Projects({}) {
    const [projectHover, setProjectHover] = useState(0)

    const projects = [
        {
            name: "GiveAways",
            shortDescription: "The most advanced Giveaway Bot for Discord.",
            banner: "https://cdn.discordapp.com/attachments/1003714890638303232/1092081469343666287/blue.jpg",
            url: "https://giveaways-bot.com",
            author: {
                name: "BinaryBlazer",
                image: "https://api.presencecord.tech/v4/avatar/679407120743137300"
            },
            technologies: [
                { name: "NodeJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "text-green-500" },
                { name: "DiscordJS", icon: "https://discord.js.org/favicon-32x32.png", color: "text-green-500" },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "text-green-500" },
            ],
        }
    ];

    const projectsCards = projects.map((project, index) => {
        return (
            <>
            <Head>
                <title>Projects - BinaryBlazer - Portfolio</title>
            </Head>
            <div className="flex flex-col items-start project-card max-h-[13rem] min-h-[13rem] hover:opacity-80 transform hover:-translate-y-1 cursor-pointer justify-between p-4 w-full bg-purple-900/5 hover:bg-purple-900/10 select-none rounded-xl transition duration-200 ease-in-out backdrop-filter backdrop-blur-[10px]" style={{ "--tw-bg-opacity": "1", "--banner": `url(${project.banner})` }} onClick={() => window.open(project.url, '_blank')}>
                <div className="flex flex-col items-start justify-center w-full">
                    <div className="flex flex-row items-start justify-between w-full">
                        <h1 className="text-xl h-[4rem] font-bold text-left">
                            {project.name}
                        </h1>
                        <div className="flex flex-row items-start justify-start gap-2">
                            <Tippy content={"Made by " + project.author.name} placement="top">
                            <div className="flex flex-row items-center justify-start gap-2">
                                <img src={project.author.image} alt={project.author.name} width={32} height={32} className="rounded-md" draggable={false} />
                                <h1 className="text-sm font-bold text-left">
                                    {project.author.name}
                                </h1>
                            </div>
                            </Tippy>
                        </div>
                    </div>
                    <h2 className="text-sm font-semibold text-left text-white/80 max-w-3xl -mt-10 max-w-[16rem]">
                        {project.shortDescription}
                    </h2>
                </div>

                <div className="flex flex-col items-start justify-start w-full mt-4">
                    <div className="flex flex-row items-center justify-start w-full gap-2">
                        <i className="fas fa-code text-lg text-white/80" />
                        <h1 className="text-sm font-bold text-left">
                            Technologies used<span className="text-purple-500">.</span>
                        </h1>
                    </div>

                    <div className="flex items-center justify-between w-full mt-2">
                        <div className="flex flex-row items-center justify-start w-full gap-2">
                            {project.technologies.map((technology, index) => (
                                <Tippy content={technology.name} placement="bottom" className="flex flex-row items-center justify-center w-full">
                                    <img src={technology.icon} alt={technology.name} width={24} height={24} className="rounded-md" draggable={false} />
                                </Tippy>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    })

    return (
        <>
           <Head>
            <title>Home - BinaryBlazer - Portfolio</title>
           </Head>

           <div className="flex flex-col items-center justify-center p-24 w-full min-h-screen max-h-screen overflow-y-auto">
           <div className="flex flex-col items-center justify-center p-24 w-full">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl h-[4rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                        Projects
                    </h1>
                    <h2 className="text-xl font-semibold text-center text-white/80 mt-2 max-w-3xl -mt-3.5">
                        Here you can find all my projects. I will try to keep this list up to date.
                    </h2>
                </div>
            </div>

            <div className="flex flex-col items-start justify-start w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsCards}
            </div>
        </div>
        </>
    )
}