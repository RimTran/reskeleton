import 'rxjs';
import { createStore as createReduxStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';
import { reduce } from 'lodash';

const createStore = (initialState, history, epics, reducers) => {
  const state = initialState || {};
  const middlewares = [
    createEpicMiddleware(combineEpics(...reduce(epics, (acc, epic) => acc.concat(epic), []))),
    routerMiddleware(history),
  ];
  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const store = createReduxStore(
    combineReducers(reducers),
    fromJS(state),
    composeEnhancers(...enhancers),
  );

  return store;
};

export {
  createStore,
};
