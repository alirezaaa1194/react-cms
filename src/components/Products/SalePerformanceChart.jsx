import React from "react";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";

export default function SalePerformanceChart() {
  const data = [
    { name: "Page A", uv: 150, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 100, pv: 2400, amt: 2400 },
    { name: "Mar", uv: 250, pv: 2400, amt: 2400 },
  ];
  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <XAxis dataKey="name" fontSize="14px" stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
