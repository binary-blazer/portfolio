"use client";

import React from "react";
import Image from "next/image";
import { technologies } from "@/main.config";
import { AnimatePresence, motion } from "framer-motion";

export default function About() {
  const [currentTab, setCurrentTab] = React.useState(technologies[0]);
  const [shouldAnimate, setShouldAnimate] = React.useState(true);

  const tabs = technologies.map((tab) => (
    <button
      key={tab.name}
      onClick={() => setCurrentTab(tab)}
      className={`${
        currentTab.name === tab.name
          ? "bg-primary-500 text-neutral-100"
          : "text-primary-500 bg-neutral-800"
      } mb-4 rounded-lg px-4 py-2`}
    >
      {tab.name}
    </button>
  ));

  React.useEffect(() => {
    setShouldAnimate(false);
    const timer = setTimeout(() => setShouldAnimate(true), 0);
    return () => clearTimeout(timer);
  }, [currentTab]);

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex min-h-screen w-full flex-col items-center justify-center p-8 lg:mt-0 lg:p-32"
      >
        <div className="mt-[14rem] flex w-full flex-col items-start justify-center lg:flex-row">
          <div className="flex w-full flex-col items-start justify-center lg:w-2/3">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="bg-primary-500 rounded-lg p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <h2 className="text-center text-4xl font-bold">
                About Me<span className="text-primary-500">.</span>
              </h2>
            </div>
            <p className="mt-2 text-left text-xl">
              I&apos;m a full-stack developer with a passion for open-source
              software and the web. I&apos;ve been developing for the web for
              over 6 years and have a strong understanding of web technologies
              and best practices. I&apos;m also a strong advocate for
              open-source software and have contributed to many projects over
              the years.
            </p>
          </div>
          <div className="mt-10 flex w-full flex-row items-center justify-center gap-2 lg:mt-10 lg:w-1/3 lg:justify-end">
            <Image
              src="https://avatars.githubusercontent.com/u/81481526?v=4"
              width={256}
              height={256}
              alt="BinaryBlazer"
              className="border-primary-500 h-64 w-64 rounded-xl border-4 bg-neutral-800 shadow-lg transition-transform duration-150 ease-in-out hover:translate-y-[-4px] hover:transform"
              draggable="false"
            />
          </div>
        </div>
        <div className="mt-[15rem] flex w-full flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="bg-primary-500 rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h2 className="text-center text-4xl font-bold">
              Technologies I Use<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="mt-2 text-left text-xl">
            I have experience with a wide range of technologies, from front-end
            frameworks like React and Vue to back-end frameworks like Express
            and Django. I also have experience with cloud platforms like AWS and
            Google Cloud, and have worked with databases like MongoDB and
            PostgreSQL. I&apos;m always looking to learn new technologies and
            expand my skillset.
          </p>
        </div>
        <div className="mt-8 w-full">
          <div className="flex flex-row items-center justify-start gap-2 overflow-x-auto">
            {tabs}
          </div>
        </div>
        <div className="mt-16 flex w-full flex-col items-start justify-center">
          <h3 className="text-center text-xl font-bold">{currentTab.name}</h3>
          <motion.div
            className="mt-2 grid  w-full grid-cols-2 items-center justify-start gap-2 md:grid-cols-3 lg:grid-cols-4"
            transition={{ duration: 0.2, staggerChildren: 0.15 }}
          >
            {currentTab.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex w-full transform flex-row items-center justify-start gap-2 rounded-lg bg-neutral-800 p-2 text-center transition-transform duration-150 ease-in-out hover:translate-y-[-4px]"
                initial={shouldAnimate ? { opacity: 0, y: 10 } : {}}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
                exit={shouldAnimate ? { opacity: 0, y: 10 } : {}}
                transition={
                  shouldAnimate ? { duration: 0.2, delay: index * 0.1 } : {}
                }
              >
                <div className="rounded-md bg-neutral-700 p-2">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    className="h-6 w-6"
                    width={24}
                    height={24}
                  />
                </div>
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}
