import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/card/select';

export default function FiltersBar({ filters }: any) {
  const filterKeys = Object.keys(filters);

  return (
    <div className="flex flex-wrap gap-4 justify-end">
      {filterKeys.map((key) => (
        <Select key={key}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={`Select ${key}`} />
          </SelectTrigger>
          <SelectContent>
            {filters[key].map((val: string) => (
              <SelectItem key={val} value={val}>{val}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
}
