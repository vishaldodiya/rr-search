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
    name: string,
    company: string,
    emails: Array<string>,
    phones: Array<string>,
    last_contact: string
};

const Contact = ({data, addPin, removePin, trackEvent, pins}: Props) => {

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
        <article className="contact results__card card" id={data.uid}>
            <div className="card__actions">
                <span><i className="fas fa-id-card"></i></span>
                <button className="card__pin" onClick={() => togglePin()}>{pinned ? <i className="fas fa-unlink c--red"></i> : <i className="fas fa-thumbtack c--green"></i>}</button>
            </div>
            <h4>{data.name}</h4>
            <div className="contact__info">
                <div className="contact__info--company contact--item">
                    <i className="fas fa-briefcase c--gray"></i>
                    <span className="card__list">{data.company}</span>
                </div>
                {/* Emails */}
                <div className="contact__info--email contact--item">
                    <i className="fas fa-envelope c--gray"></i>
                    {data.emails.map(email => <span key={data.uid + email} className="card__list"><a href={`mailto:${email}`}>{email}</a></span>)}
                </div>
                {/* Phones */}
                <div className="contact__info--phone contact--item">
                    <i className="fas fa-phone c--gray"></i>
                    {data.phones.map(phone => <span key={data.uid + phone} className="card__list"><a href={`tel:${phone}`}>{phone}</a></span>)}
                </div>
                {/* Last Contacted Date */}
                <div className="contact__info--last">
                    <i className="fas fa-phone-volume c--gray"></i>
                    <span className="card__list">{Util.formatDate(data.last_contact)}</span>
                </div>
            </div>
        </article>
    )
}

export default Contact;