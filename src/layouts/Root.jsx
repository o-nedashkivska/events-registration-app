import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navigation from "../components/Navigation";

const Root = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navigation />
      <Outlet />
    </Box>
  );
};

export default Root;
