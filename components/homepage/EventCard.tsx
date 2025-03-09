import { upcomingEvents } from "@/lib/sampleData";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useState } from "react";

type Props = {
  event: (typeof upcomingEvents)[0];
};

const EventCard = ({ event }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className={`bg-transparent shadow-lg rounded-lg overflow-hidden transition-all hover:scale-105 duration-300 border border-black hover:cursor-pointer ${
        isFlipped ? "rotate-y-180" : "rotate-0"
      }`}
    >
      {/* FRONT */}
      <div className={`${isFlipped ? "hidden" : "flex flex-col"}`}>
        <div className="w-full h-36 md:h-40 lg:h-48 relative p-2 md:p-4">
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
      {/* BACK */}
      <div
        className={`${!isFlipped ? "hidden" : "flex flex-col rotate-y-180"}`}
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
        {event.guestSpeakers && event.guestSpeakers.length > 0 && (
          <div className="p-2 md:p-4">
            <h3 className="text-sm md:text-lg font-semibold text-[#382E1C]">
              Guest Speaker(s)
            </h3>
            <div className="mt-2 flex flex-wrap gap-4">
              {event.guestSpeakers.map((speaker, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-3 rounded-lg"
                >
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-gray-600 mt-1">
                      {speaker.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="p-2 md:p-4">
          <h3 className="text-sm md:text-lg font-semibold text-[#382E1C]">
            Contact Information
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mt-1 flex items-center ">
            <Mail className="mx-2 size-4" />
            <a
              href={`mailto:${event.contactEmail}`}
              className="text-blue-600 hover:underline"
            >
              {event.contactEmail}
            </a>
          </p>
          <p className="text-xs md:text-sm text-gray-600 mt-1 flex items-center ">
            <Phone className="mx-2 size-4" />{" "}
            <a
              href={`tel:${event.contactPhone}`}
              className="text-blue-600 hover:underline"
            >
              {event.contactPhone}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
