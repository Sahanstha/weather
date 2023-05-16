import React from "react";
import { Link, Outlet } from "react-router-dom";

const PracList = () => {
  return (
    <>
      <h1>Hello Brother</h1>
      <Link to="/book">Book</Link>
      <Outlet />
    </>
  );
};
export default PracList;
