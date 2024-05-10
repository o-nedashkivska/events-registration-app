import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <Outlet />
    </div>
  );
};

export default Root;
