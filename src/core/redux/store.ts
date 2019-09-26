/** Third-party imports */
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, Store } from 'redux';

/** Local imports */
import Reducer from './reducer';
import { State } from '@shared/state';

export function createReduxStore(): Store<State> {
    return createStore(Reducer, composeWithDevTools());
}
