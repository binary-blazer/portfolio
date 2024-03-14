"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Error({ reset }) {
  React.useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen flex-col items-center justify-center"
    >
      <h1 className="text-center text-3xl font-bold text-neutral-100 lg:text-4xl">
        Something went wrong!
      </h1>

      <p className="text-md mt-2 text-center text-neutral-300 lg:mt-4 lg:text-xl 2xl:text-2xl">
        Something really bad happened. Please try again later or contact
        support.
      </p>

      <div className="mt-6 flex flex-row flex-wrap gap-2">
        <button
          className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-10 py-2 font-bold text-white shadow-lg transition-colors"
          onClick={reset}
        >
          Try Again
        </button>
        <Link
          href="/contact"
          className="flex items-center justify-center rounded-lg bg-neutral-500 px-10 py-2 font-bold text-white shadow-lg transition-colors hover:bg-neutral-600"
        >
          Contact Support
        </Link>
      </div>
    </motion.main>
  );
}
