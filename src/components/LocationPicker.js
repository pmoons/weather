import React from "react";
import "./LocationPicker.scss";

export default class LocationPicker extends React.Component {
  render() {
    return (
      <div className="location-picker">
        <input
          id="location-picker"
          placeholder="E.g. Portland, OR"
          type="search"
        />
      </div>
    );
  }
}
