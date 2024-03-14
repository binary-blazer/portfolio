"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
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
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen items-center justify-center mt-[7rem] lg:mt-0 p-8 lg:p-32 mx-auto"
    >
      <div className="flex flex-col w-full items-start justify-center mb-10">
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
        <p className="text-xl mt-2 text-left">
          Want to work together or just say hi? Feel free to reach out to me.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 w-full items-center lg:items-start justify-start">
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
            onClick={(e) => handleSubmit(e)}
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.main>
  );
}
