import { Transition } from "@headlessui/react"
import useSWR from "hooks/swr";
import Link from "next/link";
import { useRouter } from "next/router"
import { Fragment, useState } from "react";
import config from "../../../site.config.js";
import { motion } from "framer-motion"

export default function Footer() {
    const router = useRouter();
    let [heartColor, setHeartColor] = useState('#FF0000');

    const socials = [
        {
            name: "Twitter",
            icon: "fab fa-twitter",
            link: config.social.twitter,
        },
        {
            name: "GitHub",
            icon: "fab fa-github",
            link: config.social.github,
        },
        {
            name: "Discord",
            icon: "fab fa-discord",
            link: config.social.discord,
        }
    ]

    return <>
        <footer>
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto py-12 border-t border-gray-500/10 padding">
                <div className="mt-1 flex justify-center space-x-6">
                    {socials.map((social) => (
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                        <a
                            key={social.name}
                            onClick={() => router.push(social.link)}
                            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200 button-text"
                            href={social.link}
                        >
                            <span className="sr-only">{social.name}</span>
                            <i className={social.icon}></i>
                        </a>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-6 flex justify-center space-x-6 mb-3">
                <motion.div
                         whileHover={{ scale: 1.05 }}
                         whileTap={{ scale: 0.95 }}
                        >
                         <a
                             onClick={() => router.push("https://github.com/JanjyTapYT/portfolio")}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="whitespace-nowrap text-base font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 button-text cursor-pointer transition-all duration-200"
                         >
                             <i className="fa-brands fa-github button" /> <span className="button">Open Source</span>
                         </a>
                </motion.div>
                </div>

                 <div className="items-center justify-between gap-4">
                  <p className="text-1xl text-center text-zinc-400 button-text">© 2020 - {new Date().getFullYear()} {config.siteMetadata.author}. All rights reserved.</p>
                   {/*
                   
                   Dont touch this!
                   
                   */}
                   <div className="text-center mt-1">
                   <p className="text-lg text-zinc-400 select-none button-text">Made with <i className="fas fa-heart" style={{ color: heartColor, cursor: 'pointer' }} /> by <button onClick={() => router.push('https://binaryblazer.me')} className="text-zinc-400 hover:text-primary hover:dark:text-white button" href="https://binaryblazer.me"><motion.div whileTap={{ scale: 0.95 }}>BinaryBlazer</motion.div></button></p>
                </div>
                  {/*
                  
                   Dont touch this!
                   
                   */}
            </div>
        </div>
            </div>
        </footer>
    </>;
}
