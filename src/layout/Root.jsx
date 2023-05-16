import React from "react";
import "./Root.css";
import { Link, Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
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
          <span clasname="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item   active">
              <Link to="/home" className="admin-list">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="admin-list">
                {" "}
                About{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="admin-list">
                {" "}
                Dashboard{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="left">
        <div className="left-sidebar">
          <h2>Sahan</h2>
        </div>
        <div className="content">
          <h2>
            <Outlet />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Root;
