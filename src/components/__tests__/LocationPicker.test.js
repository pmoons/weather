import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LocationPicker from "../LocationPicker";

describe("LocationPicker", () => {
  describe("when the location icon is clicked", () => {
    it("fetches the user's location", () => {
      const getLocation = jest.fn();
      const { getByTestId } = render(
        <LocationPicker getLocation={getLocation} />
      );
      fireEvent.click(getByTestId("location-picker"));

      expect(getLocation).toHaveBeenCalled();
    });
  });
});
