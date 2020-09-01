import Contact from "../components/cards/contact";
import * as pinActions from "../store/pins/actions";
import * as analyticsActions from "../store/analytics/actions";
import { StoreState } from "../store/types";
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { AnalyticsData } from "../store/analytics/types";

export function mapStateToProps({pins}: StoreState) {
  return {
    pins
  };
}

export function mapDispatchToProps(dispatch: Dispatch<pinActions.PinActions | analyticsActions.AnalyticsActions>) {
  return {
    addPin: (id: string) => dispatch(pinActions.addPin(id)),
    removePin: (id: string) => dispatch(pinActions.removePin(id)),
    trackEvent: (data: AnalyticsData) => dispatch(analyticsActions.trackEvent(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);