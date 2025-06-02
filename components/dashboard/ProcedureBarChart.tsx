import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ProcedureBarChart({ data }: any) {
  return (
    <Card className="bg-[#1e1e1e] text-white">
      <CardHeader>
        <CardTitle>Procedure-wise Surgery Count</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" />
            <YAxis type="category" dataKey="procedure" />
            <Tooltip />
            <Bar dataKey="count" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
