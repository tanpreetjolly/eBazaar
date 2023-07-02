import React from "react";
import logo from "../assets/img/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-950">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="text-2xl md:text-3xl text-white underline underline-offset-8 font-titleFont font-bold">
              eBazaar
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm text sm:text-center text-gray-400">
          © 2023 eBazaar All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
