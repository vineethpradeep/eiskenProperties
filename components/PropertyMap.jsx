"use client";
import { useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { setDefaults, fromAddress } from "react-geocode";
import Spinner from "@/components/Spinner";
import Image from "next/image";
import pin from "@/assets/images/pin.svg";
import { toast } from "react-toastify";

const PropertyMap = ({ property }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [viewPort, setViewPort] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 12,
    width: "100%",
    height: "500px",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [geoCodeError, setGeoCodeError] = useState(false);

  setDefaults({
    key: process.env.NEXT_PUBLIC_GOOGLE_GECODING_API_KEY,
    language: "en",
    region: "es",
  });

  useEffect(() => {
    const fetchCoords = async () => {
      try {
        const res = await fromAddress(
          `${property.location.street} ${property.location.city} ${property.location.state} ${property.location.zipcode}`
        );
        if (res.results.length === 0) {
          setGeoCodeError(true);
          setIsLoading(false);
          return;
        }
        // console.log(res);
        const { lat, lng } = await res.results[0].geometry.location;
        // console.log(lat, lng);
        setLat(lat);
        setLng(lng);
        setViewPort({
          ...viewPort,
          latitude: lat,
          longitude: lng,
        });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setGeoCodeError(true);
        setIsLoading(false);
      }
    };
    fetchCoords();
  }, []);

  if (isLoading) return <Spinner loading={isLoading} />;
  if (geoCodeError)
    return <div className="text-xl">No Location data found</div>;
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-bold mb-6">Property Location</h3>
      {!isLoading && (
        <Map
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
          mapLib={import("mapbox-gl")}
          initialViewState={{ longitude: lng, latitude: lat, zoom: 15 }}
          style={{ width: "100%", height: 500 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          <Marker longitude={lng} latitude={lat} anchor="bottom">
            <Image src={pin} alt="location" width={40} height={40} />
          </Marker>
        </Map>
      )}
    </div>
  );
};

export default PropertyMap;
