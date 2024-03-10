"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [socialsOpen, setSocialsOpen] = useState(false);
  const navItemRefs = useRef([]);

  const items = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];

  const handleMouseEnter = (index) => {
    const { offsetLeft, offsetWidth } = navItemRefs.current[index];
    setIndicatorStyle({
      left: offsetLeft - 5,
      width: offsetWidth + 10,
      bottom: -3,
    });
  };

  useEffect(() => {
    if (pathname === "/") {
      setIndicatorStyle({
        left: navItemRefs.current[0].offsetLeft - 5,
        width: navItemRefs.current[0].offsetWidth + 10,
        bottom: -3,
      });
    } else if (pathname === "/about") {
      setIndicatorStyle({
        left: navItemRefs.current[1].offsetLeft - 5,
        width: navItemRefs.current[1].offsetWidth + 10,
        bottom: -3,
      });
    } else if (pathname.includes("/blog")) {
      setIndicatorStyle({
        left: navItemRefs.current[2].offsetLeft - 5,
        width: navItemRefs.current[2].offsetWidth + 10,
        bottom: -3,
      });
    } else if (pathname === "/projects") {
      setIndicatorStyle({
        left: navItemRefs.current[3].offsetLeft - 5,
        width: navItemRefs.current[3].offsetWidth + 10,
        bottom: -3,
      });
    }
  }, [pathname]);

  return (
    <>
      <header className="fixed top-0 flex flex-row items-center justify-between w-full px-32 py-4 backdrop-filter backdrop-blur-lg bg-neutral-900 z-50">
        <div className="flex flex-row gap-4 items-center justify-center">
          <div>
            <button
              className="flex items-center justify-center px-3 py-2 bg-transparent text-white font-bold rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setSocialsOpen(!socialsOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`feather feather-chevron-down ${socialsOpen ? "transform rotate-180" : ""} transition-transform duration-300 ease-in-out`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div
              className="absolute bg-neutral-900 rounded-2xl p-2 shadow-lg border border-neutral-800 flex flex-col gap-2 items-start justify-center"
              style={{
                display: socialsOpen ? "flex" : "none",
                transform: "translateY(10px)",
                transition: "transform 300ms ease-in-out",
              }}
            >
              <a
                href="https://twitter.com/BinaryBlazer"
                className="flex items-center justify-start gap-2 w-full text-white hover:bg-white/5 px-8 p-2 rounded-2xl transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter w-4 h-4"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                Twitter
              </a>
              <a
                href="https://github.com/binary-blazer"
                className="flex items-center justify-start gap-2 w-full text-white hover:bg-white/5 px-8 p-2 rounded-2xl transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github h-4 w-4"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <div
            className="flex flex-row gap-4 cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out"
            onClick={() => router.push("/")}
          >
            <h1 className="text-2xl font-bold">
              BinaryBlazer<span className="text-primary-500">.</span>
            </h1>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center relative">
          <nav className="flex flex-row items-center justify-center gap-4">
            {items.map((item, index) => (
              <div
                className="relative"
                key={item.name}
                ref={(el) => (navItemRefs.current[index] = el)}
              >
                <a
                  href={item.href}
                  onMouseEnter={() => handleMouseEnter(index)}
                >
                  {item.name}
                </a>
              </div>
            ))}
            <div
              className="z-[-1] absolute bottom-0 left-0 h-[2rem] bg-white/5 rounded-md transition-all duration-300 ease-in-out"
              style={{
                ...indicatorStyle,
              }}
            ></div>
          </nav>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center">
          <button
            className="flex items-center justify-center px-3 py-2 bg-transparent text-white font-bold rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setSettingsOpen(!settingsOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`feather feather-settings ${settingsOpen ? "transform rotate-360" : ""} transition-transform duration-600 ease-in-out`}
            >
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </button>
          <button
            className="flex items-center justify-center px-6 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
            onClick={() => router.push("/contact")}
          >
            Let&apos;s Connect
          </button>
        </div>
      </header>
    </>
  );
}
