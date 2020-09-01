import * as React from "react";
import {History} from "history";
import { AnalyticsData } from "../store/analytics/types";

type Props = {
    history?: History,
    trackEvent?: (data: AnalyticsData) => void
}

const Search = ({history, trackEvent}: Props) => {

    const [subStr, setSubStr] = React.useState("");

    let eventData = {
        event: "search",
        timestamp: new Date().getTime(),
        data: JSON.stringify({
            q: subStr
        })
    };

    const queryOnEnter = (e: React.KeyboardEvent) => {
        if (e.keyCode == 13) {
            trackEvent(eventData);
            history.push(`/results/${subStr}`);
        }
    }

    const queryOnSubmit = (e: React.MouseEvent) => {
        trackEvent(eventData);
        history.push(`/results/${subStr}`);
    }

    return (
        <section>
            <div className="search">
                <input className="search__field" type="text" name="search" id="search" value={subStr}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => setSubStr(e.target.value)}
                    onKeyDown={(e: React.KeyboardEvent) => queryOnEnter(e)}
                />
                <button className="search__btn" onClick={(e: React.MouseEvent) => queryOnSubmit(e)}><i className="fas fa-search"></i></button>
            </div>
        </section>
    )
};

export default Search;