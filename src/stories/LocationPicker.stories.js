import React from "react";
import LocationPicker from "../components/LocationPicker";

export default {
  title: "LocationPicker",
  component: LocationPicker
};

export const byDefault = () => <LocationPicker />;

export const withError = () => <LocationPicker error={"I iz error"} />;
