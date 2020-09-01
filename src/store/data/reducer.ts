import {DataActions} from "./actions"
import {DataState, Data} from "./types";
import * as constants from "../../constants";
import Util from "../../util";

export const initialState: DataState = [];

const data = (state: DataState = initialState, action: DataActions): DataState => {
    switch(action.type) {
        case constants.LOAD_DATA:
            let flatData: Array<Data> = [];

            for (const key in action.list) {
                for (const values of action.list[key]) {
                    values.type = key;
                    values.uid = Util.getId(key);
                    flatData.push(values);
                }
            }

            return [
                ...flatData
            ];
        default:
            return state;
    }

}

export default data;