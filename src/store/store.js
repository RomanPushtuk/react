import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

import { load } from '../shadule/shadule';

import { TASKS } from '../constants';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(),
  )
);

const preloadedState = {
  modal : {
    id: '',
    text: '',
    date: null,
  },
  tasks : load(),
}

const store = configureStore(preloadedState);

store.subscribe(()=>{
  localStorage.setItem(TASKS, JSON.stringify(store.getState().tasks));
})

export default store;
