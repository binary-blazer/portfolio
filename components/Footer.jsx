"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import germanyFlag from "../public/img/germany-flag.png";

export default function Footer() {
  useEffect(() => {
    console.log(
      "This site was created by BinaryBlazer. Please keep footer and the header credits intact.",
    );
  }, []);

  return (
    <>
      {/* Please don't touch the footer credits. I worked hard to make my developer portfolio. */}
      <footer className="mt-[10rem] flex w-full lg:w-[65%] mx-auto flex-col items-center justify-center border-t border-neutral-900 bg-neutral-950 p-8 py-8 text-white">
        <p className="text-center">
          &copy; 2018 - {new Date().getFullYear()} BinaryBlazer
        </p>
        <p className="flex items-center justify-center gap-1 text-center">
          Made with ❤️ by <a href="https://binaryblazer.me">BinaryBlazer</a> in{" "}
          <Image
            src={germanyFlag}
            placeholder="blur"
            alt="Germany flag"
            className="inline h-4 w-6 rounded-sm"
            draggable="false"
          />
        </p>
      </footer>
    </>
  );
}