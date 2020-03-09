import { connect } from "react-redux";
import LocationPicker from "../components/LocationPicker";
import getLocation from "../helpers/getLocationLocation";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  getLocation: () => {
    dispatch({ type: "LOCATION_LOADING" });
    getLocation(
      ({ coords: { latitude, longitude } }) => {
        dispatch({
          type: "LOCATION_CHANGE",
          location: { latitude, longitude }
        });
      },
      error => {}
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationPicker);
