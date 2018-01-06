import React, { PureComponent } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { localeSelector } from 'reduxResources/locale';

class LanguageProvider extends PureComponent {
  render() {
    const { locale, children } = this.props;
    return (
      <IntlProvider locale={locale}
                    key={locale}>
        {React.Children.only(children)}
      </IntlProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  locale: localeSelector,
});
export default connect(mapStateToProps)(LanguageProvider);
