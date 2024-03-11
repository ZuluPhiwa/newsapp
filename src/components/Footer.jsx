import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaDribbbleSquare,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <hr className="mx-12" />

      <div className="mx-12  hidden md:grid md:grid-cols-3 gap-8  py-16 px-4 ">
        <div>
          <h1 className="  font-bold tracking-wider w-full text-3xl font-bryson  ">
            newsapp.
          </h1>
          <p className="py-4">Web App Ye Tindzaba.</p>
          <div className="flex justify-between my-6 md:w-[75%] ">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaDribbbleSquare size={30} />
            <FaGithubSquare size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>

        <div className="  md:col-span-2 justify-between flex">
          <div>
            <h6 className=" font-medium text-gray-400 ">My Account</h6>
            <ul>
              <li className=" py-2 text-sm">Shipping Address</li>
              <li className=" py-2 text-sm">My Orders</li>
              <li className=" py-2 text-sm">My Coupon</li>
              <li className=" py-2 text-sm">My Messages</li>
            </ul>
          </div>
          <div>
            <h6 className=" font-medium text-gray-400 ">Support</h6>
            <ul>
              <li className=" py-2 text-sm">Pricing</li>
              <li className=" py-2 text-sm">Documentation</li>
              <li className=" py-2 text-sm">Guides</li>
              <li className=" py-2 text-sm">Terms of use</li>
            </ul>
          </div>
          <div>
            <h6 className=" font-medium text-gray-400 ">Company</h6>
            <ul>
              <li className=" py-2 text-sm">About</li>
              <li className=" py-2 text-sm">Blog</li>
              <li className=" py-2 text-sm">Jobs</li>
              <li className=" py-2 text-sm">Press</li>
            </ul>
          </div>
          <div>
            <h6 className=" font-medium text-gray-400 ">Help</h6>
            <ul>
              <li className=" py-2 text-sm">FAQ</li>
              <li className=" py-2 text-sm">Payment Methods</li>
              <li className=" py-2 text-sm">Shipping & Handling</li>
              <li className=" py-2 text-sm">Warranty and Return</li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" block md:hidden items-center mt-5 p-8">
        <ul className=" justify-center mx-auto flex">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <li className="mx-4">
              <FaWhatsapp size={30} />
            </li>
          </a>
          <li className="mx-4">
            <FaFacebook size={30} />
          </li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <li className="mx-4">
              <FaYoutube size={30} />
            </li>
          </a>
        </ul>
      </div>
      <div className=" block md:hidden items-center uppercase">
        <ul className="grid md:flex justify-center">
          <Link to="/newsapp/">
            <li className="m-4">Home</li>{" "}
          </Link>
          <Link to="/newsapp/sports">
            <li className="m-4">Sports</li>
          </Link>
          <Link to="/newsapp/entertainment">
            <li className="m-4">Entertainment</li>{" "}
          </Link>
          <li className="m-4">Privacy Policy</li>
        </ul>
      </div>

      <p className=" block md:hidden text-center pb-4">
        &copy; {new Date().getFullYear()} Web App Ye Tindzaba.
      </p>
    </div>
  );
};

export default Footer;
