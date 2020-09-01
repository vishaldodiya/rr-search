import * as React from "react";
import Slack from "../containers/slack";
import {Provider} from "react-redux";
import store from "../store/index";
import * as renderer from 'react-test-renderer';

 
describe('Slack', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Slack data={
                {
                    "id": "12345",
                    "channel": "chatter",
                    "author": "alice",
                    "message": "Who's up for lunch right now?",
                    "timestamp": "2019-02-26 11:00:00",
                    "uid": "slack-1234"
                }}
            ></Slack>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});