"use client"

import { useState, useEffect, useContext } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ThemeContext } from "@/context/ThemeContext"

const navLinks = [
  { name: "Dashboard", href: "/" },
  { name: "Analytics", href: "/analytics" },
  { name: "Reports", href: "/reports" },
  { name: "Settings", href: "/settings" },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = "0"
      document.body.style.right = "0"
      document.body.style.overflow = "hidden"

      return () => {
        document.body.style.position = ""
        document.body.style.top = ""
        document.body.style.left = ""
        document.body.style.right = ""
        document.body.style.overflow = ""
        window.scrollTo(0, scrollY)
      }
    }
  }, [open])

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-900 p-3 rounded-md text-white shadow-lg"
        aria-label="Toggle Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#121212] text-gray-300 z-50 flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:shadow-lg shadow-xl`}
      >
        {/* Header with Logo */}
        <div>
          <div className="px-8 py-6 pt-[4rem] md:pt-6 border-b border-gray-700 select-none flex items-center justify-center">
            <Image
              src="/logo.png"  // Put your logo image file in public/logo.png
              alt="SSi Logo"
              width={120}
              height={40}
              priority={true}
              className="object-contain"
            />
          </div>

          <nav className="flex flex-col mt-6 space-y-2 px-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-lg px-4 py-3 text-lg font-semibold transition-all duration-200 
                    ${
                      isActive
                        ? "bg-primary text-white shadow-md"
                        : "hover:bg-gray-700 hover:text-white text-gray-400"
                    }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Footer with Dark Mode Toggle */}
        <div className="p-6 border-t border-gray-700 flex flex-col items-start space-y-4">
          <div className="w-full flex items-center justify-between">
            <span className="text-sm text-gray-400 select-none">Dark Mode</span>
            <button
              onClick={toggleTheme}
              className={`relative w-14 h-7 rounded-full flex items-center px-1 transition-colors duration-300 ${
                theme === "dark" ? "bg-primary justify-end" : "bg-gray-400 justify-start"
              }`}
              aria-label="Toggle Dark Mode"
              role="switch"
              aria-checked={theme === "dark"}
            >
              <span
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  theme === "dark" ? "translate-x-0" : "translate-x-7"
                }`}
              />
            </button>
          </div>
          <p className="text-xs text-gray-500 select-none">&copy; {new Date().getFullYear()} SS Innovations</p>
        </div>
      </aside>

      {/* Push content on desktop */}
      <div className="hidden md:block md:ml-64" />
    </>
  )
}
