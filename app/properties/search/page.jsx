"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import PropertyCard from "@/components/PropertyCard";
import Spinner from "@/components/Spinner";
import PropertyGoBack from "@/components/PropertyGoBack";
import SearchPropertyForm from "@/components/SearchPropertyForm";

const SearchProperties = () => {
  const searchParams = useSearchParams();
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = searchParams.get("location");
  const propertyType = searchParams.get("propertyType");

  useEffect(() => {
    const fetchSearchProperties = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );
        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          setProperties([]);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchProperties();
  }, [location, propertyType]);
  //   console.log(properties);

  return (
    <>
      <section className="flex justify-center mt-4">
        <SearchPropertyForm />
      </section>
      {isLoading ? (
        <Spinner loading={isLoading} />
      ) : (
        <section className="px-4 ру-6">
          <div className="container-xl lg:container m-auto px-4 py-6">
            <PropertyGoBack />
            <h1 className="text-2xl mb-4">Search Properties Results</h1>
            {properties.length === 0 ? (
              <p>No Search Properties found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default SearchProperties;
