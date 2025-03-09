"use client";

import { upcomingEvents } from "@/lib/sampleData";
import EventCard from "./EventCard";

const UpcomingEvents = () => {
  return (
    <>
      {upcomingEvents.map((event, index) => (
        <EventCard event={event} key={index} />
      ))}
    </>
  );
};

export default UpcomingEvents;
