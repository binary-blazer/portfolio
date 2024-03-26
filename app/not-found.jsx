"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { config } from "@/main.config";
import { motion } from "framer-motion";

export default function NotFound() {
  const router = useRouter();

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen flex-col items-center justify-center"
    >
      {config.underConstruction && (
        <div className="backdrop-blur-l  mb-[2.5rem] rounded-lg bg-yellow-500/10 p-3 shadow-lg backdrop-filter 2xl:text-lg">
          This page might be under construction!
        </div>
      )}

      <h1 className="text-glitch text-4xl font-bold text-neutral-100 lg:text-5xl 2xl:text-6xl">
        404 - Not Found!
      </h1>

      <p className="text-md mt-2 text-center text-neutral-300 lg:mt-4 lg:text-xl 2xl:text-2xl">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-6 flex flex-row flex-wrap gap-2">
        <button
          className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-10 py-2 font-bold text-white shadow-lg transition-colors"
          onClick={() => router.back()}
        >
          Go Back
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
