import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import useLocation from "../hooks/useLocation";
import "./LocationPicker.scss";

const CURRENT_WEATHER = gql`
  query currentWeather($latitude: Float!, $longitude: Float!) {
    currentWeather(latitude: $latitude, longitude: $longitude) {
      currently {
        temperature
      }
    }
  }
`;

const LocationPicker = () => {
  const {
    location: { latitude, longitude }
  } = useLocation();

  const { loading, error, data } = useQuery(CURRENT_WEATHER, {
    variables: {
      latitude,
      longitude
    },
    skip: !latitude || !longitude
  });

  return (
    <div className="location-picker">
      <FontAwesomeIcon data-testid="location-picker" icon={faLocationArrow} />
      <input
        id="location-picker"
        placeholder="E.g. Portland, OR"
        type="search"
      />
    </div>
  );
};

export default LocationPicker;
