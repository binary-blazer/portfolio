"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
      className="flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-3xl lg:text-4xl font-bold text-center text-neutral-100">
        Something went wrong!
      </h1>

      <p className="text-md lg:text-xl text-neutral-300 text-center 2xl:text-2xl mt-2 lg:mt-4">
        Something really bad happened. Please try again later or contact
        support.
      </p>

      <div className="mt-6 flex flex-wrap flex-row gap-2">
        <button
          className="flex items-center justify-center px-10 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
          onClick={reset}
        >
          Try Again
        </button>
        <Link
          href="/contact"
          className="flex items-center justify-center px-10 bg-neutral-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-neutral-600 transition-colors"
        >
          Contact Support
        </Link>
      </div>
    </motion.main>
  );
}
