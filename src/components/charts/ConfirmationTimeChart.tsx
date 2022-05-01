import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const d = {
  SafeGasPrice: "213",
  SafeGasEstimate: "45",
  ProposeGasPrice: "213",
  ProposeGasEstimate: "195",
  FastGasPrice: "215",
  FastGasEstimate: "45",
};
const data = [
  { name: "Low", value: d.SafeGasEstimate },
  { name: "Average", value: d.ProposeGasEstimate },
  { name: "High", value: d.FastGasEstimate },
];

export const ConfirmationTimeChart = () => {
  return (
    <ResponsiveContainer width={700} height="80%">
      <BarChart width={150} height={40} data={data}>
        <CartesianGrid opacity={0.1} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
