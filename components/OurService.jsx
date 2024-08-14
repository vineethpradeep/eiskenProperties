"use client";
import Image from "next/image";
import Link from "next/link";

import { FaServicestack } from "react-icons/fa";

const OurService = () => {
  return (
    <div className="flex flex-wrap items-center mt-20 mb-20">
      <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
        <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
          <FaServicestack className="FaServicestack text-xl"></FaServicestack>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
          Working with us is a pleasure
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          Are you looking to source a new, dream property, either at home or
          abroad? Eisken Properties, offers professional sales and property
          management, as well as national and international property sourcing.
          If you find the thought of starting your property search a daunting
          experience, you are not alone. Between you starting your search and
          actually stepping through the door of your dream home is a mixture of
          red tape, legal forms as well as endless calls to estate agents and
          solicitors. Eisken seeks to help you in this journey by offering a
          seamless and stress free property sourcing service. Simply speak to
          one of our dedicated team to discuss your requirements and we will
          scour the market on your behalf. Gone are the days of hunting through
          multiple websites and arranging property viewings, we will work with
          you to only select the properties which match your specific needs and
          requirements.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
          This service not only saves you time, but also takes the gamble out of
          viewing properties that are not suitable. By viewing prospective
          properties on your behalf, we can root out potential listings that do
          not meet your needs. As well as guiding you each step along the way.
          As well as taking you through viewings in-person, we can also offer a
          virtual viewing service where we visit the property for you and offer
          a guided walkthrough.
        </p>
        <Link href="/properties" className="font-bold text-gray-800 mt-8">
          Check Your Properties!
        </Link>
      </div>
      <div className="w-full md:w-4/12 px-4 mr-auto ml-auto pt-10">
        <div className="relative flex flex-col min-w-0 break-words text-white w-full mb-6 shadow-lg rounded-lg bg-primary-dark">
          <Image
            alt="Home Tour"
            src="/images/properties/interior_11.jpg"
            className="w-full align-middle rounded-t-lg"
            width={300}
            height={100}
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block top-[-43%]"
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-primary-dark fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Looking to Buy a new property or Sell an existing one?
            </h4>
            <p className="text-md font-light mt-2 text-white">
              "Eisken Properties provides an effortless way to achieve your
              dreams. We are dedicated to turning your vision into reality with
              ease and professionalism."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
export default OurService;
