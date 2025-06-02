'use client';

import { useFilter } from './FilterContext';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const selectBaseClasses =
  'bg-white/10 backdrop-blur-sm border border-gray-600 text-gray-100 text-sm px-4 py-2 rounded-md pr-10 transition focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer';

function CustomSelect({
  label,
  name,
  options,
  value,
  onChange,
}: {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dropdownStyles, setDropdownStyles] = useState<{ top: number; left: number; width: number }>({
    top: 0,
    left: 0,
    width: 0,
  });

  let hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  // Update dropdown position when opened
  useEffect(() => {
    if (open && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setDropdownStyles({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [open]);

  function toggleOpen() {
    setOpen(!open);
  }

  function selectOption(option: string) {
    onChange({ target: { name, value: option } });
    setOpen(false);
  }

  return (
    <>
<div
  className={`${selectBaseClasses} relative select-none ${
    open ? 'ring-1 ring-blue-400 border-blue-400 shadow-[0_0_6px_1px_rgba(96,165,250,0.6)]' : ''
  }`}


        ref={containerRef}
        tabIndex={0}
        onClick={toggleOpen}
        onKeyDown={e => {
          if (e.key === 'Escape') setOpen(false);
          if (e.key === 'Enter') toggleOpen();
        }}
        onMouseEnter={() => {
          if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
          setOpen(true);
        }}
        onMouseLeave={() => {
          hoverTimeout.current = setTimeout(() => setOpen(false), 300); // small delay to allow hover on dropdown
        }}
        aria-haspopup="listbox"
        aria-expanded={open}
        role="combobox"
        aria-label={label}
      >
        <div className="flex justify-between items-center cursor-pointer">
          <span className={value ? '' : 'text-gray-400'}>{value || label}</span>
          <svg
            className="w-4 h-4 ml-2 text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={open ? 'M6 15l6-6 6 6' : 'M19 9l-7 7-7-7'}></path>
          </svg>
        </div>
      </div>

      {open &&
        createPortal(
          <ul
            className="max-h-48 overflow-auto rounded-md bg-black/90 border border-gray-700 z-50 shadow-lg"
            role="listbox"
            tabIndex={-1}
            style={{
              position: 'absolute',
              top: dropdownStyles.top,
              left: dropdownStyles.left,
              width: dropdownStyles.width,
            }}
            onMouseEnter={() => {
              if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
            }}
            onMouseLeave={() => {
              hoverTimeout.current = setTimeout(() => setOpen(false), 300);
            }}
          >
            {options.map(option => (
              <li
                key={option}
className={`px-4 py-2 cursor-pointer rounded-md transition-all duration-200 ${
  value === option
    ? 'bg-[#0a0f2c] text-blue-400 font-semibold backdrop-blur-md shadow-[0_0_14px_3px_rgba(59,130,246,0.6)] ring-1 ring-blue-500'
    : 'hover:bg-[#0b112c] hover:text-blue-300 hover:shadow-[0_0_14px_2px_rgba(59,130,246,0.6)]'
}`}




                onClick={() => selectOption(option)}
                role="option"
                aria-selected={value === option}
              >
                {option}
              </li>
            ))}
          </ul>,
          document.body
        )}
    </>
  );
}


export default function Header() {
  const { filters, setFilters } = useFilter();

  function handleChange(e: { target: { name: string; value: string } }) {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-black/40 backdrop-blur-md border-b border-gray-700 shadow-md px-8 py-4 flex justify-center font-sans">
      <div className="flex gap-5 flex-wrap max-w-[calc(100vw-40px)] overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent">
        <CustomSelect
          label="Hospital"
          name="hospital"
          options={['Hospital A', 'Hospital B', 'Hospital C']}
          value={filters.hospital ?? ''}
          onChange={handleChange}
        />

        <CustomSelect
          label="Year"
          name="year"
          options={['2022', '2023', '2024', '2025']}
          value={filters.year ?? ''}
          onChange={handleChange}
        />

        <CustomSelect
          label="Month"
          name="month"
          options={[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]}
          value={filters.month ?? ''}
          onChange={handleChange}
        />

        <CustomSelect
          label="Specialty"
          name="specialty"
          options={['Cardiology', 'Neurology', 'Orthopedics']}
          value={filters.specialty ?? ''}
          onChange={handleChange}
        />

        <CustomSelect
          label="Mantra Model"
          name="model"
          options={['Model A', 'Model B']}
          value={filters.model ?? ''}
          onChange={handleChange}
        />

        <CustomSelect
          label="Telesurgery"
          name="telesurgery"
          options={['Enabled', 'Disabled']}
          value={filters.telesurgery ?? ''}
          onChange={handleChange}
        />
      </div>
    </header>
  );
}
