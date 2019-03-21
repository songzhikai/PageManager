import React from 'react';
import { Switch, Route, routerRedux, Redirect } from 'dva/router';
import paths from './paths';
import Layout from '../components/layout/layout';

const { ConnectedRouter } = routerRedux;

function RouterIndex({ history, app, location }) {
  const routes = paths;
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/news/pages/index" push />} />
        <Route path="/news/pages" component={Layout}/>
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterIndex;
