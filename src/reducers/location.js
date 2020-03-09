const location = (state = {}, action) => {
  switch (action.type) {
    case "LOCATION_CHANGE":
      return { ...action.location, loading: false };

    case "LOCATION_LOADING":
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default location;
