import React from "react";
import { render } from "@testing-library/react";
import CurrentWeather from "../CurrentWeather";

describe("CurrentWeather", () => {
  it("displays the passed in weather information", () => {
    const { getByText } = render(
      <CurrentWeather loading={false} temperature={5} />
    );
    expect(getByText("temperature: 5", { exact: false }));
  });

  describe("when the component is loading", () => {
    it("displays a loading message", () => {
      const { getByText } = render(<CurrentWeather loading={true} />);
      expect(getByText("Loading", { exact: false }));
    });
  });

  describe("when there is no loading flag", () => {
    it("does not render", () => {
      expect(CurrentWeather({})).toBeNull();
    });
  });
});
