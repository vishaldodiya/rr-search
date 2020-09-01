import * as React from "react";
import {Data, DataState} from "../store/data/types";
import Calendar from "../containers/calendar";
import Contact from "../containers/contact";
import Dropbox from "../containers/dropbox";
import Slack from "../containers/slack";
import Tweet from "../containers/tweet";
import { useParams } from "react-router";

type Props = {
    data?: DataState
}

const Results = ({data}: Props) => {

    const { q } = useParams();
    const query = q || "";

    const suggestions = data.filter(d => {
        return d["matching_terms"].join(",").includes(query)
    });

    return (
        <div className="results">
            {suggestions.length <= 0 && <span className="results__empty c--red">Opps! No results found.</span>}
            {
                suggestions.map((d: Data) => {
                    switch(d.type) {
                        case "calendar":
                            return <Calendar key={d.uid} data={d}></Calendar>;
                        case "contacts":
                            return <Contact key={d.uid} data={d}></Contact>;
                        case "dropbox":
                            return <Dropbox key={d.uid} data={d}></Dropbox>;
                        case "slack":
                            return <Slack key={d.uid} data={d}></Slack>;
                        case "tweet":
                            return <Tweet key={d.uid} data={d}></Tweet>;
                        default:
                            return;
                    }
                })
            }
        </div>
    )
}

export default Results;