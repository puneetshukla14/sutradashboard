import "@/styles/globals.css"
import { Inter, Open_Sans } from "next/font/google"
import type { Metadata } from "next"
import Layout from "@/components/layout/Layout"
import { ThemeProvider } from "@/context/ThemeContext"

// Load fonts
const inter = Inter({ subsets: ["latin"] })
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"], // You can add more if needed
})

export const metadata: Metadata = {
  title: "Sutra Dashboard",
  description: "Surgical analytics platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${openSans.className}`}>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
