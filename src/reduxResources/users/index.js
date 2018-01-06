import { createSelector } from 'reselect';
import { reduxGenerator } from 'utils/reduxHelpers';

const { reducer, actions, select } = reduxGenerator('users');
export const userSelector = createSelector(
  select,
  users => users.get('item'),
);

export {
  reducer,
  actions as usersActions,
};
