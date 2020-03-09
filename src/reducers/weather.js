const weather = (state = [], action) => {
  switch (action.type) {
    case "ADD_WEATHER":
      return [
        ...state,
        {
          summary: action.summary,
          icon: action.icon,
          precipProbability: action.precipProbability,
          precipType: action.precipType,
          temperature: action.temperature
        }
      ];

    default:
      return state;
  }
};

export default weather;
