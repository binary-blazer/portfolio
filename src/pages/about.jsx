import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import config from '../../site.config'
import { useRouter } from 'next/router'
import { motion } from "framer-motion"

export default function About() {
    let [ heartColor ] = useState('#ff0000')

    const [lanyardLoaded, setLanyardLoaded] = useState(false);
    const [lanyardID, setLanyardID] = useState(null);
    const [lanyardAvatar, setLanyardAvatar] = useState(null);

    const router = useRouter()

    useEffect(() => {
        setLanyardAvatar(window.localStorage.getItem("lanyard") ? JSON.parse(window.localStorage.getItem("lanyard")).discord_user.avatar : null);
        setLanyardID(window.localStorage.getItem("lanyard") ? JSON.parse(window.localStorage.getItem("lanyard")).discord_user.id : null);
        setLanyardLoaded(true);
      }, []);

    return (
        <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >

        <Head>
            <title>About | {config.siteMetadata.title}</title>
            <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
        </Head>

        <div className="mb-10 flex flex-col py-20 mx-auto">
        <div className="mt-[10rem] flex flex-col items-center justify-center w-full flex-10 px-20 text-center">
            <h1 className="text-5xl font-semibold text-underline-2px button-text">
                About
            </h1>
            <p className="text-xl text-gray-600/90 dark:text-white/50 font-bold text-center mb-10 mt-3 button-text">
                Here's a little bit about me
                </p>
            <br />
                        <div className="relative mx-auto">
                        <div className="justify-center items-center flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            style={{ width: 111, height: 111 }}
                        >
                            <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            >
                            <Image
                                src={lanyardLoaded ? `https://cdn.discordapp.com/avatars/${lanyardID}/${lanyardAvatar}.png?size=256` : "https://cdn.discordapp.com/attachments/971049189377179718/1044214018618953769/unknown.png"}
                                className="rounded-md z-[0]"
                                height="111"
                                width="111"
                                draggable="false"
                                />
                            </motion.div>
                        </motion.div>
                        </div>
                        <h1 className="text-3xl font-bold mt-2 padding-2 mx-auto max-w-sm text-black dark:text-white button-text">Hey, im <span className="font-semibold mt-4 text-3xl text-primary mx-auto max-w-sm">{config.siteMetadata.author}</span>,</h1>
                        <div>
                        <div className="flex flex-col items-center w-full flex-1 text-center">
                        <p className="text-black dark:text-white text-2xl padding-2 font-bold max-w-sm text-padding button-text">Im a <span className="text-black dark:text-white text-underline-2px font-semibold mt-4 text-2xl max-w-sm">{config.AboutMePage.developerGrade}</span>,</p>
                        <p className="text-black dark:text-white text-2xl padding-2 font-bold max-w-sm button-text">from <span className="text-black dark:text-white text-underline-2px font-semibold mt-4 text-2xl max-w-sm">{config.AboutMePage.yourLand}</span>.</p>
                        </div>
                        <br />
                        <div className="pb-4 py-4">
                        <h1 className="text-1xl font-bold button-text">Im in love to create and programm new things. &nbsp; <br /> I also love to create new things with my friends and i love to play games. &nbsp; <br /> Thanks for reading <i className="fas fa-heart" style={{ color: heartColor, cursor: 'pointer' }} /></h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 mt-10">
                        <motion.div
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.96 }}
                        >
                        <button href={config.social.github} onClick={() => router.push(config.social.github)} target="_blank" className="bg-primary/10 text-black dark:text-white font-display font-semibold text-lg w-full py-2 rounded-md mr-5 button text-white shadow-2xl transition-all duration-200 button button-text border border-primary/20 hover:bg-primary/20 active:bg-primary/30"><i className="fa-brands fa-github" /> Github</button>
                        </motion.div>
                        <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        >
                        <button href={config.social.twitter} onClick={() => router.push(config.social.twitter)} target="_blank" className="bg-primary/10 text-black dark:text-white font-display font-semibold text-lg w-full py-2 rounded-md button text-white shadow-2xl transition-all duration-200 button button-text border border-primary/20 hover:bg-primary/20 active:bg-primary/30"><i className="fa-brands fa-twitter" /> Twitter</button>
                        </motion.div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>

    </motion.div>
        </>
    );
}
