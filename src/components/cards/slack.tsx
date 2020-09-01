import * as React from "react";
import {PinsState} from "../../store/pins/types";
import { AnalyticsData } from "../../store/analytics/types";
import Util from "../../util";

type Props = {
    data: Data,
    addPin?: (id: string) => void; // Optional
    removePin?: (id: string) => void; // Optional
    trackEvent?: (data: AnalyticsData) => void;

    pins?: PinsState
}

type Data = {
    id: string,
    uid: string,
    channel: string,
    author: string,
    message: string,
    timestamp: string
}

const Slack = ({data, addPin, removePin, trackEvent, pins}: Props) => {

    const [pinned, setPinned] = React.useState(pins.indexOf(data.uid) > -1 ? true : false)

    const togglePin = () => {

        let trackData = {
            event: "",
            timestamp: new Date().getTime(),
            data: JSON.stringify({
                id: data.uid
            })
        }

        if (pinned) {
            trackData.event = "unpin";
            removePin(data.uid);
        } else {
            trackData.event = "pin";
            addPin(data.uid);
        }

        setPinned(!pinned);
        trackEvent(trackData);
    };

    return (
        <article className="slack results__card card" id={data.uid}>
            <div className="card__actions">
                <span><i className="fab fa-slack c--slack"></i></span>
                <button className="card__pin" onClick={() => togglePin()}>{pinned ? <i className="fas fa-unlink c--red"></i> : <i className="fas fa-thumbtack c--green"></i>}</button>
            </div>
            <div className="slack__info">
                <h4>{data.author}</h4>
                <div className="slack__info--meta">
                    <span>{`#${data.channel}`}</span>
                    <span>{`on ${Util.formatDate(data.timestamp)} at ${Util.formatTime(data.timestamp)}`}</span>
                </div>
            </div>
            <div>
                <p>{data.message}</p>
            </div>
        </article>
    )
};

export default Slack;