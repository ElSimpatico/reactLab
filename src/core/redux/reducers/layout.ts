import { LayoutState } from '../states';
import { LayoutActions } from '@shared/actions';
import {
    SET_SHOW_HEADER,
    SET_SHOW_NEXT_BUTTON,
    SET_DISABLED_NEXT_BUTTON
} from '../action-types';

const initLayoutState: LayoutState = {
    showHeader: false,
    showNextButton: false,
    disabledNextButton: true
};

export function layoutReducer(
    state: LayoutState = initLayoutState,
    action: LayoutActions
): LayoutState {
    switch (action.type) {
        case SET_SHOW_HEADER:
            return {
                ...state,
                showHeader: action.payload
            };
        case SET_SHOW_NEXT_BUTTON:
            return {
                ...state,
                showNextButton: action.payload
            };
        case SET_DISABLED_NEXT_BUTTON:
            return {
                ...state,
                disabledNextButton: action.payload
            };
        default:
            return state;
    }
}
