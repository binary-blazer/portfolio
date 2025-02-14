"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Page() {
  const router = useRouter();

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
        if (data === "Message sent successfully") {
          setEmail("");
          setFirstName("");
          setLastName("");
          setMessage("");
          setError(null);
        } else {setError(data);
        }
      });
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex min-h-screen w-full flex-col items-center justify-center lg:mt-0 px-8 lg:px-[20rem]"
    >
      <div className="mb-10 mt-[14rem] flex w-full flex-col items-start justify-center">
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
          Do you want to say hi or ask me a question? Feel free to send me a message!
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-10 lg:flex-row lg:items-start">
        <div className="flex w-full flex-col items-start justify-start gap-4 lg:w-1/2">
          <button
            className="flex w-full items-center justify-start gap-2 rounded-lg bg-neutral-900/30 backdrop-filter backdrop-blur-lg hover:bg-neutral-900/50 px-6 py-4 font-bold text-white shadow-lg transition-colors"
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
            className="flex w-full items-center justify-start gap-2 rounded-lg bg-neutral-900/30 backdrop-filter backdrop-blur-lg hover:bg-neutral-900/50 px-6 py-4 font-bold text-white shadow-lg transition-colors"
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
        <form className="flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-neutral-900/30 backdrop-filter backdrop-blur-lg p-4 shadow-lg lg:w-1/2">
          {error && (
            <p className="w-full items-center justify-center rounded-lg bg-red-500/10 p-2 text-center text-red-500">
              {error}
            </p>
          )}
          <div className="flex w-full flex-row items-center justify-start gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-lg bg-neutral-900/30 p-3 border-none ring-0 outline-none focus:ring-2 focus:ring-primary-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-lg bg-neutral-900/30 p-3 border-none ring-0 outline-none focus:ring-2 focus:ring-primary-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-neutral-900/30 p-3 border-none ring-0 outline-none focus:ring-2 focus:ring-primary-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="max-h-[20rem] min-h-[10rem] w-full rounded-lg bg-neutral-900/30 p-3 border-none ring-0 outline-none focus:ring-2 focus:ring-primary-50"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white transition-colors"
            onClick={(e) => handleSubmit(e)}
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.main>
  );
}
