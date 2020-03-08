const fetch = require("node-fetch");
const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;

exports.resolvers = {
  Query: {
    currentWeather(_, { latitude, longitude }) {
      return fetch(
        `https://api.darksky.net/forecast/${DARK_SKY_API_KEY}/${latitude},${longitude}`
      ).then(response => response.json());
    }
  }
};
