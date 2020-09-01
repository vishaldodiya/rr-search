import * as React from "react";
import Contact from "../containers/contact";
import {Provider} from "react-redux";
import store from "../store/index";
import * as renderer from 'react-test-renderer';

 
describe('Contact', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Contact data={
                {
                "id": "12345",
                "name": "John Doe",
                "company": "Acme Inc",
                "emails": [
                    "john@acme.co",
                    "doe@gmail.com"
                ],
                "phones": [
                    "650-555-5555",
                    "+44 171 5555 5555"
                ],
                "last_contact": "2019-02-26",
                "uid": "contact-1234"
                }}
            ></Contact>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});