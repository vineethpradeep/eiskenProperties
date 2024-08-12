import { FaCheck } from "react-icons/fa";

function PropertyAmenities({ property }) {
  return (
    <div className="mt-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Amenities</h3>
      <ul className="flex flex-col gap-2">
        {property.amenities.map((amenitie, index) => (
          <li
            key={index}
            className="flex items-center py-4 border-b-[1px] border-primary-color last:border-0"
          >
            <FaCheck className="text-primary-dark mr-3"></FaCheck>
            <span>{amenitie}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyAmenities;
