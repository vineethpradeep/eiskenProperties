"use client";
import Image from "next/image";
import Link from "next/link";

import { FaServicestack, FaMapMarker, FaBriefcase } from "react-icons/fa";
import OurTeams from "./OurTeams";

const AboutUs = () => {
  return (
    <>
      <section className="pb-20 relative block bg-gray-900 mt-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 pt-10">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  <div className="relative">
                    <img
                      alt="..."
                      src="/eiskin.png"
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                      style={{ maxWidth: "160px" }}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Link
                      href="/contactus"
                      className="bg-primary-color active:bg-primary-dark uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                      type="button"
                      style={{ transition: "all 0.15s ease 0s" }}
                    >
                      React Us
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        1000
                      </span>
                      <span className="text-sm text-gray-500">Properties</span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        100
                      </span>
                      <span className="text-sm text-gray-500">Client</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-12">
                <h3 className="text-4xl font-semibold leading-normal text-gray-800 mb-2">
                  Eisken Properties
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase flex justify-center">
                  <FaMapMarker className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></FaMapMarker>
                  76 Mansel Street Swansea SA1 5TW
                </div>
                <div className="mb-10 text-gray-700 flex justify-center">
                  <FaBriefcase className="fas fa-briefcase mr-2 text-lg text-gray-500"></FaBriefcase>
                  Accredited Letting Agent & Property Sales
                </div>
              </div>
              <OurTeams />
              <div className="mt-10 py-10 border-t border-gray-300 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-gray-800">
                      Eisken Properties was established in 2022 by Kimberley
                      Richards, along with our helpful team we deliver a
                      customer focused innovative approach to property letting
                      and sales. We recognise that letting a property can be a
                      challenging experience for both landlords and contract
                      holders. However, both can enjoy the benefits of an
                      unrivalled customer service with our ‘Can Do’ approach.
                    </p>
                    <a href="#pablo" className="font-normal text-pink-500">
                      View Our Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
