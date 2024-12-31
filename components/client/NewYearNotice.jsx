"use client";

import { useEffect, useState } from "react";

export default function NewYearNotice() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const newYearNoticeSeen = localStorage.getItem("newYearNoticeSeen");
    if (!newYearNoticeSeen || newYearNoticeSeen !== "true") {
      setShow(true);
      localStorage.setItem("newYearNoticeSeen", "true");
    }
  }, []);

  return (
    <>
      {show && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative z-[51] w-[90%] max-w-[400px] rounded-lg bg-neutral-900 text-center shadow-xl">
            <div className="from-primary-500 to-primary-600 flex w-full flex-col rounded-t-lg bg-gradient-to-r py-4 text-white">
              <h1 className="text-2xl font-bold">Happy New Year!</h1>
            </div>
            <div className="mt-4 flex flex-col p-8">
              <p className="text-lg">
                Wishing you a year full of happiness and prosperity.
              </p>
              <button
                onClick={() => setShow(false)}
                className="bg-primary-500 hover:bg-primary-600 mt-14 rounded-lg px-4 py-2 text-white transition-colors duration-300 ease-in-out"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
