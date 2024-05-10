import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

const Content = ({ children }) => {
  return (
    <Box component="main" sx={{ py: 6 }}>
      <Toolbar />
      {children}
    </Box>
  );
};

export default Content;
