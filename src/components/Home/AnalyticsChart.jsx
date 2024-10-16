import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AnalyticsChart() {
  const data = [
    { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 250, pv: 2400, amt: 2400 },
    { name: "Page C", uv: 350, pv: 2400, amt: 2400 },
    { name: "Page D", uv: 600, pv: 2400, amt: 2400 },
    { name: "Page E", uv: 150, pv: 2400, amt: 2400 },
    { name: "Page F", uv: 200, pv: 2400, amt: 2400 },
  ];
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }} className="w-full">
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}
