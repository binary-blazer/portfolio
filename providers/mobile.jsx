"use client";

import { useEffect, useState } from "react";
import { config } from "@/main.config";

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
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-glitch text-6xl font-bold text-neutral-100">
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
