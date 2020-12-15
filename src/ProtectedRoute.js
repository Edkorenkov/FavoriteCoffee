import React from "react";
import Store from "./Store";
import { useProxy } from "valtio";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  const snapshot = useProxy(Store);

  return (
    <Route
      {...rest}
      render={() => {
        return snapshot.user.isAuthenticated ? children : <Redirect to="/" />;
      }}
    />
  );
};

export default ProtectedRoute;
