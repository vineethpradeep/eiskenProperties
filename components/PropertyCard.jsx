"use client";
import "@/assets/styles/globals.css";
import Image from "next/image";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";
import Link from "next/link";
import PrimaryLink from "@/components/PrimaryLink";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="relative h-72 w-auto">
        <Image
          src={property.images[0]}
          alt="Description of the image"
          fill
          className="fixed-height-auto-width"
        />
      </div>
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-primary-color px-4 py-2 text-white text-lg text-right md:text-center lg:text-right">
          £ {""}
          {property.rates.monthly
            ? `${property?.rates?.monthly?.toLocaleString()} | Monthly`
            : `${property?.rates?.weekly?.toLocaleString()} | Weekly`}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4 text-lg">
          <p>
            <FaBed className="inline mr-1  text-2xl"></FaBed> {property.beds}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="inline mr-1 "></FaBath> {property.baths}{" "}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="inline mr-2"></FaRulerCombined>
            {property.square_feet}{" "}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        {/* <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          {property.rates.monthly && (
            <p>
              <FaMoneyBill className="inline mr-2"></FaMoneyBill> Monthly
            </p>
          )}
          {property.rates.weekly && (
            <p>
              <FaMoneyBill className="inline mr-2"></FaMoneyBill> Weekly
            </p>
          )}
        </div> */}

        <div className="border border-primary-color mb-5 opacity-30"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4 items-center">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FaMapMarker className="inline text-lg text-primary-color"></FaMapMarker>
            <span className="text-primary-color">
              {`${property.location.city}, ${property.location.state}`}
            </span>
          </div>
          {/* <Link
            href={`/properties/${property._id}`}
            className="h-[36px] bg-primary-color hover:bg-primary-dark text-white px-4 py-2 text-center text-lg flex items-center"
          >
            Details
          </Link> */}
          <PrimaryLink linkTo={`/properties/${property._id}`}>
            Details
          </PrimaryLink>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
