"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { projects } from "@/main.config";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const aboutControls = useAnimation();

  const projectsControls = useAnimation();
  const contactControls = useAnimation();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const border1Ref = useRef();
  const border2Ref = useRef();
  const border3Ref = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, firstName, lastName, message }),
    })
      .then((res) => res.text())
      .then((data) => {
        if (data === "Message sent successfully") {
          setEmail("");
          setFirstName("");
          setLastName("");
          setMessage("");
          setError(null);
        } else {
          setError(data);
        }
      });
  };

  useEffect(() => {
    const borders = [
      { ref: border1Ref, controls: controls1 },
      { ref: border2Ref, controls: controls2 },
      { ref: border3Ref, controls: controls3 },
    ];
    let currentBorderIndex = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          borders[currentBorderIndex].controls.start("visible");
          observer.unobserve(entry.target);
          currentBorderIndex += 1;
          if (currentBorderIndex < borders.length) {
            const nextBorder = borders[currentBorderIndex].ref.current;
            if (nextBorder) {
              observer.observe(nextBorder);
            }
          }
        }
      },
      { threshold: 0.5 },
    );

    const firstBorder = borders[currentBorderIndex].ref.current;
    if (firstBorder) {
      observer.observe(firstBorder);
    }

    return () => {
      if (currentBorderIndex < borders.length) {
        const borderToUnobserve = borders[currentBorderIndex].ref.current;
        if (borderToUnobserve) {
          observer.unobserve(borderToUnobserve);
        }
      }
    };
  }, [controls1, controls2, controls3]);

  useEffect(() => {
    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutControls.start("visible");
        }
      },
      { threshold: 0.5 },
    );

    if (aboutRef.current) {
      aboutObserver.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        aboutObserver.unobserve(aboutRef.current);
      }
    };
  }, [aboutControls]);

  useEffect(() => {
    const projectsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projectsControls.start("visible");
        }
      },
      { threshold: 0.5 },
    );

    if (projectsRef.current) {
      projectsObserver.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        projectsObserver.unobserve(projectsRef.current);
      }
    };
  }, [projectsControls]);

  useEffect(() => {
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contactControls.start("visible");
        }
      },
      { threshold: 0.5 },
    );

    if (contactRef.current) {
      contactObserver.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        contactObserver.unobserve(contactRef.current);
      }
    };
  }, [contactControls]);

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex min-h-screen flex-col items-center justify-center px-8 lg:px-[15rem]"
      >
        <div className="flex w-full flex-col items-center justify-center">
          <div className="mb-4 rounded-lg bg-neutral-900/30 p-2 font-medium shadow-lg backdrop-blur-lg backdrop-filter 2xl:text-lg">
            <div className="hi">👋</div> Hi There, I&apos;m BinaryBlazer
          </div>
          <h1 className="text-center text-3xl font-bold lg:text-4xl 2xl:text-5xl">
            I Build{" "}
            <span className="from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent">
              Websites
            </span>
            ,{" "}
            <span className="from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent">
              APIs
            </span>
            ,{" "}
            <span className="from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent">
              NPM Packages
            </span>{" "}
            and{" "}
            <span className="from-primary-400 to-primary-500 bg-gradient-to-r bg-clip-text text-transparent">
              More
            </span>{" "}
            <span className="rocket text-3xl">🚀</span>
          </h1>
          <p className="text-md mt-2 text-center lg:mt-4 lg:text-xl 2xl:text-2xl">
            I&apos;m a full-stack developer with a passion for open-source
            software and the web.
          </p>
        </div>
        <div className="mt-4 flex w-full flex-row items-center justify-center gap-2">
          <button
            className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-10 py-2 font-bold text-white shadow-lg transition-colors"
            onClick={() => router.push("/blog")}
          >
            Blog
          </button>
          <button
            className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-10 py-2 font-bold text-white shadow-lg transition-colors"
            onClick={() => router.push("/projects")}
          >
            Projects
          </button>
        </div>
      </motion.main>

      <motion.div
        ref={border1Ref}
        initial="hidden"
        animate={controls1}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%", transition: { duration: 0.8, delay: 0 } },
        }}
        className="mx-auto px-8 lg:px-[20rem]"
      >
        <div className="mb-4 mt-4 w-full border-t border-neutral-900" />
      </motion.div>

      <motion.section
        ref={aboutRef}
        initial="hidden"
        animate={aboutControls}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          },
        }}
        id="about"
        className="mx-auto flex min-h-screen w-full flex-col items-center justify-center px-8 py-8 lg:flex-row lg:items-start lg:px-[20rem] lg:py-32"
      >
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
            software and the web. I&apos;ve been developing for the web for over
            7 years and have a strong understanding of web technologies and best
            practices. I&apos;m also a strong advocate for open-source software
            and have contributed to many projects over the years.
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
      </motion.section>

      <motion.div
        ref={border2Ref}
        initial="hidden"
        animate={controls2}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%", transition: { duration: 0.8, delay: 0 } },
        }}
        className="mx-auto px-8 lg:px-[20rem]"
      >
        <div className="mb-4 mt-4 w-full border-t border-neutral-900" />
      </motion.div>

      <motion.section
        ref={projectsRef}
        initial="hidden"
        animate={projectsControls}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          },
        }}
        id="projects"
        className="mx-auto flex min-h-screen w-full flex-col items-start justify-center bg-gradient-to-b from-transparent via-neutral-950/90 to-neutral-950 px-8 py-8 lg:px-[20rem] lg:py-32"
      >
        <div className="flex w-full flex-col items-start justify-center">
          <div className="mb-8 flex w-full flex-col items-start justify-center">
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
                    d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-bold">
                Projects<span className="text-primary-500">.</span>
              </h2>
            </div>
            <p className="mt-2 text-left text-xl">
              Here are some of the projects I&apos;ve been working on recently.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 items-start justify-center gap-4 lg:grid-cols-2">
            {projects.slice(0, 2).map((project, index) => (
              <div
                key={index}
                className="z-[-1] flex h-full w-full flex-col items-center justify-between gap-4 rounded-lg bg-neutral-800/30 p-4 shadow-lg backdrop-blur-lg backdrop-filter"
              >
                <div className="flex w-full flex-col items-start justify-start">
                  <Image
                    src={project.banner}
                    alt={project.title}
                    width={512}
                    height={256}
                    unoptimized
                    className="h-auto w-full rounded-lg bg-neutral-900 shadow-lg"
                    draggable="false"
                  />
                  <div className="mt-2 flex w-full flex-row items-center justify-start">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-lg bg-neutral-900 shadow-lg"
                      draggable="false"
                    />
                    <div className="flex flex-row items-center justify-start gap-2">
                      <h3 className="ml-2 text-2xl font-bold">
                        {project.title}
                      </h3>
                      {project.status.inProgress && (
                        <div className="text-primary-200 bg-primary-500 rounded-lg px-2 py-1 text-xs font-bold">
                          In Progress
                        </div>
                      )}
                      {project.status.complete && (
                        <div className="rounded-lg bg-green-500 px-2 py-1 text-xs font-bold text-green-200">
                          Complete
                        </div>
                      )}
                      {project.status.paused && (
                        <div className="rounded-lg bg-yellow-500 px-2 py-1 text-xs font-bold text-yellow-200">
                          Paused
                        </div>
                      )}
                      {project.status.cancelled && (
                        <div className="rounded-lg bg-red-500 px-2 py-1 text-xs font-bold text-red-200">
                          Cancelled
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="mt-4 text-left text-xl">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex w-full flex-row items-center justify-start gap-2">
                  {/*
                <button
                  className="flex items-center justify-center px-6 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
                  onClick={() => router.push(project.link)}
                >
                  View Project
                </button>
                */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-end gap-2">
          <button
            className="bg-primary-500 hover:bg-primary-600 -mt-20 flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white shadow-lg transition-colors"
            onClick={() => router.push("/projects")}
          >
            View All Projects
          </button>
        </div>
      </motion.section>

      <motion.div
        ref={border3Ref}
        initial="hidden"
        animate={controls3}
        variants={{
          hidden: { width: 0 },
          visible: { width: "100%", transition: { duration: 0.8, delay: 0 } },
        }}
        className="mx-auto px-8 lg:px-[20rem]"
      >
        <div className="mb-4 mt-4 w-full border-t border-neutral-900" />
      </motion.div>

      <motion.section
        ref={contactRef}
        initial="hidden"
        animate={contactControls}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0 },
          },
        }}
        id="contact"
        className="mx-auto flex min-h-screen w-full flex-col items-start justify-center px-8 py-8 lg:px-[20rem] lg:py-32"
      >
        <div className="mb-10 flex w-full flex-col items-start justify-center">
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
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                ></path>
              </svg>
            </div>
            <h2 className="text-4xl font-bold">
              Contact Me<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="mt-2 text-left text-xl">
            Do you want to say hi or ask me a question? Feel free to send me a
            message!
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:justify-start">
          <div className="flex w-full flex-col items-start justify-start gap-4 lg:w-1/2">
            <button
              className="flex w-full items-center justify-start gap-2 rounded-lg bg-neutral-900/30 px-6 py-4 font-bold text-white shadow-lg backdrop-blur-lg backdrop-filter transition-colors hover:bg-neutral-900/50"
              onClick={() => router.push("mailto:me@binaryblazer.me")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-message-square"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Email Me
            </button>
            <button
              className="transition-color flex w-full items-center justify-start gap-2 rounded-lg bg-neutral-900/30 px-6 py-4 font-bold text-white shadow-lg backdrop-blur-lg backdrop-filter hover:bg-neutral-900/50"
              onClick={() => router.push("https://twitter.com/BinaryBlazer")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-twitter"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
              Twitter
            </button>
          </div>
          <form className="flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-neutral-900/30 p-4 shadow-lg backdrop-blur-lg backdrop-filter lg:w-1/2">
            {error && (
              <p className="w-full items-center justify-center rounded-lg bg-red-500/10 p-2 text-center text-red-500">
                {error}
              </p>
            )}
            <div className="flex w-full flex-row items-center justify-start gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="focus:ring-primary-500 w-full rounded-lg border-none bg-neutral-900/30 p-3 outline-none ring-0 focus:ring-2"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="focus:ring-primary-500 w-full rounded-lg border-none bg-neutral-900/30 p-3 outline-none ring-0 focus:ring-2"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="focus:ring-primary-500 w-full rounded-lg border-none bg-neutral-900/30 p-3 outline-none ring-0 focus:ring-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="focus:ring-primary-500 max-h-[20rem] min-h-[10rem] w-full rounded-lg border-none bg-neutral-900/30 p-3 outline-none ring-0 focus:ring-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white transition-colors"
              onClick={(e) => sendEmail(e)}
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    </>
  );
}
