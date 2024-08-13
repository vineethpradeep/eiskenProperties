"use client";

import { useEffect, useState } from "react";
import { fetchProperty } from "@/utils/request";
import { useParams } from "next/navigation";
import PropertyAmenities from "@/components/PropertyAmenities";
import PropertyDesc from "@/components/PropertyDesc";
import PropertyInfo from "@/components/PropertyInfo";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyGoBack from "@/components/PropertyGoBack";
import Spinner from "@/components/Spinner";
import PropertyGalleryView from "@/components/PropertyGalleryView";
import PropertyMap from "@/components/PropertyMap";
import BookmarksProperty from "@/components/BookmarksProperty";
import ShareProperty from "@/components/ShareProperty";
import ContactForm from "@/components/ContactForm";

const PropertyPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) return;
      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (error) {
        console.error("Error in fetching property", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (property == null) {
      fetchPropertyData();
    }
  }, [id, property]);

  if (!isloading && !property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property not found
      </h1>
    );
  }
  return (
    <>
      {isloading && <Spinner loading={isloading} />}
      {!isloading && property && (
        <>
          <PropertyHeaderImage property={property} />
          <PropertyGoBack />
          <section className="container m-auto py-10 px-6">
            <div className="flex flex-col md:flex-row w-full gap-6">
              <main className="md:w-7/10 bg-switch-color rounded-md">
                <PropertyInfo property={property} />
                <PropertyDesc property={property} />
                <PropertyMap property={property} />
              </main>
              <aside className="space-y-4 md:w-3/10">
                <div className="flex flex-col gap-4 mb-4">
                  <BookmarksProperty property={property} />
                  <ShareProperty property={property} />
                </div>
                <ContactForm
                  property={property}
                  description={false}
                  heading="Contact Property Owner"
                  generalQuery={false}
                />
                <PropertyAmenities property={property} />
              </aside>
            </div>
          </section>
          <PropertyGalleryView property={property} />
        </>
      )}
    </>
  );
};

export default PropertyPage;
