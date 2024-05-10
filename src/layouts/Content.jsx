import React from "react";
import Box from "@mui/material/Box";
import { Toolbar, Typography } from "@mui/material";

const Content = ({ title, children }) => {
  return (
    <Box component="main" sx={{ py: 6 }}>
      <Toolbar />
      <Typography variant="h4">{title}</Typography>
      {children}
    </Box>
  );
};

export default Content;
