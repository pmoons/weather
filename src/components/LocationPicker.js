import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import "./LocationPicker.scss";

const LocationPicker = ({ getLocation, error }) => {
  return (
    <div className="location-picker">
      <FontAwesomeIcon
        data-testid="location-picker"
        onClick={getLocation}
        icon={faLocationArrow}
      />
      {error ? <span className="location-picker--error">{error}</span> : null}
    </div>
  );
};

export default LocationPicker;
