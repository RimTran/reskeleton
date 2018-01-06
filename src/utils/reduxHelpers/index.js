import { upperCase, reduce } from 'lodash';
import { fromJS } from 'immutable';
import { createActions, handleActions } from 'redux-actions';

import { REDUX_SUFFIXES, AJAX_SUFFIXES } from 'appConstants';

const { AJAX_CALL_SUCCEEDED_SUFFIX, AJAX_CALL_FAILED_SUFFIX } = AJAX_SUFFIXES;

const reduxGenerator = (featureName,) => {
  const _featureName = upperCase(featureName);

  const actionTypes = reduce(REDUX_SUFFIXES, (acc, value, key) => {
    return {
      ...acc,
      [key]: `${_featureName}_${key}`,
    };
  }, {});
  const actions = createActions(reduce(actionTypes, (acc, value, key) => {
    const func = key.endsWith(AJAX_CALL_SUCCEEDED_SUFFIX) ? (data) => ({ data }) : key.endsWith(AJAX_CALL_FAILED_SUFFIX) ? (error) => ({ error }) : null;
    return {
      ...acc,
      [value]: func,
    };
  }, {}));
  const reducer = handleActions({
    [actionTypes.GET_ALL_SUCCEEDED]: (state, { payload: { data } }) => {
      return state.set('items', fromJS(data));
    },
    [actionTypes.GET_ALL_FAILED]: (state, { payload: { error } }) => {
      return state.set('getAllError', fromJS(error));
    },
    [actionTypes.GET_ALL_CLEAN]: (state) => {
      return state.set('items', fromJS({}))
                  .set('getAllError', fromJS({}));
    },
    [actionTypes.GET_SUCCEEDED]: (state, { payload: { data } }) => {
      return state.set('item', fromJS(data));
    },
    [actionTypes.GET_FAILED]: (state, { payload: { error } }) => {
      return state.set('getError', fromJS(error));
    },
    [actionTypes.GET_CLEAN]: (state) => {
      return state.set('item', fromJS({}))
                  .set('getError', fromJS({}));
    },
    [actionTypes.INSERT_FAILED]: (state, { payload: { error } }) => {
      return state.set('insertError', fromJS(error));
    },
    [actionTypes.INSERT_CLEAN]: (state) => {
      return state.set('insertError', fromJS({}));
    },
    [actionTypes.UPDATE_FAILED]: (state, { payload: { error } }) => {
      return state.set('updateError', fromJS(error));
    },
    [actionTypes.UPDATE_CLEAN]: (state) => {
      return state.set('updateError', fromJS({}));
    },
    [actionTypes.DELETE_FAILED]: (state, { payload: { error } }) => {
      return state.set('deleteError', fromJS(error));
    },
    [actionTypes.DELETE_CLEAN]: (state) => {
      return state.set('deleteError', fromJS({}));
    },
  }, fromJS({}));
  const select = state => state.get(featureName);
  // itemsSelector
  // itemSelector

  return {
    actionTypes,
    actions,
    reducer,
    select,
  };
};

export {
  reduxGenerator,
};
