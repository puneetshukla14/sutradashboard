'use client';

import { useFilter } from './FilterContext';

export default function Header() {
  const { filters, setFilters } = useFilter();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <header className="sticky top-0 z-30 w-full bg-[#1b1b1b] border-b border-gray-700 px-6 py-3 text-white flex justify-between items-center">
      <div className="text-xl font-semibold text-primary">SSi Dashboard</div>
      <div className="flex gap-3">
        <select
          name="hospital"
          value={filters.hospital ?? ''}
          onChange={handleChange}
          className="bg-gray-800 text-sm px-3 py-2 rounded-md"
        >
          <option value="" disabled>
            Hospital
          </option>
          <option value="Hospital A">Hospital A</option>
          <option value="Hospital B">Hospital B</option>
          <option value="Hospital C">Hospital C</option>
        </select>
        <select
          name="year"
          value={filters.year ?? ''}
          onChange={handleChange}
          className="bg-gray-800 text-sm px-3 py-2 rounded-md"
        >
          <option value="" disabled>
            Year
          </option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <select
          name="month"
          value={filters.month ?? ''}
          onChange={handleChange}
          className="bg-gray-800 text-sm px-3 py-2 rounded-md"
        >
          <option value="" disabled>
            Month
          </option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          {/* Add all months */}
        </select>
        <select
          name="specialty"
          value={filters.specialty ?? ''}
          onChange={handleChange}
          className="bg-gray-800 text-sm px-3 py-2 rounded-md"
        >
          <option value="" disabled>
            Specialty
          </option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
          {/* Add more */}
        </select>
        <select
          name="model"
          value={filters.model ?? ''}
          onChange={handleChange}
          className="bg-gray-800 text-sm px-3 py-2 rounded-md"
        >
          <option value="" disabled>
            Mantra Model
          </option>
          <option value="Model A">Model A</option>
          <option value="Model B">Model B</option>
        </select>
        <select
          name="telesurgery"
          value={filters.telesurgery ?? ''}
          onChange={handleChange}
          className="bg-gray-800 text-sm px-3 py-2 rounded-md"
        >
          <option value="" disabled>
            Telesurgery
          </option>
          <option value="Enabled">Enabled</option>
          <option value="Disabled">Disabled</option>
        </select>
      </div>
    </header>
  );
}
