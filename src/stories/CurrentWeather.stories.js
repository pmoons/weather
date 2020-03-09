import React from "react";
import CurrentWeather from "../components/CurrentWeather";

export default {
  title: "CurrentWeather",
  component: CurrentWeather
};

const weatherData = {
  time: 1583721100007,
  summary: "Drizzle",
  icon: "rain",
  precipProbability: 0.9,
  precipType: "rain",
  temperature: 66.1,
  dewPoint: 60.77,
  humidity: 0.83,
  uvIndex: 1,
  cloudCover: 0.7
};

export const byDefault = () => (
  <CurrentWeather loading={false} {...weatherData} />
);
export const loading = () => <CurrentWeather loading={true} />;
