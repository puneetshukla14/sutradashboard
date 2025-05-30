import Sidebar from "./Sidebar"
import Header from "./Header"
import { ThemeProvider } from "@/context/ThemeContext"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex bg-background text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </ThemeProvider>
  )
}
