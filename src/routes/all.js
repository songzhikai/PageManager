import React from 'react';
import { Switch, Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import paths from './paths';

function RouterAll({ history, app, location }) {
  const routes = paths;
  return (
      <Switch>
          {
            routes.map(({ path, ...dynamics }) => (
              <Route
                key={path}
                exact
                path={path}
                component={dynamic({ app, ...dynamics })}
              />
            ))
          }
      </Switch>
  );
}

export default RouterAll;
