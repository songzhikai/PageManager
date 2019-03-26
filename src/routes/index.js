import React from 'react';
import { Switch, Route, routerRedux, Redirect } from 'dva/router';
import paths from './paths';
import Layout from '../components/layout/layout';

const { ConnectedRouter } = routerRedux;

function RouterIndex({ history, app, location }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/pages/index" push />} />
        <Route path="/pages" component={Layout}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterIndex;
