"use client"

import { createContext, useState, useEffect, ReactNode } from "react"

interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Check localStorage or prefers-color-scheme for initial theme
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
      document.documentElement.classList.toggle("dark", prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark"
      document.documentElement.classList.toggle("dark", next === "dark")
      localStorage.setItem("theme", next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
