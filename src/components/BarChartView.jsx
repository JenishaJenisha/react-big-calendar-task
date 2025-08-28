import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const BarChartView = ({ data }) => {
  const formatted = data.map((item) => {
    const key = Object.keys(item)[0];
    return { name: key, value: item[key] };
  });

  return (
    <BarChart width={400} height={300} data={formatted}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  );
};

export default BarChartView;
