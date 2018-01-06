import { createSelector } from 'reselect';

export const reducer = (state, action) => {
  return state || '';
};
export const selectLocale = (state) => state.get('locale');
export const localeSelector = createSelector(
  selectLocale,
  locale => locale,
);
