import React, { PureComponent, Fragment } from 'react';

class MainLayout extends PureComponent {
  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

export default MainLayout;
