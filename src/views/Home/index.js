import React, { PureComponent, div } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { usersActions, usersSelectors } from 'reduxResources/users';

class HomeContainer extends PureComponent {

  componentDidMount() {
    this.props.requestUser();
  }

  render() {
    const { user, isLoading } = this.props;
    if (isLoading) {
      return (
        <div>isLoading</div>
      );
    }

    return (
      <div>
        {user && JSON.stringify(user)}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: usersSelectors.itemSelector,
  isLoading: usersSelectors.isLoadingItem,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestUser: () => {
      dispatch(usersActions.usersGetAjax({ url: 'https://api.github.com/users/octocat' }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
