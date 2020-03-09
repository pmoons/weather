import React from "react";

const CurrentWeather = ({ error, loading, temperature }) => {
  if (loading === undefined || error) {
    return null;
  }

  return loading ? <p>Loading...</p> : <code>temperature: {temperature},</code>;
};

export default CurrentWeather;
