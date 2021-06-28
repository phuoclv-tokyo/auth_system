import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./container/Home";
import Login from "./container/Login";
import Signup from "./container/Signup";
import Activate from "./container/Activate";
import ResetPassword from "./container/ResetPassword";
import ResetPasswordConfirm from "./container/ResetPasswordConfirm";

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./hocs/Layout";

const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route
            exact
            path="/password/reset/confirm/:uid/:token"
            component={ResetPasswordConfirm}
          />
          <Route exact path="/activate/:uid/:token" component={Activate} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;
