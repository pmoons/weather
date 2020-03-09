const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0
};

const getLocation = (onSuccess, onError, settings = defaultSettings) => {
  const geo = navigator.geolocation;

  if (!geo) {
    onError({ message: "Geolocation is not supported" });
    return;
  }

  geo.getCurrentPosition(onSuccess, onError, {
    ...defaultSettings,
    ...settings
  });
};

export default getLocation;
