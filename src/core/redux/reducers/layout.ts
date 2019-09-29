import { LayoutState } from '../states';
import { LayoutActions } from '@shared/actions';
import { SET_SHOW_HEADER } from '../action-types';

const initLayoutState: LayoutState = {
    showHeader: false
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
        default:
            return state;
    }
}
