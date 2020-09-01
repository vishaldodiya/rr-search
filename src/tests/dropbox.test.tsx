import * as React from "react";
import Dropbox from "../containers/dropbox";
import {Provider} from "react-redux";
import store from "../store/index";
import * as renderer from 'react-test-renderer';

 
describe('Dropbox', () => {
  test('snapshot renders', () => {
    const component = renderer.create(
        <Provider store={store}>
            <Dropbox data={
              {
                "id": "12345",
                "path": "/taxes/2016/w2-acme.pdf",
                "title": "\"2016 W2\"",
                "shared_with": [
                  "jane@accountants.com",
                  "spouse@family.org"
                ],
                "created": "2016-02-01",
                "uid": "dropbox-1234"
              }
            }></Dropbox>
        </Provider>
    );

    expect(component).toMatchSnapshot();
  });
});