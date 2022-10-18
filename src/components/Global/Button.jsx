import { useEffect, useRef, useState } from "react";

export default function Button({ children, className = "", disabled, ...props }) {

    return (
        <button
            className={`min-h-[44px] relative overflow-hidden px-4 py-2 rounded-lg shadow-2xl shadow-primary transition-all duration-200 bg-primary group text-white ${className}`}
            {...props}
        >
            {!disabled && <span className="opacity-0 group-hover:opacity-10 group-active:opacity-20 bg-white absolute shadow-xl shadow-primary left-0 top-0 w-full h-full transition-all duration-200" />}
            {children}
        </button>
    )
}