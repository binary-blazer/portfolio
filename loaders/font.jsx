"use client";

import React from "react";

export default function FontLoader({ children }) {
  React.useEffect(() => {
    setInterval(() => {
      if (typeof window !== "undefined") {
        const font = window.localStorage.getItem("font");

        if (font) {
          window.document.documentElement.classList.add(
            `font-${font.toLowerCase()}`,
          );
        } else {
          window.document.documentElement.classList.add("font-inter");
        }
      }
    }, 100);
  }, []);

  return children;
}
