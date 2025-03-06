"use client";

import Gallery from "@/components/homepage/Gallery";
import RecruitmentForm from "@/components/homepage/RecruitmentForm";
import UpcomingEvents from "@/components/homepage/UpcomingEvents";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className=" text-gray-900 -mt-20 overflow-hidden">
      <section className="flex flex-col justify-center left-0 text-center items-center py-10 md:py-14 lg:py-18 px-0 md:px-4 bg-[url('https://images.shiksha.com/mediadata/images/1579757643phpEK1frD.jpeg')]  bg-no-repeat bg-cover h-screen">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#CF2027] text-wrap">
          Welcome to BITS Pilani Coding Club
        </h1>
        <p className="text-lg lg:text-xl mt-4 text-black text-wrap">
          A community of passionate developers, problem solvers, and tech
          enthusiasts.
        </p>
        <Link
          href="/events"
          className="mt-2 md:mt-4 lg:mt-6 inline-block hover:bg-[#b42538] bg-[#b33445] text-white px-6 py-3 rounded-lg shadow-lg max-w-xl transition-all duration-300 "
        >
          View Upcoming Events
        </Link>
      </section>
      {/* GALLERY */}
      <section className="py-6 md:py-8 lg:py-12 px-4">
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#CF2027]">
          Gallery
        </h2>
        <div className="flex items-center justify-center">
          <Gallery />
        </div>
      </section>

      {/*EVENTS */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#CF2027]">
          Upcoming Events
        </h2>
        <div className="p-8 md:p-4 mt-2 md:mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <UpcomingEvents />
        </div>
      </section>

      {/*RECRUITMENT*/}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <RecruitmentForm />
      </section>
    </div>
  );
};

export default LandingPage;
