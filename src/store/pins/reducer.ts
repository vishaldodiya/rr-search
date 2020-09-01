import {PinActions} from "./actions";
import {PinsState} from "./types";
import * as constants from "../../constants";

export const initialState: PinsState = [];

const pins = (state: PinsState = initialState, action: PinActions): PinsState => {
    switch(action.type) {
        case constants.ADD_PIN:
            state.push(action.id as never)
            return [
                ...state
            ];
        case constants.REMOVE_PIN:
            const index = state.indexOf(action.id)
            state.splice(index, 1);
            return [
                ...state,
            ];
        default:
            return state;
    }
}

export default pins;