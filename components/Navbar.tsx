"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md w-full left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around md:justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpeg" alt="Logo" width={50} height={50} />
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-800 hover:text-black transition-all duration-150"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="text-gray-800 hover:text-black transition-all duration-150"
            >
              Events
            </Link>
            <Link
              href="/faculty"
              className="text-gray-800 hover:text-black transition-all duration-150"
            >
              Faculty
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-black transition-all duration-150"
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex">
            <Button
              onClick={() => router.push("/contact")}
              variant={"outline"}
              className="bg-transparent hover:cursor-pointer hover:bg-transparent border-black transition-all duration-200 hover:scale-110"
            >
              Join Us
            </Button>
          </div>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
