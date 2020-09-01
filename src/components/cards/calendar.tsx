import * as React from "react";
import Util from "../../util";
import {PinsState} from "../../store/pins/types";
import { AnalyticsData } from "../../store/analytics/types";

type Props = {
    data: Data,
    addPin?: (id: string) => void; // Optional
    removePin?: (id: string) => void; // Optional
    trackEvent?: (data: AnalyticsData) => void;
    pins?: PinsState, // Optional
}

type Data = {
    id: string,
    uid: string,
    title: string,
    invitees: string,
    date: string
}

const Calendar = ({data, addPin, removePin, trackEvent, pins}: Props) => {

    const [pinned, setPinned] = React.useState(pins.indexOf(data.uid) > -1 ? true : false)

    const togglePin = () => {

        let trackData = {
            event: "",
            timestamp: new Date().getTime(),
            data: JSON.stringify({
                id: data.uid
            })
        };

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
        <article className="calendar results__card card" id={data.uid}>
            <div className="card__actions">
                <span><i className="far fa-calendar-alt"></i></span>
                <button className="card__pin" onClick={() => togglePin()}>{pinned ? <i className="fas fa-unlink c--red"></i> : <i className="fas fa-thumbtack c--green"></i>}</button>
            </div>
            <h4>{data.title}</h4>
            <div className="calendar__info">
                <div className="calendar__info--date">
                    <span>{`on ${Util.formatDate(data.date)} at ${Util.formatTime(data.date)}`}</span>
                </div>
                {/* Invitees */}
                <div className="calendar__info--invitees">
                    <i className="fas fa-users c--gray"></i>
                    {data.invitees.split(", ").map(person => <span key={data.uid + person} className="card__list">{person}</span>)}
                </div>
            </div>
        </article>
    )
}

export default Calendar;