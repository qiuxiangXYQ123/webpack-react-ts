import * as React from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import { router } from './util/router';

function App () {
  return (
    <Switch>
      {
        router.map((item:any) => (
          <Route
            exact
            key={item.path}
            path={item.path}
            component={item.component}
          >
          </Route>
        ))
      }
      <Redirect path="/" to="/home" />
    </Switch>
  )
}

export default withRouter(App)
