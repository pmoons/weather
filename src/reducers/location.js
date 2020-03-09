const location = (state = {}, action) => {
  switch (action.type) {
    case "LOCATION_CHANGE":
      return { ...action.location, error: null, loading: false };

    case "LOCATION_LOADING":
      return { ...state, error: null, loading: true };

    case "LOCATION_ERROR":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default location;
