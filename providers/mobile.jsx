"use client";

import { config } from "@/main.config";
import { useEffect, useState } from "react";

export default function MobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!config.mobileAllowed) return setIsMobile(false);
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent,
      ),
    );
    setIsMobile(mobile);
  }, []);

  return (
    <>
      {!isMobile ? (
        children
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-6xl font-bold text-neutral-100 text-glitch">
            404
          </h1>
          <p className="text-lg text-neutral-300">
            This page is not available on mobile at the moment.
          </p>
        </div>
      )}
    </>
  );
}
