"use client";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import profileDefaultImage from "@/assets/images/profile.png";
import Spinner from "@/components/Spinner";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Profile() {
  const { data: session } = useSession();
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;
  const profileImage = session?.user?.image;
  const [userProperties, setUserProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) {
        return;
      }
      try {
        const res = await fetch(`/api/properties/user/${userId}`);
        if (res.status === 200) {
          const data = await res.json();
          setUserProperties(data);
        }
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (session?.user?.id) {
      fetchUserProperties(session.user.id);
    }
  }, [session]);

  const handleDeleteProperty = async (propertyId) => {
    const confirm = window.confirm(
      `${propertyId}, Are you sure you want to delete the property?`
    );

    if (!confirm) return;
    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: "DELETE",
      });

      if (res.status === 200) {
        const updatedProperties = userProperties.properties.filter(
          (property) => property._id !== propertyId
        );
        setUserProperties(updatedProperties);
        toast.success("Property deleted");
      } else {
        toast.error("ailed to deleted the property");
      }
    } catch (error) {
      toast.error("Failed to deleted the property");
    }
  };
  return (
    <section className="px-4 ру-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        <section className="container m-auto py-24">
          <div className="outer flex gap-4 p-4 bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
            <div className="left p-4 md:w-1/4 ">
              <h2 className="text-3xl font-semibold mb-6">Your Profile</h2>
              <div className="mb-10">
                <Image
                  className="h-32 w-32 md:h-48 md:w-48 rounded-full mx-auto md:mx-0"
                  src={profileImage || profileDefaultImage}
                  alt="User"
                  width={120}
                  height={100}
                  priority={true}
                />
              </div>
              <h2 className="text-xl mb-4">
                <span className="font-bold block">Name: </span> {profileName}
              </h2>
              <h2 className="text-xl">
                <span className="font-bold block">Email: </span> {profileEmail}
              </h2>
            </div>
            <div className="right flex-grow bg-gray-300 p-4 w-full md:w-3/4 md:pl-4">
              <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
              {isLoading ? (
                <Spinner loading={isLoading} />
              ) : (
                userProperties?.properties?.map((property) => (
                  <div className="mb-10" key={property._id}>
                    <div className="relative h-72 w-full">
                      <Link href={`/properties/${property._id}`}>
                        <Image
                          src={property.images[0]}
                          alt="Description of the image"
                          fill
                          className="fixed-height-auto-width"
                          priority={true}
                        />
                      </Link>
                    </div>
                    <div className="mt-2">
                      <p className="text-lg font-semibold">{property.type}</p>
                      <p className="text-gray-600">
                        Address:{" "}
                        {`${property.location.street}, ${property.location.city}, ${property.location.zipcode}`}
                      </p>
                    </div>
                    <div className="mt-2 flex justify-center">
                      <Link
                        href={`/properties/${property._id}/edit`}
                        className="bg-gray-800 text-white px-3 py-3 mr-2 hover:bg-gray-600 text-center w-full"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDeleteProperty(property._id)}
                        className="bg-red-600 text-white px-3 py-3 hover:bg-red-800 w-full"
                        type="button"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Profile;
