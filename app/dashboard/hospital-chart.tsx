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
  '#f97316',
  '#10b981',
  '#6366f1',
  '#f43f5e',
  '#22d3ee',
  '#a855f7',
  '#eab308',
];

export default function HospitalChart() {
  return (
    <div className="w-full overflow-x-auto mt-8">
      <div className="min-w-[820px] bg-[#0f172a] p-6 rounded-2xl shadow-xl border border-slate-700 hover:shadow-indigo-500/50 transition-shadow duration-300 ease-in-out">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-6 text-white tracking-wide">
          Hospital-wise Surgeries
        </h2>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 20, right: 40, bottom: 20, left: 140 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis
                type="number"
                stroke="#94a3b8"
                tick={{ fontSize: 12 }}
              />
              <YAxis
                type="category"
                dataKey="name"
                stroke="#94a3b8"
                tick={{ fontSize: 13 }}
                width={140}
              />
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
                animationDuration={800}
                animationEasing="ease-in-out"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={barColors[index % barColors.length]}
                  />
                ))}
                <LabelList
                  dataKey="count"
                  position="right"
                  fill="#f1f5f9"
                  fontSize={14}
                  offset={16}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
