import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Layout from "@/components/layout/Layout"
import { ThemeProvider } from "@/context/ThemeContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sutra Dashboard",
  description: "Surgical analytics platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
