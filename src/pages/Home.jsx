import React from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  return <Navigate to="/events" replace={true} />;
};

export default Home;
