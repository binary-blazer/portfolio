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

  const list = {
    visible: {
      opacity: 1,
      transition: {
          when: "beforeChildren",
          staggerChildren: 0.1,
      },
    },
    hidden: {
          opacity: 0,
          transition: {
              when: "afterChildren",
          },
      },
  }
  
  const item = {
      visible: { opacity: 1, x: 0, y: 0 },
      hidden: { opacity: 0, x: 0, y: 12 },
  }

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

      
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="h-[40rem] flex flex-col justify-center items-center mb-72">
      <h1 className="mx-auto max-w-4xl font-semibold text-5xl font-semibold sm:text-7xl text-black dark:text-white text-center">Hi there, Im <span className="text-primary">JanjyTapYT</span> <br />I'm a <span className="text-primary">Full Stack Developer</span> and <span className="text-primary">Designer</span></h1>
      <div className="flex flex-row justify-center items-center mt-10">
      <button onClick={() => router.push('/contact')} className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-10 py-3 rounded-md mr-5">Contact Me</button>
      <button onClick={() => router.push('/about')} className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-10 py-3 rounded-md">About Me</button>
      </div>
      </div>
      </main>

      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-5xl font-bold">
                Projects
            </h1>
            <p className="text-xl text-white/50 font-normal text-center mb-5">
                Here are some of my projects
                </p>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {_projectsData ? (
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
                <h1 className="font-display text-2xl font-semibold text-black dark:text-white text-center">No Projects Found</h1>
                </div>
                )}
            </div>
        </div>

      <div className="flex flex-row justify-center items-center mt-10">
      <button onClick={() => router.push('/projects')} className="bg-primary shadow-2xl shadow-primary text-white font-display font-semibold text-lg px-10 py-3 rounded-md">View All Projects</button>
      </div>


      <div className="flex flex-col items-center justify-center w-full flex-2 px-20 text-center mt-20">
            <h1 className="text-5xl font-bold">
                Skills
            </h1>
            <p className="text-xl text-white/50 font-normal text-center mb-5">
               Here are all technologies and languages i use.
                </p>
            <br />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 items-center mt-2">
          {_skills
            ? skills
              ? skills.map((_, __) => (
                  <div
                    key={__}
                    className="cursor-pointer bg-gray-300/50 dark:bg-zinc-900/50 p-2 px-4 hover:bg-gray-500/50 shadow-lg transition-all duration-200 rounded-lg w-full"
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
                      <p className="text-md text-black dark:text-white font-semibold">{_.name}</p>
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