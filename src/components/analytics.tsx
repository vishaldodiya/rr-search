import * as React from "react";
import {AnalyticsState} from "../store/analytics/types";
import Util from "../util";

type Props = {
    analytics?: AnalyticsState // Optional
};

const Analytics = ({analytics}: Props) => {

    return (
        <div className="analytics">
            {analytics.length > 0 ? (
                <div className="events">
                <div className="events__head">
                    <div className="events__row">
                        <span className="events__heading">Event</span>
                        <span className="events__heading">Date</span>
                        <span className="events__heading">Time</span>
                        <span className="events__heading">Timestamp</span>
                        <span className="events__heading">Data</span>
                        <span className="events__heading">User Agent</span>
                    </div>
                </div>
                <div className="events__body">
                    {analytics.map(item => (
                        <div className="events__row">
                            <span className="events__data">{item.event}</span>
                            <span className="events__data">{Util.formatDate(item.timestamp)}</span>
                            <span className="events__data">{Util.formatTime(item.timestamp)}</span>
                            <span className="events__data">{item.timestamp}</span>
                            <span className="events__data"><code>{item.data}</code></span>
                            <span className="events__data"><code>{item.userAgent}</code></span>
                        </div>
                    ))}
                </div>
            </div>
            ) : (
                <span className="analytics__empty c--red">Opps! No Events were tracked.</span>
            )}
        </div>
    )
};

export default Analytics;