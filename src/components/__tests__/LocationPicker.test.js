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

  describe("when an error message is passed in", () => {
    it("renders the error message", () => {
      const { getByText } = render(<LocationPicker error={"foo"} />);
      expect(getByText("foo"));
    });
  });
});
