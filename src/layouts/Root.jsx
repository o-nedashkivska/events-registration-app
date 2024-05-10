import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navigation from "../components/Navigation";

const Root = () => {
  return (
    <Container maxWidth="xl">
      <Navigation />
      <Outlet />
    </Container>
  );
};

export default Root;
