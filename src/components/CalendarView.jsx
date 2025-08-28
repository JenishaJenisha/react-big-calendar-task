// src/components/CalendarView.jsx
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "../redux/calendarSlice";
import dummyData from "../data/dummyData";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const dispatch = useDispatch();

  // Create events from dummyData so they show on the calendar
  const events = Object.keys(dummyData).map((date) => ({
    title:
      dummyData[date] && dummyData[date].length > 0
        ? `📊 ${dummyData[date].length} Records`
        : "⚠️ No Data",
    start: moment(date, "DD-MM-YYYY").toDate(),
    end: moment(date, "DD-MM-YYYY").toDate(),
    allDay: true,
  }));

  const handleSelectEvent = (event) => {
    const formattedDate = moment(event.start).format("DD-MM-YYYY");
    const dataForDate = dummyData[formattedDate];

    if (!dataForDate || dataForDate.length === 0) {
      alert("No data found for the selected date.");
      return;
    }

    dispatch(setSelectedDate(formattedDate));
  };

  return (
    <div style={{ height: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectEvent={handleSelectEvent}
        views={["month", "week", "day"]}
      />
    </div>
  );
};

export default CalendarView;
