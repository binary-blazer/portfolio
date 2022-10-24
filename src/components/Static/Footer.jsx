import { Transition } from "@headlessui/react";
import Button from "components/Global/Button";
import useSWR from "hooks/swr";
import Link from "next/link";
import { useRouter } from "next/router"
import { Fragment, useState } from "react";
import config from "../../../site.config.js";

export default function Footer() {
    const router = useRouter();
    let [heartColor, setHeartColor] = useState('#FF0000');

    const socials = [
        {
            name: "Twitter",
            href: config.social.twitter,
            icon: "fab fa-twitter",
        },
        {
            name: "GitHub",
            href: config.social.github,
            icon: "fab fa-github",
        },
        {
            name: "LinkedIn",
            href: config.social.linkedin,
            icon: "fab fa-linkedin",
        },
    ];

    return <>
        <footer>
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto py-12 border-t border-gray-500/10 padding">
                <div className="mt-1 flex justify-center space-x-6">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            onClick={() => router.push(social.href)}
                            className="text-gray-400 hover:text-gray-300"
                        >
                            <span className="sr-only">{social.name}</span>
                            <i className={social.icon}></i>
                        </a>
                    ))}
                </div>
                 <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                  <p className="text-lg text-zinc-400">© 2020 - {new Date().getFullYear()} {config.siteMetadata.author}. All rights reserved.</p>
                   {/*
                   
                   Dont touch this!
                   
                   */}
                   <div className="text-right">
                    <p className="text-lg text-zinc-400 select-none">Made with <i className="fas fa-heart" style={{ color: heartColor, cursor: 'pointer' }} /> by <a onClick={() => router.push('https://janjytapyt.me')} className="text-zinc-400 hover:text-primary hover:dark:text-white">JanjyTapYT</a></p>
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
