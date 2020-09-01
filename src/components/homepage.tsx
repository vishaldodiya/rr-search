import * as React from "react";
import {HashRouter as Router, Link, Switch, Route, Redirect} from "react-router-dom";
import Search from "../containers/search";
import Analytics from "../containers/analytics";
import Pins from "../containers/pins";
import {PinsState} from "../store/pins/types";
import { AnalyticsState } from "../store/analytics/types";
import Results from "../containers/results";

type Props = {
    pins?: PinsState,
    analytics?: AnalyticsState
}

const Homepage = ({pins, analytics}: Props) => {
    return (
        <Router>
            <nav className="nav abc">
                <Link className="nav__title" to="/">React Redux Search</Link>
                <Search></Search>
                <Link className="nav__item" to="/pins">
                    <span>
                        <i className="fas fa-thumbtack"></i>
                    </span>
                    <span className="nav__alert">{pins.length}</span>
                </Link>
                <Link className="nav__item" to="/analytics">
                    <span>
                        <i className="fas fa-analytics"></i>
                    </span>
                    <span className="nav__alert">{analytics.length}</span>
                </Link>
            </nav>
            <main className="main">
                <Switch>
                    <Route exact path="/">
                        <Results></Results>
                    </Route>
                    <Route exact path="/results/:q?">
                        <Results></Results>
                    </Route>
                    <Route exact path="/analytics">
                        <Analytics></Analytics>
                    </Route>
                    <Route exact path="/pins">
                        <Pins></Pins>
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default Homepage