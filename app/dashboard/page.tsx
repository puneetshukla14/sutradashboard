// /app/dashboard/page.tsx

import Header from './header';
import StatCards from './stat-cards';
import HospitalBarChart from './hospital-chart';
import SpecialtyPieChart from './specialty-chart';
import YearBarChart from './year-chart';
import ProcedureChart from './procedure-chart';
import { FilterProvider } from './FilterContext'; // Adjust path if needed

export default function DashboardPage() {
  return (
    <FilterProvider>
      <main className="min-h-screen bg-[#0f0f0f] text-white px-6 py-4 space-y-8">
        <Header />

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCards />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#1b1b1b] p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Hospital-wise Surgeries</h2>
            <HospitalBarChart />
          </div>

          <div className="bg-[#1b1b1b] p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Specialty-wise Surgeries</h2>
            <SpecialtyPieChart />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#1b1b1b] p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold mb-4">Year-wise Surgeries</h2>
            <YearBarChart />
          </div>

          <div className="bg-[#1b1b1b] p-4 rounded-xl shadow overflow-x-auto">
            <h2 className="text-lg font-semibold mb-4">Procedure-wise Surgeries</h2>
            <ProcedureChart />
          </div>
        </section>
      </main>
    </FilterProvider>
  );
}
