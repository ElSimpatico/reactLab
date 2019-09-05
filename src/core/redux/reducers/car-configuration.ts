import { CarConfiguratorState } from '../states/car-configuration';
import { CarConfiguratorActions } from '@shared/actions';
import { SET_MODEL_ID } from '../action-types/car-configurator';

const initConfigurationState: CarConfiguratorState = {
    modelId: ''
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
        default:
            return state;
    }
}
