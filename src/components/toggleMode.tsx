"use client"

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const ToggleMode = () => {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    console.log(theme)
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return <div className="h-screen flex justify-center items-center">Loading...</div>
  }

  return (
    <>
      <button
        onClick={toggleTheme}
        className="bg-stone-200 dark:bg-stone-800 p-2 rounded-md cursor-pointer"
      >
        {theme === "dark" ? <MoonIcon size={16} /> : <SunIcon size={16} />}
      </button>
    </>
  )
}

export default ToggleMode