import React from "react";
import moment from "moment";

import "./CurrentWeather.scss";

const getIconUrl = icon => {
  switch (icon) {
    case "clear-day":
      return "img/day.svg";
    case "clear-night":
      return "img/night.svg";
    case "rain":
      return "img/rainy-7.svg";
    case "snow":
    case "sleet":
      return "img/snowy-6.svg";
    case "wind":
    case "fog":
    case "cloudy":
      return "img/cloudy.svg";
    case "partly-cloudy-day":
      return "img/cloudy-day-3.svg";
    case "partly-cloudy-night":
      return "img/cloudy-night-3.svg";
    default:
      return "img/weather_sunset.svg";
  }
};
const CurrentWeather = ({
  error,
  loading,
  time,
  summary,
  icon,
  precipProbability,
  precipType,
  temperature,
  dewPoint,
  humidity,
  uvIndex,
  cloudCover
}) => {
  if (loading === undefined || error) {
    return null;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="current-weather">
      <div className="current-weather__summary">
        <span>{moment(time * 1000).format("MMM Do")}</span>
        <img alt="weather icon" src={getIconUrl(icon)} />
        <span>{summary}</span>
        <span>{temperature}°F</span>
      </div>
      <div className="current-weather__details">
        <span>
          {precipProbability * 100}% chance of {precipType}
        </span>
        <span>Dew Point: {dewPoint}%</span>
        <span>Humidity: {humidity * 100}%</span>
        <span>UV Index: {uvIndex}</span>
        <span>Cloud Cover: {cloudCover * 100}%</span>
      </div>
    </div>
  );
};

export default CurrentWeather;
