import Search from "../components/search";
import { withRouter } from "react-router";
import * as analyticsActions from "../store/analytics/actions";
import { AnalyticsData } from "../store/analytics/types";
import { Dispatch } from "redux";
import { connect } from 'react-redux';

export function mapDispatchToProps(dispatch: Dispatch<analyticsActions.AnalyticsActions>) {
    return {
        trackEvent: (data: AnalyticsData) => dispatch(analyticsActions.trackEvent(data))
    };
}

export default withRouter(connect(null, mapDispatchToProps)(Search));