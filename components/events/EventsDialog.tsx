import { upcomingEvents } from "@/lib/sampleData";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Activity,
  BrainCircuit,
  Bug,
  Calendar,
  Code,
  Cpu,
  Database,
  DollarSign,
  FileCode,
  Gamepad,
  Globe,
  Layers,
  Lightbulb,
  LucideIcon,
  Mail,
  Package,
  Phone,
  Shield,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
type Props = {
  event: (typeof upcomingEvents)[0];
};

type IconName =
  | "brain-circuit"
  | "cpu"
  | "code"
  | "globe"
  | "layers"
  | "file-code"
  | "shield"
  | "bug"
  | "activity"
  | "lightbulb"
  | "database"
  | "dollar-sign"
  | "gamepad"
  | "package";

const iconMap: Record<IconName, LucideIcon> = {
  "brain-circuit": BrainCircuit,
  cpu: Cpu,
  code: Code,
  globe: Globe,
  layers: Layers,
  "file-code": FileCode,
  shield: Shield,
  bug: Bug,
  activity: Activity,
  lightbulb: Lightbulb,
  database: Database,
  "dollar-sign": DollarSign,
  gamepad: Gamepad,
  package: Package,
};

const EventsDialog = ({ event }: Props) => {
  return (
    <Dialog key={event.title}>
      <DialogTrigger asChild>
        <Card className="bg-[#F4D160] shadow-lg border-[#B78A2D] hover:cursor-pointer hover:scale-105 transition-all duration-200">
          <CardContent>
            <div className="flex flex-col space-y-2 md:space-y-4">
              <h2 className=" text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">
                {event.title}
              </h2>
              <div className="flex space-x-2">
                {event.tags.map((tag) => {
                  const IconComponent = iconMap[tag.icon as IconName];
                  return (
                    <Badge
                      key={tag.title}
                      className="rounded-full flex items-center gap-2 px-3 py-1 border bg-transparent border-gray-400 text-gray-700"
                    >
                      {IconComponent && <IconComponent size={14} />}
                      {tag.title}
                    </Badge>
                  );
                })}
              </div>
              <p className="font-normal flex">
                <Calendar className="mr-2 size-4" /> {event.date}
              </p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[550px] lg:max-w-[725px] max-h-full overflow-y-scroll my-auto bg-[#d8b163] ">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription asChild>
            <div className="flex space-x-2">
              {event.tags.map((tag) => {
                const IconComponent = iconMap[tag.icon as IconName];
                return (
                  <Badge
                    key={tag.title}
                    className="rounded-full flex items-center gap-2 px-3 py-1 border bg-transparent border-gray-400 text-gray-700"
                  >
                    {IconComponent && <IconComponent size={14} />}
                    {tag.title}
                  </Badge>
                );
              })}
            </div>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 p-6 max-w-2xl bg-transparent ">
          {event.imageUrl && (
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img
                src={
                  "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div>
            <p className="text-gray-500 text-sm mt-1">
              {event.date} • {event.time} • {event.location}
            </p>
            <p className="text-sm font-medium text-gray-600">
              {event.eventType} • {event.duration}
            </p>
          </div>

          {event.guestSpeakers && event.guestSpeakers.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Guest Speaker(s)
              </h3>
              <div className="mt-2 flex flex-wrap gap-4">
                {event.guestSpeakers.map((speaker, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3  px-3 py-2 rounded-lg"
                  >
                    <div>
                      <p className="text-gray-700 font-medium">
                        {speaker.name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {speaker.designation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Organized By
            </h3>
            <p className="text-gray-700">{event.organizer}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="text-gray-600 text-sm flex">
              <Mail />
              <a
                href={`mailto:${event.contactEmail}`}
                className="text-blue-600 hover:underline"
              >
                {event.contactEmail}
              </a>
            </p>
            <p className="text-gray-600 text-sm flex">
              <Phone />{" "}
              <a
                href={`tel:${event.contactPhone}`}
                className="text-blue-600 hover:underline"
              >
                {event.contactPhone}
              </a>
            </p>
          </div>
          {event.isRegistrationOpen && (
            <Button type="submit">Register Now!</Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventsDialog;
