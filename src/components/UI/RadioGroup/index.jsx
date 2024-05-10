import React from "react";
import Radio from "@mui/material/Radio";
import MUIRadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

const RadioGroup = ({ label, options }) => {
  return (
    <FormControl>
      <FormLabel sx={{ pb: 1 }}>{label}</FormLabel>
      <MUIRadioGroup row>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            value={option.toLowerCase()}
            control={<Radio />}
            label={option}
          />
        ))}
      </MUIRadioGroup>
    </FormControl>
  );
};

export default RadioGroup;
