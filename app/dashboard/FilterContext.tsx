'use client';

import React, { createContext, useContext, useState } from 'react';

type Filters = {
  hospital: string | null;
  year: string | null;
  month: string | null;
  specialty: string | null;
  model: string | null;
  telesurgery: string | null;
};

type FilterContextType = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    hospital: null,
    year: null,
    month: null,
    specialty: null,
    model: null,
    telesurgery: null,
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}
