'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Cardiology', value: 400 },
  { name: 'Orthopedics', value: 300 },
  { name: 'Neurology', value: 200 },
  { name: 'Urology', value: 150 },
  { name: 'Gastroenterology', value: 100 },
  { name: 'Oncology', value: 80 },
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#8dd1e1', '#a4de6c'];

export default function SpecialtyPieChart() {
  return (
    <div className="w-full bg-[#1e1e1e] p-6 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4 text-white">Specialty-wise Surgeries</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
          />
          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{ color: 'white' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
