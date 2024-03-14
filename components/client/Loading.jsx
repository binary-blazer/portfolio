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
            // className="bg-primary-500 p-4 rounded-lg"
            className="p-4 rounded-lg"
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
