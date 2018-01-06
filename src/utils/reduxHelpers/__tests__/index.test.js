import { reduxGenerator } from '../index';

describe('verify redux generator', () => {
  it('should generate correctly', () => {
    const { actionTypes, actions, reducer } = reduxGenerator('user');
    // console.log('actionTypes: ', actionTypes);
    // console.log('actions: ', actions);
    // console.log('reducer: ', reducer);
  });
});
