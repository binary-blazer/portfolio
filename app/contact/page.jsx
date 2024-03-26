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
  const [blacklistedWords, setBlacklistedWords] = useState([]);

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
          setBlacklistedWords([]);
          setError(null);
        } else {
          if (data.includes("Message contains not allowed words")) {
            setError(
              data + ". Please remove the following words from your message:",
            );
            const flaggedWords = data.replace(
              "Message contains not allowed words ",
              "",
            );
            const array = flaggedWords.split(",");
            setBlacklistedWords(array);
          } else if (data.includes("Email contains not allowed words")) {
            setError(
              data + " Please remove the following words from your email:",
            );
            const flaggedWords = data
              .replace("Email contains not allowed words ", "")
              .trim();
            const array = flaggedWords.split(",").map((word) => word.trim());
            setBlacklistedWords(array);
          } else if (data.includes("Last name contains not allowed words")) {
            setError(
              data + " Please remove the following words from your last name:",
            );
            const flaggedWords = data
              .replace("Last name contains not allowed words ", "")
              .trim();
            const array = flaggedWords.split(",").map((word) => word.trim());
            setBlacklistedWords(array);
          } else if (data.includes("First name contains not allowed words")) {
            setError(
              data + " Please remove the following words from your first name:",
            );
            const flaggedWords = data
              .replace("First name contains not allowed words ", "")
              .trim();
            const array = flaggedWords.split(",").map((word) => word.trim());
            setBlacklistedWords(array);
          } else {
            setBlacklistedWords([]);
            setError(data);
          }
        }
      });
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="mx-auto flex min-h-screen w-full flex-col items-center justify-center p-8 lg:mt-0 lg:p-32"
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
          Want to work together or just say hi? Feel free to reach out to me.
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-start gap-10 lg:flex-row lg:items-start">
        <div className="flex w-full flex-col items-start justify-start gap-4 lg:w-1/2">
          <button
            className="flex w-full items-center justify-start gap-2 rounded-lg bg-neutral-800 px-6 py-4 font-bold text-white shadow-lg transition-colors hover:bg-neutral-700"
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
            className="flex w-full items-center justify-start gap-2 rounded-lg bg-neutral-800 px-6 py-4 font-bold text-white shadow-lg transition-colors hover:bg-neutral-700"
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
        <form className="flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-neutral-800 p-4 shadow-lg lg:w-1/2">
          {error && (
            <p className="w-full items-center justify-center rounded-lg bg-red-500/10 p-2 text-center text-red-500">
              {error}
              {blacklistedWords.length > 0 && (
                <ul className="mt-4 grid grid-cols-1 gap-2 rounded-lg bg-red-500/20 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {blacklistedWords.map((word, index) => (
                    <li key={index} className="text-red-400">
                      {word}
                    </li>
                  ))}
                </ul>
              )}
            </p>
          )}
          <div className="flex w-full flex-row items-center justify-start gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full rounded-lg bg-neutral-700 p-3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full rounded-lg bg-neutral-700 p-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-neutral-700 p-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className={`max-h-[20rem] min-h-[10rem] w-full rounded-lg bg-neutral-700 p-3 ${
              blacklistedWords && "border-red-500"
            }`}
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
