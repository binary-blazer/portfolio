"use client";

import React from "react";

export default function ThemeLoader({ children }) {
  const availableThemes = ["blue", "green", "red", "yellow", "purple", "pink"];

  React.useEffect(() => {
    setInterval(() => {
      if (typeof window !== "undefined") {
        const theme = window.localStorage.getItem("theme");
        if (theme) {
          if (!availableThemes.includes(theme)) {
            const set = () => {
              window.localStorage.setItem("theme", "blue");
              window.document.documentElement.classList.add("theme-blue");
            };

            return set();
          }

          window.document.documentElement.classList.add(`theme-${theme}`);
        } else {
          window.localStorage.setItem("theme", "blue");
          window.document.documentElement.classList.add("theme-blue");
        }
      }
    }, 100);
  }, []);

  return children;
}
