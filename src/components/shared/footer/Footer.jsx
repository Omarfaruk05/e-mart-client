import { MapPinIcon } from "@heroicons/react/24/solid";
import { PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 pt-12 text-slate-500 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="grid justify-between gap-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4">
          <div>
            <h2 className="text-3xl font-semibold text-white">Support</h2>
            <hr className=" mb-4 " />
            <div className="flex border p-2 rounded-full w-full mb-4 cursor-pointer hover:border-orange-500">
              <div>
                <PhoneIcon className="w-10 h-10 mt-1 text-white"></PhoneIcon>
              </div>
              <div className="w-[3px] bg-white rounded-lg mx-2"></div>
              <div>
                <small className="text-sm">9AM-8AM</small>
                <p className="text-orange-500">+88015900262</p>
              </div>
            </div>
            <div className="flex border p-2 rounded-full w-full cursor-pointer hover:border-orange-500">
              <div>
                <MapPinIcon className="w-10 h-10 mt-1 text-white"></MapPinIcon>
              </div>
              <div className="w-[3px] bg-white rounded-lg mx-2"></div>
              <div>
                <small className="text-sm">Stroe Locator</small>
                <p className="text-orange-500">Find Our Stors</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold text-white">About Us</h2>
            <hr className=" mb-4 " />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center">
              <div>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  EMI Terms
                </p>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  Privacy Policy
                </p>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  Star Point Policy
                </p>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  Brands
                </p>
              </div>
              <div>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  About Us
                </p>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  Terms and Conditions
                </p>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  Blog
                </p>
                <p className="cursor-pointer text-orange-500 hover:underline mb-4">
                  Online Service Support
                </p>
              </div>
              <div>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  Online Delivery
                </p>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  Return Policy
                </p>
                <p className="cursor-pointer hover:text-orange-500 hover:underline mb-4">
                  Contact Us
                </p>
                <p className="cursor-pointer text-orange-500 hover:underline mb-4">
                  Complain / Advice
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-white">Stay Us</h2>
            <hr className=" mb-4 " />
            <h4 className="text-lg font-semibold">Electronic Mart</h4>
            <p className="cursor-pointer mb-4">
              6th floor, 28 Kazi Nazrul Islam Ave,Navana
            </p>
            <p className="cursor-pointer mb-4">Zohura Square, Dhaka 1000</p>
            <p className="cursor-pointer">Email:</p>
            <p className="cursor-pointer text-orange-500 hover:underline mb-4 text-sm">
              mdomarfaruk@gmail.com
            </p>
            <div className="flex justify-center md:justify-start items-center">
              <a
                target="_blank"
                href="https://github.com/Omarfaruk05"
                className="mr-4"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  className=" w-12 bg-white rounded-full global-footer-social__icon "
                  alt="Facebook"
                  title="Facebook"
                />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100023919873768"
                className="mr-4"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg"
                  className=" w-12 bg-white rounded-xl global-footer-social__icon"
                  alt="Facebook"
                  title="Facebook"
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/omarfaruk0005/"
                className="mr-4"
                rel="noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  className=" w-12 bg-white rounded-xl global-footer-social__icon"
                  alt="Instagram"
                  title="Instagram"
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="md:flex justify-between items-center mx-2 md:mx-4 pb-4">
          <p>© 2022 Electronic Mart | All rights reserved</p>
          <p>Powered By: Star Soft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
