"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const events = [
  { date: "2025-03-10", name: "Hackathon" },
  { date: "2025-03-15", name: "Guest Lecture by John Doe" },
  { date: "2025-03-25", name: "Coding Workshop" },
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf("month"));

  const daysInMonth = currentMonth.daysInMonth();
  const startDay = currentMonth.startOf("month").day();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));
  const nextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" p-6 rounded-lg shadow-lg w-full max-w-xl mx-auto border border-[#d13237]"
    >
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={prevMonth}
          className="p-2 rounded-md bg-[#2B2B88] text-[#FFE275] hover:bg-[#1E1E6C] transition"
        >
          <ChevronLeft />
        </button>
        <h2 className="text-xl font-bold text-[#2B2B88]">
          {currentMonth.format("MMMM YYYY")}
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 rounded-md bg-[#2B2B88] text-[#FFE275] hover:bg-[#1E1E6C] transition"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-7 text-center font-semibold text-[#2B2B88]">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {[...Array(startDay)].map((_, i) => (
          <div key={i} className="text-gray-300"></div>
        ))}
        {daysArray.map((day, i) => {
          const fullDate = currentMonth.date(day).format("YYYY-MM-DD");
          const event = events.find((e) => e.date === fullDate);
          if (event) {
            return (
              <HoverCard key={i}>
                <HoverCardTrigger asChild>
                  <motion.div
                    className={`relative p-3 rounded-md  ${
                      event
                        ? "bg-[#2B2B88] text-[#FFE275] font-bold cursor-pointer hover:scale-105 transition-all duration-200"
                        : "bg-white text-[#2B2B88]"
                    }`}
                  >
                    {day}
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@nextjs</h4>
                      <p className="text-sm">
                        The React Framework created and maintained by @vercel.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          }
          return (
            <motion.div
              key={i}
              className={`relative p-3 rounded-md bg-white text-[#2B2B88]`}
            >
              {day}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Calendar;
