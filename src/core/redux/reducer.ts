import { combineReducers } from 'redux';
import { carConfiguratorReducer, layoutReducer } from './reducers';

export default combineReducers({
    carConfigurator: carConfiguratorReducer,
    layout: layoutReducer
});
