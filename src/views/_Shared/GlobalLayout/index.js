import React, { PureComponent, Fragment } from 'react';

class GlobalLayout extends PureComponent {
  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    );
  }
}

export default GlobalLayout;
