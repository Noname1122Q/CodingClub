"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { previousEvents, upcomingEvents } from "@/lib/sampleData";
import EventsDialog from "./EventsDialog";

// WILL PULL DATA FROM DATABASE LATER

export function EventsTab() {
  return (
    <Tabs defaultValue="upcoming" className="w-full h-full max-w-4xl mx-auto">
      <TabsList className="flex justify-center bg-transparent rounded-lg p-1 text-black">
        <TabsTrigger
          value="upcoming"
          className="flex-1 text-center py-2 rounded-lg hover:cursor-pointer hover:scale-105  transition-all duration-200"
        >
          Upcoming Events
        </TabsTrigger>
        <TabsTrigger
          value="past"
          className="flex-1 text-center py-2 rounded-lg hover:cursor-pointer hover:scale-105 transition-all duration-200"
        >
          Past Events
        </TabsTrigger>
      </TabsList>

      {/* Upcoming Events */}
      <TabsContent value="upcoming" className="space-y-4">
        {upcomingEvents.map((event) => (
          <EventsDialog event={event} key={event.title} />
        ))}
      </TabsContent>

      {/* Past Events */}
      <TabsContent value="past" className="space-y-4">
        {previousEvents.map((event) => (
          <EventsDialog event={event} key={event.title} />
        ))}
      </TabsContent>
    </Tabs>
  );
}
