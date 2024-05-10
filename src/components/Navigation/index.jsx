import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          Events Registration App
        </Typography>
        <Box>
          <Link to="/events" className={styles["nav-link"]}>
            View All Events
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
