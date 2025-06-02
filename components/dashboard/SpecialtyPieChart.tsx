import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card/card';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#00c49f', '#d0ed57', '#ffbb28', '#ff4444'];

export default function SpecialtyPieChart({ data }: any) {
  return (
    <Card className="bg-[#1e1e1e] text-white">
      <CardHeader>
        <CardTitle>Specialty-wise Surgery Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={Array.isArray(data) ? data : []} dataKey="count" nameKey="specialty" cx="50%" cy="50%" outerRadius={100}>
              {(Array.isArray(data) ? data : []).map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
