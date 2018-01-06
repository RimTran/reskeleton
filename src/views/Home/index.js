import React, { PureComponent, div } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { usersActions, userSelector } from 'reduxResources/users';

class HomeContainer extends PureComponent {

  componentDidMount() {
    this.props.requestUser();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        {user && JSON.stringify(user)}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: userSelector,
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestUser: () => {
      dispatch(usersActions.usersGetAjax({ url: 'https://api.github.com/users/octocat' }));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
