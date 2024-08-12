import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";
function PropertyDesc({ property }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-bold mb-6">Description & Details</h3>
      <div className="flex justify-between items-center w-1/2 mx-auto mb-8">
        <div className="w-fullpx-4 text-center">
          <div className="text-white p-3 w-12 h-12 shadow-lg rounded-full bg-gray-900 inline-flex items-center justify-center">
            <FaBed className="text-xl"></FaBed>
          </div>
          <p className="text-lg mt-5 font-semibold text-gray-600 w-auto text-center">
            {`${property.beds} Beds`}
          </p>
        </div>
        <div className="px-4 text-center">
          <div className="text-white p-3 w-12 h-12 shadow-lg rounded-full bg-gray-900 inline-flex items-center justify-center">
            <FaBath className="text-xl"></FaBath>
          </div>
          <p className="ext-lg mt-5 font-semibold text-gray-600 w-auto text-center">
            {`${property.baths} Baths`}
          </p>
        </div>
        <div className="px-4 text-center">
          <div className="text-white p-3 w-12 h-12 shadow-lg rounded-full bg-gray-900 inline-flex items-center justify-center">
            <FaRulerCombined className="text-xl"></FaRulerCombined>
          </div>
          <p className="ext-lg mt-5 font-semibold text-gray-600 w-auto text-center">
            {`${property.square_feet} sqft`}
          </p>
        </div>
      </div>
      {/* <div className="flex justify-center gap-4 text-primary-color mb-4 text-xl space-x-9">
        <p className="">
          <FaBed className="mr-2"></FaBed> {property.beds}{" "}
          <span className="hidden sm:inline">Beds</span>
        </p>
        <p>
          <FaBath className="mr-2"></FaBath> {property.baths}{" "}
          <span className="hidden sm:inline">Baths</span>
        </p>
        <p>
          <FaRulerCombined className="mr-2"></FaRulerCombined>
          {property.square_feet} <span className="hidden sm:inline">sqft</span>
        </p>
      </div> */}
      <p className="text-gray-500 mb-4">
        {`This is a beautiful ${property.type} located near ${property.location.city} the commons`}
      </p>
      <p className="text-gray-500 mb-4">
        {` We have a beautiful apartment located near the commons. It is a ${property.beds}
        bedroom apartment with a full kitchen and bathroom. It is available for
        weekly or monthly rentals.`}
      </p>
    </div>
  );
}

export default PropertyDesc;
