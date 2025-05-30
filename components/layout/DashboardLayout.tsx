import Sidebar from "./Sidebar"


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex bg-[#0e0e0e] min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-64">
        
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}
