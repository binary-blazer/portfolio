"use client";

import { useState, useEffect } from "react";
import { projects } from "@/main.config";
import GetRepositories from "hooks/getRepositories";

export default function Page() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    setRepositories(GetRepositories());
  }, []);

  return (
    <>
      <main className="flex flex-col min-h-screen items-start justify-center mt-[7rem] lg:mt-0 p-8 lg:p-32 mx-auto">
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

        {repositories.length === 0 && (
          <div className="flex flex-col w-full mt-2 p-2 bg-red-500/10 text-red-500 rounded-lg">
            <p className="text-xl font-bold">No repositories found.</p>
            <p className="text-lg">
              There was an error fetching the repositories. Please try again
              later.
            </p>
          </div>
        )}

        <div className="w-full items-start justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repositories.map((repository, index) => (
            <div
              key={index}
              className="flex flex-col w-full h-full items-start justify-start gap-4 p-4 rounded-lg shadow-lg bg-neutral-800"
            >
              <div className="flex flex-row w-full items-center justify-start">
                <img
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                  className="w-12 h-12 rounded-lg shadow-lg bg-neutral-900"
                  draggable="false"
                />
                <div className="flex flex-col w-full items-start justify-start ml-2">
                  <h3 className="text-2xl font-bold">{repository.name}</h3>
                  <p className="text-lg text-left">{repository.description}</p>
                </div>
              </div>
              <div className="flex flex-row gap-2 w-full items-center justify-start mt-4">
                <button
                  className="flex items-center justify-center px-6 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
                  onClick={() => router.push(repository.html_url)}
                >
                  View Repository
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
