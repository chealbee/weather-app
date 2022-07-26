import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IINdex } from "../types/reduxIndex";

interface weatherState {
   data: IINdex;
}

const initialState: weatherState = {
   data: {
      dt: 0,
      main: {
         aqi: 0,
      },
      components: {
         co: 0,
         no: 0,
         no2: 0,
         o3: 0,
         so2: 0,
         pm2_5: 0,
         pm10: 0,
         nh3: 0,
      },
   },
};

export const getAirIndex = createAsyncThunk<IINdex, string | undefined>(
   "airIndex/getAirIndex",
   async payload => {
      const location = payload || "kyiv";
      const coord = await axios.get(
         "http://api.openweathermap.org/geo/1.0/direct",
         {
            params: {
               q: location,
               limit: 1,
               appid: "dc9bbc03e96950be7ac81adda2c9181c",
            },
         },
      );
      const res = await axios.get(
         "http://api.openweathermap.org/data/2.5/air_pollution",
         {
            params: {
               lat: coord.data[0].lat,
               lon: coord.data[0].lon,
               appid: "dc9bbc03e96950be7ac81adda2c9181c",
            },
         },
      );
      console.log(res.data.list[0]);
      return res.data.list[0];
   },
);

const airIndexSlice = createSlice({
   name: "airIndex",
   initialState,
   reducers: {},
   extraReducers: builder =>
      builder.addCase(getAirIndex.fulfilled, (state, action) => {
         state.data = action.payload;
      }),
});

export default airIndexSlice.reducer;
