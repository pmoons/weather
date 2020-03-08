const DARK_SKY_API_KEY = process.env.DARK_SKY_API_KEY;

exports.resolvers = {
  Query: {
    currentWeather: async () =>
      fetch(`https://api.darksky.net/forecast/${DARK_SKY_API_KEY}`)
  }
};
