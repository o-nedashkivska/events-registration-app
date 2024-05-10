import React from "react";
import Typography from "@mui/material/Typography";
import ContentLayout from "../layouts/Content";
import EventsList from "../components/EventsList";

const Events = () => {
  return (
    <ContentLayout>
      <Typography variant="h4">Events</Typography>
      <EventsList />
    </ContentLayout>
  );
};

export default Events;
