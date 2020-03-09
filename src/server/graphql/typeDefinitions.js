const { gql } = require("apollo-server");

exports.typeDefs = gql`
  enum PrecipType {
    rain
    snow
    sleet
  }

  type WeatherToday {
    currently: Weather
  }

  type Weather {
    time: Int!
    summary: String!
    icon: String!
    precipProbability: Float!
    precipType: PrecipType
    temperature: Float!
    apparentTemperature: Float!
    dewPoint: Float!
    humidity: Float!
    uvIndex: Int!
    cloudCover: Float!
  }

  type Query {
    currentWeather(latitude: Float!, longitude: Float!): WeatherToday
  }
`;
