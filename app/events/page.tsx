import Calendar from "@/components/events/DynamicCalendar";
import { EventsTab } from "@/components/events/EventsTab";
import React from "react";

const EventsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 md:space-y-6">
      <div className="flex flex-col lg:flex-row p-4 justify-around space-x-4 space-y-2">
        <div className="flex flex-col text-center items-center justify-center max-w-lg">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-[#CF2027]">
            Our Events
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-wrap">
            Never miss an exciting event! Our club hosts coding sessions, tech
            talks, and hands-on workshops. Check the calendar to see what's
            coming up!
          </p>
        </div>
        <Calendar />
      </div>
      <EventsTab />
    </div>
  );
};

export default EventsPage;
