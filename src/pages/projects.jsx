import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import swr from '../hooks/swr'
import config from '../../site.config'
import { motion } from "framer-motion"

export default function Projects() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const { data: _projects } = swr('/api/projects', 60000);
    const projects = _projects ? _projects : null;
    
    return (
        <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        <Head>
            <title>Projects | { config.siteMetadata.title }</title>
            <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
        </Head>
        <br />
        
        <div className="mb-10 flex flex-col py-20 mx-auto">
        <div className="flex flex-col items-center justify-center w-full flex-10 px-10 text-center">
            <h1 className="text-5xl font-semibold">
                Projects
            </h1>
            <p className="text-xl text-white/50 font-normal text-center mb-5">
                Here are some of my projects
                </p>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {_projects ? (
                projects ? (
                    projects?.map((p, i) => (
                        <div className="cursor-pointer w-full flex flex-col bg-gray-300/50 dark:bg-zinc-900/50 p-2 rounded-lg justify-center items-center hover:scale-[1.01]">
                        <div className="w-full h-[18rem] relative">
                        <Image src={p.image} width="1024" className="rounded-lg" height="512" />
                        </div>
                        <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold mt-2">{p.name}</h1>
                        <p className="text-black dark:text-white text-sm">{p.description}</p>
                        <div className="flex flex-row justify-center items-center mt-3">
                        {p.github === true ? <a onClick={() => router.push(p.githubLink)} target="_blank" className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-5 py-2 rounded-md mr-5"><i className="fa-brands fa-github" /> Github</a> : null}
                        {p.website === true ? <a onClick={() => router.push(p.websiteLink)} target="_blank" className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-5 py-2 rounded-md"><i className="fa-solid fa-globe" /> Website</a> : null}
                        {p.invite === true ? <a onClick={() => router.push(p.inviteLink)} target="_blank" className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-5 py-2 rounded-md"><i className="fa-brands fa-discord" /> Invite</a> : null}
                        </div>
                        </div>
                        </div>
                    ))
                ) : <></>
            ) : (
                <div className="flex flex-col justify-center items-center">
                <i className="fal fa-spinner-third fa-spin" /> <span className="text-xl font-semibold">Loading Projects...</span>
                </div>
                )}
            </div>
        </div>
        </div>
        </motion.div>
        </>
    )
}