"use client";

import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import ContactForm from "@/components/ContactForm";

const ContactusPage = () => {
  return (
    <>
      <section className="relative block bg-gray-900 mt-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pb-20 pt-8">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">
                "Unlock Your Dream Home Today!"
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                "Have questions or ready to take the next step? Reach out to us
                today! Our team is here to assist you with all your real estate
                needs. Whether you're looking to buy, sell, or explore your
                options, we're just a call or message away. Let’s connect and
                make your property goals a reality."
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FaPhoneAlt className="text-xl"></FaPhoneAlt>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                01792 644023
              </h6>
              <p className="mt-2 mb-4 text-gray-500">
                "Give Us a Call! Available Monday to Thursday, 9 AM - 5 PM, and
                Friday, 9 AM - 2 PM."
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FaEnvelope className="text-xl"></FaEnvelope>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                enquiries@eiskenp.com
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                " Reach Out Anytime! Email Us for a Prompt Response."
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <FaLocationArrow className="text-xl"></FaLocationArrow>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                76 Mansel Street Swansea SA1 5TW
              </h5>
              <p className="mt-2 mb-4 text-gray-500">
                "Visit Us. We look forward to welcoming you!"
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block py-24 lg:pt-24 bg-gray-900">
        <div className="container mx-auto px-4 mt-6">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <ContactForm
                  description={true}
                  heading="Want to Experience Excellence with Us?"
                  generalQuery={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactusPage;
