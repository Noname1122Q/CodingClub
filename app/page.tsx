"use client";

import Gallery from "@/components/homepage/Gallery";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className=" text-gray-900 -mt-20">
      {/* Hero Section */}
      <section className="flex flex-col justify-center text-center items-center py-20 px-4 bg-[url('https://images.shiksha.com/mediadata/images/1579757643phpEK1frD.jpeg')]  bg-no-repeat bg-cover h-screen">
        <h1 className="text-5xl font-bold text-[#CF2027]">
          Welcome to BITS Pilani Coding Club
        </h1>
        <p className="text-lg mt-4">
          A community of passionate developers, problem solvers, and tech
          enthusiasts.
        </p>
        <Link
          href="#events"
          className="mt-6 inline-block hover:bg-[#b42538] bg-[#b33445] text-white px-6 py-3 rounded-lg shadow-lg max-w-xl "
        >
          View Upcoming Events
        </Link>
      </section>

      {/* Gallery Section */}
      <section className="py-8 md:py-12 lg:py-16 px-4">
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-center text-[#CF2027]">
          Gallery
        </h2>
        {/* <div className="flex flex-col items-center justify-around gap-4 mt-6">
          <Gallery />
        </div> */}
        <Gallery />
      </section>

      {/* Upcoming Events */}
      <section id="events" className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-[#CF2027]">
          Upcoming Events
        </h2>
        <div className="mt-6 space-y-4">
          <div className="bg-[#FFE275] p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Hackathon 2025</h3>
            <p>Join us for an intense coding battle on March 10, 2025!</p>
          </div>
          <div className="bg-[#FFE275] p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">
              Competitive Programming Bootcamp
            </h3>
            <p>Level up your coding skills on April 5, 2025.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
