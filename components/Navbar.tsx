"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent shadow-md w-full left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpeg" alt="Logo" width={50} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="#"
              className="text-gray-800 hover:text-black transition-all duration-150"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-black transition-all duration-150"
            >
              Events
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-black transition-all duration-150"
            >
              Faculty
            </Link>
            <Link
              href="#"
              className="text-gray-800 hover:text-black transition-all duration-150"
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex">
            <Button
              variant={"outline"}
              className="bg-transparent hover:cursor-pointer hover:bg-transparent border-black transition-all duration-200 hover:scale-110"
            >
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-5 flex flex-col space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="self-end" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
            <Button
              variant={"outline"}
              className="bg-transparent hover:cursor-pointer hover:bg-transparent border-black transition-all duration-200 hover:scale-110"
            >
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
