import React from "react";
import logo from "../../assets/ecommerce_logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-[1200px] mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <img className="h-12 w-auto mb-4" src={logo} alt="Company Logo" />
            <p className="text-gray-600 text-sm mb-4">
              Your trusted destination for premium shopping experiences.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-orange-600 text-sm">About Us</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-orange-600 text-sm">Our Products</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-orange-600 text-sm">Contact Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-orange-600 text-sm">Blog</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-gray-600 hover:text-orange-600 text-sm">Shipping Policy</Link></li>
              <li><Link to="/returns" className="text-gray-600 hover:text-orange-600 text-sm">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-orange-600 text-sm">FAQs</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-orange-600 text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-gray-900 font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-600 text-sm mb-4">Subscribe for updates and exclusive offers</p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
              <button className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2025 QuickCart. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors" aria-label="Facebook">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
