import React from "react";

const Dashboard = (props) => {
  return (
    <div className="container-md py-3">
      <h4>My coffee</h4>
      <h5 className="font-weight-light text-muted">List of added coffee</h5>
      <div className="row px-2">
        <div className="col px-2">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-2">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col px-2">
          <div className="card border-primary" role="button">
            <div className="card-body">
              <div className="row">
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
