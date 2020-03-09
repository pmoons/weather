import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import "./LocationPicker.scss";

const LocationPicker = ({ getLocation }) => {
  return (
    <div className="location-picker">
      <FontAwesomeIcon
        data-testid="location-picker"
        onClick={getLocation}
        icon={faLocationArrow}
      />
      <input
        id="location-picker"
        placeholder="E.g. Portland, OR"
        type="search"
      />
    </div>
  );
};

export default LocationPicker;
