"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// WILL PULL DATA FROM DATABASE LATER
const upcomingEvents = [
  {
    title: "AI & Machine Learning Workshop",
    description:
      "An interactive workshop on AI and ML fundamentals with hands-on coding exercises.",
    date: "March 15, 2025",
    guestSpeakers:
      "Dr. Anil Mehta (Google AI), Priya Sharma (ML Engineer at Microsoft)",
    isRegistrationOpen: true,
  },
  {
    title: "Web Dev Bootcamp",
    description:
      "Learn how to build modern web applications with Next.js and TypeScript.",
    date: "March 25, 2025",
    guestSpeakers: "Rajesh Verma (Full Stack Developer at Amazon)",
    isRegistrationOpen: true,
  },
  {
    title: "Cybersecurity and Ethical Hacking",
    description:
      "Explore ethical hacking techniques and cybersecurity fundamentals.",
    date: "April 5, 2025",
    guestSpeakers: "Kunal Singh (Cybersecurity Analyst, IBM)",
    isRegistrationOpen: false,
  },
  {
    title: "Cybersecurity and Ethical ",
    description:
      "Explore ethical hacking techniques and cybersecurity fundamentals.",
    date: "April 5, 2025",
    guestSpeakers: "Kunal Singh (Cybersecurity Analyst, IBM)",
    isRegistrationOpen: false,
  },
];

const previousEvents = [
  {
    title: "BITS Hackathon 2024",
    description:
      "A 24-hour coding marathon where students built innovative tech solutions.",
    date: "February 10, 2024",
    guestSpeakers:
      "Panel of industry experts from Google, Microsoft, and OpenAI",
    isRegistrationOpen: false,
  },
  {
    title: "Blockchain & Crypto Seminar",
    description:
      "A deep dive into blockchain technology and the future of cryptocurrency.",
    date: "January 18, 2024",
    guestSpeakers: "Ankit Raj (Blockchain Developer at Polygon)",
    isRegistrationOpen: false,
  },
  {
    title: "Game Development with Unity",
    description: "Introduction to game development using Unity and C#.",
    date: "December 5, 2023",
    guestSpeakers: "Ramesh Yadav (Game Developer at Ubisoft)",
    isRegistrationOpen: false,
  },
  {
    title: "Game Development ",
    description: "Introduction to game development using Unity and C#.",
    date: "December 5, 2023",
    guestSpeakers: "Ramesh Yadav (Game Developer at Ubisoft)",
    isRegistrationOpen: false,
  },
];

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
          <Card
            key={event.title}
            className="bg-[#F4D160] shadow-lg border-[#B78A2D]"
          >
            <CardContent>
              <div className="flex flex-col">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>{event.guestSpeakers}</p>
                <p>{event.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>

      {/* Past Events */}
      <TabsContent value="past" className="space-y-4">
        {previousEvents.map((event) => (
          <Card
            key={event.title}
            className="bg-[#F4D160] shadow-lg border-[#B78A2D]"
          >
            <CardContent>
              <div className="flex flex-col">
                <h2>{event.title}</h2>
                <p>{event.description}</p>
                <p>{event.guestSpeakers}</p>
                <p>{event.date}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  );
}
