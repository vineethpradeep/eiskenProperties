import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo_mob.png";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const copyPolicyYear = new Date().getFullYear();
  return (
    // <footer className="bg-gray-200 py-4 mt-auto">
    //   <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
    //     <div className="mb-4 md:mb-0">
    //       <Image
    //         src={logo}
    //         alt="Eieskin Property Logo"
    //         className="h-16 w-auto"
    //         width={500}
    //         height={200}
    //       />
    //     </div>
    //     <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
    //       <ul className="flex space-x-4">
    //         <li>
    //           <Link href="/properties">Properties</Link>
    //         </li>
    //         <li>
    //           <Link href="/terms">Terms of Service</Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div>
    //       <p className="text-sm text-gray-500 mt-2 md:mt-0">
    //         &copy; {copyPolicyYear} EiskenProperties. All rights reserved.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="relative bg-gray-300 pt-8 pb-6 mt-24">
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
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              Eisken Properties, will respond 1-2 business days.
            </h5>
            <div className="mt-6 mb-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <FaTwitter className="flex"></FaTwitter>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <FaFacebook className="flex"></FaFacebook>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <FaInstagram className="flex"></FaInstagram>
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <FaTiktok className="flex"></FaTiktok>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/aboutus"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Policies
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Privacy Notice
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Complaints Procedure
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/contactus"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              &copy; {copyPolicyYear} EiskenProperties. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
