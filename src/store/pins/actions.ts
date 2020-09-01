import * as constants from "../../constants";

export const addPin = (id: string): AddPin => ({
    type: constants.ADD_PIN,
    id
});

export const removePin = (id: string): RemovePin => ({
    type: constants.REMOVE_PIN,
    id
});

export interface AddPin {
    type: constants.ADD_PIN,
    id: string
};

export interface RemovePin {
    type: constants.REMOVE_PIN,
    id: string
};

export type PinActions = AddPin | RemovePin;
