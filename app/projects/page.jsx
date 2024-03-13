"use client";

import { useState, useEffect } from "react";
import { projects } from "@/main.config";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [repositories, setRepositories] = useState(null);
  const [selectedRepoId, setSelectedRepoId] = useState(null);
  const [currentRepoLoading, setCurrentRepoLoading] = useState(false);
  const [currentRepoFiles, setCurrentRepoFiles] = useState(null);

  const handleRepoClick = async (repo) => {
    try {
      setCurrentRepoLoading(true);
      const res = await fetch(
        `https://api.github.com/repos/binary-blazer/${repo}/contents`,
        {
          method: "GET",
        },
      );
      const files = await res.json();
      setCurrentRepoFiles(files);
      setCurrentRepoLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const res = await fetch("/api/repositories", {
          method: "GET",
        });
        const repos = await res.json();
        setRepositories(repos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 2.14 }}
        className="flex flex-col min-h-screen items-start justify-center mt-[7rem] lg:mt-0 p-8 lg:p-32 mx-auto"
      >
        <div className="flex flex-col w-full items-center lg:items-start justify-center mb-8">
          <div className="flex flex-row gap-2 items-center justify-start">
            <div className="bg-primary-500 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold">
              Projects<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="text-xl mt-2 text-center lg:text-left">
            Here are some of the projects I&apos;ve been working on recently.
          </p>
        </div>
        <div className="w-full items-start justify-center grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col w-full h-full items-center justify-center gap-4 p-4 rounded-lg shadow-lg bg-neutral-800"
            >
              <img
                src={project.banner}
                alt={project.title}
                className="w-full h-auto rounded-lg shadow-lg bg-neutral-900"
                draggable="false"
              />
              <div className="flex flex-row w-full items-center justify-start mt-2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-12 h-12 rounded-lg shadow-lg bg-neutral-900"
                  draggable="false"
                />
                <div className="flex flex-row gap-2 items-center justify-start">
                  <h3 className="text-2xl font-bold ml-2">{project.title}</h3>
                  {project.status.inProgress && (
                    <div className="text-xs text-primary-200 font-bold bg-primary-500 px-2 py-1 rounded-lg">
                      In Progress
                    </div>
                  )}
                  {project.status.complete && (
                    <div className="text-xs text-green-500 font-bold bg-green-500 px-2 py-1 rounded-lg">
                      Complete
                    </div>
                  )}
                  {project.status.paused && (
                    <div className="text-xs text-yellow-500 font-bold bg-yellow-500 px-2 py-1 rounded-lg">
                      Paused
                    </div>
                  )}
                  {project.status.cancelled && (
                    <div className="text-xs text-red-500 font-bold bg-red-500 px-2 py-1 rounded-lg">
                      Cancelled
                    </div>
                  )}
                </div>
              </div>
              <p className="text-xl text-left">{project.description}</p>
              <div className="flex flex-row gap-2 w-full items-center justify-start mt-4">
                <button
                  className="flex items-center justify-center px-6 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
                  onClick={() => router.push(project.link)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col w-full items-center lg:items-start justify-center mt-16">
          <div className="flex flex-row gap-2 items-center justify-start">
            <div className="bg-primary-500 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold">
              Repositories<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="text-xl mt-2 text-center lg:text-left">
            Here are some of the repositories I&apos;ve been working on
            recently.
          </p>
        </div>

        {!repositories && (
          <div className="flex flex-col w-full mt-2 p-2 bg-red-500/10 text-red-500 rounded-lg">
            <p className="text-xl font-bold">No repositories found.</p>
            <p className="text-lg">
              There was an error fetching the repositories. Please try again
              later.
            </p>
          </div>
        )}

        <div className="w-full items-start justify-center grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
          {repositories?.map((repository, index) => (
            <motion.div
              layoutId={index}
              key={index}
              className="flex flex-col w-full cursor-pointer h-full items-start justify-start gap-4 p-4 rounded-lg shadow-lg bg-neutral-800"
              onClick={() => {
                setSelectedRepoId(index);
                handleRepoClick(repository.name);
              }}
            >
              <div className="flex flex-col w-full h-full items-start justify-between">
                <div>
                  <div className="flex flex-row gap-2 items-center justify-start">
                    <img
                      src={repository.owner.avatar_url}
                      alt={repository.owner.login}
                      className="w-12 h-12 rounded-lg shadow-lg bg-neutral-900"
                      draggable="false"
                    />
                    <div className="flex flex-col w-full items-start justify-start">
                      <p className="text-lg font-bold">
                        {repository.owner.login}
                      </p>
                      <p className="text-sm text-gray-400">
                        {new Date(repository.updated_at).toDateString()}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mt-2">{repository.name}</h3>
                  <div className="flex flex-col w-full items-start justify-start">
                    <p className="text-lg text-left text-white/80">
                      {repository.description || "No description provided."}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col w-full mt-4">
                  {repository.full_name ? (
                    <img
                      src={
                        "https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/" +
                        repository.full_name
                      }
                      alt={repository.name}
                      className="w-full mt-4 h-auto rounded-lg shadow-lg bg-neutral-900"
                      draggable="false"
                    />
                  ) : (
                    <div className="w-full h-48 bg-neutral-900 rounded-lg shadow-lg"></div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          <AnimatePresence>
            {selectedRepoId !== null && (
              <motion.div
                layoutId={selectedRepoId}
                className="fixed inset-0 z-50 bg-neutral-900/90 flex items-center justify-center p-8 lg:p-[20rem]"
                onClick={() => setSelectedRepoId(null)}
              >
                <motion.div
                  className="flex flex-col w-full h-auto items-start justify-start p-4 rounded-lg shadow-lg bg-neutral-800"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-row gap-2 items-center justify-start">
                    <img
                      src={repositories[selectedRepoId].owner.avatar_url}
                      alt={repositories[selectedRepoId].owner.login}
                      className="w-12 h-12 rounded-lg shadow-lg bg-neutral-900"
                      draggable="false"
                    />
                    <div className="flex flex-col w-full items-start justify-start">
                      <p className="text-lg font-bold">
                        {repositories[selectedRepoId].owner.login}
                      </p>
                      <p className="text-sm text-gray-400">
                        {new Date(
                          repositories[selectedRepoId].updated_at,
                        ).toDateString()}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mt-2">
                    {repositories[selectedRepoId].name}
                  </h3>
                  <p className="text-lg text-left text-white/80">
                    {repositories[selectedRepoId].description ||
                      "No description provided."}
                  </p>
                  <div className="flex flex-col w-full mt-4">
                    <div className="flex flex-col w-full items-start justify-start">
                      {currentRepoLoading && (
                        <div className="w-full h-48 bg-neutral-900 rounded-lg shadow-lg"></div>
                      )}
                      {currentRepoFiles && (
                        <div className="w-full h-auto rounded-lg shadow-lg border border-neutral-700 overflow-auto">
                          <div className="flex flex-col w-full items-start justify-start">
                            {currentRepoFiles
                              .sort((a, b) =>
                                a.type === "dir" && b.type !== "dir" ? -1 : 1,
                              )
                              .slice(0, 7)
                              .map((file, index) => (
                                <div
                                  key={index}
                                  className="flex flex-row w-full items-center justify-start gap-2 hover:bg-neutral-700 p-2 border-b border-neutral-700 cursor-pointer"
                                  onClick={() => {
                                    router.push(
                                      `https://github.com/${repositories[selectedRepoId].owner.login}/${repositories[selectedRepoId].name}/tree/main/${file.path}`,
                                    );
                                  }}
                                >
                                  <div className="flex flex-row gap-2 w-full items-start justify-start">
                                    {file.type === "dir" ? (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                                        />
                                      </svg>
                                    ) : (
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-5 h-5"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                        />
                                      </svg>
                                    )}
                                    <p className="text-sm font-bold">
                                      {file.name}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            <div
                              className="flex flex-row w-full items-center justify-center gap-2 hover:bg-neutral-700 p-2 border-b border-neutral-700 cursor-pointer"
                              onClick={() =>
                                router.push(
                                  `https://github.com/${repositories[selectedRepoId].owner.login}/${repositories[selectedRepoId].name}`,
                                )
                              }
                            >
                              <div className="flex flex-row gap-2 w-full items-center justify-center">
                                <p className="text-sm font-medium">View All</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.main>
    </>
  );
}
