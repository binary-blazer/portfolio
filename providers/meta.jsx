"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

export default function MetaProvider({ children }) {
  let router = useRouter();
  let pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/") {
      document.title = "Home - BinaryBlazer";
    } else if (pathname.includes("/blog")) {
      document.title = "Blog - BinaryBlazer";
    } else if (pathname === "/contact") {
      document.title = "Contact - BinaryBlazer";
    } else if (pathname === "/projects") {
      document.title = "Projects - BinaryBlazer";
    } else if (pathname === "/about") {
      document.title = "About - BinaryBlazer";
    } else {
      document.title = "404 - BinaryBlazer";
    }
  }, [pathname]);

  return children;
}
