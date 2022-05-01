import { PieChart, Pie, ResponsiveContainer } from "recharts";

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

export const BarChart = () => {
  return (
    <ResponsiveContainer width={700} height="80%">
      <PieChart></PieChart>
    </ResponsiveContainer>
  );
};
