"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { colors, fonts, items } from "@/main.config";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsColorsOpen, setSettingsColorsOpen] = useState(false);
  const [settingsFontsOpen, setSettingsFontsOpen] = useState(false);
  const [settingsSizesOpen, setSettingsSizesOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("blue");
  const [currentFont, setCurrentFont] = useState("inter");
  const [socialsOpen, setSocialsOpen] = useState(false);
  const navItemRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const { offsetLeft, offsetWidth } = navItemRefs.current[index];
    setIndicatorStyle({
      left: offsetLeft - 5,
      width: offsetWidth + 10,
      bottom: -3,
    });
  };

  const changeColor = (color) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", color.name.toLowerCase());
      window.location.reload();
    }
  };

  const changeFont = (font) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("font", font);
      window.location.reload();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = window.localStorage.getItem("theme");
      const font = window.localStorage.getItem("font");
      if (theme) {
        setCurrentTheme(theme);
      }
      if (font) {
        setCurrentFont(font);
      }
    }
  }, []);

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
      <header className="fixed top-0 flex flex-row items-center justify-between w-full px-8 lg:px-32 py-4 backdrop-filter backdrop-blur-lg bg-neutral-900 z-50">
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
              <div className="flex flex-col items-center w-full justify-center gap-2 lg:hidden">
                <button
                  className="flex items-center w-full justify-center px-3 py-2 bg-transparent text-white rounded-2xl hover:bg-white/5 transition-colors"
                  onClick={() => router.push("/")}
                >
                  Home
                </button>
                <button
                  className="flex items-center w-full justify-center px-3 py-2 bg-transparent text-white rounded-2xl hover:bg-white/5 transition-colors"
                  onClick={() => router.push("/about")}
                >
                  About
                </button>
                <button
                  className="flex items-center w-full justify-center px-3 py-2 bg-transparent text-white rounded-2xl hover:bg-white/5 transition-colors"
                  onClick={() => router.push("/blog")}
                >
                  Blog
                </button>
                <button
                  className="flex items-center w-full justify-center px-3 py-2 bg-transparent text-white rounded-2xl hover:bg-white/5 transition-colors"
                  onClick={() => router.push("/projects")}
                >
                  Projects
                </button>
                <button
                  className="flex items-center w-full justify-center px-3 py-2 bg-transparent text-white rounded-2xl hover:bg-white/5 transition-colors"
                  onClick={() => router.push("/contact")}
                >
                  Contact
                </button>
                <div className="border-b border-neutral-800 w-full"></div>
              </div>
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
        <div className="hidden lg:flex flex-row gap-4 items-center justify-center relative">
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
          <div className="relative">
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
            <div
              className="absolute bg-neutral-900 rounded-2xl p-2 transform translate-x-[-7rem] translate-y-2 lg:translate-y-[10px] lg:translate-x-0 shadow-lg border border-neutral-800 flex flex-col gap-2 items-start justify-center"
              style={{
                display: settingsOpen ? "flex" : "none",
                transition: "transform 300ms ease-in-out",
              }}
            >
              <div className="relative">
                <button
                  className="flex items-center justify-start gap-2 w-full text-white hover:bg-white/5 px-8 p-2 rounded-2xl transition-colors"
                  onClick={() => {
                    setSettingsColorsOpen(!settingsColorsOpen);
                    setSettingsFontsOpen(false);
                    setSettingsSizesOpen(false);
                  }}
                >
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
                      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                    />
                  </svg>
                  Colors
                </button>
                <div
                  className="absolute bg-neutral-900 rounded-2xl p-2 shadow-lg border border-neutral-800 flex flex-col gap-2 items-start justify-center"
                  style={{
                    display: settingsColorsOpen ? "flex" : "none",
                    transform: "translateX(-180px) translateY(-30px)",
                    transition: "transform 300ms ease-in-out",
                  }}
                >
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      className={`flex items-center justify-start gap-2 w-full text-white px-8 p-2 rounded-2xl transition-colors ${currentTheme === color.name.toLocaleLowerCase() ? "bg-white/5" : "hover:bg-white/5"}`}
                      onClick={() => changeColor(color)}
                    >
                      <div
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: color.color }}
                      ></div>
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>
              <button
                className="flex items-center justify-start gap-2 w-full text-white hover:bg-white/5 px-8 p-2 rounded-2xl transition-colors"
                onClick={() => {
                  setSettingsFontsOpen(!settingsFontsOpen);
                  setSettingsColorsOpen(false);
                  setSettingsSizesOpen(false);
                }}
              >
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
                    d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                  />
                </svg>
                Fonts
              </button>
              <div
                className="absolute bg-neutral-900 rounded-2xl px-2 py-1 shadow-lg border border-neutral-800 flex flex-col gap-2 items-start justify-center"
                style={{
                  display: settingsFontsOpen ? "flex" : "none",
                  transform: "translateX(-180px) translateY(60px)",
                  transition: "transform 300ms ease-in-out",
                }}
              >
                {fonts.map((font) => (
                  <button
                    key={font.name}
                    className={`flex text-center items-center justify-start gap-2 w-full text-white px-8 p-2 rounded-2xl transition-colors ${font.font === currentFont ? "bg-white/5" : "hover:bg-white/5"}`}
                    onClick={() => changeFont(font.font)}
                  >
                    {font.name.replace("_", "")}
                  </button>
                ))}
              </div>
              <div className="border-b border-neutral-800 w-full"></div>
              <button
                className="gap-2 w-full text-white hover:bg-white/5 px-8 p-2 rounded-2xl transition-colors"
                onClick={() => router.push("/socials/github")}
              >
                Source
              </button>
            </div>
          </div>
          <button
            className="hidden lg:flex items-center justify-center px-6 bg-primary-500 text-white font-bold py-2 rounded-lg shadow-lg hover:bg-primary-600 transition-colors"
            onClick={() => router.push("/contact")}
          >
            Let&apos;s Connect
          </button>
        </div>
      </header>
    </>
  );
}
