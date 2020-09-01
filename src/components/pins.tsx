import * as React from "react";
import Calendar from "../containers/calendar";
import Contact from "../containers/contact";
import Dropbox from "../containers/dropbox";
import Slack from "../containers/slack";
import Tweet from "../containers/tweet";
import {PinsState} from "../store/pins/types";
import {DataState, Data} from "../store/data/types";

type Props = {
    pins?: PinsState, // Optional
    data?: DataState
};

const Pins = ({pins, data}: Props) => {

    return (
        <div className="results pins">
            {pins.length <= 0 && <span className="pins__empty c--red">Opps! No Pinned Results</span>}
            {
                data.filter(d => pins.indexOf(d.uid) > -1).map((d: Data) => {
                    switch(d.type) {
                        case "calendar":
                            return <Calendar data={d}></Calendar>;
                        case "contacts":
                            return <Contact data={d}></Contact>;
                        case "dropbox":
                            return <Dropbox data={d}></Dropbox>;
                        case "slack":
                            return <Slack data={d}></Slack>;
                        case "tweet":
                            return <Tweet data={d}></Tweet>;
                        default:
                            return;
                    }
                })
            }
        </div>
    )
};

export default Pins;