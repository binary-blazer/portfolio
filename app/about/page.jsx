"use client";

import React from "react";
import { technologies } from "@/main.config";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [currentTab, setCurrentTab] = React.useState(technologies[0]);
  const tabs = technologies.map((tab) => (
    <button
      key={tab.name}
      onClick={() => setCurrentTab(tab)}
      className={`${
        currentTab.name === tab.name
          ? "bg-primary-500 text-neutral-100"
          : "bg-neutral-800 text-primary-500"
      } px-4 py-2 rounded-lg mb-4`}
    >
      {tab.name}
    </button>
  ));

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 2.14 }}
        className="flex flex-col min-h-screen items-center justify-center mt-[7rem] lg:mt-0 p-8 lg:p-32 mx-auto"
      >
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start justify-center">
          <div className="flex flex-col w-full lg:w-2/3 items-center lg:items-start justify-center">
            <div className="flex flex-row gap-2 items-center justify-start">
              <div className="bg-primary-500 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-center">
                About Me<span className="text-primary-500">.</span>
              </h2>
            </div>
            <p className="text-xl mt-2 text-center lg:text-left">
              I&apos;m a full-stack developer with a passion for open-source
              software and the web. I&apos;ve been developing for the web for
              over 6 years and have a strong understanding of web technologies
              and best practices. I&apos;m also a strong advocate for
              open-source software and have contributed to many projects over
              the years.
            </p>
          </div>
          <div className="flex flex-row gap-2 w-full lg:w-1/3 items-center justify-center mt-10 lg:mt-10 lg:justify-end">
            <img
              src="https://avatars.githubusercontent.com/u/81481526?v=4"
              alt="BinaryBlazer"
              className="w-64 h-64 rounded-xl border-4 border-primary-500 shadow-lg bg-neutral-800 hover:transform hover:translate-y-[-4px] transition-transform duration-150 ease-in-out"
              draggable="false"
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-center lg:items-start justify-center mt-[15rem]">
          <div className="flex flex-row gap-2 items-center justify-start">
            <div className="bg-primary-500 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-center">
              Technologies I Use<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="text-xl mt-2 text-center lg:text-left">
            I have experience with a wide range of technologies, from front-end
            frameworks like React and Vue to back-end frameworks like Express
            and Django. I also have experience with cloud platforms like AWS and
            Google Cloud, and have worked with databases like MongoDB and
            PostgreSQL. I&apos;m always looking to learn new technologies and
            expand my skillset.
          </p>
        </div>
        <div className="mt-8 w-full">
          <div className="flex flex-row gap-2 items-center justify-start overflow-x-auto">
            {tabs}
          </div>
        </div>
        <div className="flex flex-col w-full items-start justify-center mt-16">
          <h3 className="text-xl font-bold text-center">{currentTab.name}</h3>
          <motion.div
            className="gap-2 w-full  mt-2 items-center justify-start grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
          >
            <AnimatePresence>
              {currentTab.technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="bg-neutral-800 gap-2 flex flex-row items-center justify-start p-2 w-full rounded-lg text-center transition-transform duration-150 ease-in-out transform hover:translate-y-[-4px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                >
                  <div className="bg-neutral-700 p-2 rounded-md">
                    <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                  </div>
                  {tech.name}
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.main>
    </>
  );
}
