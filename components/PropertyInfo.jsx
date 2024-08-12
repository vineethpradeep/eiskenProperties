import { FaMapMarker } from "react-icons/fa";
function PropertyInfo({ property }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-center md:text-left text-gray-100">
      <div className=" mb-4">{property.type}</div>
      <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
      <div className="mb-4 flex align-middle justify-center md:justify-start text-share-light">
        <FaMapMarker className="text-lg text-share-light mr-2"></FaMapMarker>
        <p className="text-share-light">
          {property.location.street}, {property.location.zipcode}
        </p>
      </div>

      <h3 className="text-lg font-bold my-6 bg-gray-100 text-gray-800 p-2">
        Rates Per Month / Week
      </h3>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0">
          <div className="text-gray-100 mr-2 font-bold">Weekly</div>
          <div className="text-2xl font-bold text-primary-dark">
            £ {property.rates.weekly}
          </div>
        </div>
        <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
          <div className="text-gray-100 mr-2 font-bold">Monthly</div>
          <div className="text-2xl font-bold text-primary-dark">
            £ {property.rates.monthly}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyInfo;
