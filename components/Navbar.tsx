import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const link = [];

const Navbar = () => {
  return (
    <nav className="top-0 flex justify-between bg-transparent">
      <div className="flex flex-row justify-around gap-x-2 space-x-2 lg:gap-x-4 p-2 lg:p-4">
        <Button
          size={"icon"}
          className="hover:cursor-pointer aspect-square rounded-sm"
        >
          <Image
            alt="logo"
            src={"/logo.jpeg"}
            className="aspect-square"
            width={50}
            height={50}
          />
        </Button>
        <p className="font-normal text-lg text-black ">About</p>
      </div>
      <div className="flex flex-row justify-around gap-x-2 lg:gap-x-4 p-2 lg:p-4">
        <p className="font-semibold text-lg text-black">Join Us</p>
      </div>
    </nav>
  );
};

export default Navbar;
