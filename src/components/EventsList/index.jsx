import React from "react";
import { Box, Grid } from "@mui/material";
import EventItem from "../EventItem";

const list = [
  {
    id: 1,
    title: "Event 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: new Date(),
    organizer: "John",
  },
  {
    id: 2,
    title: "Event 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: new Date(),
    organizer: "John",
  },
  {
    id: 3,
    title: "Event 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: new Date(),
    organizer: "John",
  },
  {
    id: 4,
    title: "Event 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: new Date(),
    organizer: "John",
  },
  {
    id: 5,
    title: "Event 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: new Date(),
    organizer: "John",
  },
  {
    id: 6,
    title: "Event 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    date: new Date(),
    organizer: "John",
  },
];

const EventsList = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Grid sx={{ flexGrow: 1 }} spacing={4} container>
        {list.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <EventItem {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EventsList;
