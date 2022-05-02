import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Tooltip as CustomTooltip } from "./Tooltip";

export const GradientBarChart = ({ color1, color2, data, id, xKey, yKey }) => {
  return (
    <BarChart width={900} height={300} data={data}>
      <defs>
        <linearGradient
          id={id}
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          spreadMethod="reflect"
        >
          <stop offset="0" stopColor={color1} />
          <stop offset="1" stopColor={color2} />
        </linearGradient>
      </defs>
      <XAxis dataKey={xKey} axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip content={<CustomTooltip />} cursor={false} />
      <Bar dataKey={yKey} fill={`url(#${id})`} barSize={30} />
    </BarChart>
  );
};
