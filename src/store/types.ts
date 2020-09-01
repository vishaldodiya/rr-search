import {PinsState} from "./pins/types";
import {DataState} from "./data/types";
import {AnalyticsState} from "./analytics/types";

export interface StoreState {
    pins: PinsState,
    data: DataState,
    analytics: AnalyticsState
};