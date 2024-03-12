"use client";

import React from "react";

export default function ThemeLoader({ children }) {
  React.useEffect(() => {
    setInterval(() => {
      if (typeof window !== "undefined") {
        const theme = window.localStorage.getItem("theme");
        if (theme) {
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
