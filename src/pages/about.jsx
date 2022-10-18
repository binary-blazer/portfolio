import swr from 'hooks/swr'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useState } from 'react'
import config from '../../site.config'
import Button from 'components/Global/Button'
import { motion } from "framer-motion"

export default function About() {
    let [heartColor, setHeartColor] = useState('#4F3DFE');

    function randomColor() {
        let color = '#';
        let letters = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

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
        <div className="flex flex-col items-center justify-center w-full flex-10 px-20 text-center">
            <h1 className="text-5xl font-semibold">
                About
            </h1>
            <p className="text-xl text-white/50 font-normal text-center mb-10">
                Here's a little bit about me
                </p>
            <br />
                        <div className="w-full h-[40rem] relative mx-auto">
                        <Image style={{ zIndex: 0 }} src={config.siteMetadata.authorImage} width="111" className="rounded-full hover:scale-[1.02]" height="111" />
                        <h1 className="text-3xl font-bold mt-2 padding-2 margin mx-auto">Hey, im <span className="text-white font-semibold mt-4 text-3xl text-primary mx-auto">{config.siteMetadata.author}</span>,</h1>
                        <div className="pb-2 py-2">
                        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center mx-auto">
                        <p className="text-black dark:text-white text-2xl padding-2 font-bold mx-auto">Im a <span className="text-white text-underline-2px font-semibold mt-4 text-2xl mx-auto">{config.AboutMePage.developerGrade}</span>,</p>
                        <p className="text-black dark:text-white text-2xl padding-2 font-bold mx-auto">from <span className="text-white text-underline-2px font-semibold mt-4 text-2xl mx-auto">{config.AboutMePage.yourLand}</span>.
                        </div>
                        <br />
                        <div className="pb-4 py-4">
                        <h1 className="text-1xl font-normal">Im in love to create and programm new things. &nbsp; <br /> I also love to create new things with my friends and i love to play games. &nbsp; <br /> Thanks for reading <i onClick={() => { setHeartColor(randomColor()) }} className="fas fa-heart" style={{ color: heartColor, cursor: 'pointer' }} /></h1>
                        <div className="flex flex-row justify-center items-center mt-3 padding">
                        <Button href={config.social.github} target="_blank" className="bg-primary text-black dark:text-white font-display font-semibold text-lg px-5 py-2 rounded-md mr-5"><i className="fa-brands fa-github" /> Github</Button>
                        <Button href={config.social.twitter} target="_blank" className="bg-primary text-black dark:text-white font-display font-semibold text-lg px-5 py-2 rounded-md"><i className="fa-brands fa-twitter" /> Twitter</Button>
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
