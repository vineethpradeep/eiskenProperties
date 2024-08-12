"use client";
import { FaHome } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

const Spinner = ({ loading }) => {
  return (
    <div className="py-2 flex justify-center items-center">
      <div className="relative w-16 h-16 flex justify-center items-center">
        <FaHome className="text-4xl text-gray-300" />
        {loading && (
          <div className="absolute inset-0">
            <ClipLoader color="#c69963" size={70} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Spinner;
