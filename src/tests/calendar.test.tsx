import * as React from "react";
import Calendar from "../containers/calendar";
import {Provider} from "react-redux";
import store from "../store/index";
import * as renderer from 'react-test-renderer';

 
describe('Calendar', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Calendar data={
                {
                    "id": "12345",
                    "title": "Acme Proposal Meeting",
                    "invitees": "dave, john, bob, carol",
                    "date": "2019-01-10 10:00:00",
                    "uid": "calendar-1234"
                }}
            ></Calendar>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});