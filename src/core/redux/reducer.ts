import { combineReducers } from 'redux';
import { carConfiguratorReducer } from './reducers';

export default combineReducers({
    carConfigurator: carConfiguratorReducer
});
