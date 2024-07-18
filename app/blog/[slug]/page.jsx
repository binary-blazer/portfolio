"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function BlogSlug() {
  const pathname = usePathname();
  const [content, setContent] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchContent = async () => {
      const slug = pathname.split("/").pop();

      const res = await fetch("/api/blog/content", {
        method: "POST",
        body: JSON.stringify({ fileName: slug }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());

      setContent(res.content);
      setLoading(false);
    };
    fetchContent();
  }, [pathname]);

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex min-h-screen w-full flex-col items-center justify-center p-8 lg:mt-0 lg:p-32"
      >
        {loading ? (
          <div className="mt-[14rem] flex w-full flex-col items-start justify-center xl:mt-24">
            <div className="flex w-full flex-col items-center justify-center">
              <div className="loading-dots flex w-auto flex-row items-center justify-center rounded-lg bg-neutral-800 p-4 shadow-lg">
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-[14rem] flex w-full flex-col items-start justify-center xl:mt-24">
            <div className="max-w-1/2 flex w-full flex-col items-start justify-center">
              <h2 className="text-center text-5xl font-bold lg:text-6xl">
                {content.metadata.title}
              </h2>
              <p className="text-md text-center text-neutral-500">
                {new Date(content.metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <div className="mt-6 flex w-full flex-row items-center justify-start">
                {content.metadata.tags.map((tag) => (
                  <div
                    key={tag}
                    className="mr-2 rounded-lg bg-neutral-800 px-2 py-1 text-neutral-200"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-6 mt-12 w-full border-b border-neutral-700"></div>
            <div className="flex w-full flex-col items-start justify-center">
              <div className="flex w-full flex-col items-start justify-center">
                <div
                  className="lg:prose-md prose prose-invert mt-14 flex w-full flex-col items-start justify-center"
                  dangerouslySetInnerHTML={{
                    __html: content.html,
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </motion.main>
    </>
  );
}
