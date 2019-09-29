import { SET_SHOW_HEADER } from '@core/redux/action-types';

interface SetShowHeaderAction {
    type: string;
    payload: boolean;
}

export function setShowHeader(showHeader: boolean): SetShowHeaderAction {
    return {
        type: SET_SHOW_HEADER,
        payload: showHeader
    };
}

export type LayoutActions = SetShowHeaderAction;
