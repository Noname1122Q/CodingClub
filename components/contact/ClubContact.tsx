import React from "react";
import {
  FaDiscord,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

const ClubContact = () => {
  return (
    <div className="shadow-md rounded-lg p-6 w-full max-w-md">
      <h3 className="text-2xl font-semibold text-[#CF2027] text-center">
        Get in Touch
      </h3>

      {/* Email */}
      <div className="flex items-center space-x-3 mt-3">
        <FaEnvelope className="text-[#CF2027] text-xl" />
        <p className="text-gray-700">clubpresident@email.com</p>
      </div>
      <div className="flex items-center space-x-3 mt-3">
        <FaEnvelope className="text-[#CF2027] text-xl" />
        <p className="text-gray-700">clubvidepresident@email.com</p>
      </div>

      {/* Phone */}
      <div className="flex items-center space-x-3 mt-3">
        <FaPhone className="text-[#CF2027] text-xl" />
        <p className="text-gray-700">+91 9988776655</p>
      </div>
      <div className="flex items-center space-x-3 mt-3">
        <FaPhone className="text-[#CF2027] text-xl" />
        <p className="text-gray-700">+91 1122334455</p>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-6">
        <a href="#">
          <FaGithub className="text-[#CF2027] text-2xl hover:text-[#A01B22] transition" />
        </a>
        <a href="#">
          <FaLinkedin className="text-[#CF2027] text-2xl hover:text-[#A01B22] transition" />
        </a>
        <a href="#">
          <FaDiscord className="text-[#CF2027] text-2xl hover:text-[#A01B22] transition" />
        </a>
      </div>
    </div>
  );
};

export default ClubContact;
