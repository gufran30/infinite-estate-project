"use client"

import { Logo } from "../../Logo"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { childAnimation, parentAnimation } from "@/components/animation-components/dropDownAnimation"
import { downloadItems, navLinks } from "./NavbarStats"
import { usePathname } from "next/navigation"


export const DesktopNavbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const pathname = usePathname(); // Get current route

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    // 1. Only intercept if it's an anchor link AND we are already on the home page
    if (href.startsWith("#") && pathname === "/") {
      e.preventDefault();
      const elem = document.querySelector(href);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState(null, "", href);
    }
    // 2. If it's an anchor link but we are NOT on the home page, 
    // we let the <Link> component navigate to "/" + href (e.g., "/#about")
  };

  return (
    <nav className="hidden lg:flex items-center justify-between py-2 text-sm">
      {/* logo */}
      <Logo />

      {/* navlink */}
      <div className="flex items-center justify-center gap-6 list-none text-neutral-800 dark:text-neutral-400">
        {navLinks.map((item) => {

          // Prepare the correct href for the Link component
          // If it's a section link like "#about", and we aren't home, make it "/#about"
          const isAnchor = item.href?.startsWith("#");
          const destination = isAnchor && pathname !== "/" ? `/${item.href}` : item.href;

          return (
            <div
              key={item.label}
              className="relative group py-1"
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >

              {/* Parent Link */}
              <div className="flex items-center gap-1 cursor-pointer">
                {item.href ? (
                  <Link
                    href={destination || "/"}
                    onClick={(e) => handleScroll(e, item.href!)}
                    className="hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span>{item.label}</span>
                )}

                {item.nestedLinks && (
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${hoveredItem === item.label ? "rotate-180" : ""
                      }`}
                  />
                )}
              </div>

              {/* Nested Links */}
              <AnimatePresence>
                {item.nestedLinks && hoveredItem === item.label && (
                  <motion.div
                    variants={parentAnimation} initial="hidden" animate="visible"
                    className="absolute top-full left-0 flex flex-col bg-gray-100 border border-gray-200 dark:border-gray-600  dark:bg-gray-800 shadow-sm rounded-md overflow-hidden min-w-37.5 divide-y divide-neutral-500/20"
                  >
                    {item.nestedLinks.map((nestedItem, index) => (
                      <Link href={nestedItem.href} key={nestedItem.href + index}>
                        <motion.div
                          variants={childAnimation}
                          className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-neutral-200 whitespace-nowrap transition-colors"
                        >
                          {nestedItem.label}
                        </motion.div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* nav CTA */}
      <DownloadButton />
    </nav>
  )
}


const DownloadButton = () => {
  const [isDownloadListOpen, setIsDownloadListOpen] = useState(false);
  const buttonAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (buttonAreaRef.current && !buttonAreaRef.current.contains(e.target as Node)) {
        setIsDownloadListOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])


  const handleDownloadClick = () => {
    setIsDownloadListOpen(!isDownloadListOpen)
  }

  return (
    <div ref={buttonAreaRef} className="relative">
      <button
        onClick={handleDownloadClick}
        className="bg-linear-to-r flex items-center gap-1  from-brand-200 to-brand-500 px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"

      >
        <span>Download</span>
        <ChevronDown size={14} className={`${isDownloadListOpen ? "rotate-180" : ""} transition-transform duration-300`} />
      </button>

      <AnimatePresence>
        {isDownloadListOpen && (
          <motion.div
            variants={parentAnimation} initial="hidden" animate="visible" exit="exit"
            className="absolute top-full -left-[50%] flex flex-col whitespace-nowrap  divide-y divide-neutral-500/20 rounded-md overflow-hidden mt-1.5 text-neutral-800 shadow-lg"
          >
            {downloadItems && downloadItems.map((item, index) => (
              <motion.div
                variants={childAnimation}
                key={item.label + index}
                className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap transition-colors bg-gray-100 dark:hover:text-neutral-200 dark:text-neutral-400 dark:bg-gray-800"
              >
                <Link href={item.href}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}