'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { procedure: 'Cholecystectomy', count: 350 },
  { procedure: 'Hernia', count: 280 },
  { procedure: 'Appendectomy', count: 200 },
  { procedure: 'CABG', count: 150 },
  { procedure: 'Tonsillectomy', count: 120 },
  { procedure: 'Hip Replacement', count: 100 },
  { procedure: 'Knee Replacement', count: 90 },
  { procedure: 'Cataract Surgery', count: 80 },
  { procedure: 'Gallbladder Removal', count: 75 },
];

export default function ProcedureChart() {
  return (
    <div className="w-full bg-[#1e1e1e] p-6 rounded-xl shadow-md mt-6 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 text-white">Procedure Wise Surgery Count</h2>
      <div style={{ minWidth: '700px', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis type="number" stroke="#bbb" />
            <YAxis
              dataKey="procedure"
              type="category"
              stroke="#bbb"
              width={150}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
            />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
