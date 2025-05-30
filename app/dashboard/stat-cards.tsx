'use client';

import { FaHospital, FaSyringe, FaStethoscope } from 'react-icons/fa';
import { MdOutlineNumbers } from 'react-icons/md';

const stats = [
  {
    title: 'Total Surgeries',
    value: 4098,
    icon: <MdOutlineNumbers size={30} className="text-yellow-400" />,
    color: 'bg-gradient-to-r from-yellow-500 to-yellow-300',
  },
  {
    title: 'Total Hospitals',
    value: 78,
    icon: <FaHospital size={30} className="text-blue-400" />,
    color: 'bg-gradient-to-r from-blue-500 to-blue-300',
  },
  {
    title: 'Total Procedures',
    value: 110,
    icon: <FaSyringe size={30} className="text-green-400" />,
    color: 'bg-gradient-to-r from-green-500 to-green-300',
  },
  {
    title: 'Total Specialties',
    value: 10,
    icon: <FaStethoscope size={30} className="text-pink-400" />,
    color: 'bg-gradient-to-r from-pink-500 to-pink-300',
  },
];

export default function StatCards() {
  return (
    <>
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className={`rounded-xl shadow-lg p-5 flex items-center justify-between ${stat.color} text-black hover:scale-[1.02] transition-transform duration-200`}
        >
          <div>
            <div className="text-xl font-semibold">{stat.title}</div>
            <div className="text-3xl font-bold mt-1">{stat.value}</div>
          </div>
          <div>{stat.icon}</div>
        </div>
      ))}
    </>
  );
}
