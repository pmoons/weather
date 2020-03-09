import { connect } from "react-redux";
import LocationPicker from "../components/LocationPicker";
import getLocation from "../helpers/getLocation";

const mapStateToProps = ({ location }) => ({ error: location.error });

export const mapDispatchToProps = dispatch => ({
  getLocation: () => {
    dispatch({ type: "LOCATION_LOADING" });
    getLocation(
      ({ coords: { latitude, longitude } }) => {
        dispatch({
          type: "LOCATION_CHANGE",
          location: { latitude, longitude }
        });
      },
      error => {
        dispatch({
          type: "LOCATION_ERROR",
          error: error.message
        });
      }
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationPicker);
