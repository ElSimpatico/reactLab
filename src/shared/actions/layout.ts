import { SET_DISABLED_NEXT_BUTTON } from '../../core/redux/action-types/layout';
import {
    SET_SHOW_HEADER,
    SET_SHOW_NEXT_BUTTON
} from '@core/redux/action-types';

interface SetShowHeaderAction {
    type: string;
    payload: boolean;
}

interface SetShowNextButtonAction {
    type: string;
    payload: boolean;
}

interface SetDisabledNextButtonAction {
    type: string;
    payload: boolean;
}

export function setShowHeader(showHeader: boolean): SetShowHeaderAction {
    return {
        type: SET_SHOW_HEADER,
        payload: showHeader
    };
}

export function setShowNextButton(
    showNextButton: boolean
): SetShowNextButtonAction {
    return {
        type: SET_SHOW_NEXT_BUTTON,
        payload: showNextButton
    };
}

export function setDisabledNextButton(
    disabledNextButton: boolean
): SetDisabledNextButtonAction {
    return {
        type: SET_DISABLED_NEXT_BUTTON,
        payload: disabledNextButton
    };
}

export type LayoutActions =
    | SetShowHeaderAction
    | SetShowNextButtonAction
    | SetDisabledNextButtonAction;
