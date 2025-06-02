import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card/card';

export default function KpiCards({ data }: any) {
  const stats = [
    { label: 'Total Surgeries', value: data.totalSurgery },
    { label: 'Total Hospitals', value: data.totalHospital },
    { label: 'Total Procedures', value: data.totalProcedure },
    { label: 'Total Specialties', value: data.totalSpeciality },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((item) => (
        <Card key={item.label} className="bg-[#1e1e1e] text-white shadow">
          <CardHeader>
            <CardTitle>{item.label}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
