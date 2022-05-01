import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { Tooltip as CustomTooltip } from "./Tooltip";

export const GeneralGradientBar = ({ color1, color2, data, id }) => {
  return (
    <BarChart width={600} height={300} data={data}>
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
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip content={<CustomTooltip />} cursor={false} />
      <Bar dataKey="uv" fill={`url(#${id})`} barSize={30} />
    </BarChart>
  );
};
