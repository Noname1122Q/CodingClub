import Calendar from "@/components/events/DynamicCalendar";
import { EventsTab } from "@/components/events/EventsTab";

import React from "react";

const EventsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 md:space-y-6">
      <Calendar />
      <EventsTab />
    </div>
  );
};

export default EventsPage;
