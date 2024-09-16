import { HabitState } from "./habitSlice";
import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "daily" | "weekly";
  completedDates: string[];
  createdAt: string;
}

export interface HabitState {
  habits: Habit[];
}

const initialState: HabitState = {
  habits: [],
};

export const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: () => {},
  },
});

export const { addHabit } = habitSlice.actions;
export default habitSlice.reducer;
