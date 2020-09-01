import Analytics from "../components/analytics";
import { StoreState } from "../store/types";
import { connect } from 'react-redux';

export function mapStateToProps({analytics}: StoreState) {
  return {
    analytics
  };
}

export default connect(mapStateToProps)(Analytics);