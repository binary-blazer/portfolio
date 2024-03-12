"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { projects, testimonials } from "@/main.config";

export default function Home() {
  const router = useRouter();

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [addTestimonial, setAddTestimonial] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current?.offsetLeft);
    setScrollLeft(scrollContainerRef.current?.scrollLeft);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current?.offsetLeft;
    const walk = (x - startX) * 2;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

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
        if (data !== "Message sent successfully") {
          setError(data);
        } else {
          setEmail("");
          setFirstName("");
          setLastName("");
          setMessage("");
          setError(null);
        }
      });
  };

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-center p-8 lg:p-32 mx-auto">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="bg-neutral-800 font-medium p-2 rounded-lg shadow-lg mb-4">
            <div className="hi">👋</div> Hi There, I&apos;m BinaryBlazer
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-center">
            I Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
              Websites
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
              APIs
            </span>
            ,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
              NPM Packages
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-500">
              More
            </span>{" "}
            <span className="text-3xl rocket">🚀</span>
          </h1>
          <p className="text-md lg:text-xl text-center">
            I&apos;m a full-stack developer with a passion for open-source
            software and the web.
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full items-center justify-center mt-4">
          <button
            className="flex items-center justify-center px-10 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
            onClick={() => router.push("/blog")}
          >
            Blog
          </button>
          <button
            className="flex items-center justify-center px-10 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
            onClick={() => router.push("/projects")}
          >
            Projects
          </button>
        </div>
      </main>

      <div className="px-8 lg:px-32 mx-auto">
        <div className="border-t border-neutral-700 w-full mt-4 mb-4"></div>
      </div>

      <section
        id="about"
        className="flex flex-col lg:flex-row min-h-screen items-center lg:items-start justify-center lg:justify-between p-8 lg:p-32 mx-auto"
      >
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
            software and the web. I&apos;ve been developing for the web for over
            6 years and have a strong understanding of web technologies and best
            practices. I&apos;m also a strong advocate for open-source software
            and have contributed to many projects over the years.
          </p>
        </div>
        <div className="flex flex-row gap-2 w-full lg:w-1/3 items-center justify-center mt-10 lg:mt-0 lg:justify-end">
          <img
            src="https://avatars.githubusercontent.com/u/81481526?v=4"
            alt="BinaryBlazer"
            className="w-64 h-64 rounded-xl border-4 border-primary-500 shadow-lg bg-neutral-800 hover:transform hover:translate-y-[-4px] transition-transform duration-150 ease-in-out"
            draggable="false"
          />
        </div>
      </section>

      <div className="px-8 lg:px-32 mx-auto">
        <div className="border-t border-neutral-700 w-full mt-4 mb-4"></div>
      </div>

      <section
        id="projects"
        className="flex flex-col min-h-screen items-start justify-center p-8 lg:p-32 mx-auto"
      >
        <div className="flex flex-col w-full items-center lg:items-start justify-center mb-8">
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
                  d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold">
              Projects<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="text-xl mt-2 text-center lg:text-left">
            Here are some of the projects I&apos;ve been working on recently.
          </p>
        </div>
        <div className="w-full items-start justify-center grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.slice(0, 2).map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-full h-full items-center justify-center gap-4 p-4 rounded-lg shadow-lg bg-neutral-800"
            >
              <img
                src={project.banner}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg bg-neutral-900"
                draggable="false"
              />
              <div className="flex flex-row w-full items-center justify-start mt-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-12 h-12 rounded-lg shadow-lg bg-neutral-900"
                  draggable="false"
                />
                <div className="flex flex-row gap-2 items-center justify-start">
                  <h3 className="text-2xl font-bold ml-2">{project.title}</h3>
                  {project.status.inProgress && (
                    <div className="text-xs text-primary-200 font-bold bg-primary-500 px-2 py-1 rounded-lg">
                      In Progress
                    </div>
                  )}
                  {project.status.complete && (
                    <div className="text-xs text-green-500 font-bold bg-green-500 px-2 py-1 rounded-lg">
                      Complete
                    </div>
                  )}
                  {project.status.paused && (
                    <div className="text-xs text-yellow-500 font-bold bg-yellow-500 px-2 py-1 rounded-lg">
                      Paused
                    </div>
                  )}
                  {project.status.cancelled && (
                    <div className="text-xs text-red-500 font-bold bg-red-500 px-2 py-1 rounded-lg">
                      Cancelled
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xl text-left">{project.description}</p>
              <div className="flex flex-row gap-2 w-full items-center justify-start mt-4">
                <button
                  className="flex items-center justify-center px-6 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
                  onClick={() => router.push(project.link)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="px-8 lg:px-32 mx-auto">
        <div className="border-t border-neutral-700 w-full mt-4 mb-4"></div>
      </div>

      <section
        id="testimonials"
        className="flex flex-col min-h-screen items-start justify-center p-8 lg:p-32 mx-auto"
      >
        <div className="flex flex-col w-full items-center lg:items-start justify-center mb-8">
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
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                ></path>
              </svg>
            </div>
            <h2 className="text-4xl font-bold">
              Testimonials<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="text-xl mt-2">
            Here are some testimonials from people I&apos;ve worked with.
          </p>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex flex-row max-w-full h-full items-center justify-start gap-4 overflow-x-auto"
          style={{
            scrollSnapType: "x mandatory",
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={(e) => onMouseDown(e)}
          onMouseUp={() => onMouseUp()}
          onMouseLeave={() => onMouseLeave()}
          onMouseMove={(e) => onMouseMove(e)}
        >
          <div
            className="flex flex-col mb-4 min-w-[28rem] w-full h-[10.25rem] cursor-pointer items-center justify-center gap-4 p-4 rounded-lg shadow-lg border border-neutral-800 hover:border-neutral-500 hover:bg-neutral-700/20 transition-all duration-300 ease-in-out"
            onMouseEnter={() => setAddTestimonial(true)}
            onMouseLeave={() => setAddTestimonial(false)}
            onClick={() => router.push("/contact")}
          >
            <div
              className={`flex flex-col text-3xl px-10 py-8 ${addTestimonial ? "bg-neutral-700" : "bg-neutral-800"} rounded-lg shadow-lg items-center justify-center transition-all duration-300 ease-in-out`}
            >
              +
            </div>
          </div>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col mb-4 min-w-[38rem] w-full h-full items-start justify-start gap-4 p-4 rounded-lg shadow-lg bg-neutral-800"
            >
              <div className="flex flex-col w-full items-start justify-center">
                <h3 className="text-2xl font-bold">{testimonial.name}</h3>
                <h4 className="text-xl font-bold text-primary-500">
                  {testimonial.title}
                </h4>
              </div>
              <p className="text-lg text-left">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="px-8 lg:px-32 mx-auto">
        <div className="border-t border-neutral-700 w-full mt-4 mb-4"></div>
      </div>

      <section
        id="contact"
        className="flex flex-col min-h-screen items-start justify-center p-8 lg:p-32 mx-auto"
      >
        <div className="flex flex-col w-full items-center lg:items-start justify-center mb-10">
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
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                ></path>
              </svg>
            </div>
            <h2 className="text-4xl font-bold">
              Contact Me<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="text-xl mt-2 text-center lg:text-left">
            Want to work together or just say hi? Feel free to reach out to me.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full items-center lg:items-start justify-center lg:justify-start">
          <div className="flex flex-col w-full lg:w-1/2 items-start justify-start gap-4">
            <button
              className="flex w-full items-center justify-start px-6 py-4 gap-2 bg-neutral-800 text-white font-bold rounded-lg shadow-lg hover:bg-neutral-700 transition-colors"
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
              className="flex w-full items-center justify-start px-6 py-4 gap-2 bg-neutral-800 text-white font-bold rounded-lg shadow-lg hover:bg-neutral-700 transition-colors"
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
          <form className="flex flex-col w-full lg:w-1/2 items-start justify-start gap-4 bg-neutral-800 p-4 rounded-lg shadow-lg">
            {error && (
              <p className="text-red-500 bg-red-500/10 p-2 w-full items-center justify-center text-center rounded-lg">
                {error}
              </p>
            )}
            <div className="flex flex-row gap-4 w-full items-center justify-start">
              <input
                type="text"
                placeholder="First Name"
                className="w-full p-3 rounded-lg bg-neutral-700"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 rounded-lg bg-neutral-700"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-neutral-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-lg bg-neutral-700"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center justify-center px-6 bg-primary-500 text-white font-bold py-2 rounded-lg hover:bg-primary-600 transition-colors"
              onClick={(e) => sendEmail(e)}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
