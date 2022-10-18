import swr from 'hooks/swr'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import config from '../../site.config'
import Button from 'components/Global/Button'
import { motion } from "framer-motion"

export default function About() {
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

        <div className="mb-10 flex flex-col py-20">
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <h1 className="text-5xl font-semibold">
                About
            </h1>
            <p className="text-xl text-white/50 font-normal text-center mb-10">
                Here's a little bit about me
                </p>
            <br />
                        <div className="w-full h-[20rem] relative">
                        <Image style={{ zIndex: 0 }} src={config.siteMetadata.authorImage} width="111" className="rounded-full hover:scale-[1.02]" height="111" />
                        <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold mt-2 padding-2">Hey, im {config.siteMetadata.author}</h1>
                        <p className="text-black dark:text-white text-1xl padding-2">Im a Fullstack developer from Germany</p>
                        <br />
                        <div className="flex flex-row justify-center items-center mt-10 padding mx-auto">
                            Im a Fullstack developer from Germany. Im in love to create and programm new things.
                            I also love to create new things with my friends and i love to play games.
                            Im also a big fan of the games Minecraft and Roblox and i love to play them with my friends.
                            I realy dont know what to write here so i will stop writing here.
                            Thanks for reading ❤️
                        </div>
                        <div className="flex flex-row justify-center items-center mt-3 padding">
                        <Button href={config.social.github} target="_blank" className="bg-primary text-black dark:text-white font-display font-semibold text-lg px-5 py-2 rounded-md mr-5"><i className="fa-brands fa-github" /> Github</Button>
                        <Button href={config.social.twitter} target="_blank" className="bg-primary text-black dark:text-white font-display font-semibold text-lg px-5 py-2 rounded-md"><i className="fa-brands fa-twitter" /> Twitter</Button>
                        </div>
                        </div>
                    </div>
        </div>
        </div>
        </motion.div>
        </>
    );
}