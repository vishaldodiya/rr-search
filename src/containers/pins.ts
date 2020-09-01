import Pins from "../components/pins";
import { StoreState } from "../store/types";
import { connect } from 'react-redux';

export function mapStateToProps({pins, data}: StoreState) {
  return {
    pins,
    data
  };
}

export default connect(mapStateToProps)(Pins);