import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

const App = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <ProtectedRoute path="/dashboard">
        <Dashboard />
      </ProtectedRoute>
    </Switch>
  );
};

export default App;
