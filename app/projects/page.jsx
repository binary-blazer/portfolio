"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { config, projects } from "@/main.config";
import { AnimatePresence, motion } from "framer-motion";

export default function Page() {
  const router = useRouter();

  const [repositories, setRepositories] = useState(null);
  const [selectedRepoId, setSelectedRepoId] = useState(null);
  const [currentRepoLoading, setCurrentRepoLoading] = useState(false);
  const [currentRepoFiles, setCurrentRepoFiles] = useState(null);

  const handleRepoClick = async (repo) => {
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
        transition={{ duration: 0.5 }}
        className="mx-auto flex min-h-screen w-full flex-col items-start justify-center p-8 lg:mt-0 lg:p-32"
      >
        <div className="mb-8 mt-[14rem] flex w-full flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="bg-primary-500 rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
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
          <p className="mt-2 text-left text-xl">
            Here are some of the projects I&apos;ve been working on recently.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-center gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-neutral-800 p-4 shadow-lg"
            >
              <Image
                src={project.banner}
                alt={project.title}
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg bg-neutral-900 shadow-lg"
                draggable="false"
              />
              <div className="mt-2 flex w-full flex-row items-center justify-start">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-lg bg-neutral-900 shadow-lg"
                  draggable="false"
                />
                <div className="flex flex-row items-center justify-start gap-2">
                  <h3 className="ml-2 text-2xl font-bold">{project.title}</h3>
                  {project.status.inProgress && (
                    <div className="text-primary-200 bg-primary-500 rounded-lg px-2 py-1 text-xs font-bold">
                      In Progress
                    </div>
                  )}
                  {project.status.complete && (
                    <div className="rounded-lg bg-green-500 px-2 py-1 text-xs font-bold text-green-500">
                      Complete
                    </div>
                  )}
                  {project.status.paused && (
                    <div className="rounded-lg bg-yellow-500 px-2 py-1 text-xs font-bold text-yellow-500">
                      Paused
                    </div>
                  )}
                  {project.status.cancelled && (
                    <div className="rounded-lg bg-red-500 px-2 py-1 text-xs font-bold text-red-500">
                      Cancelled
                    </div>
                  )}
                </div>
              </div>
              <p className="text-left text-xl">{project.description}</p>
              <div className="mt-4 flex w-full flex-row items-center justify-start gap-2">
                <button
                  className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white shadow-lg transition-colors"
                  onClick={() => router.push(project.link)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 flex w-full flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="bg-primary-500 rounded-lg p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
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
          <p className="mt-2 text-left text-xl">
            Here are some of the repositories I&apos;ve been working on
            recently.
          </p>
        </div>

        {!repositories && (
          <div className="mt-2 flex w-full flex-col rounded-lg bg-red-500/10 p-2 text-red-500">
            <p className="text-xl font-bold">No repositories found.</p>
            <p className="text-lg">
              There was an error fetching the repositories. Please try again
              later.
            </p>
          </div>
        )}

        <div className="mt-10 grid w-full grid-cols-1 items-start justify-center gap-4 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
          {repositories?.map((repository, index) => (
            <motion.div
              layoutId={index}
              key={index}
              className="flex h-full w-full cursor-pointer flex-col items-start justify-start gap-4 rounded-lg bg-neutral-800 p-4 shadow-lg"
              onClick={() => {
                setSelectedRepoId(index);
                handleRepoClick(repository?.name);
              }}
              style={
                selectedRepoId === index
                  ? {
                      opacity: 0,
                      transition: "all 0.3s ease-in-out",
                      zIndex: -100,
                    }
                  : {
                      opacity: 1,
                      transition: "all 0.3s ease-in-out",
                      zIndex: 0,
                    }
              }
            >
              <div className="flex h-full w-full flex-col items-start justify-between">
                <div>
                  <div className="flex flex-row items-center justify-start gap-2">
                    <Image
                      src={repository.owner.avatar_url}
                      alt={repository.owner.login}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-lg bg-neutral-900 shadow-lg"
                      draggable="false"
                    />
                    <div className="flex w-full flex-col items-start justify-start">
                      <p className="text-lg font-bold">
                        {repository.owner.login}
                      </p>
                      <p className="text-sm text-gray-400">
                        {new Date(repository.updated_at).toDateString()}
                      </p>
                    </div>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold">{repository.name}</h3>
                  <div className="flex w-full flex-col items-start justify-start">
                    <p className="text-left text-lg text-white/80">
                      {repository.description || "No description provided."}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex w-full flex-col">
                  {repository.full_name ? (
                    <Image
                      src={
                        "https://opengraph.githubassets.com/15ced7abddd056302fa4e531c75f0c1e3510242eca654c93dd8a8f2b5cc92d44/" +
                        repository.full_name
                      }
                      width={1920}
                      height={1080}
                      alt={repository.name}
                      className="mt-4 h-auto w-full rounded-lg bg-neutral-900 shadow-lg"
                      draggable="false"
                    />
                  ) : (
                    <div className="h-48 w-full rounded-lg bg-neutral-900 shadow-lg" />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedRepoId !== null &&
              selectedRepoId &&
              repositories[selectedRepoId] && (
                <>
                  <motion.div
                    layoutId={selectedRepoId}
                    className="fixed inset-0 z-[101] flex h-full w-full cursor-pointer items-center justify-center p-8 lg:p-[20rem]"
                    onClick={() => setSelectedRepoId(null)}
                  >
                    <motion.div
                      className="max-h-auto z-[102] flex h-auto w-auto min-w-[60%] cursor-auto flex-col items-start justify-start rounded-lg bg-neutral-800 p-4 shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="flex w-full flex-row items-start justify-between">
                        <div className="flex w-2/3 flex-row items-center justify-start gap-2">
                          <Image
                            src={
                              repositories[selectedRepoId]?.owner?.avatar_url
                            }
                            alt={repositories[selectedRepoId]?.owner?.login}
                            width={48}
                            height={48}
                            className="h-12 w-12 rounded-lg bg-neutral-900 shadow-lg"
                            draggable="false"
                          />
                          <div className="flex w-full flex-col items-start justify-start">
                            <p className="text-lg font-bold">
                              {repositories[selectedRepoId]?.owner?.login}
                            </p>
                            <p className="text-sm text-gray-400">
                              {new Date(
                                repositories[selectedRepoId]?.updated_at,
                              ).toDateString()}
                            </p>
                          </div>
                        </div>
                        <div className="flex w-1/3 flex-row items-start justify-end gap-3">
                          <div className="flex flex-row items-center justify-start gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="h-5 w-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                              />
                            </svg>
                            <h1 className="text-md font-bold">
                              {repositories[selectedRepoId]?.stargazers_count}
                            </h1>
                          </div>
                          <div className="flex flex-row items-center justify-start gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 256 256"
                              id="git-fork"
                              className="h-5 w-5 text-white"
                            >
                              <rect width="256" height="256" fill="none"></rect>
                              <circle
                                cx="128"
                                cy="188"
                                r="28"
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="12"
                              ></circle>
                              <circle
                                cx="188"
                                cy="67.998"
                                r="28"
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="12"
                              ></circle>
                              <circle
                                cx="68"
                                cy="67.998"
                                r="28"
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="12"
                              ></circle>
                              <path
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="12"
                                d="M68,95.99756v8.002a24,24,0,0,0,24.00049,24l72-.00146a24,24,0,0,0,23.99951-24V95.99756"
                              ></path>
                              <line
                                x1="128.002"
                                x2="128"
                                y1="128"
                                y2="160"
                                fill="none"
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="12"
                              ></line>
                            </svg>
                            <h1 className="text-md font-bold">
                              {repositories[selectedRepoId]?.forks_count}
                            </h1>
                          </div>
                        </div>
                      </div>
                      <h3 className="mt-2 text-2xl font-bold">
                        {repositories[selectedRepoId]?.name}
                      </h3>
                      <p className="text-left text-lg text-white/80">
                        {repositories[selectedRepoId]?.description
                          ? repositories[selectedRepoId].description.length > 60
                            ? repositories[selectedRepoId].description.slice(
                                0,
                                60,
                              ) + "..."
                            : repositories[selectedRepoId].description ||
                              "No description provided."
                          : "No description provided."}
                      </p>
                      <div className="mt-4 flex w-full flex-col">
                        <div className="flex w-full flex-col items-start justify-start">
                          {currentRepoFiles && (
                            <div className="h-auto w-full overflow-auto rounded-lg border border-neutral-700 shadow-lg">
                              <div className="flex w-full flex-col items-start justify-start">
                                {currentRepoFiles ? (
                                  currentRepoFiles
                                    ?.sort((a, b) =>
                                      a?.type === "dir" && b?.type !== "dir"
                                        ? -1
                                        : 1,
                                    )
                                    .slice(0, 7)
                                    .map((file, index) => (
                                      <div
                                        key={index}
                                        className="flex w-full cursor-pointer flex-row items-center justify-between gap-2 border-b border-neutral-700 p-2 hover:bg-neutral-700"
                                        onClick={() => {
                                          router.push(
                                            `https://github.com/${repositories[selectedRepoId]?.owner?.login}/${repositories[selectedRepoId]?.name}/tree/main/${file?.path}`,
                                          );
                                        }}
                                      >
                                        <div className="flex w-full flex-row items-start justify-start gap-1">
                                          {file?.type === "dir" ? (
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              fill="none"
                                              viewBox="0 0 24 24"
                                              strokeWidth={1.5}
                                              stroke="currentColor"
                                              className="h-5 w-5"
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
                                              class="h-5 w-5"
                                            >
                                              <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                                              />
                                            </svg>
                                          )}
                                          <p className="text-sm font-medium">
                                            {file?.name}
                                          </p>
                                        </div>
                                        <div className="flex w-full flex-row items-center justify-end gap-2">
                                          <p className="text-sm text-gray-400">
                                            {formatBytes(file?.size)}
                                          </p>
                                        </div>
                                      </div>
                                    ))
                                ) : (
                                  <div className="flex w-full flex-row items-center justify-center p-2">
                                    <p className="text-lg font-bold">
                                      No files found.
                                    </p>
                                  </div>
                                )}
                              </div>
                              <div
                                className="flex w-full cursor-pointer flex-row items-center justify-center gap-2 border-b border-neutral-700 p-2 hover:bg-neutral-700"
                                onClick={() =>
                                  router.push(
                                    `https://github.com/${repositories[selectedRepoId]?.owner?.login}/${repositories[selectedRepoId]?.name}`,
                                  )
                                }
                              >
                                <div className="flex w-full flex-row items-center justify-center gap-2">
                                  <div className="flex items-center gap-1">
                                    {currentRepoFiles?.length > 7 && (
                                      <p className="text-sm font-medium text-gray-400">
                                        {currentRepoFiles?.length -
                                          7 +
                                          " more files."}
                                      </p>
                                    )}
                                    <p className="text-sm font-medium">
                                      {"View Repository"}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </>
              )}
          </AnimatePresence>

          <div className="mt-4 flex w-full flex-row items-center justify-start gap-2">
            <button
              className="bg-primary-500 hover:bg-primary-600 flex items-center justify-center rounded-lg px-6 py-2 font-bold text-white shadow-lg transition-colors"
              onClick={() =>
                router.push(
                  `https://github.com/${config.github.username}?tab=repositories`,
                )
              }
            >
              View All Repositories
            </button>
          </div>
        </div>
      </motion.main>

      <div
        className="fixed inset-0 z-[100] h-full w-full cursor-pointer bg-neutral-900/90"
        style={
          selectedRepoId !== null
            ? {
                opacity: 1,
                zIndex: 100,
                backdropFilter: "blur(10px)",
                transition: "all 0.25s ease-in-out",
              }
            : {
                backdropFilter: "blur(0px)",
                opacity: 0,
                zIndex: -100,
                transition: "all 0.25s ease-in-out",
              }
        }
        onClick={() => setSelectedRepoId(null)}
      />
    </>
  );
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
