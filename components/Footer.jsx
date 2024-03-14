"use client";

import React from "react";
import Image from "next/image";
import germanyFlag from "../public/img/germany-flag.png";

export default function Footer() {
  return (
    <>
      <footer className="mt-[10rem] flex w-full flex-col items-center justify-center border-t border-neutral-700 bg-neutral-900 p-8 py-8 text-white lg:px-32">
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
