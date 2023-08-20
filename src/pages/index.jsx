import { TextLoop } from "react-text-loop-next";
import swr from 'hooks/swr'
import Head from 'next/head'
import Image from 'next/image'
import Tippy from "@tippyjs/react";
import { useEffect } from 'react'
import config from '../../site.config.js'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { motion } from "framer-motion"
import Tilt from 'react-parallax-tilt';

export default function Home() {
  const [lanyardAvatar, setLanyardAvatar] = useState(null);
  const [lanyardUsername, setLanyardUsername] = useState("Loading");
  const [lanyardDiscriminator, setLanyardDiscriminator] = useState("0000");

  const { data: _skills } = swr('/api/skills', 60000);
  const skills = _skills ? _skills : null;

  const { data: _projectsData } = swr('/api/projects', 60000);
  const projectsData = _projectsData ? _projectsData : null;

  const { data: _reposData } = swr('/api/repos');
  const reposData = _reposData ? _reposData : null;

  const [loading, setLoading] = useState(true);

  const router = useRouter()

  const projects = projectsData ? projectsData.slice(0, 3) : null;

  const texts = config.IndexPage.texts;

  useEffect(() => {
     setLanyardAvatar(window.localStorage.getItem("lanyard") ? JSON.parse(window.localStorage.getItem("lanyard")).discord_user.avatar : null);
      setLanyardUsername(window.localStorage.getItem("lanyard") ? JSON.parse(window.localStorage.getItem("lanyard")).discord_user.username : "Loading");
      setLanyardDiscriminator(window.localStorage.getItem("lanyard") ? JSON.parse(window.localStorage.getItem("lanyard")).discord_user.discriminator : "0000");
  }, []);

  return (
    <> 
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
     <div className="flex flex-col items-center" data-aos="fade-up">
      <Head>
        <title>{config.siteMetadata.title}</title>
        <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
      </Head>

      
      <main className="flex flex-col items-center justify-center text-center">
      <div className="h-[53rem] flex flex-col justify-center items-center mb-72">
      {config.IndexPage.lanyard.enabled && (
            <div className="flex items-center space-x-2 mb-2">
            <div className="w-20 h-20 relative">
              {lanyardAvatar == null ? (
                <Image className="rounded-md bg-white/10 button-text mr-20" src={`https://cdn.discordapp.com/attachments/971049189377179718/1044214018618953769/unknown.png`} height={700} width={700} draggable="false" />
              ) : (
                <Image className="rounded-md bg-white/10 button-text mr-20" src={`https://cdn.discordapp.com/avatars/${config.IndexPage.lanyard.id}/${lanyardAvatar}.png`} height={700} width={700} draggable="false" />
              )}
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-start text-zinc-800 dark:text-zinc-200 transition-all duration-300 text-3xl leading-none font-semibold weight-900 button-text">{lanyardUsername}</h1>
              {!lanyardDiscriminator === "0" && (
              <span className="text-start text-2xl text-zinc-400 font-bold button-text mt-1">#{lanyardDiscriminator}</span>
              )}
            </div>
          </div>
          )}
      <h1 className="mx-auto font-semibold text-4xl md:text-5xl font-semibold sm:text-7xl text-black dark:text-white text-center button-text mt-5"><span className="text-primary">Hi there</span>, Im <span className="text-primary">{config.siteMetadata.author}</span>,</h1>
      <h1 className="leading-none text-2xl md:text-4xl font-bold mt-5 select-none">and im
      <TextLoop interval={3000} className="ml-2 max-w-2xl">
      {texts.map((text, index) => (
        <Tippy content={text.text} placement="top" key={index} delay={100} arrow={false}>
        <div>
            <h1 className="leading-none font-bold" style={{ color: text.color }}>{text.text}</h1>
        </div>
        </Tippy>
        ))}
      </TextLoop>
      .
      </h1>
      <div className="flex flex-row justify-center items-center mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
      <button onClick={() => router.push('/contact')} className="bg-primary/10 shadow-2xl hover:opacity-80 text-white font-display font-semibold text-lg px-10 py-3 rounded-md button button-text border border-primary/20 hover:bg-primary/20 active:bg-primary/30 transition duration-200" href="/contact"><i className="fas fa-envelope mr-2"></i> Contact Me</button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.94 }}
      >
      <button onClick={() => router.push('/about')} className="bg-primary/10 shadow-2xl hover:opacity-80 text-white font-display font-semibold text-lg px-10 py-3 rounded-md button button-text border border-primary/20 hover:bg-primary/20 active:bg-primary/30 transition duration-200" href="/about"><i className="fas fa-user mr-2"></i> About Me</button>
      </motion.div>
      </div>
      </div>
      </div>
      </main>

      {config.github.enabled && (
        <div className="flex flex-col items-center justify-center w-full px-10 text-center mt-40">
        <h1 className="text-5xl font-bold text-underline-2px button-text">
                  Repositories
              </h1>
              <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-5 mt-3 button-text">
                  Here are some of my repositories
                  </p>
                  <div className="flex flex-row flex-wrap flex-1 justify-center items-center gap-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {_reposData ? (
            reposData && (
              <>
                  {reposData?.slice(0, 8)?.sort((a,b) => b.stargazers_count - a.stargazers_count)?.map((_, __) => (
                    <Tilt key={__} options={{ tiltReverse: true, max: 10, scale: 1.05, speed: 500, transition: true, axis: null, reset: true, easing: "cubic-bezier(.03,.98,.52,.99)" }}
                    className="bg-gray-300/50 dark:bg-zinc-900/50 p-4 hover:bg-zinc-700/10 h-auto text-black rounded-lg w-auto button button-text hover:shadow-2xl hover:shadow-primary hover:outline hover:outline-2 hover:outline-primary border border-gray-300/50 dark:border-zinc-900/90" 
                    style={{ cursor: "pointer" }}
                    >
                      <div
                        onClick={() => window.open(_.html_url, "_blank")}
                      >
                            <div className="w-full relative">
                              <div className="flex flex-row justify-between items-center justify-center md:justify-start">
                              <img
                                src={`https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/${_.full_name}`}
                                alt={_.full_name}
                                width={1000}
                                height={1000}
                                className="rounded-lg button-text button"
                                draggable={false}
                              />
                              </div>
                            </div>
                            <p className="text-sm mt-4 md:mt-4">
                              <span className="text-sm text-black dark:text-white font-bold bg-primary/20 px-2 py-1 rounded-md mr-1 button button-text border border-primary/20">
                                {_.owner.login}
                              </span>
                              <span className="text-sm text-black dark:text-white font-bold bg-primary/20 px-2 py-1 rounded-md mr-1 button button-text border border-primary/20">
                                /
                              </span>
                              <span className="text-sm text-black dark:text-white font-bold bg-primary/20 px-2 py-1 rounded-md button button-text border border-primary/20">
                              {_.name}
                              </span>
                            </p>
                            <p className="text-sm mt-2 md:mt-4">
                              <span className="text-sm text-black dark:text-white font-bold bg-primary/20 px-2 py-1 rounded-md mr-1 button button-text border border-primary/20">
                                {_.stargazers_count} <i className="fas fa-star"></i>
                              </span>
                              <span className="text-sm text-black dark:text-white font-bold bg-primary/20 px-2 py-1 rounded-md button button-text ml-2 border border-primary/20">
                                {_.language ? _.language : 'Unknown'}
                              </span>
                              <span className="text-sm text-black dark:text-white font-bold bg-primary/20 px-2 py-1 rounded-md mr-1 button button-text ml-2 border border-primary/20">
                                {_.forks_count} <i className="fas fa-code-branch"></i>
                              </span>
                            </p>
                            <p className="text-1xl font-bold text-black dark:text-white mt-2 md:mt-4 button button-text">
                              {_.description}
                            </p>
                            </div>
                         </Tilt>
                  ))}
              </>
            )
          ) : <></>}
          </div>
        </div>
      )}

       {config.projects.enabled && (
      <div className="flex flex-col items-center justify-center w-full px-10 text-center mt-40">
            <h1 className="text-5xl font-bold text-underline-2px button-text">
                Projects
            </h1>
            <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-5 mt-3 button-text">
                Here are some of my projects
                </p>
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {_projectsData ? (
                projects ? (
                  projects?.map((p, i) => (
                    <Tilt key={i} options={{ tiltReverse: true, max: 10, scale: 1.05, speed: 500, transition: true, axis: null, reset: true, easing: "cubic-bezier(.03,.98,.52,.99)" }}
                    className="cursor-pointer w-full flex flex-col bg-gray-300/50 dark:bg-zinc-900/50 p-4 rounded-lg justify-center items-center hover:shadow-2xl hover:shadow-primary hover:outline hover:outline-2 hover:outline-primary border border-gray-300/50 dark:border-zinc-900/90"
                    >
                  <div className="w-full relative md:mt-2">
                  <Image src={p.image} width="1024" className="rounded-lg button-text" height="512" draggable="false" alt={p.title} />
                  </div>
                  <h1 className="text-2xl font-semibold md:mt-2 button-text">{p.name}</h1>
                  <p className="text-black dark:text-white text-sm button-text">{p.description}</p>
                  <div className="flex justify-center items-center grid grid-cols-1 mt-4 w-full">
                  <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.92 }}
                  >
                  {p.github === true ? <button onClick={() => router.push(p.githubLink)} target="_blank" className="mt-2 bg-primary/10 shadow-2xl text-white font-display font-semibold text-lg w-full py-2 rounded-md mr-5 button button-text border border-primary/20" href={p.githubLink}><i className="fa-brands fa-github" /> Github</button> : null}
                   </motion.div>
                  <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.92 }}
                  >
                  {p.website === true ? <button onClick={() => router.push(p.websiteLink)} target="_blank" className="mt-2 bg-primary/10 shadow-2xl text-white font-display font-semibold text-lg w-full py-2 rounded-md mr-5 button button-text border border-primary/20" href={p.websiteLink}><i className="fa-solid fa-globe" /> Website</button> : null}
                  </motion.div>
                  <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.92 }}
                  >
                  {p.invite === true ? <button onClick={() => router.push(p.inviteLink)} target="_blank" className="mt-2 bg-primary/10 shadow-2xl text-white font-display font-semibold text-lg w-full py-2 rounded-md mr-5 button button-text border border-primary/20" href={p.inviteLink}><i className="fa-brands fa-discord" /> Invite</button> : null}
                  </motion.div>
                  </div>
                  </Tilt>
                ))
                ) : <></>
            ) : (
              <div className="flex flex-col justify-center items-center">
              <i className="fal fa-spinner-third fa-spin" /> <span className="text-xl font-semibold button-text">Loading Projects...</span>
              </div>
              )}
            </div>
        </div>
      )}

      <div className="flex flex-row justify-center items-center mt-10">
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.95 }}
      >
      <button onClick={() => router.push('/projects')} className="bg-primary/10 shadow-2xl text-white font-display font-semibold text-lg px-10 py-3 rounded-md button button-text border border-primary/20 hover:bg-primary/20 active:bg-primary/30" href="/projects"><i className="fas fa-project-diagram mr-2"></i> View All Projects</button>
      </motion.div>
      </div>


      {config.skills.enabled && (
      <div className="flex flex-col items-center justify-center w-full flex-2 px-20 text-center mt-20" data-aos="fade-right">
            <h1 className="text-5xl font-bold text-underline-2px button-text">
                Skills
            </h1>
            <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-5 mt-3 button-text">
               Here are all technologies and languages i use.
                </p>
            <br />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-4 items-center mt-4">
          {_skills
            ? skills
              ? skills.map((_, __) => (
                <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    whileTap={{ y: 4 }}
                    >
                <div
                key={__}
                className="bg-gray-300/50 dark:bg-zinc-900/50 p-4 hover:opacity-80 rounded-lg w-full hover:shadow-md hover:shadow-primary hover:outline hover:outline-2 hover:outline-primary transition-all duration-200 border border-gray-300/50 dark:border-zinc-900/90"
              >
                <div className="flex justify-between items-center w-full">
                  <div className="w-[36px] h-[36px] mr-2">
                    <div className="bg-[#191932]/10 dark:bg-[#191932]/50 w-[36px] h-[36px] rounded-md">
                      <div className="flex items-center justify-center" />
                    <img
                          alt="Loading..."
                          src={_.src}
                          className="rounded-md ml-1.5 mt-1.5"
                          width="24"
                          height="24"
                          style={{ fill: "#fff!important;" }}
                        />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h1 className="text-lg font-semibold button-text text-right">{_.name}</h1>
                  </div>
                </div>
              </div>
              </motion.div>
                ))
              : Array.from({ length: 20 }).map((_, __) => (
                <div
                  key={__}
                  className="bg-gray-300/50 dark:bg-zinc-900/50 p-4 hover:bg-gray-500/50 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full border border-gray-300/50 dark:border-zinc-900/90"
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
                  className="bg-gray-300/50 dark:bg-zinc-900/50 p-4 hover:bg-gray-500/50 shadow-lg hover:shadow-xl transition-all duration-200 rounded-lg w-full border border-gray-300/50 dark:border-zinc-900/90"
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
      )}
     </div>
     </motion.div>
     </>
    )
}
