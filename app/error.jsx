"use client";

import { motion } from "framer-motion";

export default function Error({ error }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: 2.14 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      6<h1 className="text-6xl font-bold text-neutral-100">{error}</h1>
      <p className="text-lg text-neutral-300">
        An error occurred while trying to load the page.
      </p>
    </motion.main>
  );
}
