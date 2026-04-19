"use client"

import { useState } from "react"
import { Logo } from "../../Logo"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import ToggleMode from "@/components/ToggleModeTEMP"
import { downloadItems, navLinks } from "./NavbarStats"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import { childAnimation, parentAnimation } from "@/components/animation-components/dropDownAnimation"

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <nav className="relative flex items-center justify-between z-100">
        <Logo />
        <div className="flex items-center gap-2">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ToggleMode />
        </div>
      </nav>

      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </div>
  )
}

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (label: string) => {
    setOpenItems(prev => prev.includes(label)
      ? prev.filter(i => i !== label)
      : [...prev, label]
    )
  }

  const linkStyles = "p-4 rounded-lg transition-colors hover:bg-brand-300/60 hover:text-white dark:hover:bg-brand-500/20 dark:hover:text-white"

  return (
    <AnimatePresence>
      <motion.div
        variants={parentAnimation} initial="hidden" animate="visible" exit="exit"
        className="absolute left-0 top-full bg-gray-200 dark:bg-gray-800 w-full min-h-[60vh] overflow-y-auto p-5 z-60"
      >
        <div className="flex flex-col gap-1 text-neutral-800 dark:text-neutral-400">
          {navLinks.map((item, index) => {
            const isOpen = openItems.includes(item.label)

            return (
              <div key={item.label + index} className="flex flex-col">
                {item.href ? (
                  <Link href={item.href} onClick={onClose} className={linkStyles}>
                    {item.label}
                  </Link>
                ) : (
                  <button onClick={() => toggleItem(item.label)} className={cn(linkStyles, "flex items-center justify-between")}>
                    {item.label}
                    <ChevronDown size={14} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
                  </button>
                )}

                {/* Nested Links */}
                <motion.div variants={parentAnimation} initial="hidden" animate="visible" exit="exit">
                  {item.nestedLinks && isOpen && (
                    <motion.div variants={childAnimation} className="flex flex-col ml-8 gap-1 py-2">
                      {item.nestedLinks.map((nested, idx) => (
                        <Link key={idx} href={nested.href} onClick={onClose} className={linkStyles}>
                          {nested.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            )
          })}

          <div className="mt-4">
            <DownloadButton />
          </div>
        </div >
      </motion.div>
    </AnimatePresence>
  )
}

const DownloadButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div variants={parentAnimation} initial="hidden" animate="visible" exit="exit" className="flex flex-col w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-linear-to-r from-brand-200 to-brand-500 px-4 py-2 rounded-md text-white flex items-center justify-center gap-2"
      >
        Download
        <ChevronDown size={18} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <motion.div variants={childAnimation} className="flex flex-col mt-4 gap-1.5">
          {downloadItems?.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              target="_blank"
              className="p-3 bg-gray-300 dark:bg-gray-900 rounded-md text-center hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}
