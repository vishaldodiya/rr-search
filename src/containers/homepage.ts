import Homepage from "../components/homepage";
import { StoreState } from "../store/types";
import { connect } from 'react-redux';

export function mapStateToProps({ pins, analytics }: StoreState) {
  return {
    pins,
    analytics
  };
}

export default connect(mapStateToProps)(Homepage);