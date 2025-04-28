import React, { useState } from "react";
import logo from "../../assets/ecommerce_logo.png";
import { FaHome } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { Link } from "react-router-dom";
import { useContext } from "react";

const Header = () => {
  const { filteredObject, input, setInput, setSearchData, searchdata } =
    useContext(UserContext);

  const handleSuggestion = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const handleClose = () => {
    setInput("");
    setSearchData([]);
    document.querySelector(".input-box").value = "";
  };
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(true);
  };

  const hideMenu = () => {
    setToggle(false);
  };

  return (
    <header className="sticky top-0 z-[999] bg-white p-3 shadow text-gray-700">
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
              <img
                src={logo}
                alt="logo"
                className="w-full"
              />
            </div>
            <h1 className="font-extrabold text-orange-600">
              <span className="font-extrabold text-2xl">
                <i>Q</i>
              </span>
              uickCart
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <NavLink className="w-[80px] transition-transform duration-300 hover:scale-110">
          <img
            src={logo}
            alt="logo"
            className="w-full"
          />
        </NavLink>

        <div>
          <nav className="hidden lg:flex list-none ml-auto gap-12 items-center">
            <NavLink
              to={"/"}
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2"
            >
              <FaHome className="text-lg" />
              Home
            </NavLink>
            <NavLink to={'/offer'} className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2">
              <BiSolidOffer className="text-lg" />
              Offer
            </NavLink>
            <NavLink
              to={"/help"}
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2"
            >
              <IoIosHelpBuoy className="text-lg" />
              Help
            </NavLink>
            <NavLink
              to={"/signin"}
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2"
            >
              <CiUser className="text-lg" />
              Sign in
            </NavLink>
            <NavLink
              to="/cart"
              className="hover:text-orange-500 transition-colors duration-300 cursor-pointer font-medium flex items-center gap-2 relative"
            >
              <BsCart2 className="text-lg" />
              <span className="absolute -top-2 -right-4 bg-orange-500 text-white rounded-full px-2 py-0.5 text-xs font-bold">
                {filteredObject.length}
              </span>
              Cart
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center rounded-3xl  shadow-md border border-orange-500 relative">
          <input
            type="text"
            className="px-4 py-2.5 outline-none placeholder:text-gray-400 input-box"
            placeholder="Search here..."
            value={input}
            autoComplete="off"
            onChange={handleSuggestion}
          />
          <button
            type="submit"
            className="text-white py-2.5 px-3 bg-orange-500 rounded-r-3xl  hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center font-medium cursor-pointer"
          >
            {searchdata.length > 0 ? (
              <IoClose className="text-2xl" onClick={handleClose} />
            ) : (
              <IoSearch className="text-2xl" />
            )}
          </button>
          <div
            className={`transition-all duration-300 ease-in-out absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 max-h-52 overflow-y-auto z-[10000] shadow-lg rounded-lg  ${
              searchdata.length > 0 ? "block" : "hidden"
            }`}
          >
            {
              searchdata.map((data, idx) => (
                <Link
                  to={`/product/${data.id}`}
                  key={idx}
                  className="cursor-pointer p-[10px] hover:bg-[#f0f0f0] block"
                  onClick={handleClose}
                >
                  {data.name}
                </Link>
              ))
              // )
            }
          </div>
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
