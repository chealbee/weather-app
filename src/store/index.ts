import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";
import airSlice from "./airIndexSlice";

const store = configureStore({
   reducer: {
      weatherData: weatherSlice,
      airIndex: airSlice,
   },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
