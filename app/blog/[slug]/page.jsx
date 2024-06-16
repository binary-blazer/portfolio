"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { technologies } from "@/main.config";
import { getContents } from "@contenthook/browser";
import { AnimatePresence, motion } from "framer-motion";

export default function BlogSlug() {
  const pathname = usePathname();
  const [content, setContent] = React.useState(null);

  React.useEffect(() => {
    const fetchContent = async () => {
      const slug = pathname.split("/").pop();

      const data = await getContents({
        api_key: process.env.CONTENTHOOK_API_KEY,
      });

      const content = data.find(
        (content) => content.metadata[0].value === slug,
      );
      setContent(content);
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
        {content ? (
          <div className="mt-[14rem] flex w-full flex-col items-start justify-center xl:mt-24">
            <div className="flex w-full flex-col items-center justify-center">
              <h2 className="text-center text-4xl font-bold">
                {content.metadata[0].value}
              </h2>
              <p className="text-center text-lg text-neutral-500">
                {content.metadata[1].value}
              </p>
            </div>
            <div className="flex w-full flex-col items-start justify-center">
              <div className="flex w-full flex-col items-start justify-center">
                <Image
                  src={content.metadata[5].value}
                  alt={content.metadata[0].value}
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
                <div
                  className="mt-4 flex w-full flex-col items-start justify-center"
                  dangerouslySetInnerHTML={{
                    __html: content.metadata[2].value,
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-[14rem] flex w-full flex-col items-start justify-center xl:mt-24">
            <div className="flex w-full flex-col items-center justify-center">
              <div className="loading-dots flex w-auto flex-row items-center justify-center rounded-lg bg-neutral-800 p-4 shadow-lg">
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
                <div className="loading-dots--dot"></div>
              </div>
            </div>
          </div>
        )}
      </motion.main>
    </>
  );
}
