"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const RecruitmentForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-3xl font-bold text-[#CF2027]">
          Join Our Coding Club!
        </h2>
        <p className="text-[#382E1C] mt-4">
          Passionate about coding? Looking to collaborate, build projects, and
          participate in hackathons? Apply now and become a part of our coding
          community!
        </p>
      </motion.div>
      {/* FORM DIV */}
      <div className="relative md:w-1/2">
        <div className="absolute -top-4 -left-4 w-full h-full bg-[#cf4449] rotate-4 rounded-lg"></div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative bg-[#F4D160] p-6 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-lg border border-[#B78A2D] focus:outline-none focus:ring-2 focus:ring-[#2B2B88]"
              required
            />
            <motion.input
              whileFocus={{ scale: 1.05 }}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-lg border border-[#B78A2D] focus:outline-none focus:ring-2 focus:ring-[#2B2B88]"
              required
            />
            <motion.textarea
              whileFocus={{ scale: 1.05 }}
              name="reason"
              placeholder="Why do you want to join?"
              value={formData.reason}
              onChange={handleChange}
              className="p-3 rounded-lg border border-[#B78A2D] focus:outline-none focus:ring-2 focus:ring-[#2B2B88]"
              rows={4}
              required
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#2B2B88] text-[#FFE275] p-3 rounded-lg font-semibold hover:bg-[#1E1E6C] transition"
            >
              Apply Now
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default RecruitmentForm;
