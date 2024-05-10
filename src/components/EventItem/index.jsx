import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import styles from "./event-item.module.css";

const EventItem = ({ id, title, description, date, organizer }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate(`/events/${id}/registration`);
  };

  const handleViewParticipants = () => {
    navigate(`/events/${id}/participants`);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions className={styles["card-actions"]}>
        <Button size="medium" onClick={handleRegister}>
          Register
        </Button>
        <Button size="medium" onClick={handleViewParticipants}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventItem;
