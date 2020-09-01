import * as constants from "../../constants";
import {AnalyticsData} from "./types";

export const trackEvent = (data: AnalyticsData ) : TrackEvent => ({
    type: constants.TRACK_EVENT,
    data
})

export interface TrackEvent {
    type: constants.TRACK_EVENT,
    data: AnalyticsData
};

export type AnalyticsActions = TrackEvent;