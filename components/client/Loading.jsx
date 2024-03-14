"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

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
          className="fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-neutral-900"
        >
          <motion.div
            exit={{ scale: 0 }}
            // className="bg-primary-500 p-4 rounded-lg"
            className="rounded-lg p-4"
          >
            <div className="loading-dots flex flex-row items-center justify-center">
              <div className="loading-dots--dot"></div>
              <div className="loading-dots--dot"></div>
              <div className="loading-dots--dot"></div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
