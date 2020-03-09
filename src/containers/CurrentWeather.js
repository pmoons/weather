import { compose } from "redux";
import { connect } from "react-redux";
import { graphql } from "@apollo/react-hoc";
import _ from "lodash";

import CurrentWeather from "../components/CurrentWeather";
import { CURRENT_WEATHER } from "../queries";

const mapStateToProps = ({ location }) => {
  return {
    latitude: location.latitude,
    longitude: location.longitude,
    loading: location.loading,
    error: location.error
  };
};

export default compose(
  connect(mapStateToProps, null),
  graphql(CURRENT_WEATHER, {
    skip: ({ latitude, longitude }) => !latitude || !longitude,
    options: ({ latitude, longitude }) => ({
      variables: { latitude, longitude }
    }),
    props: ({ data, ownProps }) => {
      const currentWeather = _.get(data, "currentWeather.currently", {});

      return {
        temperature: currentWeather.temperature,
        loading: ownProps.loading || data.loading,
        error: ownProps.error
      };
    }
  })
)(CurrentWeather);
