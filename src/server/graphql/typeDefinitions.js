const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Weather {
    time: String!
    summary: String!
    icon: String!
    temperature: Float!
    uvIndex: Int!
    cloudCover: Float!
  }

  type Query {
    currentWeather: Weather
  }
`;
