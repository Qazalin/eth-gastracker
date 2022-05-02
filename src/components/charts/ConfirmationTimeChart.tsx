import { ConfirmationTimeChartProps } from "@etherTrack/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/**
 * A bar chart for illustrating estimated confirmation time for the three categories of gas prices: Low, Average and High
 * @param estimatedTimes An array of estimatedTimes
 */
export const ConfirmationTimeChart: React.FC<ConfirmationTimeChartProps> = ({
  data: d,
}) => {
  const data = [
    { name: "Low", time: d[0] },
    { name: "Average", time: d[1] },
    { name: "High", time: d[2] },
  ];
  // The id used for gradient
  const id = "cost-estimation-bar";

  return (
    <ResponsiveContainer width={"90%"} height={"70%"}>
      <BarChart
        style={{
          marginLeft: "20px",
        }}
        data={data}
      >
        <defs>
          <linearGradient
            id={id}
            x1="0"
            y1="0%"
            x2="100%"
            y2="100%"
            spreadMethod="reflect"
          >
            <stop offset="0" stopOpacity="0.9" stopColor={"#FC759E"} />
            <stop offset="1" stopColor={"#A3546E"} stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <CartesianGrid opacity={0.1} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="time" stroke="#FC759E" fill={`url(#${id})`} />
      </BarChart>
    </ResponsiveContainer>
  );
};
