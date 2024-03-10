"use client";

export default function Error({ error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-neutral-100">{error}</h1>
      <p className="text-lg text-neutral-300">
        An error occurred while trying to load the page.
      </p>
    </div>
  );
}
