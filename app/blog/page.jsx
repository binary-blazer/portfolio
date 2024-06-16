"use client";

import React from "react";
import Image from "next/image";
import { technologies } from "@/main.config";
import { getContents } from "@contenthook/browser";
import { AnimatePresence, motion } from "framer-motion";

export default function Blog() {
  const [contents, setContents] = React.useState(null);

  const handlePostClick = (slug) => () => {
    if (typeof window !== "undefined") window.location.href = `/blog/${slug}`;
  };

  React.useEffect(() => {
    const fetchContents = async () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const data = await getContents({
        api_key: process.env.CONTENTHOOK_API_KEY,
      });
      console.log(data);
      setContents(data);
    };

    fetchContents();
  }, []);

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex min-h-screen w-full flex-col items-center justify-center p-8 lg:mt-0 lg:p-32"
      >
        <div className="mt-[14rem] flex w-full flex-col items-start justify-center xl:mt-24">
          <div className="flex w-full flex-col items-center justify-center">
            <h2 className="text-center text-4xl font-bold">Blog</h2>
            <p className="text-center text-lg text-neutral-500">
              A collection of blog posts that I have written.
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-center">
            {contents ? (
              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {contents.map((content) => (
                  <div
                    key={content.metadata[0].value}
                    className="mt-4 flex w-full cursor-pointer flex-col items-start justify-center rounded-lg bg-neutral-800 p-4 shadow-lg transition-opacity duration-200 ease-in-out hover:opacity-80"
                    onClick={handlePostClick(content.metadata[0].value)}
                  >
                    <Image
                      src={content.metadata[5].value}
                      alt={content.metadata[0].value}
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                    <h3 className="mt-4 text-lg font-bold">
                      {content.metadata[0].value}
                    </h3>
                    <p className="text-neutral-500">
                      {content.metadata[1].value}
                    </p>
                    <div className="mt-4 flex w-full flex-row items-center justify-start">
                      {content.metadata[3].value.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="mr-2 rounded-md bg-neutral-700 p-2 text-xs font-bold text-neutral-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex w-full flex-col items-center justify-center">
                <div className="mt-8 flex w-1/2 flex-col rounded-lg bg-red-500/10 p-2 text-red-500">
                  <p className="text-xl font-bold">No Blog Posts Found</p>
                  <p className="text-lg">
                    There was an error/problem fetching the blog posts. Please
                    try again later.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.main>
    </>
  );
}
