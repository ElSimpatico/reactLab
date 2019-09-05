import { SET_MODEL_ID } from '@core/redux/action-types';

interface SetModelIdAction {
    type: string;
    payload: string;
}

export function setModelId(modelId: string): SetModelIdAction {
    return {
        type: SET_MODEL_ID,
        payload: modelId
    };
}

export type CarConfiguratorActions = SetModelIdAction;
