'use client';

import { FaHospital, FaSyringe, FaStethoscope } from 'react-icons/fa';
import { MdOutlineNumbers } from 'react-icons/md';

const stats = [
  {
    title: 'Total Surgeries',
    value: 4098,
    icon: <MdOutlineNumbers size={30} className="text-gray-700" />,
    color: 'bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100',
  },
  {
    title: 'Total Hospitals',
    value: 78,
    icon: <FaHospital size={30} className="text-blue-600" />,
    color: 'bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300',
  },
  {
    title: 'Total Procedures',
    value: 110,
    icon: <FaSyringe size={30} className="text-teal-600" />,
    color: 'bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300',
  },
  {
    title: 'Total Specialties',
    value: 10,
    icon: <FaStethoscope size={30} className="text-purple-600" />,
    color: 'bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300',
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
