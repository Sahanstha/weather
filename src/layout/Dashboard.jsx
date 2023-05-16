import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      {/* <Link to="/dashboard/admin">Admin</Link>
      <Link to="/dashboard/user"> User </Link> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item   active">
              <Link to="/dashboard/admin" className="admin-list">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/user" className="admin-list">
                {" "}
                User{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard/weather" className="admin-list">
                {" "}
                Weather{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="right">
        <div className="content">
          <h2>
            <Outlet />
          </h2>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
