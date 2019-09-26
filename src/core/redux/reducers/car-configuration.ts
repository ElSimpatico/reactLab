import { CarConfiguratorState } from '../states/car-configuration';
import { CarConfiguratorActions } from '@shared/actions';
import {
    SET_MODEL_ID,
    SET_MODEL_NAME,
    SET_BODY_NAME,
    SET_TOTAL_PRICE
} from '../action-types/car-configurator';

const initConfigurationState: CarConfiguratorState = {
    modelId: '',
    modelName: '',
    bodyName: '',
    totalPrice: ''
};

export function carConfiguratorReducer(
    state: CarConfiguratorState = initConfigurationState,
    action: CarConfiguratorActions
): CarConfiguratorState {
    switch (action.type) {
        case SET_MODEL_ID:
            return {
                ...state,
                modelId: action.payload
            };
        case SET_MODEL_NAME:
            return {
                ...state,
                modelName: action.payload
            };
        case SET_BODY_NAME:
            return {
                ...state,
                bodyName: action.payload
            };
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            };
        default:
            return state;
    }
}
