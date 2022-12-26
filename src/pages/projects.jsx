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
        transition={{ duration: 0.1 }}
        >
        <Head>
            <title>Projects | { config.siteMetadata.title }</title>
            <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
        </Head>
        <br />
        
        <div className="mb-10 flex flex-col py-20 mx-auto">
        <div className="flex flex-col items-center justify-center w-full flex-10 px-10 text-center">
            <h1 className="text-5xl font-semibold text-underline-2px button-text">
                Projects
            </h1>
            <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-5 mt-3 button-text">
                Here are some of my projects
                </p>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {_projects ? (
                projects ? (
                    projects?.map((p, i) => (
                        <div className="cursor-pointer transition-all w-full flex flex-col bg-gray-300/50 dark:bg-zinc-900/50 p-4 rounded-lg justify-center items-center hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary hover:outline hover:outline-2 hover:outline-primary transition-all duration-200" key={i}>
                      <div className="w-full relative md:mt-2">
                      <Image src={p.image} width="1024" className="rounded-lg button-text" height="512" draggable="false" alt={p.title} />
                      </div>
                      <h1 className="text-2xl font-semibold md:mt-2 button-text">{p.name}</h1>
                      <p className="text-black dark:text-white text-sm button-text">{p.description}</p>
                      <div className="flex flex-row justify-center items-center mt-3">
                      <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      >
                      {p.github === true ? <button onClick={() => router.push(p.githubLink)} target="_blank" className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-5 py-2 rounded-md mr-5 button button-text" href={p.githubLink}><i className="fa-brands fa-github" /> Github</button> : null}
                       </motion.div>
                      <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      >
                      {p.website === true ? <button onClick={() => router.push(p.websiteLink)} target="_blank" className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-5 py-2 rounded-md button button-text" href={p.websiteLink}><i className="fa-solid fa-globe" /> Website</button> : null}
                      </motion.div>
                      <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      >
                      {p.invite === true ? <button onClick={() => router.push(p.inviteLink)} target="_blank" className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-5 py-2 rounded-md button button-text" href={p.inviteLink}><i className="fa-brands fa-discord" /> Invite</button> : null}
                      </motion.div>
                      </div>
                      </div>
                    ))
                ) : <></>
            ) : (
                <div className="flex flex-col justify-center items-center">
                <i className="fal fa-spinner-third fa-spin" /> <span className="text-xl font-semibold button-text">Loading Projects...</span>
                </div>
                )}
            </div>
        </div>
        </div>
        </motion.div>
        </>
    )
}
