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
import { cn } from "@/lib/utils";
import {
  Activity,
  BrainCircuit,
  Bug,
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
  Package,
  Shield,
} from "lucide-react";
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

// Map string names to actual Lucide icons
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
            <div className="flex flex-col">
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
              <p>{event.date}</p>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{event.title}</DialogTitle>
          <DialogDescription>{event.description}</DialogDescription>
        </DialogHeader>
        <div></div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EventsDialog;
