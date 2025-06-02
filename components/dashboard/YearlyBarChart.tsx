import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function YearlyBarChart({ data }: any) {
  return (
    <Card className="bg-[#1e1e1e] text-white">
      <CardHeader>
        <CardTitle>Surgery Count by Year</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#00c49f" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
