import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { clearSelectedDate } from "../redux/calendarSlice";
import dummyData from "../data/dummyData";

const DataModal = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.calendar.selectedDate);
  const rawDataForDate = dummyData[selectedDate] || [];

  if (!selectedDate) return null;

  // 🔄 Transform data for recharts
  const dataForChart = rawDataForDate.map((obj) => {
    const [key, value] = Object.entries(obj)[0];
    return { name: key, value };
  });

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 9999,
        }}
      >
        <h3>Data for {selectedDate}</h3>
        {dataForChart.length > 0 ? (
          <BarChart width={400} height={300} data={dataForChart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        ) : (
          <p style={{ color: "red" }}>
            ⚠️ No data found for the selected date.
          </p>
        )}
        <button
          onClick={() => dispatch(clearSelectedDate())}
          style={{
            marginTop: "15px",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            backgroundColor: "#8884d8",
            color: "white",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DataModal;
