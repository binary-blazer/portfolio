"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { colors, fonts, items } from "@/main.config";
import ScreenSizr from "@sdevs/screen-sizr";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const screensize = ScreenSizr.getScreenSize();

  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    bottom: -3,
  });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsColorsOpen, setSettingsColorsOpen] = useState(false);
  const [settingsFontsOpen, setSettingsFontsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("Blue");
  const [currentFont, setCurrentFont] = useState("inter");
  const [socialsOpen, setSocialsOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("laptop");
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
    if (screensize.width < 640) {
      setCurrentScreen("mobile");
      setIndicatorStyle({
        left: navItemRefs.current[0].offsetLeft - 5,
        width: navItemRefs.current[0].offsetWidth + 10,
        bottom: -3,
      });
    } else if (screensize.width < 1024) {
      setCurrentScreen("tablet");
      setIndicatorStyle({
        left: navItemRefs.current[0].offsetLeft - 5,
        width: navItemRefs.current[0].offsetWidth + 10,
        bottom: -3,
      });
    } else if (screensize.width < 1280) {
      setCurrentScreen("laptop");
    } else {
      setCurrentScreen("desktop");
    }
  }, [screensize.width]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = window.localStorage.getItem("theme");
      const font = window.localStorage.getItem("font");
      if (theme) {
        const filteredTheme = theme.charAt(0).toUpperCase() + theme.slice(1);
        setCurrentTheme(filteredTheme);
      }
      if (font) {
        setCurrentFont(font);
      }
    }
  }, []);

  useEffect(() => {
    if (currentScreen !== "laptop" || currentScreen !== "desktop") return;
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
  }, [pathname, currentScreen]);

  return (
    <>
      <header className="fixed top-0 z-50 flex w-full flex-row items-center justify-between bg-neutral-900 px-8 py-4 backdrop-blur-lg backdrop-filter lg:px-32">
        <div className="flex flex-row items-center justify-center gap-4">
          <div>
            <button
              className={`flex items-center justify-center rounded-lg bg-transparent px-3 py-3 font-bold transition-colors hover:bg-white/5 ${socialsOpen ? "text-primary-500 bg-white/5" : "text-white"}`}
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
                className={`feather feather-chevron-down hidden lg:flex ${socialsOpen ? "rotate-180 transform" : ""} transition-transform duration-300 ease-in-out`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`feather feather-menu flex lg:hidden ${socialsOpen ? "rotate-[360deg] transform" : ""} duration-1200 transition-transform ease-in-out`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </button>
            <div
              className="absolute flex flex-col items-start justify-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-2 shadow-lg"
              style={{
                display: socialsOpen ? "flex" : "none",
                transform: "translateY(10px)",
                transition: "transform 300ms ease-in-out",
              }}
            >
              <div className="flex w-full flex-col items-center justify-center gap-2 lg:hidden">
                <button
                  className={`flex w-full items-center justify-center bg-transparent px-3 py-2 ${pathname === "/" ? "text-primary-500 bg-white/5" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                  onClick={() => router.push("/")}
                >
                  Home
                </button>
                <button
                  className={`flex w-full items-center justify-center bg-transparent px-3 py-2 ${pathname === "/about" ? "text-primary-500 bg-white/5" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                  onClick={() => router.push("/about")}
                >
                  About
                </button>
                <button
                  className={`flex w-full items-center justify-center bg-transparent px-3 py-2 ${pathname.includes("/blog") ? "text-primary-500 bg-white/5" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                  onClick={() => router.push("/blog")}
                >
                  Blog
                </button>
                <button
                  className={`flex w-full items-center justify-center bg-transparent px-3 py-2 ${pathname === "/projects" ? "text-primary-500 bg-white/5" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                  onClick={() => router.push("/projects")}
                >
                  Projects
                </button>
                <button
                  className={`flex w-full items-center justify-center bg-transparent px-3 py-2 ${pathname === "/contact" ? "text-primary-500 bg-white/5" : "text-white"} rounded-lg transition-colors hover:bg-white/5`}
                  onClick={() => router.push("/contact")}
                >
                  Contact
                </button>
                <div className="w-full border-b border-neutral-800"></div>
              </div>
              <a
                href="https://twitter.com/BinaryBlazer"
                className="flex w-full items-center justify-start gap-2 rounded-lg p-2 px-8 text-white transition-colors hover:bg-white/5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter h-4 w-4"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
                Twitter
              </a>
              <a
                href="https://github.com/binary-blazer"
                className="flex w-full items-center justify-start gap-2 rounded-lg p-2 px-8 text-white transition-colors hover:bg-white/5"
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
            className="flex cursor-pointer flex-row gap-4 transition-opacity duration-300 ease-in-out hover:opacity-80"
            onClick={() => router.push("/")}
          >
            <h1 className="text-2xl font-bold">
              BinaryBlazer<span className="text-primary-500">.</span>
            </h1>
          </div>
        </div>
        <div className="relative hidden flex-row items-center justify-center gap-4 lg:flex">
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
              className="absolute bottom-0 left-0 z-[-1] h-[2rem] rounded-md bg-white/5 transition-all duration-300 ease-in-out"
              style={{
                ...indicatorStyle,
              }}
            ></div>
          </nav>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div className="relative">
            <button
              className={`flex items-center justify-center rounded-lg bg-transparent px-3 py-3 font-bold transition-colors hover:bg-white/5 ${settingsOpen ? "text-primary-500 bg-white/5" : "text-white"}`}
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
                className={`feather feather-settings ${settingsOpen ? "rotate-180 transform" : ""} duration-1200 transition-transform ease-in-out`}
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </button>
            <div
              className="absolute flex translate-x-[-7rem] translate-y-2 transform flex-col items-start justify-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-900 p-2 shadow-lg lg:translate-x-0 lg:translate-y-[10px]"
              style={{
                display: settingsOpen ? "flex" : "none",
                transition: "transform 300ms ease-in-out",
              }}
            >
              <div className="relative">
                <button
                  className={`flex w-full items-center justify-start gap-2 rounded-lg p-2 px-8 text-white transition-colors ${settingsColorsOpen ? "bg-white/5" : "hover:bg-white/5"}`}
                  onClick={() => {
                    setSettingsColorsOpen(!settingsColorsOpen);
                    setSettingsFontsOpen(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`h-5 w-5 ${settingsColorsOpen ? "text-primary-500" : "text-white"} ${settingsColorsOpen ? "rotate-[360deg] transform" : ""} duration-800 transition-transform ease-in-out`}
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
                  className="absolute flex flex-col items-start justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 p-2 shadow-lg"
                  style={{
                    display: settingsColorsOpen ? "flex" : "none",
                    transform: "translateX(-180px) translateY(-30px)",
                    transition: "transform 300ms ease-in-out",
                  }}
                >
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      className={`flex w-full items-center justify-start gap-2 rounded-lg p-2 px-8 text-white transition-colors ${currentTheme === color.name.toLocaleLowerCase() ? "bg-white/5" : "hover:bg-white/5"}`}
                      onClick={() => changeColor(color)}
                    >
                      <div
                        className="h-6 w-6 rounded-full"
                        style={{ backgroundColor: color.color }}
                      ></div>
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>
              <button
                className={`flex w-full items-center justify-start gap-2 rounded-lg p-2 px-8 text-white transition-colors ${settingsFontsOpen ? "bg-white/5" : "hover:bg-white/5"}`}
                onClick={() => {
                  setSettingsFontsOpen(!settingsFontsOpen);
                  setSettingsColorsOpen(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`h-5 w-5 ${settingsFontsOpen ? "text-primary-500" : "text-white"} ${settingsFontsOpen ? "rotate-[360deg] transform" : ""} duration-800 transition-transform ease-in-out`}
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
                className="absolute flex flex-col items-start justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-2 py-1 shadow-lg"
                style={{
                  display: settingsFontsOpen ? "flex" : "none",
                  transform: "translateX(-162px) translateY(60px)",
                  transition: "transform 300ms ease-in-out",
                }}
              >
                {fonts.map((font) => (
                  <button
                    key={font.name}
                    className={`flex w-full items-center justify-start gap-2 rounded-lg p-2 px-8 text-center text-white transition-colors ${font.font === currentFont ? "bg-white/5" : "hover:bg-white/5"} ${fonts.indexOf(font) === fonts.length - 1 ? "mb-1.5" : ""} ${fonts.indexOf(font) === 0 ? "mt-1.5" : ""}`}
                    onClick={() => changeFont(font.font)}
                  >
                    {font.name.replace("_", "")}
                  </button>
                ))}
              </div>
              <div className="w-full border-b border-neutral-800"></div>
              <button
                className="w-full gap-2 rounded-lg p-2 px-8 text-white transition-colors hover:bg-white/5"
                onClick={() => router.push("/socials/github")}
              >
                Source
              </button>
            </div>
          </div>
          <button
            className="bg-primary-500 hover:bg-primary-600 hidden items-center justify-center rounded-lg px-6 py-2 font-bold text-white shadow-lg transition-colors lg:flex"
            onClick={() => router.push("/contact")}
          >
            Let&apos;s Connect
          </button>
        </div>
      </header>
    </>
  );
}
