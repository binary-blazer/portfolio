import { Transition } from "@headlessui/react";
import Button from "components/Global/Button";
import { useTheme } from "../../context/theme.js";
import useSWR from "hooks/swr";
import Link from "next/link";
import { useRouter } from "next/router"
import { Fragment, useState } from "react";
import config from "../../../site.config.js";

export default function Header() {
    const pages = config.pages;

    const { isTheme, toggleTheme } = useTheme();

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                 <div className="flex items-center gap-4">
                     <Link href="/">
                         <a className="text-2xl font-bold transition-all duration-200">{config.siteMetadata.author}</a>
                     </Link>
                 </div>
                   <div className="-mr-2 -my-2 md:hidden">
                   <a
                             onClick={() => setIsOpen(!isOpen)}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="bg-primary shadow-2xl shadow-primary text-2xl text-white hover:text-white hover:dark:text-white cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200"
                         >
                             <i className="text-2xl fas fa-bars" />
                         </a>
                </div>
                     <nav className="hidden md:flex space-x-10">
                         {pages.map((page) => (
                             <Link href={page.href} key={page.name}>
                                 <a
                                     className={`${
                                         router.pathname === page.href
                                             ? "text-gray-900 dark:text-gray-100"
                                             : "text-gray-500 dark:text-gray-400"
                                     } hover:text-gray-900 dark:hover:text-gray-100 font-semibold`}
                                 >
                                     {router.pathname === page.href ? (
                                         <span className="border-b-2 border-black dark:border-white padding"> <i className={`${page.icon.active} text-gray-900 dark:text-gray-100`} /> {page.name}</span>
                                     ) : (
                                         <span> <i className={`${page.icon.default} text-black dark:text-white padding-2`} /> {page.name}</span>
                                     )}
                                 </a>
                             </Link>
                         ))}
                     </nav>
                     <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                         <a
                             onClick={() => router.push(config.social.github)}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="whitespace-nowrap text-base font-semibold text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                         >
                             <i className="fa-brands fa-github" /> GitHub
                         </a>
 
                         <div className="ml-4 relative flex-shrink-0">
                         <div className="flex items-center gap-4">
                         <a
                             onClick={() => router.push(config.social.twitter)}
                             target="_blank"
                             rel="noopener noreferrer"
                             className="bg-primary shadow-2xl shadow-primary text-2xl text-white hover:text-white hover:dark:text-white cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200"
                         >
                             <i className="fa-brands fa-twitter" />
                         </a>
                         </div>
                         </div>
                         <div className="-mr-2 -my-2 md:hidden">
                         <button
                             onClick={() => setIsOpen(!isOpen)}
                             type="button"
                             className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                             aria-expanded="false"
                         >
                             <i className="fa-solid fa-bars" />
                         </button>
                         </div>
 
                         <div className="ml-4 relative flex-shrink-0">
                         <div className="flex items-center gap-4">
                         <div onClick={() => toggleTheme()} className="bg-primary shadow-2xl shadow-primary text-2xl text-white hover:text-white hover:dark:text-white cursor-pointer w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-200">
                         {isTheme === 'dark' ? <i className="fas fa-moon" /> : <i className="fas fa-sun" />}
                     </div>
                 </div>
                 </div>
             </div>
             </div>
             </div>
             
             <Transition
            as={Fragment}
            show={isOpen ? true : false}
            enter='transform transition-all duration-200'
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave='transform transition-all duration-200'
            leaveTo="translate-x-full opacity-0"
            leaveFrom="translate-x-0 opacity-100"
        >
            <div style={{ zIndex: 9999 }} className="p-6 bg-white dark:bg-[#0B0A1F] h-full fixed w-full top-0 left-0">
                <div className="flex justify-between w-full items-center">
                <div className="flex items-center gap-4">
                     <Link href="/">
                         <a className="text-2xl font-bold transition-all duration-200 text-white">{config.siteMetadata.author}</a>
                     </Link>
                 </div>
                    <p onClick={() => {
                        setIsOpen(!isOpen)
                        document.documentElement.classList.remove('overflow-hidden');
                    }} className="cursor-pointer hover:bg-[#0B0A1F]-700 transition-all duration-200 w-12 h-12 flex justify-center items-center bg-primary rounded-xl">
                        <i className="fal fa-times text-xl" />
                    </p>
                </div>
                <div className="space-y-6 flex flex-col mt-6 w-full">
                    {pages.map((i, _) => (
                        <Link href={i?.href} passHref key={_}>
                            <div className="relative flex flex-col h-full items-center">
                                <p className={`cursor-pointer hover:bg-zinc-700/50 w-full h-full px-4 py-2 rounded-lg transition-all duration-200 ${router.asPath === i.href ? `text-primary font-semibold` : 'text-white/100 hover:text-primary/100 font-semibold bg-black'}`}> {i.name}</p>
                                {router.asPath === i.href && (
                                    <div className="bg-primary h-full w-1 rounded-xl absolute left-0" />
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
                
            </div>
        </Transition>
         </>
        );
};