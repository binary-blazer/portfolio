"use client";

import React from "react";
import Head from "next/head";
import { usePathname, useRouter } from "next/navigation";
import { config } from "@/main.config";

export default function MetaProvider({ children }) {
  let router = useRouter();
  let pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/") {
      document.title = "Home - " + config.title;
    } else if (pathname.includes("/blog")) {
      document.title = "Blog - " + config.title;
    } else if (pathname === "/contact") {
      document.title = "Contact - " + config.title;
    } else if (pathname === "/projects") {
      document.title = "Projects - " + config.title;
    } else if (pathname === "/about") {
      document.title = "About - " + config.title;
    } else {
      document.title = "404 - " + config.title;
    }
  }, [pathname]);

  return (
    <>
      {process.env.NODE_ENV === "production" ? (
        <head>
          <title>
            {pathname === "/" ? "Home" : pathname.slice(1)} - {config.title}
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={config.description} />
          <meta name="keywords" content={config.keywords} />
          <meta name="author" content={config.author} />
          <link rel="icon" href={config.favicon} />
          <meta
            property="og:title"
            content={
              pathname === "/"
                ? "Home"
                : pathname.slice(1) + " - " + config.title
            }
          />
          <meta property="og:description" content={config.description} />
          <meta property="og:image" content={config.image} />
          <meta property="og:image:width" content="6912" />
          <meta property="og:image:height" content="3456" />
          <meta property="og:site_name" content={"BinaryBlazer"} />
          <meta property="og:url" content={router.asPath} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={config.twitter} />
          <meta name="twitter:creator" content={config.twitter} />
          <meta
            name="twitter:title"
            content={
              pathname === "/"
                ? "Home"
                : pathname.slice(1) + " - " + config.title
            }
          />
          <meta name="twitter:description" content={config.description} />
          <meta name="twitter:image" content={config.image} />
        </head>
      ) : (
        <Head>
          <title>
            {pathname === "/" ? "Home" : pathname.slice(1)} - {config.title}
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={config.description} />
          <meta name="keywords" content={config.keywords} />
          <meta name="author" content={config.author} />
          <link rel="icon" href={config.favicon} />
          <meta
            property="og:title"
            content={
              pathname === "/"
                ? "Home"
                : pathname.slice(1) + " - " + config.title
            }
          />
          <meta property="og:description" content={config.description} />
          <meta property="og:image" content={config.image} />
          <meta property="og:image:width" content="6912" />
          <meta property="og:image:height" content="3456" />
          <meta property="og:site_name" content={"BinaryBlazer"} />
          <meta property="og:url" content={router.asPath} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={config.twitter} />
          <meta name="twitter:creator" content={config.twitter} />
          <meta
            name="twitter:title"
            content={
              pathname === "/"
                ? "Home"
                : pathname.slice(1) + " - " + config.title
            }
          />
          <meta name="twitter:description" content={config.description} />
          <meta name="twitter:image" content={config.image} />
        </Head>
      )}
      {children}
    </>
  );
}
