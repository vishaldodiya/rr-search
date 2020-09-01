import * as React from "react";
import {render} from "react-dom";
import Homepage from "./containers/homepage";
import {Provider} from "react-redux";
import store from "./store/index"
import "./style.scss";

render(
    <Provider store={store}>
        <Homepage></Homepage>
    </Provider>,
    document.getElementById("acme")
)