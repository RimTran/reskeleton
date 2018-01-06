import { reducer as formReducer } from 'redux-form/immutable';

import * as defaultEpics from 'utils/reduxObservableHelpers';
import { reducer as routingReducer } from './routing';
import { reducer as localeReducer } from './locale';
import { reducer as ajaxReducer } from './ajax';
import { reducer as userReducer } from './users';

const epics = {
  ...defaultEpics,
};

const reducers = {
  routing: routingReducer,
  form: formReducer,
  locale: localeReducer,
  ajax: ajaxReducer,
  users: userReducer,
};

export {
  epics,
  reducers,
};
