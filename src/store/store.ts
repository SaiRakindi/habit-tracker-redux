import { configureStore } from "@reduxjs/toolkit";
import HabitReducer from "./habitSlice";

const store = configureStore({
  reducer: { habits: HabitReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
