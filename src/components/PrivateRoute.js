import React from "react";
import { Route} from 'react-router' // react-router v4/v5
//import { Redirect } from "react-router-dom";

import { SignIn } from '../containers/SignIn'
//import {  Redirect } from "react-router-dom";
//import { Redirect } from "react-router-dom";
//import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ isAuthenticated,component: Component, ...rest }) {
//let message=bpgservices;
//App will be null until feathers has a chance to authenticate
/*
if(null != message.app){
message.app.reAuthenticate().then(() => {
  // show application page
  isAuthenticated=true;
}).catch(() => {
isAuthenticated=false;
});
}
*/
/*
message.reAuthenticate().then(() => {
  // show application page
  <Component {...props} />
}).catch(() => {
  <Redirect to="/login" />
});
}

            <Redirect
              to={{ pathname: "/login", state: { referer: props.location } }}
*/

//        <Route render={() => (<div>Miss</div>)} />
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
  <SignIn />
        )
      }
    />
  );
}

export default PrivateRoute;
