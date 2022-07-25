import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IWeather, RootObject } from "../types/reduxWeatherTypes";

type initialWeather = {
   data: IWeather;
   country: string;
};

const initialState: initialWeather = {
   data: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      name: "",
      icon: "02d",
      windSpeed: 0,
      coord: { lon: 0, lat: 0 },
   },
   country: "Kyiv",
};

export const getWeatherData = createAsyncThunk<IWeather>(
   "weatherData/getWeatherData",
   async () => {
      const res = await axios.get<RootObject>(
         `https://api.openweathermap.org/data/2.5/weather`,
         {
            params: {
               appid: "dc9bbc03e96950be7ac81adda2c9181c",
               q: "kyiv",
               units: "metric",
            },
         },
      );
      const rd = res.data;
      return {
         feels_like: rd.main.feels_like,
         humidity: rd.main.humidity,
         pressure: rd.main.pressure,
         temp: rd.main.temp,
         name: rd.name,
         icon: rd.weather[0].icon,
         windSpeed: rd.wind.speed,
         coord: rd.coord,
      };
   },
);

export const weatherSlice = createSlice({
   name: "weatherData",
   initialState,
   reducers: {},
   extraReducers: bilder => {
      bilder.addCase(getWeatherData.fulfilled, (state, action) => {
         state.data = action.payload;
      });
   },
});

export const {} = weatherSlice.actions;
export default weatherSlice.reducer;
