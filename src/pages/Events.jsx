import React from "react";
import ContentLayout from "../layouts/Content";
import EventsList from "../components/EventsList";

const Events = () => {
  return (
    <ContentLayout title="Events">
      <EventsList />
    </ContentLayout>
  );
};

export default Events;
