"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button
        aria-label="Dark mode toggle"
        className="z-10 flex size-12 items-center justify-center rounded-full bg-rose-400 text-pink-50 shadow-md shadow-slate-500 dark:shadow-none"
      ></button>
    );

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        onClick={() => setTheme("light")}
        className="z-10 flex size-12 items-center  justify-center rounded-full bg-rose-400 p-3 text-pink-50 shadow-md shadow-slate-500 dark:shadow-none"
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        onClick={() => setTheme("dark")}
        className="z-10 flex size-12 items-center justify-center rounded-full bg-rose-400 p-3 text-pink-50 shadow-md shadow-slate-500 dark:shadow-none"
      />
    );
  }
}
