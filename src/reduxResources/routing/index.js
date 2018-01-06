import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'react-router-redux';

export const reducer = handleActions({
  [LOCATION_CHANGE]: (state, action) => state.merge({ location: action.payload }),
}, fromJS({ location: null }));
