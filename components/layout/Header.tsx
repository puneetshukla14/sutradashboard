export default function Header() {
  return (
    <header className="sticky top-0 z-30 w-full bg-[#1b1b1b] border-b border-gray-700 px-6 py-3 text-white flex justify-between items-center">
      <div className="text-xl font-semibold text-primary">SSi Dashboard</div>
      <div className="flex gap-3">
        <select className="bg-gray-800 text-sm px-3 py-2 rounded-md">
          <option>Hospital</option>
        </select>
        <select className="bg-gray-800 text-sm px-3 py-2 rounded-md">
          <option>Year</option>
        </select>
        <select className="bg-gray-800 text-sm px-3 py-2 rounded-md">
          <option>Month</option>
        </select>
        <select className="bg-gray-800 text-sm px-3 py-2 rounded-md">
          <option>Specialty</option>
        </select>
        <select className="bg-gray-800 text-sm px-3 py-2 rounded-md">
          <option>Model</option>
        </select>
        <select className="bg-gray-800 text-sm px-3 py-2 rounded-md">
          <option>Telesurgery</option>
        </select>
      </div>
    </header>
  )
}
