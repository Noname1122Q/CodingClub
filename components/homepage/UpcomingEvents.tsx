"use client";

import Image from "next/image";

const events = [
  {
    title: "Hackathon 2025",
    date: "March 15, 2025",
    time: "10:00 AM - 6:00 PM",
    description:
      "Join us for an exciting hackathon where you can showcase your coding skills and win amazing prizes!",
    image: "/logo.jpeg",
  },
  {
    title: "AI & ML Workshop",
    date: "April 5, 2025",
    time: "2:00 PM - 5:00 PM",
    description:
      "Learn about the latest trends in AI & ML from industry experts and get hands-on experience.",
    image: "/logo.jpeg",
  },
  {
    title: "Guest Speaker: Open Source Contributions",
    date: "April 20, 2025",
    time: "4:00 PM - 6:00 PM",
    description:
      "A special session with an open-source maintainer sharing insights on contributing to major projects.",
    image: "/logo.jpeg",
  },
];

const UpcomingEvents = () => {
  return (
    <>
      {events.map((event, index) => (
        <div
          key={index}
          className=" bg-transparent shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 border border-black"
        >
          <div className="w-full h-36 md:h-40 lg:h-48 relative">
            <Image
              src={event.image}
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
