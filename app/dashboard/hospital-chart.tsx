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
  Cell,
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

const barColors = [
  '#f97316', // Medanta - Orange
  '#10b981', // AIIMS - Emerald
  '#6366f1', // Apollo - Indigo
  '#f43f5e', // Fortis - Rose
  '#22d3ee', // Max - Cyan
  '#a855f7', // Narayana - Purple
  '#eab308', // KIMS - Yellow
];

export default function HospitalChart() {
  return (
    <div
      className="
        w-full bg-[#0f172a] p-6 rounded-2xl shadow-xl border border-slate-700
        transition-shadow duration-300 ease-in-out
        hover:shadow-indigo-500/50
      "
    >
      <h2 className="text-2xl font-bold mb-6 text-white tracking-wide">
        Hospital-wise Surgeries
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 10, right: 30, bottom: 10, left: 100 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis type="number" stroke="#94a3b8" fontSize={12} />
          <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={13} />
          <Tooltip
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            contentStyle={{
              backgroundColor: '#1e293b',
              borderColor: '#334155',
              borderRadius: 8,
            }}
            labelStyle={{ color: '#cbd5e1' }}
            itemStyle={{ color: '#fff' }}
          />
          <Bar
            dataKey="count"
            radius={[12, 12, 12, 12]}
            animationDuration={700}
            animationEasing="ease-in-out"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColors[index % barColors.length]} />
            ))}
            <LabelList
              dataKey="count"
              position="right"
              fill="#f1f5f9"
              fontSize={14}
              offset={10}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
