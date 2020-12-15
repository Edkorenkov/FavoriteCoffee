import React from "react";
import { authenticate } from "../Store";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  const history = useHistory();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = ({ email, password }) => {
    const { isAuthenticated } = authenticate({ email, password });

    if (isAuthenticated) {
      return history.push("/dashboard");
    }
  };

  return (
    <div className="container-md">
      <div className="row">
        <div className="col">
          <div
            style={{ height: "90vh" }}
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <h4 className="mb-3">Login</h4>
            <div className="row">
              <div className="col">
                <div className="form">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button
                    className="btn btn-primary btn-block"
                    onClick={(e) => login({ email, password })}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
