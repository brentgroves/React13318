import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Dashboard } from '../containers/Dashboard'
import { SignIn } from '../containers/SignIn'
import { SignUp } from '../containers/SignUp'
import { Private } from '../containers/Private'
import { PrivateRoute } from '../containers/PrivateRoute'
import { AdminRoute } from '../containers/AdminRoute'

const App = (props) => {
  const {firstName} = props
  return (
    <Router>
          <Switch>
      <PrivateRoute exact path="/" component={Dashboard} />
      <Route path="/login" component={SignIn} />
      <PrivateRoute path="/private" component={Private} />
      <AdminRoute path="/admin" component={SignUp} />

  </Switch>

    </Router>
  )

}
export default App
