import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function HospitalBarChart({ data }: any) {
  return (
    <Card className="bg-[#1e1e1e] text-white">
      <CardHeader>
        <CardTitle>Hospital-wise Surgery Count</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" />
            <YAxis type="category" dataKey="hospital" />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
