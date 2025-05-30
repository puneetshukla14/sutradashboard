"use client"

import { useState, useEffect, useContext, useMemo } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ThemeContext } from "@/context/ThemeContext"

const navLinks = [
  { name: "Dashboard", href: "/dashboard" }, // ✅ Redirected here
  { name: "Analytics", href: "/analytics" },
  { name: "Reports", href: "/reports" },
  { name: "Settings", href: "/settings" },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useContext(ThemeContext)

  const year = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) return <div className="w-64" />

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden fixed top-5 left-5 z-50 bg-gray-900 p-3 rounded-lg text-white shadow-xl hover:bg-primary transition-colors duration-300"
        aria-label="Toggle Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#121212] text-gray-300 z-40 flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:shadow-xl`}
      >
        {/* Sidebar Header */}
        <div>
          <div className="flex items-center justify-start space-x-3 px-6 py-6 md:py-8 border-b border-gray-700 select-none">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="SSi Logo"
                  width={90}
                  height={30}
                  priority
                  className="object-contain w-16 h-auto md:w-[40px]"
                />
              </div>
              <h1 className="text-white text-lg md:text-xl font-semibold tracking-wide hidden md:block select-none">
                SS Innovations
              </h1>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col mt-6 space-y-1 px-4 md:px-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block rounded-md px-3 md:px-4 py-2 md:py-3 text-sm md:text-base font-medium 
                    ${
                      isActive
                        ? "bg-primary text-white shadow-lg"
                        : "hover:bg-primary/70 hover:text-white text-gray-400"
                    }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-6 md:p-6 border-t border-gray-700 flex flex-col items-start space-y-4">
          {/* Profile Info */}
          <div className="flex items-center space-x-3 w-full">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold select-none text-lg">
              P
            </div>
            <div>
              <p className="text-xs md:text-sm font-semibold text-white leading-tight">Puneet</p>
              <p className="text-[10px] md:text-xs text-gray-400 select-none leading-tight">Developer</p>
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="w-full flex items-center justify-between">
            <span className="text-xs md:text-sm text-gray-400 select-none">Dark Mode</span>

            <button
              onClick={toggleTheme}
              className={`relative w-14 h-7 rounded-full flex items-center px-1 transition-colors duration-300 cursor-pointer
                ${theme === "dark" ? "bg-primary justify-end" : "bg-gray-400 justify-start"}`}
              aria-label="Toggle Dark Mode"
              role="switch"
              aria-checked={theme === "dark"}
            >
              <span
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300
                  ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`}
              />
            </button>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500 select-none mt-1">&copy; {year} SS Innovations</p>
        </div>
      </aside>

      {/* Desktop Spacer */}
      <div className="hidden md:block md:ml-64" />
    </>
  )
}
