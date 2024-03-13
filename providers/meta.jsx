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

  return (<>
    <head>
      <title>{pathname === "/" ? "Home" : pathname.slice(1)} - BinaryBlazer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="This is a blog and portfolio website for a full-stack developer called BinaryBlazer." />
      <meta name="keywords" content="binaryblazer, blog, portfolio, full-stack, developer, germany" />
      <meta name="author" content="BinaryBlazer" />
      <link rel="icon" href="/img/favicon-rounded.jpg" />
      <meta property="og:title" content="BinaryBlazer" />
      <meta property="og:description" content="This is a blog and portfolio website for a full-stack developer called BinaryBlazer." />
      <meta property="og:image" content="/img/og-image.png" />
      <meta property="og:url" content={router.asPath} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@BinaryBlazer" />
      <meta name="twitter:creator" content="@BinaryBlazer" />
      <meta name="twitter:title" content="BinaryBlazer" />
      <meta name="twitter:description" content="This is a blog and portfolio website for a full-stack developer called BinaryBlazer." />
      <meta name="twitter:image" content="/img/og-image.png" />
    </head>
    {children}
  </>);
}
