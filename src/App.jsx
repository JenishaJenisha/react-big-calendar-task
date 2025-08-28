import React from "react";
import CalendarView from "./components/CalendarView";
import DataModal from "./components/DataModal";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>📅 React Big Calendar with Bar Graph</h1>
      <CalendarView />
      <DataModal />
    </div>
  );
};

export default App;
