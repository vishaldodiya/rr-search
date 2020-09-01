import * as constants from "../../constants";
import {Data, DataState} from "./types";

export const loadData = (list: {[key: string]: Array<Data>}): LoadData => ({
    type: constants.LOAD_DATA,
    list
});

export interface LoadData {
    type: constants.LOAD_DATA,
    list: {[key: string]: Array<Data>};
};

export type DataActions = LoadData;