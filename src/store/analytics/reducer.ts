import {AnalyticsActions} from "./actions"
import {AnalyticsState, AnalyticsData} from "./types";
import * as constants from "../../constants";

export const initialState: AnalyticsState = []

const analytics = (state: AnalyticsState = initialState, action: AnalyticsActions): AnalyticsState => {
    switch(action.type) {
        case constants.TRACK_EVENT:

            let event = action.data;
            event.userAgent = navigator.userAgent;

            state.push(event);

            return [
                ...state
            ];
        default:
            return state;
    }

}

export default analytics;