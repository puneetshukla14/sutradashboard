'use client';

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Sector,
} from 'recharts';
import { useState } from 'react';

const data = [
  { name: 'Cardiology', value: 400 },
  { name: 'Orthopedics', value: 300 },
  { name: 'Neurology', value: 200 },
  { name: 'Urology', value: 150 },
  { name: 'Gastroenterology', value: 100 },
  { name: 'Oncology', value: 80 },
];

const COLORS = [
  '#6366f1',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#0ea5e9',
  '#a855f7',
];

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;

  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 12) * cos;
  const sy = cy + (outerRadius + 12) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 25;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        fill="#f8fafc"
        className="text-base font-bold"
      >
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 2}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="#e2e8f0"
        strokeWidth={3}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        strokeWidth={2}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={4} fill={fill} stroke="white" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 10}
        y={ey - 4}
        textAnchor={textAnchor}
        fill="#f1f5f9"
        className="text-sm font-medium"
      >{`${(percent * 100).toFixed(1)}%`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 10}
        y={ey + 10}
        textAnchor={textAnchor}
        fill="#cbd5e1"
        className="text-xs"
      >{`${value} surgeries`}</text>
    </g>
  );
};

export default function SpecialtyPieChart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_: any, index: number) => setActiveIndex(index);

  return (
    <div className="w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-6 rounded-2xl shadow-2xl border border-slate-700 mt-6 transition-all duration-700 ease-in-out hover:shadow-indigo-500/50">
      <h2 className="text-2xl font-extrabold mb-6 text-white tracking-wide">
        Specialty-wise Surgeries
      </h2>
      <ResponsiveContainer width="100%" height={360}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            isAnimationActive={true}
            animationDuration={1400}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                className="transition-transform duration-500 ease-in-out hover:scale-[1.08] cursor-pointer"
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1e293b',
              borderColor: '#334155',
              borderRadius: 10,
              boxShadow: '0 0 12px rgba(255,255,255,0.12)',
            }}
            labelStyle={{ color: '#f1f5f9' }}
            itemStyle={{ color: '#fff' }}
            formatter={(value: any, name: any) => [`${value}`, `${name}`]}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}