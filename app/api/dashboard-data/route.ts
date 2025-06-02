// /app/api/dashboard-data/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    totalSurgery: 4098,
    totalHospital: 78,
    totalProcedure: 110,
    totalSpeciality: 10,
    hospitalSurgeryCount: [/* your objects here */],
    specialitySurgeryCount: [/* ... */],
    surgeryCountByYear: [/* ... */],
    procedureSurgeryCount: [/* ... */],
    filters: {
      hospital: ['Apex', 'RGCI', 'GMC'],
      year: ['2022', '2023', '2024'],
      month: ['January', 'February'],
      speciality: ['General Surgery', 'Cardiac'],
      mantra_model: ['Model A', 'Model B'],
      telesurgery: ['Yes', 'No']
    }
  };

  return NextResponse.json(data);
}
