import React from "react";

const CurrentWeather = ({ loading, temperature }) => {
  if (loading === undefined) {
    return null;
  }

  return loading ? <p>Loading...</p> : <code>temperature: {temperature},</code>;
};

export default CurrentWeather;
