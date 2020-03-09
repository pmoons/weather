import getLocation from "../getLocation";

describe("getLocation", () => {
  beforeEach(() => {
    window.navigator.geolocation = {
      getCurrentPosition: jest.fn(onSuccess =>
        onSuccess({ coords: { latitude: 5, longitude: 6 } })
      )
    };
  });

  it("returns the latitude and longitude of the user", done => {
    getLocation(result => {
      expect(result.coords).toEqual({
        latitude: 5,
        longitude: 6
      });

      done();
    });
  });

  it("uses the default settings when none are provided", done => {
    getLocation(() => {
      expect(
        window.navigator.geolocation.getCurrentPosition
      ).toHaveBeenCalledWith(
        expect.anything(),
        undefined,
        expect.objectContaining({
          enableHighAccuracy: false
        })
      );
      done();
    });
  });

  describe("when settings are passed in", () => {
    it("uses the setting overrides that were passed in", done => {
      getLocation(
        () => {
          expect(
            window.navigator.geolocation.getCurrentPosition
          ).toHaveBeenCalledWith(expect.anything(), undefined, {
            enableHighAccuracy: false,
            maximumAge: 500,
            timeout: Infinity
          });

          done();
        },
        undefined,
        { maximumAge: 500 }
      );
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

    it("returns an error", done => {
      getLocation(null, error => {
        expect(error.message).toEqual("Could not fetch location data");
        done();
      });
    });
  });

  describe("when geolocation is not supported", () => {
    beforeEach(() => {
      window.navigator.geolocation = undefined;
    });

    it("returns an error", done => {
      getLocation(null, error => {
        expect(error.message).toEqual("Geolocation is not supported");
        done();
      });
    });
  });
});
