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
    path: string,
    title: string,
    shared_with: Array<string>,
    created: string
};

const Dropbox = ({data, addPin, removePin, trackEvent, pins}: Props) => {

    const [pinned, setPinned] = React.useState(pins.indexOf(data.uid) > -1 ? true : false);
    const [copied, setCopied] = React.useState("");

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

    const copyToClipBoard = (path: string) => {

        let trackData = {
            event: "copy-to-clipboard",
            timestamp: new Date().getTime(),
            data: JSON.stringify({
                text: path
            })
        };

        navigator.clipboard.writeText(path)
            .then(() => {
                setCopied("Link Copied!");
                setTimeout(() => setCopied(""), 3000);
            })
            .catch((err) => console.log(err));

        trackEvent(trackData);
    }

    return (
        <article className="dropbox results__card card" id={data.uid}>
            <div className="card__actions">
                <span><i className="fab fa-dropbox c--dropbox"></i></span>
                <button className="card__pin" onClick={() => togglePin()}>{pinned ? <i className="fas fa-unlink c--red"></i> : <i className="fas fa-thumbtack c--green"></i>}</button>
            </div>
            <div className="dropbox__file">
                <h4>{data.title}</h4>
                <span className="dropbox__date">{Util.formatDate( data.created )}</span>
            </div>
            {/* Shared With */}
            <div className="dropbox__shared">
                <i className="fas fa-users c--gray"></i>
                {data.shared_with && data.shared_with.map(person => <span key={data.uid + person} className="card__list"><a href={`mailto:${person}`}>{person}</a></span>)}
            </div>
            {/* Copy Link */}
            <p className="dropbox__copy--msg c--green">{copied}</p>
            <div className="dropbox__share">
                <input className="dropbox__share--path c--dark-gray" type="text" value={`https://dropbox.com${data.path}`} readOnly/>
                <button className="dropbox__share--btn c--dropbox" onClick={() => copyToClipBoard(`https://dropbox.com${data.path}`)}>Copy link</button>
            </div>
        </article>
    )
}

export default Dropbox;