"use client"

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const ToggleModeTEMP = () => {

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 size-6 bg-gray-100 dark:bg-gray-900 transition-transform duration-300" /> // Use a div with the same size as your button
  }

  const toggleTheme = () => {
    console.log(theme)
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <>
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-800 p-2 rounded-md cursor-pointer"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {theme === "dark" ? <MoonIcon size={16} /> : <SunIcon size={16} />}
          </motion.div>
        </AnimatePresence>
      </button>
    </>
  )
}

export default ToggleModeTEMP