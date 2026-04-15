"use client"

import { navLinks } from "@/lib/constants"
import { Logo } from "./Logo"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { downloadItems } from "@/lib/constants"
import { useEffect, useRef, useState } from "react"



export const DesktopNavbar = () => {

  return (
    <nav className="hidden lg:flex items-center justify-between py-2 text-sm">
      {/* logo */}
      <Logo />

      {/* navlink */}
      <div
        className="flex items-center justify-center gap-6 list-none text-brand-300"
      >
        {navLinks.map((item) => (
          <div key={item.label} className="relative group py-1.5">

            {/* Parent Link */}
            {item.href ? (
              <Link
                href={item.href}
                className="flex items-center gap-1"
              >
                {item.label}
                {item.nestedLinks && <ChevronDown size={16} />}
              </Link>
            ) : (
              <div className="flex items-center gap-1 cursor-default">
                {item.label}
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </div>
            )}

            {/* Nested Links */}
            {item.nestedLinks && (
              <div
                className="absolute top-full left-0 hidden group-hover:flex flex-col bg-gray-100 border border-gray-200 dark:border-gray-600  dark:bg-gray-800 shadow-sm rounded-md overflow-hidden"
              >
                {item.nestedLinks.map((nestedItem) => (
                  <Link
                    key={nestedItem.href}
                    href={nestedItem.href}
                    className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap transition-colors"
                  >
                    {nestedItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* nav CTA */}
      <DownloadButton />
    </nav>
  )
}


const DownloadButton = () => {
  const [isDownloadListOpen, setIsDownloadListOpen] = useState<true | false>(false);
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

        className="bg-linear-to-r from-brand-200 to-brand-500 px-4 py-2 rounded-full text-white hover:opacity-90 transition-opacity"

      >
        Download
      </button>

      {isDownloadListOpen && (
        <div
          className="absolute top-full -left-[50%] flex flex-col bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-500 whitespace-nowrap rounded-md overflow-hidden mt-1.5 text-brand-300"
        >
          {downloadItems && downloadItems.map((item, index) => (
            <Link
              key={item.label + index}
              href={item.href}
              className="px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 whitespace-nowrap transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}