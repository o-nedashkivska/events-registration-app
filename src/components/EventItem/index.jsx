import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "../UI/Link";

import styles from "./event-item.module.css";

const EventItem = ({ id, title, description, date, organizer }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions className={styles["card-actions"]}>
        <Button size="medium">
          <Link to={`/events/${id}/registration`}>Register</Link>
        </Button>
        <Button size="medium">
          <Link to={`/events/${id}/participants`}>View</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventItem;
