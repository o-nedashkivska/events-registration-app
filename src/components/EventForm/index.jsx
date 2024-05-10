import React from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Input from "../UI/Input";
import RadioGroup from "../UI/RadioGroup";

const options = ["Social media", "Friends", "Found myself"];

const EventForm = () => {
  const { eventId } = useParams();

  return (
    <Container
      component="form"
      sx={{ py: 5 }}
      maxWidth="sm"
      noValidate
      autoComplete="off"
    >
      <Paper sx={{ p: 4 }}>
        <Stack spacing={5}>
          <Typography variant="h5">Event Registration - id{eventId}</Typography>
          <Input label="Full name" />
          <Input label="Email" />
          <Input label="Date of birth" />
          <RadioGroup
            label={"Where did you hear about this event?"}
            options={options}
          />
          <ButtonGroup fullWidth>
            <Button variant="contained">Register</Button>
            <Button variant="outlined">Cancel</Button>
          </ButtonGroup>
        </Stack>
      </Paper>
    </Container>
  );
};

export default EventForm;
