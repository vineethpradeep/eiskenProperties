"use client";
import { useState, useEffect } from "react";
import PropertyCard from "@/components/PropertyCard";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";

function SavedProperties() {
  const [properties, setProperties] = useState([]);
  const [isLoding, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProperties = async () => {
      try {
        const res = await fetch("/api/bookmarks");
        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          toast.error("Failed to fetch properties data");
        }
      } catch (err) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchSavedProperties();
  }, []);

  return isLoding ? (
    <Spinner loading={isLoding} />
  ) : (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <h1 className="text-2xl mb-4">Saved Properties</h1>
        {properties.length === 0 ? (
          <p>Saved properties not found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
export default SavedProperties;
