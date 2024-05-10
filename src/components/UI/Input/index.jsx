import React from "react";
import { FormControl, FormLabel, TextField } from "@mui/material";

const Input = ({ label }) => {
  return (
    <FormControl fullWidth>
      <FormLabel>{label}</FormLabel>
      <TextField variant="outlined" />
    </FormControl>
  );
};

export default Input;
