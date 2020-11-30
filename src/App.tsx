import React from "react";
import Register from "./components/register";
import Login from "./components/login";
import ResetPassword from "./components/resetPassword";
import ForgetPassword from "./components/forgetPassword";
import Hello from "./components/hello";
import NotFound from "./components/NotFound";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/reset" component={ResetPassword} />
      <Route exact path="/forget" component={ForgetPassword} />
      <Route
        exact
        path="/"
        component={
          window.localStorage.getItem("username") === null ? Register : Hello
        }
      />
      <Route exact path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
}

export default App;
