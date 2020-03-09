const { gql } = require("apollo-server");

exports.typeDefs = gql`
  enum PrecipType {
    rain
    snow
    sleet
  }

  enum WeatherIcon {
    clear-day
    clear-night
    rain
    snow
    sleet
    wind
    fog
    cloudy
    partly-cloudy-day
    partly-cloudy-night
  }

  type WeatherToday {
    currently: Weather
  }

  type Weather {
    time: Int!
    summary: String!
    icon: WeatherIcon
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
