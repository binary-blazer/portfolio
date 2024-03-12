"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          className="fixed z-[9999] top-0 left-0 w-screen h-screen bg-neutral-900 flex items-center justify-center"
        >
          <motion.div
            exit={{ scale: 0 }}
            className="bg-primary-500 p-4 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v.01M12 20v.01M4.93 4.93l.01-.01M19.07 19.07l.01-.01M2 12h.01M20 12h.01M4.93 19.07l.01-.01M19.07 4.93l.01-.01"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
