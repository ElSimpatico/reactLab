import { createStore, Store } from 'redux';
import Reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export function createReduxStore(): Store {
    return createStore(Reducer, composeWithDevTools());
}
