"use client"

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

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
  return (
    <>
      <button
        onClick={toggleTheme}
        className="bg-stone-200 dark:bg-stone-800 p-2 rounded-md cursor-pointer"
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

export default ToggleMode