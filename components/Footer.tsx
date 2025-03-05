"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

/*
darkslategray #2f4f4f
firebrick #b22222
*/

const Footer = () => {
  return (
    <footer className="bg-[#b22222] text-[#FFE275] py-4 md:py-8 px-3 md:px-6 mt-8 bottom-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            © {new Date().getFullYear()} BITS Pilani Coding Club.
          </h2>
          <p className="text-xs md:text-sm mt-2">
            A student-run organization at BITS Pilani.
          </p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-[#B78A2D] transition-colors">
            <FaInstagram size={24} />
          </Link>
          <Link href="#" className="hover:text-[#B78A2D] transition-colors">
            <FaFacebook size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
