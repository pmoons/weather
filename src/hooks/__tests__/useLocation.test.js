import { renderHook } from "@testing-library/react-hooks";
import useLocation from "../useLocation";

describe("useLocation", () => {
  beforeEach(() => {
    window.navigator.geolocation = {
      getCurrentPosition: jest.fn(onSuccess =>
        onSuccess({ coords: { latitude: 5, longitude: 6 } })
      )
    };
  });

  it("returns the latitude and longitude of the user", () => {
    const { result } = renderHook(() => useLocation());

    expect(result.current.location).toEqual({
      latitude: 5,
      longitude: 6
    });
  });

  describe("when there is an error fetching the user's current position", () => {
    beforeEach(() => {
      window.navigator.geolocation.getCurrentPosition = jest.fn(
        (_, onError) => {
          onError(new Error("Could not fetch location data"));
        }
      );
    });

    it("returns the error message", () => {
      const { result } = renderHook(() => useLocation());
      expect(result.current.error).toEqual("Could not fetch location data");
    });
  });

  describe("when gelocation is not supported", () => {
    beforeEach(() => {
      window.navigator.geolocation = undefined;
    });

    it("returns an error", () => {
      const { result } = renderHook(() => useLocation());
      expect(result.current.error).toEqual("Geolocation is not supported");
    });
  });
});
