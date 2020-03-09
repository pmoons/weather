import { mapDispatchToProps } from "../LocationPicker";
import getLocation from "../../helpers/getLocation";

jest.mock("../../helpers/getLocation");

describe("mapDispatchToProps", () => {
  const dispatch = jest.fn();

  describe("getLocation", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("dispatches LOCATION_LOADING", () => {
      mapDispatchToProps(dispatch).getLocation();
      expect(dispatch).toHaveBeenCalledWith({ type: "LOCATION_LOADING" });
    });

    it("fetches the location", () => {
      mapDispatchToProps(dispatch).getLocation();
      expect(getLocation).toHaveBeenCalled();
    });

    describe("when getLocation succeeds", () => {
      beforeEach(() => {
        getLocation.mockImplementation(successCallback => {
          successCallback({ coords: { latitude: 5, longitude: 6 } });
        });
      });

      it("dispatches LOCATION_CHANGE with the latitude and longitude of the user", () => {
        mapDispatchToProps(dispatch).getLocation();

        expect(dispatch).toHaveBeenLastCalledWith({
          type: "LOCATION_CHANGE",
          location: { latitude: 5, longitude: 6 }
        });
      });
    });

    describe("when getLocation fails", () => {
      beforeEach(() => {
        getLocation.mockImplementation((_, errorCallback) => {
          errorCallback("foo");
        });
      });

      it("calls LOCATION_ERROR with error message", () => {
        mapDispatchToProps(dispatch).getLocation();

        expect(dispatch).toHaveBeenLastCalledWith({
          type: "LOCATION_ERROR",
          error: "foo"
        });
      });
    });
  });
});
