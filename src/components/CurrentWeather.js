import React from "react";

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
const CurrentWeather = ({ error, loading, temperature, icon }) => {
  if (loading === undefined || error) {
    return null;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  const iconUrl = getIconUrl(icon);
  return (
    <div className="current-weather">
      <img alt="weather icon" src={iconUrl} />
    </div>
  );
};

export default CurrentWeather;
