"use client";

import { config } from "@/main.config";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: 2.14 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      {config.underConstruction && (
        <div className="flex bg-yellow-500/10 rounded-full p-3 mb-[2.5rem] backdrop-filter backdrop-blur-lg">
          This page might be under construction.
        </div>
      )}

      <h1 className="text-6xl font-bold text-neutral-100 not_found_text_glitch">
        404
      </h1>
      <p className="text-lg text-neutral-300">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
    </motion.main>
  );
}
