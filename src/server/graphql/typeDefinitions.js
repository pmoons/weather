const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type WeatherToday {
    currently: Weather
  }

  type Weather {
    summary: String!
    icon: String!
    temperature: Float!
    uvIndex: Int!
    cloudCover: Float!
  }

  type Query {
    currentWeather(latitude: Float!, longitude: Float!): WeatherToday
  }
`;
