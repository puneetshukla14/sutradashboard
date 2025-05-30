'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { year: '2022', surgeries: 900 },
  { year: '2023', surgeries: 1200 },
  { year: '2024', surgeries: 1500 },
  { year: '2025', surgeries: 1800 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

export default function SurgeryYearChart() {
  return (
    <div className="w-full bg-[#1e1e1e] p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4 text-white">Surgery Count by Year</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="year" stroke="#bbb" />
          <YAxis stroke="#bbb" />
          <Tooltip
            contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
          />
          <Legend wrapperStyle={{ color: 'white' }} />
          <Bar dataKey="surgeries" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
