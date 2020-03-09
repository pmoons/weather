import React from "react";
import CurrentWeather from "../components/CurrentWeather";

export default {
  title: "CurrentWeather",
  component: CurrentWeather
};

const weatherData = {
  summary: "Drizzle",
  icon: "rain",
  precipProbability: 0.9,
  precipType: "rain",
  temperature: 66.1
};

export const byDefault = () => <CurrentWeather {...weatherData} />;
