"use client";

import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="mt-[10rem] border-t border-neutral-700 flex flex-col items-center justify-center w-full px-32 py-8 bg-neutral-900 text-white">
        <p className="text-center">
          &copy; 2018 - {new Date().getFullYear()} BinaryBlazer
        </p>
        <p className="flex gap-1 items-center justify-center text-center">
          Made with ❤️ by <a href="https://binaryblazer.me">BinaryBlazer</a> in{" "}
          <img
            src="/img/germany-flag.png"
            alt="Germany"
            className="w-6 h-4 inline rounded-sm"
            draggable="false"
          />
        </p>
      </footer>
    </>
  );
}
