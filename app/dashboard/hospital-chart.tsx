'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from 'recharts';

const data = [
  { name: 'Medanta', count: 1200 },
  { name: 'AIIMS Delhi', count: 980 },
  { name: 'Apollo', count: 870 },
  { name: 'Fortis', count: 765 },
  { name: 'Max', count: 620 },
  { name: 'Narayana', count: 500 },
  { name: 'KIMS', count: 400 },
];

export default function HospitalChart() {
  return (
    <div className="w-full bg-[#1e1e1e] p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 text-white">Hospital-wise Surgeries</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data} layout="vertical" margin={{ top: 10, right: 20, bottom: 10, left: 100 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis type="number" stroke="#aaa" />
          <YAxis dataKey="name" type="category" stroke="#aaa" />
          <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} />
          <Bar dataKey="count" fill="#3b82f6">
            <LabelList dataKey="count" position="right" fill="#fff" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
