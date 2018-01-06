import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createHashHistory';
import { Redirect, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import { createStore } from 'utils/reduxStoreHelper';
import { epics, reducers } from 'reduxResources';
import asyncComponent from 'components/asyncComponent';
import { LanguageProvider, GlobalLayout, MainLayout } from './_Shared';

const history = createHistory();
// TODO will get browser locale to initial localization.
const store = createStore({ locale: 'en' }, history, epics, reducers);

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <LanguageProvider>
          <ConnectedRouter history={history}>
            <GlobalLayout>
              <Switch>
                <Route exact path='/404' component={asyncComponent(() => import('./Page404'))}/>
                <Route path='/' render={(props) => (
                  <MainLayout {...props}>
                    <Switch>
                      <Route exact path='/' component={asyncComponent(() => import('./Home'))}/>
                      <Redirect from="/*" to='/404'/>
                    </Switch>
                  </MainLayout>)
                }/>
              </Switch>
            </GlobalLayout>
          </ConnectedRouter>
        </LanguageProvider>
      </Provider>
    );
  }
}

export default App;
