"use client"

import { useState } from "react"
import { Logo } from "./Logo"
import { ChevronDown, Menu, X } from "lucide-react"
import ToggleMode from "../toggleMode"
import { downloadItems, navLinks } from "@/lib/constants"
import Link from "next/link"

export const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openNavItems, setOpenNavItems] = useState<string[]>([])

  const toggleNavItem = (label: string) => {
    setOpenNavItems((prev) => (
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    ))
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenNavItems([])
  }

  return (
    <div className="lg:hidden">
      <nav className="relative flex items-center justify-between z-50">
        <Logo />
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=""
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ToggleMode />
        </div>
      </nav>

      {isMenuOpen && (

        <div className="absolute left-0 top-full bg-gray-200 dark:bg-gray-800 py-5 w-full min-h-[60%] text-base overflow-y-auto">
          <div className="flex flex-col  p-5 z-40 ">
            {navLinks.map((item) => (
              <div
                key={item.label}
                className="flex flex-col dark:text-neutral-400 text-brand-300"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="hover:bg-brand-300/60 hover:text-white dark:hover:bg-brand-500/20 dark:hover:text-white p-4 rounded-lg"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => toggleNavItem(item.label)}
                    className="flex items-center gap-2 cursor-pointer text-left p-4"
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${openNavItems.includes(item.label) ? "rotate-180" : ""
                        }`
                      }
                    />
                  </button>
                )}

                {item.nestedLinks && openNavItems.includes(item.label) && (
                  <div className="flex flex-col ml-8 mb-5">
                    {item.nestedLinks.map((nestedItem) => (
                      <Link
                        key={nestedItem.href}
                        href={nestedItem.href}
                        onClick={closeMenu}
                        className="p-4 hover:bg-brand-300/60 hover:text-white dark:hover:bg-brand-500/20 dark:hover:text-white rounded-lg"
                      >
                        {nestedItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* download Cta BUtton */}
            <DownloadButton />
          </div>
        </div>

      )}
    </div>
  )
}

const DownloadButton = () => {
  const [isDownloadListOpen, setIsDownloadListOpen] = useState<true | false>(false);

  const handleDownloadClick = () => {
    setIsDownloadListOpen(!isDownloadListOpen)
  }

  return (
    <div className="relative">
      <button
        onClick={handleDownloadClick}
        className="bg-linear-to-r from-brand-200 to-brand-500 px-4 py-2 rounded-md text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-full"
      >
        Download
        <ChevronDown
          size={18}
          className={`${isDownloadListOpen ? "rotate-180" : null} transition-transform duration-300`}
        />
      </button>

      {/* dropdown list */}
      {isDownloadListOpen && (
        <div
          className="flex flex-col mt-4  items-center gap-1.5"
        >
          {downloadItems && downloadItems.map((item, index) => (
            <Link
              key={item.label + index}
              href={item.href}
              target="_blank"
              className="p-3 bg-gray-300 hover:bg-gray-500 hover:text-white dark:bg-gray-900 flex w-full items-center justify-center dark:hover:bg-gray-700 rounded-md"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}