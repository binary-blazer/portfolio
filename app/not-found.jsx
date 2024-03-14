"use client";

import { config } from "@/main.config";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-screen"
    >
      {config.underConstruction && (
        <div className="bg-yellow-500/10  p-3 mb-[2.5rem] backdrop-filter backdrop-blur-l rounded-lg shadow-lg 2xl:text-lg">
          This page might be under construction!
        </div>
      )}

      <h1 className="text-6xl font-bold text-neutral-100 text-glitch">
        404 - Not Found!
      </h1>

      <p className="text-md lg:text-xl text-neutral-300 text-center 2xl:text-2xl mt-2 lg:mt-4">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-6 flex flex-wrap flex-row gap-2">
        <button
          className="flex items-center justify-center px-10 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
          onClick={() => router.back()}
        >
          Go Back
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
