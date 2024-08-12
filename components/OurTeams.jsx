import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
const OurTeams = () => {
  return (
    <section className="pt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-10">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Here are our Teams</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              "Our team at Eisken Properties is a dedicated group of
              professionals with diverse expertise in real estate. We are
              committed to delivering exceptional service, ensuring that each
              client’s unique needs are met with precision and care. With a
              passion for excellence, we work collaboratively to turn your real
              estate dreams into reality."
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {/* <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="/Kimberley.jpeg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Kimberley Richards</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Director
                </p>
                <div className="mt-6 flex justify-center">
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 flex items-center justify-center"
                    type="button"
                  >
                    <FaTwitter />
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 flex items-center justify-center"
                    type="button"
                  >
                    <FaFacebook />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="/Kimberley.jpeg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Julia Scot</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Sales & Marketing
                </p>
                <div className="mt-6 flex justify-center">
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 flex items-center justify-center"
                    type="button"
                  >
                    <FaTwitter />
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 flex items-center justify-center"
                    type="button"
                  >
                    <FaFacebook />
                  </button>
                </div>
              </div>
            </div>
          </div> */}
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 pb-4 px-4">
            <div className="px-6">
              <img
                alt="..."
                src="/Kimberley.jpeg"
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Kimberley Richards</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Founder and CEO
                </p>
                <div className="mt-6 flex justify-center">
                  <button
                    className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 flex items-center justify-center"
                    type="button"
                  >
                    <FaTwitter />
                  </button>
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 flex items-center justify-center"
                    type="button"
                  >
                    <FaFacebook />
                  </button>
                  <button
                    className="bg-gray-800 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1 flex items-center justify-center"
                    type="button"
                  >
                    <FaInstagram />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeams;
