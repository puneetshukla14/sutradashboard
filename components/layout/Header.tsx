export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#111111] border-b border-[#2c2c2c] px-6 py-4 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Left Side: Logo / Brand */}
        <div className="text-2xl font-bold tracking-tight text-primary">
          SSi Dashboard
        </div>

        {/* Right Side: Filters */}
        <div className="flex flex-wrap gap-3 justify-start md:justify-end">
          <SelectBox label="Hospital" />
          <SelectBox label="Year" />
          <SelectBox label="Month" />
          <SelectBox label="Specialty" />
          <SelectBox label="Model" />
          <SelectBox label="Telesurgery" />
        </div>
      </div>
    </header>
  );
}

// Reusable styled select box component
function SelectBox({ label }: { label: string }) {
  return (
    <select className="bg-[#1e1e1e] border border-[#333] text-sm text-white px-3 py-2 rounded-md transition-all duration-200 hover:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
      <option>{label}</option>
    </select>
  );
}
