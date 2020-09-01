import {createStore, combineReducers} from "redux";
import * as constants from "../constants";
import DataReducer from "./data/reducer";
import PinsReducer from "./pins/reducer";
import AnalyticsReducer from "./analytics/reducer";
import * as calendar from "../acme-search/calendar.json";
import * as contacts from "../acme-search/contacts.json";
import * as dropbox from "../acme-search/dropbox.json";
import * as slack from "../acme-search/slack.json";
import * as tweet from "../acme-search/tweet.json";

const data = {
    calendar: calendar.calendar,
    contacts: contacts.contacts,
    dropbox: dropbox.dropbox,
    slack: slack.slack,
    tweet: tweet.tweet
};

const reducer = combineReducers({
    pins: PinsReducer,
    data: DataReducer,
    analytics: AnalyticsReducer
});

const store = createStore(reducer);

store.dispatch({
    type: constants.LOAD_DATA,
    list: data
})

store.subscribe(() => console.log(store.getState()));

export default store;