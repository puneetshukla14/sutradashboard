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

// Custom Tooltip with glow effect and matching colors
const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="bg-gradient-to-r from-green-600 to-green-400 text-white p-3 rounded-lg shadow-lg"
        style={{
          boxShadow: '0 0 10px 3px rgba(34,197,94,0.7)',
          fontWeight: '600',
          fontSize: '14px',
        }}
      >
        <p className="mb-1">{label}</p>
        <p>{`Count: ${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }

  return null;
};

export default function ProcedureChart() {
  return (
    <div
      className="w-full max-w-full p-6 rounded-2xl
      bg-gradient-to-tr from-green-800/60 to-green-700/30
      backdrop-blur-md shadow-[0_0_15px_5px_rgba(34,197,94,0.6)]
      hover:shadow-[0_0_25px_10px_rgba(34,197,94,0.8)]
      transition-shadow duration-300
      mt-6 overflow-auto"
      style={{ minWidth: 700 }}
    >
      <h2 className="text-2xl font-extrabold mb-6 text-white drop-shadow-lg">
        Procedure Wise Surgery Count
      </h2>
      <div style={{ width: '100%', height: 320, minWidth: 700 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 40, left: 120, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#2d633f" />
            <XAxis
              type="number"
              stroke="#a3f7b5"
              tick={{ fill: '#a3f7b5', fontWeight: 600 }}
              axisLine={{ stroke: '#4ade80' }}
              tickLine={false}
            />
            <YAxis
              dataKey="procedure"
              type="category"
              stroke="#a3f7b5"
              width={160}
              tick={{ fill: '#a3f7b5', fontWeight: 600 }}
              axisLine={{ stroke: '#4ade80' }}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="count"
              radius={[10, 10, 10, 10]}
              fill="url(#barGradient)"
              background={{ fill: '#164e26' }}
              isAnimationActive={true}
              animationDuration={1500}
              barSize={22}
              // Add glow with filter
              filter="url(#glow)"
            />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>

              <filter id="glow" height="130%" width="130%" x="-15%" y="-15%" colorInterpolationFilters="sRGB">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#22c55e" floodOpacity="0.7" />
                <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#4ade80" floodOpacity="0.5" />
              </filter>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
