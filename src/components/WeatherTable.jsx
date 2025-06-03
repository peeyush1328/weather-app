import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Pagination from "./pagination";
import { format } from "date-fns";

export default function WeatherTable({
  data,
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) {
  return (
    <div className="overflow-x-auto">
      <div className="w-full border border-[#DADADA] rounded-[8px] overflow-hidden">
        <Table>
          <TableHeader className="[&_th]:font-medium [&_th]:text-[#7F7F7F] [&_th]:px-[16px]  [&_th]:py-[4px] [&_th]:text-xs">
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Max Temp</TableHead>
              <TableHead>Min Temp</TableHead>
              <TableHead>Mean Temp</TableHead>
              <TableHead>Max Apparent</TableHead>
              <TableHead>Min Apparent</TableHead>
              <TableHead>Mean Apparent</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="[&_td]:text-sm [&_td]:px-[16px] [&_td]:py-[12px]">
            {data.map((row, i) => (
              <TableRow key={i}>
                <TableCell>{format(row.date, "LLL dd, y")}</TableCell>
                <TableCell>{row.maxTemp ?? "N/A"}</TableCell>
                <TableCell>{row.minTemp ?? "N/A"}</TableCell>
                <TableCell>{row.meanTemp ?? "N/A"}</TableCell>
                <TableCell>{row.maxApp ?? "N/A"}</TableCell>
                <TableCell>{row.minApp ?? "N/A"}</TableCell>
                <TableCell>{row.meanApp ?? "N/A"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}
