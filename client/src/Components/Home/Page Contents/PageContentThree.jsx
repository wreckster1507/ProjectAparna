import React from "react";
import { Link } from "react-router-dom";

const PageContentThree = () => {
  return (
    <>
      <div className=" mt-5">
        <section className="bg-gray-50 rounded-2xl">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              {" "}
              {/* Adjusted max-w-xl to max-w-3xl for wider paragraph */}
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                VGN Brixton
                <strong className="font-extrabold text-sky-500 sm:block">
                  {" "}
                  About Us.{" "}
                </strong>
              </h1>
              <p className="mt-4 sm:text-xl/relaxed">
                VGN Brixton is one of the largest and most prestigious projects
                in Chennai developed by the VGN Developers. The large campus has
                multiple towers and ample amenities. It is located in
                Irungatukottai SIPCOT with 800+ apartments consisting of 2, 3
                BHK in the campus. The campus has a number of indoor and outdoor
                facilities.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/aboutus/AboutSociety"
                  className="block w-full sm:w-auto px-12 py-3 text-sm font-medium text-white rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 active:bg-blue-800 transition duration-150 ease-in-out transform hover:scale-105"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PageContentThree;
