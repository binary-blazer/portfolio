import swr from 'hooks/swr'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment, useEffect } from 'react'
import config from '../../site.config.js'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from "framer-motion"

export default function Home() {
  const { data: _skills } = swr('/api/skills', 60000);
  const skills = _skills ? _skills : null;

  const { data: _projectsData } = swr('/api/projects', 60000);
  const projectsData = _projectsData ? _projectsData : null;
  const router = useRouter()

  const projects = projectsData ? projectsData.slice(0, 3) : null;

  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
     {/* <div className="flex flex-col items-center justify-center min-h-screen py-2"> */}
     <div className="flex flex-col items-center">
      <Head>
        <title>{config.siteMetadata.title}</title>
        <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
      </Head>

      
      <main className="flex flex-col items-center justify-center text-center">
      <div className="h-[33rem] flex flex-col justify-center items-center mb-72">
      <h1 className="mx-auto max-w-4xl font-semibold text-5xl font-semibold sm:text-7xl text-black dark:text-white text-center button-text">Hi there, Im <span className="text-primary">{config.siteMetadata.author}</span> <div className="mt-3"> I'm a <span className="text-underline-2px">Full Stack Developer</span></div></h1>
      <h1 className="mx-auto max-w-4xl font-semibold text-5xl font-semibold sm:text-7xl text-black dark:text-white text-center button-text"><div className="mt-3"> from <span className="text-underline-2px mt-2">Germany</span></div></h1>
      <div className="flex flex-row justify-center items-center mt-10">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
      <button onClick={() => router.push('/contact')} className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-10 py-3 rounded-md mr-5 button buttn-text" href="/contact"><i className="fas fa-envelope mr-2"></i> Contact Me</button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
      <button onClick={() => router.push('/about')} className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-10 py-3 rounded-md button button-text" href="/about"><i className="fas fa-user mr-2"></i> About Me</button>
      </motion.div>
      </div>
      </div>
      </main>

      <div className="flex flex-col items-center justify-center w-full px-10 text-center">
            <h1 className="text-5xl font-bold text-underline-2px button-text">
                Projects
            </h1>
            <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-5 mt-3 button-text">
                Here are some of my projects
                </p>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {_projectsData ? (
                projects ? (
                    projects?.map((p, i) => (
                      <motion.div
                      whileHover={{ scale: 1.05 }}
                      >
                          <div className="cursor-pointer w-full flex flex-col bg-gray-300/50 dark:bg-zinc-900/50 p-4 rounded-lg justify-center items-center">
                      <div className="w-full relative md:mt-2">
                      <Image src={p.image} width="1024" className="rounded-lg" height="512" />
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
                      </motion.div>
                    ))
                ) : <></>
            ) : (
              <div className="flex flex-col justify-center items-center">
              <i className="fal fa-spinner-third fa-spin" /> <span className="text-xl font-semibold button-text">Loading Projects...</span>
              </div>
              )}
            </div>
        </div>

      <div className="flex flex-row justify-center items-center mt-10">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
      <button onClick={() => router.push('/projects')} className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-10 py-3 rounded-md button button-text" href="/projects"><i className="fas fa-project-diagram mr-2"></i> View All Projects</button>
      </motion.div>
      </div>


      <div className="flex flex-col items-center justify-center w-full flex-2 px-20 text-center mt-20">
            <h1 className="text-5xl font-bold text-underline-2px button-text">
                Skills
            </h1>
            <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-5 mt-3 button-text">
               Here are all technologies and languages i use.
                </p>
            <br />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center mt-2">
          {_skills
            ? skills
              ? skills.map((_, __) => (
                 <motion.div
                  whileHover={{ scale: 1.05 }}
                  >
                  <div
                    key={__}
                    className="cursor-pointer bg-gray-300/50 dark:bg-zinc-900/50 p-2 px-4 hover:bg-gray-400/50 dark:hover:bg-gray-700/50 shadow-lg transition-all duration-200 rounded-lg w-full"
                  >
                    <div className="flex justify-between items-center w-full">
                      <div className="flex justify-center items-center h-[26px]">
                        <img
                          alt="Loading..."
                          src={_.src}
                          className="rounded-md"
                          width="24"
                          height="24"
                          style={{ fill: "#fff!important;" }}
                        />
                      </div>
                      <p className="text-md text-black dark:text-white font-semibold button-text">{_.name}</p>
                    </div>
                  </div>
                  </motion.div>
                ))
              : Array.from({ length: 20 }).map((_, __) => (
                <div
                  key={__}
                  className="bg-gray-300/50 dark:bg-zinc-900/50 p-4 hover:bg-gray-500/50 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0 w-[36px] h-[36px] mr-2">
                      <div className="bg-gray-300/50 dark:bg-zinc-900/50 w-[36px] h-[36px] rounded-md animate-pulse" />
                    </div>
                    <div className="bg-gray-300/50 dark:bg-zinc-900/50 w-44 h-[24px] rounded-md animate-pulse" />
                  </div>
                </div>
                ))
            : Array.from({ length: 20 }).map((_, __) => (
                <div
                  key={__}
                  className="bg-gray-300/50 dark:bg-zinc-900/50 p-4 hover:bg-gray-500/50 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full"
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="flex-shrink-0 w-[36px] h-[36px] mr-2">
                      <div className="bg-[#191932]/50 w-[36px] h-[36px] rounded-md animate-pulse" />
                    </div>
                    <div className="bg-[#191932]/50 w-44 h-[24px] rounded-md animate-pulse" />
                  </div>
                </div>
              ))}
        </div>
      </div>
      </div>
    </motion.div>
    </>
  )
}
