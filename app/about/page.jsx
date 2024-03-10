export default function About() {
  return (
    <>
      <main className="flex flex-row min-h-screen items-center justify-center p-32 mx-auto">
        <div className="flex flex-col w-2/3 items-start justify-center">
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
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-center">
              About Me<span className="text-primary-500">.</span>
            </h2>
          </div>
          <p className="text-xl mt-2">
            I'm a full-stack developer with a passion for open-source software
            and the web. I've been developing for the web for over 6 years and
            have a strong understanding of web technologies and best practices.
            I'm also a strong advocate for open-source software and have
            contributed to many projects over the years.
          </p>
        </div>
        <div className="flex flex-row gap-2 w-1/3 items-center justify-end">
          <img
            src="https://avatars.githubusercontent.com/u/81481526?v=4"
            alt="BinaryBlazer"
            className="w-64 h-64 rounded-xl border-4 border-primary-500 shadow-lg bg-neutral-800 hover:transform hover:translate-y-[-4px] transition-transform duration-150 ease-in-out"
            draggable="false"
          />
        </div>
      </main>
    </>
  );
}
