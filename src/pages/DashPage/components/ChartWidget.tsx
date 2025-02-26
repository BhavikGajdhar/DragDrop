import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { DashChart } from "../utility/model/DashBoardModel";

//   { name: "Jan", value: 400 },
//   { name: "Feb", value: 300 },
//   { name: "Mar", value: 500 },
//   { name: "Apr", value: 700 },
// ];
const ChartWidget = ({ value }: { value: string }) => {
  const { chartData } = useFetch({ value });
  const [data, setChartOptions] = useState<DashChart[]>([]);
  useEffect(() => {
    if (chartData) {
      setChartOptions(chartData);
    }
  }, [chartData]);
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
    <h2 className="text-lg font-semibold mb-2 text-black">Chart</h2>
    <div className="w-full h-40">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
  );
};

export default ChartWidget;
