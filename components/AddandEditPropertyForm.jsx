"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import PrimaryLink from "./PrimaryLink";
import properties from "@/properties.json";
import { toast } from "react-toastify";
import { fetchProperty } from "@/utils/request";
import Spinner from "./Spinner";

function AddandEditPropertyForm({ edit = false }) {
  const { id } = useParams();
  const router = useRouter();
  // const [mounted, setMounted] = useState(false);
  const firstProperty = properties[0];
  const firstPropertyString = JSON.stringify(firstProperty);
  const parseProperty = JSON.parse(firstPropertyString);
  const [fields, setFields] = useState(parseProperty);
  const [isLoading, setIsLoading] = useState(edit);
  // console.log(fields);
  const amenities = [
    "Wifi",
    "Full kitchen",
    "Washer & Dryer",
    "Free Parking",
    "Swimming",
    "Hot Tub",
    "24/7 Security",
    "Wheelchair Accessible",
    "Elevator Access",
    "Dishwasher",
    "Gym/Fitness Center",
    "Air Conditioning",
    "Balcony/Patio",
    "Smart TV",
    "Coffee Maker",
  ];

  useEffect(() => {
    // setMounted(true);
    if (edit) {
      async function fetchPropertyData() {
        try {
          const propertyData = await fetchProperty(id);
          // console.log(propertyData);
          if (propertyData && propertyData.rates) {
            const defaultRates = { ...propertyData.rates };
            for (const rate in propertyData) {
              if (propertyData[rate] === null) {
                defaultRates[rate] = "";
              }
            }
          }
          setFields(propertyData);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchPropertyData();
    }
  }, [edit, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      // location.zipcode
      const [outerKey, innerKey] = name.split(".");
      setFields((prevField) => ({
        ...prevField,
        [outerKey]: { ...prevField[outerKey], [innerKey]: value },
      }));
    } else {
      setFields((prevField) => ({
        ...prevField,
        [name]: value,
      }));
    }
    // console.log(name, value);
  };
  //   console.log(fields);
  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;
    const updatedAmenities = [...fields.amenities];
    if (checked) {
      updatedAmenities.push(value);
    } else {
      const index = updatedAmenities.indexOf(value);
      if (index !== -1) {
        updatedAmenities.splice(index, 1);
      }
    }
    setFields((prevField) => ({
      ...prevField,
      amenities: updatedAmenities,
    }));
  };
  const handleImageChange = (e) => {
    const { files } = e.target;
    const updatedImage = [...fields.images];
    for (const file of files) {
      updatedImage.push(file);
    }
    setFields((prevFields) => ({
      ...prevFields,
      images: updatedImage,
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.target);
      const res = await fetch(`/api/properties/${id}`, {
        method: "PUT",
        body: formData,
      });
      if (res.status === 200) {
        router.push(`/properties/${id}`);
      } else if (res.status === 401 || res.status == 403) {
        toast.error("Permission denied");
      } else {
        toast.error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  if (isLoading) {
    return <Spinner loading={isLoading} />;
  }

  return (
    <div className="bg-primary-color-light py-8 px-6 flex flex-col gap-4 mt-14 mb-14">
      <form
        {...(edit
          ? { onSubmit: handleEditSubmit }
          : {
              action: "/api/properties",
              method: "POST",
              encType: "multipart/form-data",
            })}
      >
        <h2 className="text-3xl text-center font-semibold mb-6">
          {edit ? "Edit" : "Add"} Property
        </h2>

        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-bold mb-2">
            Property Type
          </label>
          <select
            id="type"
            name="type"
            className="w-full py-4 px-4"
            required
            value={fields.type}
            onChange={handleChange}
          >
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
            <option value="House">House</option>
            <option value="Cabin Or Cottage">Cabin or Cottage</option>
            <option value="Room">Room</option>
            <option value="Studio">Studio</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Listing Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
            placeholder="eg. Beautiful Apartment In Miami"
            required
            value={fields.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
            rows="4"
            placeholder="Add an optional description of your property"
            value={fields.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-4 bg-light-seperation p-4 flex flex-col gap-4">
          <label className="block text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            id="street"
            name="location.street"
            className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
            placeholder="Street"
            value={fields.location?.street}
            onChange={handleChange}
          />
          <input
            type="text"
            id="city"
            name="location.city"
            className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
            placeholder="City"
            required
            value={fields.location?.city}
            onChange={handleChange}
          />
          <input
            type="text"
            id="state"
            name="location.state"
            className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
            placeholder="State"
            required
            value={fields.location?.state}
            onChange={handleChange}
          />
          <input
            type="text"
            id="zipcode"
            name="location.zipcode"
            className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
            placeholder="Zipcode"
            value={fields.location?.zipcode}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4 flex flex-wrap">
          <div className="w-full sm:w-1/3 pr-2">
            <label
              htmlFor="beds"
              className="block text-gray-700 font-bold mb-2"
            >
              Beds
            </label>
            <input
              type="number"
              id="beds"
              name="beds"
              className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
              required
              value={fields.beds}
              onChange={handleChange}
            />
          </div>
          <div className="w-full sm:w-1/3 px-2">
            <label
              htmlFor="baths"
              className="block text-gray-700 font-bold mb-2"
            >
              Baths
            </label>
            <input
              type="number"
              id="baths"
              name="baths"
              className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
              required
              value={fields.baths}
              onChange={handleChange}
            />
          </div>
          <div className="w-full sm:w-1/3 pl-2">
            <label
              htmlFor="square_feet"
              className="block text-gray-700 font-bold mb-2"
            >
              Square Feet
            </label>
            <input
              type="number"
              id="square_feet"
              name="square_feet"
              className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
              required
              value={fields.square_feet}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Amenities
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {amenities
              .filter((item) => item && item.trim() !== "")
              .map((amenitie) => (
                <div key={amenitie} className="flex items-center">
                  <input
                    type="checkbox"
                    id={amenitie}
                    name="amenities"
                    value={amenitie}
                    className="appearance-none w-6 h-6 border-2 border-gray-300 rounded-md checked:bg-primary-color checked:border-primary-color checked:before:content-['✔'] checked:before:text-white checked:before:text-xl checked:before:flex checked:before:items-center checked:before:justify-center focus:outline-none"
                    checked={fields.amenities?.includes(amenitie)}
                    onChange={handleAmenitiesChange}
                  />
                  <label
                    htmlFor={amenitie}
                    className="ml-2 text-gray-700 cursor-pointer"
                  >
                    {amenitie}
                  </label>
                </div>
              ))}
          </div>
        </div>

        <div className="mb-4 bg-light-seperation p-4 w-full">
          <label className="block text-gray-700 font-bold mb-2">
            Rates (Leave blank if not applicable)
          </label>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <label htmlFor="weekly_rate" className="mr-2">
                Weekly
              </label>
              <input
                type="number"
                id="weekly_rate"
                name="rates.weekly"
                className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
                value={fields.rates?.weekly}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="monthly_rate" className="mr-2">
                Monthly
              </label>
              <input
                type="number"
                id="monthly_rate"
                name="rates.monthly"
                className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
                value={fields.rates?.monthly}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="seller_name"
            className="block text-gray-700 font-bold mb-2"
          >
            Seller Name
          </label>
          <input
            type="text"
            id="seller_name"
            name="seller_info.name"
            className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
            placeholder="Name"
            value={fields.seller_info?.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seller_email"
            className="block text-gray-700 font-bold mb-2"
          >
            Seller Email
          </label>
          <input
            type="email"
            id="seller_email"
            name="seller_info.email"
            className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
            placeholder="Email address"
            required
            value={fields.seller_info?.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="seller_phone"
            className="block text-gray-700 font-bold mb-2"
          >
            Seller Phone
          </label>
          <input
            type="tel"
            id="seller_phone"
            name="seller_info.phone"
            className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
            placeholder="Phone"
            value={fields.seller_info?.phone}
            onChange={handleChange}
          />
        </div>

        {!edit && (
          <div className="mb-4">
            <label
              htmlFor="images"
              className="block text-gray-700 font-bold mb-2"
            >
              Images (Select up to 4 images)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              className="appearance-none block w-full bg-white text-gray-700 border border-white py-4 px-4 leading-tight focus:outline-none focus:bg-primary-color-light focus:border-primary-dark"
              accept="image/*"
              required
              multiple
              onChange={handleImageChange}
            />
          </div>
        )}

        <div className="flex flex-col-reverse mt-8">
          <button>{edit ? "Update" : "Add"} Property</button>
        </div>
      </form>
    </div>
  );
}

export default AddandEditPropertyForm;
