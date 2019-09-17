import { combineReducers } from 'redux';
import tasks from './tasks';
import modal from './modal';

const rootReducer = combineReducers({ tasks, modal});

export default rootReducer;
