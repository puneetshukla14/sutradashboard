'use client';

import React, { useEffect, useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/card/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

type DashboardData = {
  totalSurgery: number;
  totalHospital: number;
  totalProcedure: number;
  totalSpeciality: number;
  hospitalSurgeryCount: { hospital: string; count: number }[];
  specialitySurgeryCount: { speciality: string; count: number }[];
  surgeryCountByYear: { year: number; count: number }[];
  procedureSurgeryCount: { procedure: string; count: number }[];
  filters: {
    hospital: string[];
    year: string[];
    month: string[];
    speciality: string[];
    mantra_model: string[];
    telesurgery: string[];
  };
};

type Filters = {
  hospital: string;
  year: string;
  month: string;
  speciality: string;
  mantra_model: string;
  telesurgery: string;
};

const COLORS = [
  '#8884d8',
  '#82ca9d',
  '#ffc658',
  '#ff8042',
  '#a83279',
  '#00C49F',
  '#FFBB28',
  '#FF4444',
  '#7f00ff',
  '#00bcd4',
];

// Sample static data for testing
const sampleDashboardData: DashboardData = {
  totalSurgery: 395,
  totalHospital: 5,
  totalProcedure: 7,
  totalSpeciality: 4,
  hospitalSurgeryCount: [
    { hospital: 'City Hospital', count: 120 },
    { hospital: 'Green Valley Clinic', count: 90 },
    { hospital: 'Sunrise Medical Center', count: 75 },
    { hospital: 'Blue Ridge Hospital', count: 60 },
    { hospital: 'Riverdale Healthcare', count: 50 },
  ],
  specialitySurgeryCount: [
    { speciality: 'Cardiology', count: 130 },
    { speciality: 'Orthopedics', count: 95 },
    { speciality: 'Neurology', count: 80 },
    { speciality: 'General Surgery', count: 90 },
  ],
  surgeryCountByYear: [
    { year: 2021, count: 120 },
    { year: 2022, count: 150 },
    { year: 2023, count: 125 },
  ],
  procedureSurgeryCount: [
    { procedure: 'Procedure A', count: 140 },
    { procedure: 'Procedure B', count: 110 },
    { procedure: 'Procedure C', count: 85 },
    { procedure: 'Procedure D', count: 60 },
    { procedure: 'Procedure E', count: 50 },
  ],
  filters: {
    hospital: ['City Hospital', 'Green Valley Clinic', 'Sunrise Medical Center', 'Blue Ridge Hospital', 'Riverdale Healthcare'],
    year: ['2021', '2022', '2023'],
    month: ['January', 'February', 'March', 'April'],
    speciality: ['Cardiology', 'Orthopedics', 'Neurology', 'General Surgery'],
    mantra_model: ['Model A', 'Model B'],
    telesurgery: ['Yes', 'No'],
  },
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [filters, setFilters] = useState<Filters>({
    hospital: '',
    year: '',
    month: '',
    speciality: '',
    mantra_model: '',
    telesurgery: '',
  });

  useEffect(() => {
    // Use sample data for quick testing instead of fetching API
    setData(sampleDashboardData);
  }, []);

  if (!data) {
    return (
      <div className="text-white p-4 text-center">
        Loading...
      </div>
    );
  }

  const renderFilterSelect = (
    key: keyof Filters,
    options: string[]
  ) => {
    const currentValue = filters[key] === '' ? 'all' : filters[key];

    return (
      <Select
        key={key}
        value={currentValue}
        onValueChange={(value) =>
          setFilters((prev) => ({
            ...prev,
            [key]: value === 'all' ? '' : value,
          }))
        }
      >
        <SelectTrigger>
          <SelectValue placeholder={key.replace(/_/g, ' ').toUpperCase()} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  };

  return (
    <div className="bg-[#0e0e0e] min-h-screen p-6 space-y-6 text-white">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Surgery</CardTitle>
          </CardHeader>
          <CardContent>{data.totalSurgery}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Hospital</CardTitle>
          </CardHeader>
          <CardContent>{data.totalHospital}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Procedure</CardTitle>
          </CardHeader>
          <CardContent>{data.totalProcedure}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Speciality</CardTitle>
          </CardHeader>
          <CardContent>{data.totalSpeciality}</CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {renderFilterSelect('hospital', data.filters.hospital)}
        {renderFilterSelect('year', data.filters.year)}
        {renderFilterSelect('month', data.filters.month)}
        {renderFilterSelect('speciality', data.filters.speciality)}
        {renderFilterSelect('mantra_model', data.filters.mantra_model)}
        {renderFilterSelect('telesurgery', data.filters.telesurgery)}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Hospital-wise Surgery Count */}
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>Hospital Wise Surgery Count</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <ResponsiveContainer width="100%" height="90%">
              <BarChart layout="vertical" data={data.hospitalSurgeryCount}>
                <XAxis type="number" />
                <YAxis type="category" dataKey="hospital" width={150} />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Speciality-wise Surgery (Pie) */}
        <Card className="h-[400px]">
          <CardHeader>
            <CardTitle>Speciality Wise Surgery</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <ResponsiveContainer width="100%" height="90%">
              <PieChart>
                <Pie
                  data={data.specialitySurgeryCount}
                  dataKey="count"
                  nameKey="speciality"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {data.specialitySurgeryCount.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Surgery Count by Year */}
        <Card className="h-[300px]">
          <CardHeader>
            <CardTitle>Surgery Count by Year</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <ResponsiveContainer width="100%" height="90%">
              <BarChart data={data.surgeryCountByYear}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Procedure-wise Surgery Count */}
        <Card className="h-[300px]">
          <CardHeader>
            <CardTitle>Procedure Wise Surgery Count</CardTitle>
          </CardHeader>
          <CardContent className="h-full">
            <ResponsiveContainer width="100%" height="90%">
              <BarChart layout="vertical" data={data.procedureSurgeryCount}>
                <XAxis type="number" />
                <YAxis type="category" dataKey="procedure" width={180} />
                <Tooltip />
                <Bar dataKey="count" fill="#ffc658" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
