"use client";

import { upcomingEvents } from "@/lib/sampleData";
import Image from "next/image";
import { useState } from "react";

const UpcomingEvents = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <>
      {upcomingEvents.map((event, index) => (
        <div
          key={index}
          className=" bg-transparent shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 border border-black"
        >
          <div className="w-full h-36 md:h-40 lg:h-48 relative">
            <Image
              src={event.imageUrl}
              alt={event.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-2 md:p-4">
            <h3 className=" text-sm md:text-xl font-semibold text-[#382E1C]">
              {event.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-600 mt-1">
              {event.date} • {event.time}
            </p>
            <p className="text-gray-700 mt-2">{event.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default UpcomingEvents;
