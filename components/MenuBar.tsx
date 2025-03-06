"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-40 bg-[#FFE275] ">
        <div className="space-y-2 flex flex-col items-center justify-center">
          <Link href="/" className="py-1">
            Home
          </Link>
          <Link href="/events" className="py-1">
            Events
          </Link>
          <Link href="/faculty" className="py-1">
            Faculty
          </Link>
          <Link href="/contact" className="py-1">
            Contact
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default MenuBar;
