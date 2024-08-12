import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

function PropertyGoBack() {
  return (
    <section>
      <div className="container m-auto py-6 px-6">
        <Link
          href="/properties"
          className="text-black font-bold hover:text-primary-dark flex items-center"
        >
          <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Properties
        </Link>
      </div>
    </section>
  );
}

export default PropertyGoBack;
