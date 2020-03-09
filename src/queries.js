import { gql } from "apollo-boost";

export const CURRENT_WEATHER = gql`
  query currentWeather($latitude: Float!, $longitude: Float!) {
    currentWeather(latitude: $latitude, longitude: $longitude) {
      currently {
        time
        summary
        icon
        precipProbability
        precipType
        temperature
        apparentTemperature
        dewPoint
        humidity
        uvIndex
        cloudCover
      }
    }
  }
`;
