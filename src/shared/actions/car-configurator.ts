import {
    SET_MODEL_ID,
    SET_MODEL_NAME,
    SET_BODY_NAME,
    SET_TOTAL_PRICE
} from '@core/redux/action-types';

interface SetModelIdAction {
    type: string;
    payload: string;
}

interface SetModelNameAction {
    type: string;
    payload: string;
}

interface SetBodyNameAction {
    type: string;
    payload: string;
}

interface SetTotalPriceAction {
    type: string;
    payload: string;
}

export function setModelId(modelId: string): SetModelIdAction {
    return {
        type: SET_MODEL_ID,
        payload: modelId
    };
}

export function setModelName(modelName: string): SetModelNameAction {
    return {
        type: SET_MODEL_NAME,
        payload: modelName
    };
}

export function setBodyName(bodyName: string): SetBodyNameAction {
    return {
        type: SET_BODY_NAME,
        payload: bodyName
    };
}

export function setTotalPrice(totalPrice: string): SetTotalPriceAction {
    return {
        type: SET_TOTAL_PRICE,
        payload: totalPrice
    };
}

export type CarConfiguratorActions =
    | SetModelIdAction
    | SetModelNameAction
    | SetBodyNameAction
    | SetTotalPriceAction;
