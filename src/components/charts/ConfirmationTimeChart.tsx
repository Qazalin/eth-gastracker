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
  { name: "Low", time: d.SafeGasEstimate },
  { name: "Average", time: d.ProposeGasEstimate },
  { name: "High", time: d.FastGasEstimate },
];

export const ConfirmationTimeChart = () => {
  return (
    <ResponsiveContainer width="90%" height="70%">
      <BarChart
        style={{
          marginLeft: "20px",
        }}
        data={data}
      >
        <CartesianGrid opacity={0.1} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="time" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};
