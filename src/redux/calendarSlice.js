import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../data/dummyData";

const initialState = {
  events: [],
  selectedDate: null,
  data: dummyData,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const { setSelectedDate, setEvents } = calendarSlice.actions;
export default calendarSlice.reducer;
