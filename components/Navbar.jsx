"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import logo_mob from "@/assets/images/logo_mob.png";
import profileImg from "@/assets/images/profile.png";
import { FaGoogle, FaBars, FaTimes } from "react-icons/fa";
import { Dialog, DialogPanel } from "@headlessui/react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import UnreadMessageCount from "./UnreadMessageCount";

const Navbar = () => {
  const { data: session } = useSession();
  const profileUserImage = session?.user?.image;
  const profileUserName = session?.user?.name;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);
  // console.log(session);
  // console.log(providers && Object.values(providers));
  return (
    <header className="inset-x-0 top-0 z-50 flex justify-center mt-2">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8 w-4/5 rounded-lg	bg-slate-100"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              alt="Eisken propertie logo"
              src={logo}
              className="h-24 w-auto"
              width={500}
              height={300}
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/properties"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Properties
          </Link>
          {/* <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Sales
          </Link> */}
          <Link
            href="/aboutus"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About Us
          </Link>
          {/* <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Landlords
          </Link> */}
          <Link
            href="/contactus"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact Us
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Sales
          </Link>
          {session && (
            <Link
              href="/properties/add"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Add Properties
            </Link>
          )}
        </div>
        <div className="flex lg:justify-end lg:flex lg:flex-1 items-center">
          {session && (
            <>
              <Link href="/messages" className="relative group m-4">
                <div
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </div>
                <UnreadMessageCount session={session} />
              </Link>
              <div className="relative mr-3">
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setProfileMenuOpen((isOpen) => !isOpen)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src={profileUserImage || profileImg}
                    alt={profileUserName || ""}
                    width={40}
                    height={40}
                  />
                </button>
                {profileMenuOpen && (
                  <div
                    id="user-menu"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="/properties/saved"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                      onClick={() => setProfileMenuOpen(false)}
                    >
                      Saved Properties
                    </Link>
                    <button
                      onClick={() => {
                        setProfileMenuOpen(false);
                        signOut();
                      }}
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FaBars aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {!session && (
            <div className="hidden lg:flex">
              {providers &&
                Object.values(providers).map((provider, index) => (
                  <button
                    key={index}
                    className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
                    onClick={() => signIn(provider.id)}
                  >
                    <FaGoogle className="mr-2"></FaGoogle>
                    Log in <span aria-hidden="true">&rarr;</span>
                  </button>
                ))}
            </div>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt="Eiesken Property Logo"
                src={logo}
                className="h-16 w-auto"
                width={500}
                height={200}
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <FaTimes aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/properties"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Properties
                </Link>
                <Link
                  href="/aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
                <Link
                  href="/contactus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
                {/* <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sales
                </Link>
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Landlords
                </Link> */}
                <Link
                  href="/properties"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sales
                </Link>
                {session && (
                  <Link
                    href="/properties/add"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Add Properties
                  </Link>
                )}
              </div>
              <div className="py-6">
                {!session &&
                  providers &&
                  Object.values(providers).map((provider, index) => (
                    <button
                      key={index}
                      onClick={() => signIn(provider.id)}
                      className="-mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 flex items-center"
                    >
                      <FaGoogle className="mr-2"></FaGoogle>
                      Log in <span aria-hidden="true">&rarr;</span>
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
