"use client";

import { useEffect, useState } from "react";
import isNewYearsPeriod from "@/functions/isNewYearsPeriod";

const newYearMessages = [
  "Wishing you a year full of happiness and prosperity.",
  "May this year bring you endless opportunities and beautiful moments.",
  "Here's to new beginnings and amazing adventures ahead!",
  "Cheers to another year of growth, success, and joy.",
  "May your dreams take flight in this bright new year.",
  "Wishing you 365 days of laughter, love, and achievement.",
  "New year, new heights! May you soar through this year.",
  "Here's to making this year your most remarkable one yet!",
  "May this year sparkle with moments of joy and wonder.",
  "Time for fresh starts and brilliant new chapters!",
];

export default function NewYearNotice() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomMessage =
      newYearMessages[Math.floor(Math.random() * newYearMessages.length)];
    setMessage(randomMessage);

    const today = new Date();
    const currentYear = today.getFullYear();
    const isDec31 = today.getMonth() === 11 && today.getDate() === 31;
    const isJan1 = today.getMonth() === 0 && today.getDate() === 1;

    const newYearNoticeSeen = localStorage.getItem("newYearNoticeSeen");
    const lastShownYear = localStorage.getItem("lastShownYear");

    if (!newYearNoticeSeen) {
      setShow(true);
      localStorage.setItem("newYearNoticeSeen", "true");
      localStorage.setItem("lastShownYear", currentYear.toString());
      return;
    }

    if (isDec31 && lastShownYear !== currentYear.toString()) {
      setShow(true);
      localStorage.setItem("lastShownYear", currentYear.toString());
      return;
    }

    if (isJan1 && lastShownYear !== (currentYear - 1).toString()) {
      setShow(true);
      localStorage.setItem("lastShownYear", currentYear.toString());
      return;
    }

    if (!isNewYearsPeriod()) {
      localStorage.removeItem("lastShownYear");
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
              <p className="text-lg">{message}</p>
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
