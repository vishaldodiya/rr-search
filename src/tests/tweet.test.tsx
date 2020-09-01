import * as React from "react";
import Tweet from "../containers/tweet";
import {Provider} from "react-redux";
import store from "../store/index";
import * as renderer from 'react-test-renderer';

 
describe('Tweet', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Tweet data={
                {
                    "user": "@acmecorp",
                    "message": "We're hiring in Boston!",
                    "timestamp": "2019-02-29",
                    "uid": "tweet-1234"
                }}
            ></Tweet>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});