import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import { FaBars } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
  const { filteredObject } = useContext(UserContext);

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(true);
  };

  const hideMenu = () => {
    setToggle(false);
  };

  return (
    <header className="sticky top-0 z-[999] bg-white p-3 shadow-2xl text-gray-700">
      <div
        className="fixed z-[9999] h-screen w-full  duration-500 bg-black/50 lg:hidden"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
        onClick={hideMenu}
      >
        <div
          className="h-full w-[250px]  md:w-[400px] absolute duration-300 bg-white shadow-2xl"
          style={{ left: toggle ? "0" : "-100%" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <nav className="flex flex-col list-none">
            <Link
              to={"/"}
              onClick={hideMenu}
              className="hover:bg-orange-50 hover:text-orange-500 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 border-b px-6 py-4 border-gray-100"
            >
              <FaHome className="text-lg" />
              Home
            </Link>
            <li
              onClick={hideMenu}
              className="hover:bg-orange-50 hover:text-orange-500 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 border-b px-6 py-4 border-gray-100"
            >
              <BiSolidOffer className="text-lg" />
              Offer
            </li>
            <li
              onClick={hideMenu}
              className="hover:bg-orange-50 hover:text-orange-500 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 border-b px-6 py-4 border-gray-100"
            >
              <IoIosHelpBuoy className="text-lg" />
              Help
            </li>
            <li
              onClick={hideMenu}
              className="hover:bg-orange-50 hover:text-orange-500 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 border-b px-6 py-4 border-gray-100"
            >
              <CiUser className="text-lg" />
              Sign in
            </li>
            <Link
              to="/cart"
              onClick={hideMenu}
              className="hover:bg-orange-50 hover:text-orange-500 transition-all duration-300 cursor-pointer font-medium flex items-center gap-3 relative border-b px-6 py-4 border-gray-100"
            >
              <BsCart2 className="text-lg" />
              <span className="absolute top-2 left-9 bg-orange-500 text-white rounded-full px-1 py-0 text-xs font-bold">
                {filteredObject.length}
              </span>
              Cart
            </Link>
          </nav>
          <div className=" w-full flex items-center justify-center absolute bottom-0 py-4">
            <div className="w-[60px]  ">
            <img src='/src/assets/ecommerce_logo.png' alt="logo" className="w-full" />
            </div>
            <h1 className="font-extrabold text-orange-600"><span className="font-extrabold text-2xl"><i>Q</i></span>uickCart</h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <NavLink className="w-[80px] transition-transform duration-300 hover:scale-110">
          <img
            src="src/assets/ecommerce_logo.png"
            alt="logo"
            className="w-full"
          />
        </NavLink>

        <div>
          <nav className="hidden lg:flex list-none ml-auto gap-12 items-center">
            <Link
              to={"/"}
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2"
            >
              <FaHome className="text-lg" />
              Home
            </Link>
            <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2">
              <BiSolidOffer className="text-lg" />
              Offer
            </li>
            <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2">
              <IoIosHelpBuoy className="text-lg" />
              Help
            </li>
            <li className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2">
              <CiUser className="text-lg" />
              Sign in
            </li>
            <Link
              to="/cart"
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2 relative"
            >
              <BsCart2 className="text-lg" />
              <span className="absolute -top-2 -right-4 bg-orange-500 text-white rounded-full px-2 py-0.5 text-xs font-bold">
                {filteredObject.length}
              </span>
              Cart
            </Link>
          </nav>
        </div>
        <div className="flex items-center rounded-lg overflow-hidden shadow-md border border-orange-500">
          <input
            type="text"
            className="px-4 py-2.5 w-[200px] outline-none placeholder:text-gray-400"
            placeholder="Search here..."
          />
          <button
            type="submit"
            className="text-white bg-orange-500  w-fit px-2 py-2.5 hover:bg-orange-600 transition-colors duration-300  font-medium"
          >
            Search
          </button>
        </div>
        <div className="lg:hidden block ml-4">
          <FaBars
            className="text-2xl cursor-pointer hover:text-orange-500 transition-colors duration-300"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
