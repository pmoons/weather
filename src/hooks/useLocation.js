import { useState, useEffect } from "react";

const defaultSettings = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0
};

const useLocation = (settings = defaultSettings) => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState(null);

  const onChange = ({ coords }) => {
    setLocation({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  const onError = error => {
    setError(error.message);
  };

  useEffect(() => {
    const geo = navigator.geolocation;

    if (!geo) {
      setError("Geolocation is not supported");
      return;
    }

    geo.getCurrentPosition(onChange, onError, settings);
  }, [settings]);

  return { location, error };
};

export default useLocation;
