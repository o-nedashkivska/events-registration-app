import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const Navigation = () => {
  const navigate = useNavigate();

  const handleViewEvents = () => {
    navigate("/events");
  };

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
          <Button variant="contained" onClick={handleViewEvents}>
            View All Events
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
